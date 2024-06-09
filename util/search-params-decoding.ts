import { String, Union } from "ts-toolbelt";

const query = "/home?name=evondev&age=28";

type Query = typeof query;

type SearchOne = String.Split<Query, "?">[1];

type SearchTwo = String.Split<SearchOne, "&">;

type SearchThree = {
  [Q in SearchTwo[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[SearchTwo[number]];

const result: Union.Merge<SearchThree> = {
  name: "evondev",
  age: "28",
};
