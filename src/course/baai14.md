Function overloading
sử dụng nhìeeu khi build thư viện

function total (a: number, b: number): number;
function total (a: string, b: string): string;
function total (a: any, b: any) {
return a + b;
}

total(5,6);
total("nam","sau);
