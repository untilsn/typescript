function getDevice<A, B extends keyof A>(items: A[], keys: B): A[B][] {
  return items.map((item) => item[keys]);
}
const device = [
  {
    name: "code",
    price: 2,
  },
  {
    name: "game",
    price: 61,
  },
  {
    name: "sport",
    price: 12312313,
  },
  {
    name: "fight",
    price: 2000,
  },
];
console.log(getDevice(device, "name"));
