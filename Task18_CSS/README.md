##CSS Tutorial


>Tên tài liệu: CSS cơ bản 
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 18/12/2016

##Mục lục:

[1.CSS là gì?](#1)

[2.CSS cơ bản](#2)

##Nội dung:

####1.CSS là gì?<a name="1"></a>

CSS là viết tắt của **Cascading Style Sheet**, là một **Design Language** đơn giản được sử dụng để làm đơn giản hóa tiến trình trình bày các trang web.

Có thể hiểu đơn giản là, CSS xử lý phần `Look` và `Feel` của một trang web. Sử dụng CSS, bạn có thể điều khiển màu văn bản (text color), font style, khoảng cách giữa các đoạn văn, kích cỡ các cột, hình nền hoặc màu nền, ….

####2.CSS cơ bản<a name="2"></a>

**CSS - Màu (Color)**

CSS sử dụng các giá trị màu để xác định màu sắc hiển thị. Bạn có thể thiết lập màu nền (background) hoặc màu cận cảnh (foreground) của một phần tử, hoặc màu của đường viền hay đường bao của một khung hoặc một bảng. Màu được hiển thị bởi kết hợp ba màu là RED, GREEN, và BLUE.

>**Sử dụng Hex Code để xác định màu trong CSS**

Mỗi giá trị Hex Code này được đặt trước bởi một ký hiệu #.

![text](http://i.imgur.com/JE1Govr.png)

>**Sử dụng Short Hex Code để xác định màu trong CSS**

Đây là dạng rút gọn của Hex Code(trong Hex Code được rút gọn thành một chữ số tương ứng trong Short Hex Code).

![text](http://i.imgur.com/tVHTK6W.png)

>**Sử dụng RGB để xác định màu trong CSS**

Giá trị màu có thể được xác định bởi sử dụng thuộc tính rgb().

![text](http://i.imgur.com/SseR9U7.png)

**CSS - Background**

Thuộc tính **background-color**: thuộc tính này được sử dụng để thiết lập màu nền của một phần tử.

```javascript
<html>
   <head>
   <body>
      <p style = "background-color:yellow;">
      Phan noi dung nay co Background Color la mau vang.</p>
   </body>
   </head>
<html>
```

Thuộc tính **background-image**: thuộc tính này được sử dụng để thiết lập hình nền cho một phần tử.

```javascript
<html>
   <head>
      <style>
         body  {
            background-image: url("../css/images/css.jpg");
            background-color: #cccccc;
         }
      </style>
      <body>
         <h1>Hoc CSS co ban tai VietJack!</h1>
      </body>
   </head>
<html>
```

Thuộc tính **background-repeat**: thuộc tính này được sử dụng để điều khiển sự lặp đi lặp lại của một hình ảnh nền theo chiều dọc hoặc chiều ngang.

```javascript
<html>
   <head>
      <style>
         body {
            background-image: url("../css/images/css.jpg");
            background-repeat: repeat;
         }
      </style>
   </head>
   <body>
      <p>Vi du ve gia tri mac dinh cua thuoc tinh background-repeat trong CSS.</p>
   </body>
</html>
```


Thuộc tính **background-position**: thuộc tính này được sử dụng để điều khiển vị trí của một hình ảnh nền.

```javascript
<html>
   <head>
      <style>
         body {
            background-image: url("../css/images/css.jpg");
            background-repeat: repeat-y;
         }
      </style>
   </head>
   <body>
      <p>Vi du ve gia tri repeat-y cua thuoc tinh background-repeat trong CSS.</>
   </body>
</html>
```

Thuộc tính **background-attachment**: thuộc tính này được sử dụng để xác định xem có hay không một hình nền là cố định hoặc có thể scroll với phần còn lại của trang.

```javascript
<!DOCTYPE html>
<html>
   <head>
   
      <style>
         body  {
            background-image: url('../css/images/css.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
         }
      </style>
      
   </head>
   <body>
   
      <p>Hinh nen duoc dat co dinh. Ban khong the Scroll.</p>
      
   </body>
</html>
```

Thuộc tính **background**: sử dụng thuộc tính này nếu bạn muốn viết ít code hơn mà vẫn xác định được tất cả các thuộc tính liên quan tới background ở trên cho hình nền.

Để tối thiểu lượng code cần viết, bạn có thể sử dụng thuộc tính background trong CSS để xác định các thuộc tính liên quan tới hình nền. Thứ tự các giá trị thuộc tính khi bạn sử dụng thuộc tính background là:

 + background-color

 + background-image

 + background-repeat

 + background-attachment

 + background-position


**CSS - Định dạng Font**

>Thuộc tính **font-family**: được sử dụng để thay đổi bề mặt font

Trong CSS, có hai loại Font Family:

generic family: một nhóm các Font Family có bề mặt khá tương tự nhau. Ví dụ Serif hoặc Monospace.

font family: một font family cụ thể, ví dụ như Time New Roman hoặc Arial.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font-family:georgia,garamond,serif;">
      Phan noi dung nay duoc hien thi voi mot trong cac font: georgia, garamond, hoac gia tri mac dinh la serif  
      phu thuoc vao trinh duyet cua ban.
      </p>
   </body>
</html>
```

>Thuộc tính **font-style**: được sử dụng để tạo một font chữ nghiêng hoặc chếch.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font-style:italic;">
      Doan van nay se duoc hien thi duoi dang in nghieng.
      </p>
   </body>
</html>
```

>Thuộc tính **font-variant**: được sử dụng để tạo những chữ hoa nhỏ (small-cap)

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font-variant:small-caps;">
      Doan van nay se duoc hien thi duoi dang cac chu hoa nho.
      </p>
   </body>
</html>
```

>Thuộc tính **font-weight**: được sử dụng để tăng giảm độ đậm của font.

Để thiết lập mức độ đậm của văn bản, bạn sử dụng thuộc tính font-weight trong CSS. Thuộc tính này có thể nhận các giá trị: normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font-weight:bold;">Doan van nay duoc hien thi duoi dang in dam.</p>
      <p style="font-weight:bolder;">Doan van nay duoc hien thi duoi dang in dam hon.</p>
      <p style="font-weight:500;">Doan van nay co Font Weight la 500..</p>
   </body>
</html>
```

Thuộc tính **font-size**: được sử dụng để xác định kích cỡ font.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font-stretch:ultra-expanded;">
            Neu gia tri cua thuoc tinh nay khong co hieu qua, tuc la may tinh cua ban 
            khong ho tro hai gia tri: condensed hoac expanded.
      </p>
   </body>
</html>
```

Thuộc tính **font**: sử dụng thuộc tính này nếu bạn muốn viết ít code hơn mà vẫn xác định được các thuộc tính liên quan tới font ở trên.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="font:italic small-caps bold 15px georgia;">
      Bang Style Rule tren, ban co the xac dinh gia tri cho tat ca cac thuoc tinh lien quan toi font.
      </p>
   </body>
</html>
```

**CSS - Hình ảnh**

Để làm cho hình ảnh đẹp hơn, bạn có thể sử dụng các thuộc tính trong CSS. CSS có các thuộc tính:

>Thuộc tính **border**: Thiết lập độ rộng của đường viền bao quanh hình ảnh.

Để thiết lập độ rộng của đường viền bao quanh hình ảnh, bạn sử dụng thuộc tính border trong CSS. Thuộc tính này có thể nhận giá trị: độ dài đo bằng px hoặc %.

```javascript
<html>
   <head>
   </head>
   <body>
      <img style="border:0px;" src="http://....png" />
      <br />
   </body>
</html> 
```

>Thuộc tính **height**: Thiết lập chiều cao của hình ảnh.

Để điều khiển chiều cao của hình ảnh hiển thị trong Webpage, bạn có thể sử dụng thuộc tính height trong CSS. Thuộc tính này có thể nhận giá trị: chiều cao đo bằng px hoặc %. Nếu được xác định bằng đơn vị %, chiều cao của hình ảnh sẽ được tính tỷ lệ với khối chứa hình ảnh đó.

```javascript
<html>
   <head>
   </head>
   <body>
      <img style="border:1px solid red; height:100px;" src="http://....png" />
      <br />
        </body>
</html> 
```

>Thuộc tính **width**: Thiết lập độ rộng của hình ảnh.

Để xác định độ rộng của hình ảnh, bạn có thể sử dụng thuộc tính width trong CSS. Thuộc tính này có thể nhận giá trị: độ rộng đo bằng px hoặc %. Nếu được xác định bằng đơn vị %, độ rộng của hình ảnh sẽ được tính tỷ lệ với khối chứa hình ảnh đó.

```javascript
<html>
   <head>
   </head>
   <body>
      <img style="border:1px solid red; width:150px;" src="http://vietjack.com/css/images/logo3.png" />
      <br />
      <img style="border:1px solid red; width:100%;" src="http://vietjack.com/css/images/logo3.png" />
   </body>
</html> 
```

>Thuộc tính **–moz-opacity**: thiết lập độ trong suốt của hình ảnh.

Thuộc tính -moz-opacity trong CSS được sử dụng để thiết lập độ trong suốt của hình ảnh. Trong Mozilla, thuộc tính này sẽ tạo một hình ảnh trong suốt. IE sử dụng filter:alpha(opacity=x) để tạo các hình ảnh trong suốt.

```javascript
<html>
   <head>
   </head>
   <body>
      <img style="border:1px solid red;-moz-opacity:0.4;filter:alpha(opacity=40);" src="http://vietjack.com/css/images/logo3.png" />
   </body>
</html>
```

**CSS - Trang trí Link**

Để tạo Link Style, chẳng hạn như tạo màu, font, … cho các đường link trong CSS, bạn có thể sử dụng nhiều thuộc tính CSS đa dạng, ví dụ như color, font-family, background, …

```javascript
<html>
<head>
<style>
a {
    color: hotpink;
}
</style>
</head>
<body>


<p><b><a href="index.jsp" target="_blank">Day la mot link</a></b></p>

</body>
</html>
```
**Ngoài ra, để thiết lập các trạng thái khác nhau cho link, bạn có thể sử dụng các thuộc tính:**

>Trạng thái :**link** – biểu thị rằng trang web này trình duyệt chưa lưu (tức người sử dụng lần đầu tiên click vào đường dẫn này).

Để thiết lập màu cho Link, bạn sử dụng thuộc tính color trong CSS. Như đã trình bày trong chương Màu trong CSS, giá trị của thuộc tính color này có thể là tên màu hoặc một giá trị Hex Code, …

```javascript
<html>
   <head>
      <style type="text/css">
         a:link {color:#000000}
     </style>
   </head>
   <body>
      <a href="">Click vao link nay</a>
   </body>
</html> 
```


>Trạng thái :**visited** – biểu thị rằng đường dẫn tới trang web này đã được lưu bởi trình duyệt (tức là người sử dụng đã click vào đường dẫn này trước đó rồi).

Trạng thái :visited chỉ rằng đường link này đã được lưu bởi trình duyệt. Để thiết lập màu cho loại đường này, bạn theo dõi ví dụ sau:

```javascript
<html>
   <head>
      <style type="text/css">
         a:visited {color: #006600}
      </style>
   </head>
   <body>
      <a href=""> Click vao link nay</a> 
   </body>
</html> 
```

>Trạng thái :**active**– biểu thị đường link là active khi người sử dụng click chuột vào.

Để biểu thị một link nào đó đang active, bạn có thể thay đổi màu của link đó sang một màu khác chẳng hạn. Để thiết lập trạng thái này, bạn sử dụng :active trong CSS. Ví dụ sau minh họa cách thay đổi màu cho Actived Link bởi sử dụng thuộc tính color trong CSS.

```javascript
<html>
   <head>
      <style type="text/css">
         a:active {color: #FF00CC}
      </style>
   </head>
   <body>
      <a href="">Click vao link nay</a>
   </body>
</html> 
```

**CSS - Bảng**

**Dưới đây là một số thuộc tính trong CSS:**

>Thuộc tính **border** được sử dụng để thiết lập đường viền cho bảng.

Xem lại phía trên.

>Thuộc tính **border-collapse** xác định rằng các đường viền của bảng nên được vào hợp thành một đường viền.

Thuộc tính này có hai giá trị `collapse` và `separate` tương ứng với các đường viền nên được kết hợp với nhau hoặc phân biệt riêng rẽ. Ví dụ:

```javascript
<html>
   <head>
   
      <style type="text/css">
         table.one {border-collapse:collapse;}
         table.two {border-collapse:separate;}
         td.a {
            border-style:dotted;
            border-width:3px;
            border-color:#000000; 
            padding: 10px;
         }
         td.b {
            border-style:solid;
            border-width:3px;
            border-color:#333333;
            padding:10px;
         }
      </style>
      
   </head>
   <body>
   
      <table class="one">
         <caption>Vi du gia tri collapse</caption>
         <tr><td class="a"> Cell A</td></tr>
         <tr><td class="b"> Cell B</td></tr>
      </table>
      <br />
      
      <table class="two">
         <caption>Vi du gia tri separate</caption>
         <tr><td class="a"> Cell A</td></tr>
         <tr><td class="b"> Cell B</td></tr>
      </table>
      
   </body>
</html> 
```

>Thuộc tính **caption-side** được sử dụng trong phần tử `<caption>`.

Theo mặc định, nội dung của thẻ khi được sử dụng trong bảng sẽ được hiển thị bên trên bảng. Tuy nhiên, để thay đổi vị trí này, bạn có thể sử dụng thuộc tính caption-side trong CSS.

```javascript
<html>
   <head>
   
      <style type="text/css">
         caption.top {caption-side:top}
         caption.bottom {caption-side:bottom}
         caption.left {caption-side:left}
         caption.right {caption-side:right}
      </style>
      
   </head>
   <body>
   
      <table style="width:400px; border:1px solid black;">
         <caption class="top">
         Phan Caption nay se xuat hien o phan ben tren bang
         </caption>
         <tr><td > Cell A</td></tr>
         <tr><td > Cell B</td></tr>
      </table>
      <br />
      
      <table style="width:400px; border:1px solid black;">
         <caption class="bottom">
         Phan Caption nay se xuat hien o phan ben duoi bang
         </caption>
         <tr><td > Cell A</td></tr>
         <tr><td > Cell B</td></tr>
      </table>
      
      
   </body>
</html> 
```

>Thuộc tính **empty-cells** xác định xem có hiển thị đường viền không nếu một ô là trống.

Để xác định xem có nên hiển thị đường viền cho một ô không có nội dung, bạn có thể sử dụng thuộc tính empty-cells trong CSS.

Thuộc tính này có thể nhận một trong các giá trị: show, hide hoặc inherit.

```javascript
<html>
   <head>
   
      <style type="text/css">
         table.empty{
            width:350px;
            border-collapse:separate;
            empty-cells:hide;
         }
         td.empty{
            padding:5px;
            border-style:solid;
            border-width:1px;
            border-color:#999999;
         }
      </style>
      
   </head>
   <body>
   
      <table class="empty">
      <tr>
         <th></th>
         <th>Dau de cho cot</th>
         <th>Dau de cho cot</th>
      </tr>
      
      <tr>
         <th>Dau de cho hang</th>
         <td class="empty">Gia tri</td>
         <td class="empty">Gia tri</td>
      </tr>
      
      <tr>
         <th>Dau de cho hang</th>
         <td class="empty">Gia tri</td>
         <td class="empty"></td>
      </tr>
      </table>
      
   </body>
</html> 
```

>Thuộc tính **table-layout** cho phép bạn thiết lập layout cho bảng.

Thuộc tính table-layout hỗ trợ bạn điều khiển cách mà trình duyệt nên tạo layout cho một bảng.

Thuộc tính này có thể nhận một trong ba giá trị: fixed, auto hoặc inherit.

```javascript
<html>
   <head>
   
      <style type="text/css">
         table.auto {
            table-layout: auto
         }
         table.fixed{
            table-layout: fixed
         }
      </style>
      
   </head>
   <body>
   
      <table class="auto" border="1" width="100%">
      <tr>
         <td width="20%">1000000000000000000000000000</td>
         <td width="40%">10000000</td>
         <td width="40%">100</td>
      </tr>
      </table>
      <br />
      
      <table class="fixed" border="1" width="100%">
      <tr>
         <td width="20%">1000000000000000000000000000</td>
         <td width="40%">10000000</td>
         <td width="40%">100</td>
      </tr>
      </table>
      
   </body>
</html> 
```

**CSS - Đường viền (Border)**

>Thuộc tính **border-color** xác định màu của đường viền. Tùy theo mục đích, bạn sử dụng một trong các thuộc tính sau đây.

 + Thuộc tính **border-bottom-color** giúp bạn thay đổi màu của đáy đường viền.

 + Thuộc tính **border-top-color** giúp bạn thay đổi màu của phần trên đường viền.

 + Thuộc tính **border-left-color** giúp bạn thay đổi màu của cạnh trái đường viền.

 + Thuộc tính **border-right-color** giúp bạn thay đổi màu của cạnh phải đường viền.

```javascript
<html>
   <head>
   
      <style type="text/css">
         p.example1{
            border:1px solid;
            border-bottom-color:#009900; /* Green */
            border-top-color:#FF0000;    /* Red */
            border-left-color:#330000;   /* Black */
            border-right-color:#0000CC;  /* Blue */
         }
         p.example2{
            border:1px solid;
            border-color:#009900;        /* Green */
         }
      </style>
      
   </head>
   <body>
   
      <p class="example1">
      Vi du hien thi Border voi cac mau khac nhau tren cac canh.
      </p>
      
      <p class="example2">
      Vi du hien thi Border voi mau duy nhat tren tat ca cac canh.
      </p>
      
   </body>
</html> 
```

>Thuộc tính **border-style** giúp bạn xác định xem đường viền nên là solid, dashed, double, …

Để xác định xem style của đường viền là solid, dotted, dashed, double, …, bạn có thể sử dụng thuộc tính border-style trong CSS. Thuộc tính này có thể nhận các giá trị sau:

 + none

 + solid

 + dotted

 + dashed

 + double

 + groove

 + ridge

 + inset

 + outset

 + hidden

 Giống như thuộc tính border-color, bạn cũng có thể xác định style riêng cho từng phần (trên, đáy, cạnh trái, cạnh phải) của đường viền. Các thuộc tính là:

 + Thuộc tính **border-bottom-style** thay đổi style cho cạnh dưới của đường viền.

 + Thuộc tính **border-top-style** thay đổi style cho cạnh trên của đường viền.

 + Thuộc tính **border-left-style** thay đổi style cho cạnh trái của đường viền.

 + Thuộc tính **border-right-style** thay đổi style cho cạnh phải của đường viền.

```javascript
<html>
   <head>
   </head>
   
   <body>.
      <p style="border-width:4px; border-style:none;">
      Vi du Border co dang la none.
      </p>
      
      <p style="border-width:4px; border-style:solid;">
      Vi du Border dang solid.
      </p>
      
      <p style="border-width:4px; border-style:dashed;">
      Vi du Border dang dahsed.
      </p>
      
      <p style="border-width:4px; border-style:double;">
      Vi du Border dang double.
      </p>
      
      <p style="border-width:4px; border-style:groove;">
      Vi du Border dang groove.
      </p>
      
      <p style="border-width:4px; border-style:ridge">
      Vi du Border dang aridge.
      </p>
      
      <p style="border-width:4px; border-style:inset;">
      Vi du Border dang inset.
      </p>
      
      <p style="border-width:4px; border-style:outset;">
      Vi du Border dang outset.
      </p>
      
      <p style="border-width:4px; border-style:hidden;">
      Vi du Border dang hidden.
      </p>
      
      <p style="border-width:4px;border-top-style:solid;
      border-bottom-style:dashed; border-left-style:groove; border-right-style:double;">
      Vi du Border voi 4 Style khac nhau cho cac canh.
      </p>
   </body>
   
</html> 
```

>Thuộc tính **border-width** giúp bạn xác định độ rộng của đường viền.

Sử dụng thuộc tính border-width trong CSS giúp bạn thay đổi độ rộng của đường viền bao quanh một phần tử. Thuộc tính này có thể nhận một giá trị đo chiều dài với đơn vị là `px`, `pt` hoặc `cm` hoặc có thể là `thin`, `medium` hoặc `thick`.


 + Thuộc tính **border-bottom-width** thay đổi style cho cạnh dưới của đường viền.

 + Thuộc tính **border-top-width** thay đổi style cho cạnh trên của đường viền.

 + Thuộc tính **border-left-width** thay đổi style cho cạnh trái của đường viền.

 + Thuộc tính **border-right-width** thay đổi style cho cạnh phải của đường viền.

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="border-width:2px; border-style:solid;">
      Vi du Border dang solid co do rong la 2px.
      </p>
      
      <p style="border-width:6pt; border-style:solid;">
      Vi du Border dang solid co do rong la 6pt.
      </p>
      
      <p style="border-width:thin; border-style:solid;">
      Vi du Border dang solid co do rong la thin.
      </p>
      
      <p style="border-width:medium; border-style:solid;">
      Vi du Border dang solid co do rong la medium.
      </p>
      
      <p style="border-width:thick; border-style:solid;">
      Vi du Border dang solid co do rong la thick.
      </p>
      
      <p style="border-bottom-width:4px;border-top-width:10px;
      border-left-width: 2px;border-right-width:15px;border-style:solid;">
      Vi du Border dang solid co do rong khac nhau cho cac canh.
      </p>
   </body>
</html>
```

**CSS - Căn lề (Margin)**

**Để căn lề cho một phần tử, bạn có các thuộc tính sau:**

 + Thuộc tính **margin**: sử dụng thuộc tính này bạn có thể thiết lập tất cả style liên quan tới việc căn lề chỉ trong một khai báo CSS.

+ Thuộc tính **margin-bottom** căn lề dưới của một phần tử.

 + Thuộc tính **margin-top** căn lề trên của một phần tử.

 + Thuộc tính **margin-left** căn lề trái của một phần tử.

 + Thuộc tính **margin-right** căn lề phải của một phần tử.

**Tất cả các thuộc tính liên quan tới Margin trên đều có thể nhận các giá trị sau:**

 + **auto**: Trình duyệt tự động ước lượng việc căn lề cho phần tử.

 + **length**: Xác định độ rộng (đơn vị px, pt, cm, …) của lề. Giá trị mặc định là 0.

 + **%**: Xác định mối quan hệ giữa lề với độ rộng của phần tử chứa lề.

 + **inherit**: Kế thừa thuộc tính này từ phần tử cha chứa phần tử có thuộc tính margin này.

**Thuộc tính margin trong CSS**

Sử dụng thuộc tính `margin`, bạn có thể xác định tất cả Style Rule liên quan tới việc căn lề trong CSS. Với `margin`, bạn viết ít code hơn mà vẫn có thể tạo tất cả style cho lề. Thuộc tính này có cú pháp giống như sau:

    `margin: 100px 150px 100px 80px;`

Bạn theo dõi các ví dụ sau và theo dõi cách nó hoạt động:

Nếu thuộc tính margin có 4 giá trị:

 
margin: 25px 50px 75px 100px;

Lề trên là 25px

Lề phải là 50px

Lề dưới là 75px

Lề trái là 100px

Nếu thuộc tính margin có 3 giá trị:

margin: 25px 50px 75px;

 
Lề trên là 25px

Lề phải và trái là 50px

Lề dưới là 75px

Nếu thuộc tính margin có 2 giá trị:

margin: 25px 50px;

Lề trên và lề dưới là 25px

Lề phải và lề trái là 50px

Nếu thuộc tính margin có 1 giá trị:

margin: 25px;

Các lề trên, lề dưới, lề trái, và lề phải là 25px

```javascript
<html>
   <head>
   </head>
   
   <body>
      <p style="margin: 15px; border:1px solid black;"> 
      Ca 4 le: tren, duoi, trai va phai deu co do rong le la 15px  
      </p>
      
      <p style="margin:10px 2%; border:1px solid black;">
      Le tren va le duoi la 10px. Do rong cua le trai va le phai bang 2% tong do rong cua trang. 
      </p>
      
      <p style="margin: 10px 2% -10px; border:1px solid black;">
      Le tren la 10px. Do rong cua le trai va le phai bang 2% tong do rong cua trang. Le duoi la -10px
      </p> 
      
      <p style="margin: 10px 2% -10px auto; border:1px solid black;">
      Le tren la 10px. Do rong cua le phai bang 2% tong do rong cua trang. Le duoi la -10px, va le trai se duoc thiet lap tu dong boi trinh duyet.
      </p>
   </body>
   
</html>
```

Thuộc tính margin-bottom trong CSS
Để căn lề dưới cho một phần tử, bạn sử dụng thuộc tính margin-bottom trong CSS. Thuộc tính này có thể nhận một giá trị là độ rộng hoặc % hoặc auto.

Ví dụ sau minh họa cách sử dụng thuộc tính margin-bottom trong CSS:

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="margin-bottom: 15px; border:1px solid black;">
      Doan van nay co Le duoi duoc xac dinh cu the bang gia tri do rong la 15 pixel.
      </p> 
   
      <p style="margin-bottom: 5%; border:1px solid black;"> 
      Doan van nay co Le duoi duoc xac dinh cu the bang gia tri do rong la 5%.
      </p>
   </body>
</html> 
```

Thuộc tính margin-top trong CSS
Để căn lề trên cho một phần tử, bạn sử dụng thuộc tính margin-top trong CSS. Thuộc tính này có thể nhận một giá trị là độ rộng hoặc % hoặc auto.

Ví dụ sau minh họa cách sử dụng thuộc tính margin-top trong CSS:

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="margin-top: 15px; border:1px solid black;"> 
      Doan van nay co Le tren duoc xac dinh cu the bang gia tri do rong la 15 pixel.
      </p> 
      
      <p style="margin-top: 5%; border:1px solid black;"> 
      Doan van nay co Le tren duoc xac dinh cu the bang gia tri do rong la 5%.
      </p>
   </body>
</html> 
```

Thuộc tính margin-left trong CSS
Để căn lề trái cho một phần tử, bạn sử dụng thuộc tính margin-left trong CSS. Thuộc tính này có thể nhận một giá trị là độ rộng hoặc % hoặc auto.

Ví dụ sau minh họa cách sử dụng thuộc tính margin-left trong CSS:

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="margin-left: 15px; border:1px solid black;"> 
      Doan van nay co Le trai duoc xac dinh cu the bang gia tri do rong la 15 pixel. 
      </p> 
   
      <p style="margin-left: 5%; border:1px solid black;"> 
      Doan van nay co Le trai duoc xac dinh cu the bang gia tri do rong la 5%.
      </p>
   </body>
</html> 
```

Thuộc tính margin-right trong CSS
Để căn lề phải cho một phần tử, bạn sử dụng thuộc tính margin-right trong CSS. Thuộc tính này có thể nhận một giá trị là độ rộng hoặc % hoặc auto.

Ví dụ sau minh họa cách sử dụng thuộc tính margin-right trong CSS:

```javascript
<html>
   <head>
   </head>
   <body>
      <p style="margin-right: 15px; border:1px solid black;"> 
      Doan van nay co Le phai duoc xac dinh cu the bang gia tri do rong la 15 pixel. 
      </p> 
      
      <p style="margin-right: 5%; border:1px solid black;"> 
      Doan van nay co Le phai duoc xac dinh cu the bang gia tri do rong la 5%.
      </p>
   </body>
</html> 
```



