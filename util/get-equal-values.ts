function equalValue<T>(
  a: T extends any[] ? "wrong" : T,
  b: T extends any[] ? "wrong" : T
): boolean {
  return a === b;
}
equalValue("v", "v");
equalValue(20, 20);
equalValue(true, true);
// equalValue([1, 2, 3], []); wrong
