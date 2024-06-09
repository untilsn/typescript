unknow và never types

unknow

const a: unknowk ;
a = 100
if (typeOf a === "number") {
a.toFixed(2)
}

never thường sử dụng cho function trả về một lỗi
đại diện cho việc trả ra một lỗi nào đó
contant no values
function toastError(err: string): never {
throw new Error(err)
}
