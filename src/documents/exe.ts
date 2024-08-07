//todo mapped type

type code = {
  name: string;
} & Record<string, any>;

type develop = {
  name: string;
  [key: string]: string | number | boolean;
};

const Course: develop = {
  name: "how",
  age: 20,
  sex: "Hard",
  power: true,
};

type OptionFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Feature = {
  darkMode: () => void;
  profile: () => void;
};

type FeatureOptions = OptionFlags<Feature>;

//TODO Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type Getter<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    value: Type[Property]
  ) => Type[Property];
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Focus`]?: (
    value: Type[Property]
  ) => Type[Property];
};
interface IPerson {
  name: string;
  age: number;
  senior: true;
}
type codepPerson = Getter<IPerson>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

//todo conditional type
type Value<T> = T extends string ? true : false;

type Test = Value<number>;

//todo infer
type Infer<T> = T extends infer R ? R : "djt con ba may";

type Infer1 = Infer<string>;
type Infer2 = Infer<"string">;
type Infer3 = Infer<30>;
type Infer4 = Infer<undefined>;

interface IMyHarem {
  name: string;
  boobsize: number;
}

type OptionHarem<T> = {
  [Property in keyof T]: T[Property] extends () => void ? Property : never;
};

type SelectMyHarem = OptionHarem<IMyHarem>;
