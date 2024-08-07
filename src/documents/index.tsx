import { String, Union } from "ts-toolbelt";

//todo (in)
function log(value: { name: string } | { doc: number }) {
  if ("name" in value) {
    console.log(value.name);
  } else if ("doc" in value) {
    console.log(value.doc);
  }
}

//todo get deep value

const harem = {
  idol: {
    name: "gura",
    age: 8,
  },
  mom: {
    name: "lana",
    age: 25,
  },
};

function getDeepValue<T, K extends keyof T, R extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: R
) {
  return obj[firstKey][secondKey];
}
getDeepValue(harem, "idol", "name");

//todo  deepEqualCompare

function deepEqualCompare<T>(
  a: T extends any[] ? "dont use array" : T,
  b: T extends any[] ? "dont use array" : T
): boolean {
  return a === b;
}

deepEqualCompare("hau", "hau");
deepEqualCompare(21, 20);
deepEqualCompare(true, true);
// deepEqualCompare([true], [true]);

//todo searchParamsDecoding

const query = `/home?name=gura&age=8`;

type Query = typeof query;

type FirstQuery = String.Split<Query, "?">[1];

type SecondQuery = String.Split<FirstQuery, "&">;

type QueryParams = {
  [Q in SecondQuery[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[SecondQuery[number]];
// type QueryParams = {
//   "name=gura": {
//       name: "gura";
//   };
//   "age=8": {
//       age: "8";
//   };
// }
//todo ===> {}[]
// type QueryParams = {
//   name: "gura";
// } | {
//   age: "8";
// }

const final: Union.Merge<QueryParams> = {
  name: "gura",
  age: "8",
};
//!DONE we got type stupid

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${To}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : S;

type ResultReplace = ReplaceAll<"hentai core hentai", "hentai", "core">;
