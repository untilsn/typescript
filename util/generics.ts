function generics<T>(value: T): [() => T, (val: T) => void] {
  return [
    () => value,
    (val: T) => {
      value = val;
    },
  ];
}

interface rank<Rankitem> {
  item: Rankitem;
  rank: number;
}

function ranker<Rankitem>(
  item: Rankitem[],
  rank: (v: Rankitem) => number
): Rankitem[] {
  const ranks: rank<Rankitem>[] = item.map((item) => ({
    item,
    rank: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}
