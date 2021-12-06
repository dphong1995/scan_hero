import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "antd/dist/antd.css";
import {
  Image,
  Button,
  Form,
  Input,
  InputNumber,
  notification,
  Table,
  Select,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { uniqBy, find, remove, cloneDeep, toPairs } from "lodash";
import { DeleteOutlined } from "@ant-design/icons";
import queryString from "query-string";

enum Tier {
  Rare = "Rare",
  "Rare+" = "Rare *",
  Epic = "Epic",
  "Epic+" = "Epic *",
}

interface ScanHeroParams {
  heroName: string;
  heroPrice: number;
  tier: Tier;
  interval: number;
}

interface Hero {
  id: string;
  name: string;
  image: string;
  sale: {
    price: number;
  };
}

const heroMarketUrl = (id: string) =>
  `https://market.heroesempires.com/market/${id}`;

interface Props {
  scanHeroParams: ScanHeroParams;
  onRemoveClick: () => void;
}

const ScanTable: React.FC<Props> = (props) => {
  const { scanHeroParams, onRemoveClick } = props;
  const { heroPrice, interval, heroName, tier } = scanHeroParams;
  const [data, setData] = useState<Hero[]>([]);
  const intervalRef = useRef<number>();

  const fetchHeroes = useCallback(async () => {
    const query = queryString.stringify({
      tier,
      desc: false,
      listedOnMarket: true,
      orderBy: "price",
      page: 1,
      search: heroName,
      size: 5,
      maxPrice: heroPrice,
    });
    const response = await fetch(
      `https://marketplace-api.heroesempires.com/sale-items?${query}`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
        },
        referrer: "https://market.heroesempires.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    );
    const jsonResponse = await response.json();
    const items: Hero[] = jsonResponse.data.items;
    let lowestPriceHero: Hero = items[0];

    items.forEach((item) => {
      const {
        sale: { price },
      } = item;
      if (!lowestPriceHero || price < lowestPriceHero.sale.price) {
        lowestPriceHero = item;
      }
    });

    if (!lowestPriceHero || lowestPriceHero.sale.price > heroPrice) {
      return;
    }

    const {
      id,
      name,
      image,
      sale: { price },
    } = lowestPriceHero;

    const existing = find(data, ["id", id]);
    if (existing) {
      return;
    }

    const notification = new Notification("ScanHero", {
      image,
      icon: image,
      body: `${name} (${tier}): ${price}`,
    });
    await new Audio(`${process.env.PUBLIC_URL}/Messenger.mp3`).play();
    const closeTimeout = setTimeout(() => {
      notification.close();
    }, 5000);

    notification.onclick = function () {
      notification.close();
      clearTimeout(closeTimeout);
      window.open(heroMarketUrl(id));
    };
    setData(uniqBy([lowestPriceHero, ...data], "id"));
  }, [heroName, tier, heroPrice, data]);

  const columns = useMemo<ColumnsType<Hero>>(
    () => [
      {
        key: "image",
        dataIndex: "image",
        title: "Image",
        width: 100,
        render(image: string) {
          return <Image width={100} src={image} />;
        },
      },
      {
        key: "id",
        dataIndex: "id",
        title: "ID",
        render(id: string, hero) {
          const { name } = hero;
          return (
            <a target="_blank" href={heroMarketUrl(id)} rel="noreferrer">
              {name} ({tier})
            </a>
          );
        },
      },
      {
        key: "price",
        dataIndex: ["sale", "price"],
        title: "Price",
      },
    ],
    [tier]
  );

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(fetchHeroes, interval);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [fetchHeroes, interval]);

  return (
    <Table
      rowKey="id"
      title={() => (
        <strong>
          {heroName} ({tier}): {heroPrice}{" "}
          <Button
            danger
            onClick={onRemoveClick}
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
          />
        </strong>
      )}
      columns={columns}
      dataSource={data}
    />
  );
};

function App() {
  const [heroParams, setHeroParams] = useState<ScanHeroParams[]>([]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const onFinish = (values: ScanHeroParams) => {
    const existing = !!heroParams.find(
      (heroParam) =>
        heroParam.heroPrice === values.heroPrice &&
        heroParam.heroName === values.heroName &&
        heroParam.tier === values.tier
    );
    if (existing) {
      notification.error({
        message: "Existing",
      });
      return;
    }
    setHeroParams([...heroParams, values]);
  };

  return (
    <Form<ScanHeroParams>
      style={{
        paddingTop: 20,
      }}
      name="scanForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      initialValues={{
        heroName: "Tusk",
        heroPrice: 240,
        interval: 10_000,
        tier: Tier.Rare,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Hero Name"
        name="heroName"
        rules={[{ required: true, message: "Please input hero name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Hero Price"
        name="heroPrice"
        rules={[{ required: true, message: "Please input hero price!" }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        label="Hero Tier"
        name="tier"
        rules={[{ required: true, message: "Please select hero tier!" }]}
      >
        <Select<Tier>>
          {toPairs(Tier).map(([value, label]) => (
            <Select.Option key={value} value={value}>
              {label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Set Interval"
        name="interval"
        rules={[{ required: true, message: "Please input interval!" }]}
      >
        <InputNumber min={5000} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {heroParams.map((param) => (
        <ScanTable
          key={`${param.heroName}_${param.heroPrice}_${param.tier}`}
          scanHeroParams={param}
          onRemoveClick={() => {
            const clonedParams = cloneDeep(heroParams);
            remove(
              clonedParams,
              (item) =>
                item.heroName === param.heroName &&
                item.heroPrice === param.heroPrice &&
                item.tier === param.tier
            );
            setHeroParams(clonedParams);
          }}
        />
      ))}
    </Form>
  );
}

export default App;
