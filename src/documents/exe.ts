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
};

interface IPerson {
  name: string;
  age: 20;
  senior: true;
}

type codepPerson = Getter<IPerson>;
