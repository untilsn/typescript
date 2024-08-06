import { useEffect } from "react";

const Name: string = "name";
const Phone: number = 30;

const objectCode: {
  name: string;
  age: number;
  code: number[];
} = {
  name: "how",
  age: 50,
  code: [1, 2, 3],
};

const arrayObject: {
  brand: string;
  year: number;
}[] = [
  {
    brand: "riot",
    year: 10,
  },
];

//todo tuple
const tuple: [string, number] = ["elder", 60];

//todo enum
enum Role {
  admin,
  mod,
  user,
}
const role: Role = Role.admin;

//todo any
const objectAny: any = {
  name: "how",
  age: 50,
  code: [1, 2, 3],
};

//todo union ( | )
const union: string | number = 10;

//todo literal
const literal: 10 | 20 | 30 = 30;
//! 40

//todo function

const text = (a: number, b: number): number => {
  return a + b;
};
text(50, 50);

//todo undefined => return undefined
//todo void return nothing

//todo unknow

let aNumber: unknown;
aNumber = 100;
if (typeof aNumber === "number") {
  aNumber.toFixed(2);
}

//todo never
const newError = (err: string): never => {
  throw new Error(err);
};
//todo contains no values
//todo return new error

//todo interface

interface IProduct {
  name: string;
  age: number;
  hot: boolean;
}

const List: IProduct = {
  name: "how",
  age: 20,
  hot: true,
  gender: true,
  skill: 5,
};

function fetchProduct(List: IProduct) {}

fetchProduct(List);

//todo extends

interface INewProduct extends IProduct {
  how: string;
}

//todo merge
interface IProduct {
  gender: boolean;
  skill: number;
}

//todo assertions (&)
type FinalProduct = IProduct & INewProduct;

//todo function overloading (rarely user)
// function loading(a: number, b: number): number;
// function loading(a: string, b: string): string;

//todo intersection type  (&)
interface IIdentity {
  name: string;
  age: number;
}
interface IInfomation {
  house: string;
  city: string;
}
type Employee = IIdentity & IInfomation;
let profile: Employee = {
  name: "dan",
  age: 20,
  house: "30",
  city: "tokyo",
};

//todo type casting (as)
function Style(): JSX.Element {
  useEffect(() => {
    const input = document.querySelector("input") as HTMLInputElement;
    console.log(input.value);
  }, []);

  return <input type="text" />;
}
Style();
//todo casting type of element

//todo type assertion
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Kết quả: 18

//todo merge
