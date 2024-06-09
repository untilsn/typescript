const obj = {
  first: {
    a: true,
    b: 20,
  },
  second: {
    c: false,
    d: 30,
  },
};

function getDeepValue<T>(obj: T, first: string, second: string) {
  return obj[first][second];
}
console.log(getDeepValue(obj, "first", "a"));
