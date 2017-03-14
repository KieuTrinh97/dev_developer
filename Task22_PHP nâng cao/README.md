##PHP


>Tên tài liệu: Zend.vn
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 17/02/2017

##Mục lục:

[1.Giới thiệu về PHP](#1)

[2.Biến trong php](#2)

[3.Toán tử trong PHP](#3)



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







