//todo tuple in function

type ThreeDCoordinate = [x: number, y: number, z: number];

function addCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function simpleUseState(val: string): [() => string, (v: string) => void] {
  return [
    () => val,
    (v: string) => {
      val = v;
    },
  ];
}

const [getter, setGetter] = simpleUseState("code");

setGetter("code react");

// console.log(getter());

//todo GENERIC  function

function genericUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [generic, setGeneric] = genericUseState("code");
const [generic1, setGeneric1] = genericUseState(2);
const [generic2, setGeneric2] = genericUseState(true);

setGeneric("code react");

// console.log(getter());

//todo level2

interface IRank<RankItem> {
  item: RankItem;
  level: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: IRank<RankItem>[] = items.map((item) => ({
    item,
    level: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}

const course: {
  language: string;
  difficulty: number;
}[] = [
  {
    language: "react",
    difficulty: 60,
  },
  {
    language: "typescript",
    difficulty: 70,
  },
  {
    language: "nextjs",
    difficulty: 80,
  },
];

console.log(ranker(course, ({ difficulty }) => difficulty));

//todo key of

const devices = [
  {
    name: "iphone",
    price: 1000,
  },
  {
    name: "samsung",
    price: 2000,
  },
  {
    name: "nokia",
    price: 3000,
  },
];

function getDevices<A, B extends keyof A>(items: A[], key: B): A[B][] {
  return items.map((item) => item[key]);
}

getDevices(devices, "name");

//todo partial type

interface ICoures {
  name: string;
  time: number;
}

function evondev(todo: ICoures, newTodo: Partial<ICoures>) {
  return { ...todo, ...newTodo };
}

console.log(evondev({ name: "React", time: 20 }, {}));
