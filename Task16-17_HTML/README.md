##HTML5-Buổi 2


>Tên tài liệu: Các thẻ trong HTML5
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 14/12/2016

##Mục lục:

[1.PHP là gì?](#1)

[2.Tổng hợp các thẻ HTML5](#2)

[3.Phân biệt sự khác nhau giữa HTML với HTML5](#3)


##Nội dung:

####1.HTML5 là gì?<a name="1"></a>

**HTML5** là phiên bản nâng cao và mới nhất của HTML. Theo khái niệm công nghệ, HTML không là một ngôn ngữ chương trình, nhưng là một ngôn ngữ Markup (đánh dấu).

**HTML5** là một phiên bản của HTML, do đó để đọc và hiểu loạt bài Hướng dẫn học HTML5 cơ bản và nâng cao này, bạn nên có hiểu biết cơ bản về HTML và các thẻ của nó.

####2.Tổng hợp các thẻ HTML5<a name="2"></a>

>**Các thẻ HTML5 mới:**

New **semantic elements** like `<header>, <footer>, <article>, and <section>.`

New **attributes of form elements** like `number, date, time, calendar, and range.`

New **graphic elements**:` <svg> and <canvas>.`

New **multimedia elements**: `<audio> and <video>.`


>**DOCTYPE xác định kiểu tài liệu**

**DOCTYPE** trong các phiên bản HTML cũ là dài hơn bởi vì ngôn ngữ HTML là trên cơ sở SGML và vì thế cần tham chiếu tới một DTD.

Cú pháp đơn giản DOCTYPE trong HTML5 như sau:

`<!DOCTYPE html>`

Tất cả cú pháp trên là không phân biệt chữ hoa-chữ thường.

>**Mã hóa ký tự**

HTML5 sử dụng cú pháp đơn giản để mã hóa ký tự như sau:

`<meta charset="UTF-8">`

Tất cả cú pháp trên là không phân biệt chữ hoa-chữ thường.

>**Thẻ `<script>`**

Nó là thực tiễn phổ biến để thêm một thuộc tính type với một giá trị "type/javascript" để script các phần tử như sau:

`<script type="text/javascript" src=scriptfile.js
></script>`

HTML5 gỡ bỏ thông tin thêm được yêu cầu và bạn có thể sử dụng cú pháp đơn giản sau:

`<script src="scrptfile.js"></script>

>**Thẻ `<link>`**

Viết thẻ `<link> nhu sau:

`<link rel="stylessheet" type="text/css" href="stylefile.css">`

HTML5 gỡ bỏ thông tin thêm được yêu cầu và bạn có thể sử dụng cú pháp đơn giản sau:

`<link rel="stylessheet" href="stylefile.css">`

>**Thẻ `<p>...</p>`**

Các phần tử HTML5 được đánh dấu bằng sử dụng các thẻ đóng và thẻ mở. Các thẻ được giới hạn trong các dấu ngoặc nhọn với tên thẻ ở giữa.

Sự khác nhau giữa thẻ mở và thẻ đóng là thẻ đóng bao gồm một dấu gạch chéo trước tên thẻ.

Ví dụ:

`<p>Trinh xinh đẹp</p>`

Hầu hết các phần tử chứa một số nội dung như `<p>...</p>` chứa một đoạn văn. Tuy nhiên một số phần tử bị cấm để chứa bất cứ nội dung nào và chúng được biết là các phần tử void. Ví dụ: br, hr, link, và meta, …

>**Thẻ `<section>`** xác định các phần quan trọng

Thẻ **section** dùng để xác định các phần quan trọng của nội dung trên trang. Thẻ này có phần tương tự như việc chia một cuốn sách thành các chương. Thêm một thẻ **section** vào các kết quả ví dụ mã trong đoạn mã ở ví dụ.
```javascript
<!DOCTYPE html> 
<html> 
   <head> 
      <title> A Simple HTML Page</title> 
   </head> 
   <body> 
      <header>Header</header>
      <section> <p> This is an important section of the page. </p>
      </section> 
   </body> 
</html>
```

>**Thẻ `<!--...-->`** Xác định một comment

>**Thẻ `<a>`** Xác định một Anchor

>**Thẻ `<abbr>`** Xác định một từ viết tắt

>**Thẻ `<acronym>`** Thẻ cũ: Xác định một tên lược danh

>**Thẻ `<address>`** Xác định một phần tử Address

>**Thẻ `<applet>`** Thẻ cũ: Xácđịnh một vi mã

>**Thẻ `<article>`** Thẻ mới: Xác định một phần độc lập của nội dung tài liệu, như một blog entry hoặc newspaper article

Thẻ **article** (mục) xác định các phần nội dung chính trong một trang web. Hãy nghĩ về một blog, nơi mà mỗi bài đăng riêng sẽ tạo nên một phần nội dung có ý nghĩa. Thêm các thẻ article vào các kết quả ví dụ mã trong đoạn mã được hiển thị trong ví dụ

```javascript
<!DOCTYPE html> 
<html> 
   <head> 
      <title>Vi du</title> 
   </head> 
   <body> 
      <header>Header</header>
      <section> 
         <article> <p>Kiều Trinh </p> 
         </article> 
         <article> <p> Cute </p>
         </article> 
      </section> 
      <div id='footer'>Footer</div>
   </body> 
</html>
```

>**Thẻ `<aside>`** Thẻ mới: Xác định một phần nội dung mà chỉ hơi liên quan tới phần còn lại của trang.

Thẻ aside cho biết nội dung có chứa trong thẻ này có liên quan đến nội dung chính của trang, nhưng không phải là một phần của nó. Nó hơi giống như việc sử dụng các dấu ngoặc đơn để tạo ra một chú thích trong phần thân của văn bản (như thế này). Nội dung trong các dấu ngoặc đơn cung cấp thêm thông tin về phần tử chứa nó. Thêm một thẻ aside vào các kết quả ví dụ mã trong đoạn mã ở vi dụ.

```javascript
<!DOCTYPE html> 
<html> 
   <head> 
      <title>Ví dụ</title> 
   </head> 
   <body> 
      <header>Header</header>
      <section> 
         <article> <p>Kiều Trinh</p> 
            <aside> <p>Cute</p> </aside> 
         </article> 
         <article> <p>Trinh nè</p>
         </article> 
      </section> 
      </body>
</html>
```


>**Thẻ `<audio>`** Thẻ mới: Xác định một audio file

>**Thẻ `<base>`** Xác định một URL cơ sở cho tất các link trong một trang

>**Thẻ `<basefont>`** Thẻ cũ: Xác định một font cơ sở

>**Thẻ `<bdo>`** Xác định hướng của văn bản hiển thị

>**Thẻ `<bgsound>`** Xác định nhạc nền

>**Thẻ `<blink>`** Xác định một văn bản nhấp nháy

>**Thẻ `<blockquote>`** Xác định một trích dẫn dài

>**Thẻ `<body>`** Xác định phầ tử

>**Thẻ `<nav>`** Mục đích chuyển hướng

Nội dung có chứa trong thẻ nav được dành cho các mục đích chuyển hướng. Thêm một thẻ nav vào các kết quả ví dụ mã trong đoạn mã ở ví dụ.

```javascript
<!DOCTYPE html> 
<html> 
   <head> 
      <title> Vi du</title> 
   </head> 
   <body> 
      <header>
         <nav> 
            <a href='#'>Link nè</a> <a href='#'>Link nữa nè</a> 
            <a href='#'>Link nạ</a> 
         </nav> 
      </header> 
      <section>
        <article> <p> Kiều Trinh</p> 
           <aside> <p>Xinh đẹp</p> 
           </aside> 
         </article> 
         <article> <p>Trinh nè</p> 
         </article>
      </section> 
      <footer>ahihi</footer> 
   </body> 
</html>
```

>**Thẻ `<br>` ** Chèn một dòng ngắt

>**Thẻ `<button>`** Xác định một nút đẩy

>**Thẻ `<command>`** Thẻ mới: xác định một lệnh mà người sử dụng có thể gọi

>**Thẻ `<comment>`** Đặt một comment trong tài liệu

>**Thẻ `<dir>`** Xác định danh sách thứ mục

>**Thẻ `<b>`** Xác định văn bản in đậm

>**Thẻ `<font>`** Thẻ cũ: Xác định font, màu,cỡ chữ

>**Thẻ `<footer>`** Thẻ mới: Xác định một footer cho một khuvujwc và có thể chứa thông tin về tác giả, bản quyền,..

>**Thẻ `<form>`** Xác định một form

>**Thẻ `<h1> to <h6>`** Xác định header 1 đến header 6

Thẻ **header** được dự kiến để đánh dấu một phần của trang HTML là phần tiêu đề. Liệt kê 3 cho thấy ví dụ mã từ Liệt kê 2 được sửa đổi để sử dụng một thẻ **header**.

```javascrpit
<!DOCTYPE html> 
<html> 
   <head> 
      <title> vi du</title> 
   </head> 
   <body>
      <header>ahihi</header> 
      <div id='content'>Content</div> 
      <div id='footer'>Footer</div> 
   </body>
        
</html>
```


>**Thẻ `<html>`** Xác định một tài liệu

>**Thẻ `<img>`** Xác định một ảnh

>**Thẻ `<p>`** Xác định một đoạn văn

>**Thẻ `<ol>`** Xác định một danh sách được sắp thứ tự

>**Thẻ `<strong>`** Xác định văn bản 

>**Thẻ `<pre>`** Xác định đoạn văn bản trước

>**Thẻ `<table>`** Xác định một bảng

>**Thẻ `<title>`** Xác định tiêu đề tài liệu

>**Thẻ `<tr>`** Xác định một hàng của bảng

>**Thẻ `<ul>`** Xác định một danh sách không xếp theo thứ tự

>**Thẻ `<video>`** Thẻ mới: xác định một video file

####3.Phân biệt sự khác nhau giữa HTML với HTML5<a name="3"></a>

**HTML**
 + Việc tải hình ảnh sẽ mất nhiều thời gian nếu sủa dụng băn thông quay số.
 + Phải cập nhật plugin như Flash và Java
**HTMl5**
 + Ít phụ thuộc vào các plugin cho các chức năng.
 + Scripting nên được thay thế bằng markup bất cứ khi nào có thể.
 + Độc lập thiết bị (ví dụ, có sẵn trên tất cả các thiết bị và cung cấp các trải nghiệm giống nhau đối với người dùng).
 + Công bố quá trình phát triển để mọi người đều có thể nhìn thấy những gì đang diễn ra.

















