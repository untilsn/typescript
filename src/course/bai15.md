Intersection, assertions, casting types

interface IProfile1 {
name: string;
age: number;

}

interface IProfile2 {
school: string;
address: string
}

type Student = IProfile1 & IProfile2

let jonh: Student {
name: ...,
age: ...,
school: ...,
}

type casting
as methoh htmlInputElement

assertions
áp type sang type mình muốn
vd agn: any
if(true) {
agn as number
}
