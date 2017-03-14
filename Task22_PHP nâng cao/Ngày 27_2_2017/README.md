##PHP


>Tên tài liệu: Zend.vn
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 20/02/2017

##Mục lục:
[I.PHP cơ bản](#I)

 + [1.Giới thiệu về PHP](#1)

 + [2.Biến trong php](#2)

 + [3.Toán tử trong PHP](#3)

 + [4.Làm việc với form](#4)

 + [5.Câu điều kiện](#5)

 + [6.Vòng lặp](#6)




##Nội dung:

####1.Giới thiệu về PHP<a name="1"></a>

**PHP là gì?**

 + PHP (Hypertext Preprocessor )Là một ngôn ngữ lập trình mã nguồn mở được thực thi trên máy chủ.

 + Tập tin php có phần mở rộng là `*.php`, nó có thể chứa các văn bản, mã nguồn HTML, CSS, JavaScript, Jquery,.. và mã PHP.


**PHP và HTML có gì giống và khác nhau?**

Khi người dùng yêu cầu xem một trang web, server phát sinh trang web đó từ mã nguồn PHP sang mã nguồn HTML, sau đó mới chuyển  về mã nguồn  trình duyệt web để người dùng đọc được.

**Tại sao nên sủ dựng php để lập trình web?**

 + Chức năng: tạo web động, thao tác vứi file trên server, nhận và gửi cookie, cập nhật database, hạn chế người dùng truy cập vào web, mã hóa dữ liệu,...

 + Ưu điểm: thực thi tốt trên các hệ điều hành, các máy chủ phổ biến hiện nay, kết hợp dễ dàng với các hệ quản trị cơ sở dữ liệu, tài liệu phong phú và đa dạng, cộng đồng sử dụng rộng rãi, được cung cấp hoàn toàn miễn phí,...

**Cách tạo một web server ảo tại máy tính cá nhân?**

Chúng ta sử dụng phần mềm XAMPP 1.8.1 

Soạn thảo mã nguồn PHP sử dụng phân mềm Zend Studio 9.0.3

**Chương trình `Hello World`**

![text](http://i.imgur.com/gBNrzsk.png)

Kết quả:

![text](http://i.imgur.com/X4AVPoG.png)

**PHP với HTML**

![text](http://i.imgur.com/wJ4hnvp.png)

Kết quả:

![text](http://i.imgur.com/GvOxlBx.png)

####2.Biến trong php<a name="2"></a>

**Biến là gì?:**

`Biến` trong php chỉ tồn tại trong thời gian server phát sinh trang web. sau khi đã phát sinh xong trang web, tất cả các biến đều bị xóa đi. 

**Làm sao để tạo biến trong php?**

 + Một biến gồm 2 thành phần cơ bản: tên biến và giá trị của biến.

![text](http://i.imgur.com/viizMYa.png)

####Làm sao biết được biến đó đang lưu giá trị thuộc kiểu dữ liệu nào?

Chúng ta có 2 cách sau để xác định kiểu dữ liệu của một biến nào đó

 + Sử dụng hàm gettype()

 + Sử dụng hàm var_dump()

![text](http://i.imgur.com/gUTcip6.png)

**Có thể chuyển đổi kiểu dữ liệu của một biến nào đó hay không?**

Chúng ta hoàn toàn có thể chuyển đổi kiểu dữ liệu của một biến nào đó, bằng cách thực hiện một trong hai cách sau:

 + Sử dụng cách ép kiểu

 + Sử dụng hàm settype()

![text](http://i.imgur.com/Zi5dJG5.png)

**Có hàm nào để kiểm tra dữ liệu của một biến không?**

 + Để kiểm tra kiểu dữ liệu của một biến nào đó chúng ta có thể dùng các hàm is_numberic(), is_float(), is_string(), is_array(), is_object(),...

**PHP có hỗ trợ hằng số hay không?**

 + Khác với biến, hằng số là giá trị không thể thay được.

![text](http://i.imgur.com/suDdESE.png)

####3.Toán tử trong PHP<a name="3"></a>

**Để thực hiện các phép toán `+ - * /` trong PHP thì làm như thế nào?**

 Các toán tử nawfy nằm trong nhóm "Toán tử số học", trong nhóm này chúng ta còn có thể thực hiện các phép toán

 + % chia lấy phần dư

 + - Phủ định của một số

![text](http://i.imgur.com/F9AYHPp.png)

**Toán tử gán**

 + Chúng ta có thể áp dụng cách viết này cho các trường hợp + - * / %

 + Cách viết này thuộc nhóm "Toán tử gán": += -= /= *= %=

![text](http://i.imgur.com/VQIsds2.png)

**Sự khác nhau giữa ++$x và $x++**

 + Toán tử tăng trước ++x: tăng giá trị x trước khi thực hiện các phép toán khác trong cùng 1 câu lệnh

 + Toán tử tăng sau x++: tăng giá trị x sau khi thực hiện các phép toán khác trong cùng 1 câu lệnh

![text](http://i.imgur.com/UPHGlgl.png)

**Các phép toán so sánh > < >= <= PHP xó hỗ trợ hay không?**

Chúng ta có thể thực hiện các phép toán so sánh:

 + == so sánh bằng

 + === so sánh bằng tuyệt đối

 + != so sánh khác

 + !=== so sánh khác tuyệt đối

 + <> so sánh khác

![text](http://i.imgur.com/w5tWKjz.png)

**Toán tử logic là gì?**

![text](http://i.imgur.com/ceqgfm5.png)

![text](http://i.imgur.com/LnfhiOu.png)

**Toán tử điều kiện**

 + Cú pháp (condition) ? value1:value2;

![text](http://i.imgur.com/gWjUPi0.png)

####4.Làm việc với form<a name="4"></a>

**Form dùng để làm gì?**

Nhận các giá trị mà người dùng nhập vào và đưa ra các quá trình xử lý phù hợp. Ví dụ như một form đăng nhập, khi bạn nhập user name  và password vào, thì nó sẽ đưa đi xử lý để xem được đăng nhập hay không.

**Tạo Form bằng cách nào?**

 + Sử dụng mã nguồn HTML để tạo form

 + Method: cách thức dữ liệu được gửi đi(post hoặc get)

 + Action: xác định trang/ tập tin  các dữ liệu được gửi đến để xử lí.

 + Name: tên của form.

![text](http://i.imgur.com/5t5zds7.png)

Giá trị sẽ được chuyển về file proccess

![text](http://i.imgur.com/mwO5Ute.png)

**Hai phương thức post và get co gì khác nhau?**

 + Sau khi người dùng tiến hành "submit form", cả hai phương thức này đều tiến hành gửi dữ liệu đến server. tuy nhiên: 

  + POST: đường dẫn như sau `localhost/proccess.php` và các dữ liệu trong form sẽ được gửi ngầm.

  + GET: đường dẫn như sau `localhost/proccess.php?name=lan&age=25` và trong quá trình gửi đi, dữ liệu trong form sẽ nằm trên đường dẫn, do đó tính bảo mật của `GET` không cao bằng `POST`.

**Làm sao để lấy các giá trị mà người dùng đã đăng nhập trên FORM?**

 + Đối với `Form` có method="post" sử dụng **$_POST**

 + Đối với `Form` có method="get" sử dụng **$_GET**

 + Sử dụng **$_REQUEST** cho cả 2 trường hợp trên

####5.Câu điều kiện<a name="5"></a>

**Câu điều kiện là gì?**

 + Câu điều kiện là câu lệnh mà chứng ta thường xuyên sử dụng khi viết mã cho bất kỳ ngôn ngữ lập trình nào.

 + Câu điều kiện giúp chúng ta thực hiện những hành động khác nhau trong những điều kiện khác nhau.

** Có mấy loại câu điều kiện?**

 + Hai câu lệnh điều kiện thường được sử dụng trong PHP:

  + Câu điều kiện `IF...ELSE`

  + Câu điều kiện `SWITCH`

**Sử dụng câu điều kiện IF như thế nào?**

 + Trong nhớmđiều kiện IF có 3 câu điều kiện: If, If...else, If..else if else.

![text](http://i.imgur.com/aT9RGix.png)

![text](http://i.imgur.com/G3VHnl3.png)

![text](http://i.imgur.com/uUYZHrf.png)

![text](http://i.imgur.com/uI5blI7.png)

**Cách sử dụng câu điền kiện SWITCH có gì khác so với câu điều kiện IF?**

 + Câu điều kiện Switch có một điều kiện mặc định, nghĩa là khi giá trị đưa vào không thỏa một điều kiện nào thì nó sẽ lấy các câu lệnh trong phần điều kiện mặc định để thực hiệc.

![text](http://i.imgur.com/oGLK1QD.png)

>Thành quả

![text](http://i.imgur.com/zuqLA74.png)

>Bài tập làm thêm về Cung Hoàng Đạo

![text](http://i.imgur.com/7QAVF9V.png)

####6.Vòng lặp<a name="6"></a>

 + **Vòng lặp được hiểu như thế nào?** Vòng lặp là một đoạn mã trong chương trình được thực hiện lặp đi lặp lại cho đến khi thỏa mãn một điều kiện nào đó.

**Có bao nhiêu vòng lặp trong PHP?**

 + Các vòng lặp thường sử dụng trong PHP:
  	
  	+ For

  	+ While

  	+ Do...while

  	+ For...each

>Ví dụ về câu lệnh for

![text](http://i.imgur.com/otS1YGm.png)

**Vòng lặp while**

![text](http://i.imgur.com/pgnWqhQ.png)

![text](http://i.imgur.com/Iu2bXhS.png)

![text](http://i.imgur.com/iiHayXo.png)

![text](http://i.imgur.com/MYyd9R6.png)

**Vòng lặp do...while**

![text](http://i.imgur.com/aEqXvBB.png)

**Vòng lặp break-continue**

 + Câu lệnh `break` có chức năng thoát khỏi một dòng lệnh. Nó có thể sử dụng để nhảy ra khỏi vòng lặp.

 + Câu lệnh `continue` có chức năng dừng vòng lặp tại giá trị đó và nhảy sang giá trị khác trong vòng lặp.

>Ta có sơ đồ sau:

```javascript
	while(condition){
		continue;//Nếu là continue thì nhảy lên dòng while để thực hiện 
		break;//Nếu là break thì nhảy ra khỏi dòng lệnh.
	}
```

>Ví dụ 1:

![text](http://i.imgur.com/JZ67mea.png)

>Ví dụ 2:

![text](http://i.imgur.com/jFUtm47.png)

** Dấu `" ` và dấu `'` khác nhau chỗ nào ?

>Ví dụ:

![text](http://i.imgur.com/nnFD3Q4.png) 

 + Đối với dấu nháy đôi `"` thì nó sẽ tiến hành tìm xem trong chuỗi có biến không chuyển giá trị biến về nơi chứa.

 + Đối với dâu nháy đơn `'` thì trích toàn bộ nội dung trong chuỗi đó ra.

 + Dấu nháy đôi phải làm việ nhiều hơn dấu nháy đơn.

**Ôn tập các kiến thức về vòng lặp**

>Ví dụ

** Giải câu đố bằng vòng lặp**

![text](http://i.imgur.com/P0SIeCx.png)




















