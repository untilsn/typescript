//todo bài 16

//todo Promise
function FetchData(a: string): Promise<string> {
  return Promise.resolve(`get data ${a}`);
}

//todo resparameters
const Infomation = (id: number, ...data: any[]): string =>
  `id:${id}, data:${data.join(" ")}`;
Infomation(1, "code", "hard", 6);

//todo with callback
const FetchProduct = (text: string, callback: () => void): void => {
  console.log(text);
  callback();
};

//todo with callback param
const Code = (numbers: number[], filter: (n: number) => number): number[] => {
  return numbers.map((item) => filter(item));
};
//todo ver2
type updateArray = (n: number) => number;
const CodeUpdate = (numbers: number[], filter: updateArray): number[] => {
  return numbers.map((item) => filter(item));
};
CodeUpdate([1, 2, 3, 4, 5], (n) => n * 5);

//todo function return function

function loopNumber(val: number): (n: number) => number {
  return (n: number): number => n * val;
}

const loop = loopNumber(5);
console.log(loop(10));
