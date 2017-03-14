##HTML-Buổi 1


>Tên tài liệu: HTML là gì và vì sao nó quan trọng
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 13/12/2016

##Mục lục:

[1.HTML là gì?](#1)

[2.HTML được xử lý ra sao?](#2)

[3.Cấu trúc một đoạn HTML](#3)

[4.Dùng chương trình gì để tạo tập tin HTML?](#4)

[5.HTML đóng vai trò gì trong website?](#5)

[6.Các thẻ định dạng.](#6)

[7.Tạo danh sách.](#7)

[8.Tạo bảng.](#8)

[9.Hình ảnh.](#9)

[10.Thiết lập màu](#10)

[11.Thiết lập font](#11)

[12.Tài liệu tham khảo HTML](#12)

##Nội dung:

####1.HTML là gì?<a name="1"></a>

HTML là chữ viết tắt của cụm từ HyperText Markup Language. Một tài liệu HTML được hình thành bởi các phần tử HTML (HTML Elements) được quy định bằng các cặp thẻ (tag), các cặp thẻ này được bao bọc bởi một dấu ngoặc ngọn (ví dụ <html>) và thường là sẽ được khai báo thành một cặp, bao gồm thẻ mở và thẻ đóng (ví <strong> dụ </strong> và ). Các văn bản muốn được đánh dấu bằng HTML sẽ được khai báo bên trong cặp thẻ (ví dụ <strong>Đây là chữ in đậm</strong>). Nhưng một số thẻ đặc biệt lại không có thẻ đóng và dữ liệu được khai báo sẽ nằm trong các thuộc tính (ví dụ như thẻ <img>). HTML được lưu lại dưới đuôi mở rộng là `.html` hoặc `.htm.`

####2.HTML được xử lý ra sao?<a name="2"></a>

Khi một tập tin HTML được hình thành, việc xử lý nó sẽ do trình duyệt web đảm nhận. Trình duyệt sẽ đóng vai trò đọc hiểu nội dung HTML từ các thẻ bên trong và sẽ chuyển sang dạng văn bản đã được đánh dấu để đọc, nghe hoặc hiểu (do các bot máy tính hiểu).

Để kiểm tra, bạn có thể sử dụng khung nội dung bên dưới và chuyển qua lại giữa phần HTML và Result để xem kết quả của một tập tin HTML sau khi được xử lý.

####3.Cấu trúc một đoạn HTML<a name="3"></a>

Khai báo một đoạn văn bản

>`<p>Đây là một đoạn văn bản HTML</p>`

Thẻ có sử dụng thuộc tính

>`< from action="http://google.com"></form>`

####4.Dùng chương trình gì để tạo tập tin HTML?<a name="4"></a>

HTML là một tập siêu văn bản:
 + Trên Windows: Notepad
 + Trên Mac: TextEdit
 + Trên Linux: Vim

```javascript
<!DOCTYPE html>
<html>
<head>
<title>Kiều Trinh</title>
</head>
<body>
<p>Kiều Trinh quá xinh đẹp</p>
</body>
</html>
```
####5.HTML đóng vai trò gì trong website?<a name="5"></a>

Một website sẽ được hình thành bởi:

**HTML**: Xây dựng cấu trúc và định dạng các siêu văn bản.

**CSS**: Định dạng các siêu văn bản dạng thô tạo ra từ HTML thành một bố cục website, có màu sắc, ảnh nền,….

**Javascript**: Tạo ra các sự kiện tương tác với hành vi của người dùng (ví dụ nhấp vào ảnh trên nó sẽ có hiệu ứng phóng to).

**PHP**: Ngôn ngữ lập trình để xử lý và trao đổi dữ liệu giữa máy chủ đến trình duyệt (ví dụ như các bài viết sẽ được lưu trong máy chủ).

**MySQL**: Hệ quản trị cơ sở dữ liệu truy vấn có cấu trúc (SQL – ví dụ như các bài viết sẽ được lưu lại với dạng dữ liệu SQL).

####6.Các thẻ định dạng.<a name="6"></a>

 + Đoạn văn bản: ` <p>văn bản</p>`
 + Thẻ tiêu đề: `<h1>Nội dung</h1>`
 		Thẻ tiêu đề: h1,h2,h3,h4,h5,h6
 + In đậm: `<strong>in đậm</strong>`
 + In nghiêng: `<i>in nghiêng</i>`
 + Gạch chân: `<u>gạch chân</u>`
 + Gạch ngang: `<strike>gạch ngang</strike>`
 + Định dạng sẵn: `<pre>định dạng sẵn</pre>`

####7.Tạo danh sách<a name="7"></a>

**HTML** cung cấp cho người lập trình web 3 cách để xác định danh sách các thông tin. Tất cả các danh sách phải chứa một hoặc nhiều phần tử list. Danh sách có thể gồm:

+ `<ul>` - Một danh sách không có thứ tự. Nó được sắp xếp bằng cách sử dụng các bullet thường.
+ `<ol>` - Một danh sách đã qua sắp xếp. Nó sử dụng một lược đồ số để liệt kê danh sách.
+ `<dl>` - Danh sách định nghĩa trong HTML. Sắp xếp danh sách theo cách tương tự như chúng được sắp xếp trong từ điển.

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Vi du </title>
</head>
<body>
   <ul type="square">
   <li>Thứ 1</li>
   <li>Thứ 2</li>
   <li>Thứ 3</li>
   </ul>
</body>
</html>
```

>Kết quả là:
   
   <ul type="square">
   <li>Thứ 1</li>
   <li>Thứ 2</li>
   <li>Thứ 3</li>
   </ul>

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Vi du</title>
</head>
<body>
   <ul type="disc">
   <li>Trinh</li>
   <li>Xinh</li>
   <li>Đẹp</li>
   </ul>
</body>
</html>
```

>Kết quả là:

   <ul type="disc">
   <li>Trinh</li>
   <li>Xinh</li>
   <li>Đẹp</li>
   </ul>

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Vi du</title>
</head>
<body>
   <ul type="circle">
   <li>Trinh</li>
   <li>cute</li>
   </ul>
</body>
</html>
```

>Kết quả là:

   <ul type="circle">
   <li>Trinh</li>
   <li>cute</li>
   </ul>

####8.Tạo bảng<a name="8"></a>

Bảng HTML được tạo ra bằng cách sử dụng thẻ `<table>` trong đó: thẻ `<tr>` được sử dụng để tạo các hàng và thẻ `<td>` được sử dụng để tạo các ô.

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Vi du bang trong HTML</title>
</head>
<body>
<table border="1">
<tr>
<td>Row 1, Column 1</td>
<td>Row 1, Column 2</td>
</tr>
<tr>
<td>Row 2, Column 1</td>
<td>Row 2, Column 2</td>
</tr>
</table>
</body>
</html>
```
>Kết quả là:


![text](http://i.imgur.com/jC7yS9W.png)


####9.Hình ảnh<a name="9"></a>

Bạn có thể chèn bất cứ **hình ảnh** nào vào trang Web của bạn bằng cách sử dụng thẻ `<img>`. Dưới đây là cú pháp đơn giản để sử dụng thẻ này.

`<img src="đường dẫn url tới nơi chứa hình ảnh" ... danh-sách-thuộc-tính/>`

Thẻ `<img>` này là một thẻ trống, nghĩa là nó chỉ có thể chứa danh sách các thuộc tính và không có thẻ đóng.

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Hinh anh trong HTML</title>
</head>
<body>
<p>Vi du the img trong HTML.</p>
<img src="https://thachpham.com/wp-content/uploads/2015/04/html-la-gi.png" alt="Hình ảnh trong HTML" />
</body>
</html>
```

>Kết quả là:

<img src="https://thachpham.com/wp-content/uploads/2015/04/html-la-gi.png" alt="Hình ảnh trong HTML" />

####10.Thiết lập màu<a name="10"></a>

>**Thẻ <body> có các thuộc tính sau mà có thể được sử dụng để thiết lập các màu khác nhau:**

 + **bgcolor** - Thiết lập một màu cho nền của trang.

 + **text** - Thiết lập một màu cho văn bản.

 + **alink** - Thiết lập một màu cho các active link.

 + **link** - Thiết lập một màu cho link văn bản.

 + **vlink** - Thiết lập một màu cho visited link (các kết nối mà bạn đã nhấn chuột vào).

>**Ba phương thức khác nhau để thiết lập màu trong trang web của bạn:**

 + **Sử dụng tên màu**: Bạn có thể xác định trực tiếp tên màu như xanh da trời (blue), xanh lá cây (green), hoặc đỏ (red)….

 + **Sử dụng mã thập lục phân (Hex code)**: Một mã 6 chữ số đại diện cho màu.

 + **Giá trị thập phân và phần trăm**: Giá trị này được xác định bằng cách sử dụng thuộc tính rbg().

```javacript
<!DOCTYPE html>
<html>
<head>
<title>vi du</title>
</head>
<body text="blue" bgcolor="green">
<p>Su dung cac ten mau khác nhau cho body va table.</p>
<table bgcolor="black">
<tr>
<td>
<font color="white">Hien thi mau trang tren nen den.</font>
</td>
</tr>
</table>
</body>
</html>
```

####11.Thiết lập font<a name="11"></a>

Bạn sử dụng thuộc tính size để thiết lập kích cỡ cho nội dung. Dãy giá trị được chấp nhận là từ 1 (nhỏ nhất) đến 7 (lớn nhất). Cỡ mặc định cho font là 3.

```javacript
<!DOCTYPE html>
<html>
<head>
<title>Thiet lap kich co font trong HTML</title>
</head>
<body>
<font size="1">Font size="1"</font><br />
<font size="2">Font size="2"</font><br />
<font size="3">Font size="3"</font><br />
<font size="4">Font size="4"</font><br />
<font size="5">Font size="5"</font><br />
<font size="6">Font size="6"</font><br />
<font size="7">Font size="7"</font>
</body>
</html>
```

>Kết quả là:

<font size="1">Font size="1"</font><br />
<font size="2">Font size="2"</font><br />
<font size="3">Font size="3"</font><br />
<font size="4">Font size="4"</font><br />
<font size="5">Font size="5"</font><br />
<font size="6">Font size="6"</font><br />
<font size="7">Font size="7"</font>


####12.Tài liệu tham khảo HTML<a name="12"></a>

Bạn hãy vào trang [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) để tham khảo ý nghĩa và cách sử dụng của tất cả các thẻ HTML.













