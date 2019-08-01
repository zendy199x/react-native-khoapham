// "Hello"
// ctrl + / : Comment code không sử dụng
// Mở môi trường thực thi  
// Macos : control + `
// Window : ctrl + ` 
// ngắt thực thi : ctrl + c
// var a = "hello"
// var b = "xin chao"

// console.log(b)
//1 : Khai báo biến : var let const

// const a
// console.log(a)
// 2 : Toán tử (+ , - , * , /)
// var a = 5 + 6 //(Biểu thức)
// var b = a++ //(Biểu thức)
// var c = (a > b) ? a : b //(Toán tử 3 ngôi)
// var a = 5
// var b = 6
// var c = ++a + b++ - a++ + b-- + a++ + b--
//6 + b++ - a++ + b-- + a++ + b-- : a = 6 
// 6 + 6 - a++ + b-- + a++ + b-- : a = 6 , b = 7
// 6 + 6 - 6 + b-- + a++ + b-- : a = 7 , b = 7
//6 + 6 - 6 + 7 + a++ + b-- : a = 7 , b = 6
//6 + 6 - 6 + 7 + 7 + b-- : a = 8 , b = 6
//6 + 6 - 6 + 7 + 7 + 6 = 26
// console.log(c)
// var a = 5
// a  += 2
// console.log(a)
// 3 : Kiểu dữ liệu null , NaN , undefined
//null : cố tình gán giá trị là null
// var a = null
// console.log(a)
//NaN : not a number : biểu thức có xuất hiện undefined
// var a = undefined + "" //Th đặc biệt : Phép nối chuỗi
// console.log(a)
//undefined
//1 : Tạo ra 1 biến mà không cấp giá trị
// var a
//2 : function không có câu lệnh return
// function show(){

// }
//3 : Function chỉ có chữ return
// function show(){
//     return
// }
//4 : Truy vấn vào giá trị không tồn tại
// var a = {name : "Phát"}
// console.log(a.age)
// 4 : if else
// var a = 5
// var b = 6
// 6 trường hợp false : 0 , null ,undefined , NaN , false , ""
// if(a = -1){
//     console.log("Đúng")
// }else{
//     console.log("Sai")
// }
// let a = true
// switch(a){
//     case true : console.log("đây là true")
//         return
//     case false : console.log("đây là false")
//         return
//     default : console.log("Không có giá trị")
//         return
// }

