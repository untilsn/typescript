import React from "react";

const List = ({
  items,
  onClickItem = () => {},
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item: string) => (
        <div
          onClick={() => onClickItem?.(item)}
          className="text-2xl font-bold text-black"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const ReactState = () => {
  const onClickItem = (item: string) => {
    alert(item);
  };
  return (
    <div>
      <List
        onClickItem={(item: string) => onClickItem(item)}
        items={["java", "html", "css"]}
      ></List>
    </div>
  );
};

export default ReactState;

// interface Data {
//   text: string;
// }
// const [data, setData] = useState<Data | null>(null);
// console.log(data);
// useEffect(() => {
//   fetch("data.json")
//     .then((res) => res.json())
//     .then((result) => setData(result));
// }, []);
