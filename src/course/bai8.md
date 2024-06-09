kieu 1 age: Number = 5
keiu 2 age = 5 typerscript tu dong hieu type

--OBJECT
array: {
name: string;
age: number;
strong: boolean;
school: (string | number)[]; -- union types
scroll: number[]; -- một mảng các số
} = {
name: guts,
age: 20,
strong: true,
school: ["ba diem","ngo quyen", 23],
scroll: [20, 30, 40]
}

--OBJECT ARRAY
arrObj: {
name: string;
age: number;
}[] = [{}]

--BAI11: TUPLE, ENUM, ANY, UNION_TYPES, LITERAL
..TUPLE:
string[] --> ["one", "two"]
[number, string] --> [67, "sau bay"] cấu trúc đúng ! ["muoi hai" , "sau bay"]

..ENUM
enum Permission {
admin = "admin",
moder = "moder",
user = "user",
};

</div>Permission.admin

..ANY
any[];

..UNION_TYPES
date: number | string;

..LITERAL
18 | 30 | 40 --> lấy giá trị nhất định
export type Age = 18 | 30 | 40 | "45"

..FUNCTION
function numberAge(a:number, b: nuber): number {
return a + b;
}

..VOID khong return gi ca
