##PHP


>Tên tài liệu: Zend.vn
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 20/03/2017

##Mục lục:
[Chương I: PHP cơ bản](#I)

 + [1.Giới thiệu về PHP](#1)

 + [2.Biến trong php](#2)

 + [3.Toán tử trong PHP](#3)

 + [4.Làm việc với form](#4)

 + [5.Câu điều kiện](#5)

 + [6.Vòng lặp](#6)

 + [7.Xây dựng hàm](#7)

[Chương II: Thao tác với Array - String - Number - Time](#II.1)

 + [II.1.PHP Array](#II.1)

      + [1.1Mảng trong PHP](#1.1)

      + [1.2Mảng liên tục](#1.2)

      + [1.3Mảng không liên tục](#1.3)

      + [1.4Các vấn đề](#1.4)




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

####7.Xây dựng hàm<a name="7"></a>

**Hàm là gì?**

  + Hàm là tập hợp một hay nhiều câu lệnh đợc xây dựng để thực hiện một chức năng nào đó.

  + Khối lệnh này chỉ cần xây dựng duy nhất một lần, và có thể được sử dụng nhiều lần trong toàn bộ chương trình.

**Có bao nhiêu hàm trong PHP?** 

 + Hàm trong PHP được xây dựng vô cùng đa dạng và phong phú, bao gồm các hàm xử lý chuỗi, số, mảng, ngày tháng,..

 + Chúng ta tạm thời chia làm 2 nhóm hàm:

      + Nhóm hàm được cung cấp sẵn bởi PHP

      + Nhóm hàm do người tự định nghĩa

**Làm sao để viết một hàm trong PHP?**

      + Vấn đề 01: Hàm không tham số và không trả về 

          + Xây dựng hàm vẽ các box

          + Lưu ý về cách đặt tên hàm

          + Biết cách khai báo và gọi hàm không có tham số và không có trả về

      + Vấn đề 02: Sự trả về của hàm

          + Xây dựng hàm vẽ các box với sự trả về của hàm return

          + Hàm trả về một giá trị

          + Hàm trả về  nhiều giá trị

          + Hàm trả kết quả true hoặc false

      + Vấn đề 03: Truyền tham số vào hàm

            + Phân biệt biến toàn cục và biến cục bộ

                + Local (biến cục bộ ) ;à các biến được khai báo trong hàm và chỉ có thể được truy cập trong hàm đó. Biến cục bộ được xóa sau khi hàm của nó thực thi xong.

                + Global( biến toàn cục) là các biến được kahi báo bên ngoài tất cả các hàm. Được sử dụng tại bất kỳ vị trí nào trong chương trình.

            + Phân biệt tham chiếu và tham trị

                + Khi truyền biến vào hàm theo kiểu tham trị. Sau khi kết thúc hàm giá trị của biến truyền vào không thay đổi.

                + Khi truyền biến vào hàm the kiểu tham chiếu. Sau khi kết thúc hàm giá trị của biến truyền vào sẽ thay đổi tuyd theo phần xử lý của hàm đó.

            + Truyền tham số vào hàm:

                + Truyền nội dung vào cho box( hàm 1 tham số)

                + Truyền chiều rộng và chiều cao của box(hàm nhiều tham số)

                + Ghán giá trị mặc định cho tham số

      + Vấn đề 04: Tìm hiểu include và require

>Ví dụ vấn đề 01:

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
    <div style="width: 200px; height: 50px;">
      <p>Box A <span>(200x50)</span></p>
    </div>

    <div style="width: 300px; height: 100px;">
      <p>Box B <span>(300x100)</span></p>
    </div>

    <div style="width: 300px;height: 100px;">
      <p>Box B<span>(300x100)</span></p>
    </div>
  </div>
</body>

</html>
```

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
  <?php
  function createBox(){
    echo '<div style="width: 200px; height: 50px;">';
    echo '<p>Box A <span>(200x50)</span></p>';
    echo '</div>';
  }
  createBox();
  createBox();
  ?>
    
</body>

</html>

```

>Ví dụ vấn đề 02:

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
  <?php
  function createBox(){
    $value = '<div style="width: 200px; height: 50px;">';
    $value = '<p>Box A <span>(200x50)</span></p>';
    $value =  '</div>';
    return $value;
  }
  $result = createBox();
  echo $result;
  ?>
    
</body>

</html>
```

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
  <?php
  function checkNumber(){
    $value = 12;
  }
  $result = checkNumber();
  if($result==true)
    {
      echo "Số chẳn";
    }else{
      echo "Số lẻ";
    }
  ?>
    
</body>

</html>
```

>Ví dụ vấn đề 03:

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
  <?php
    function createBox($content, $width = 150, $height = 50)
    {
      $result = '<div style="width: '.$width.'px; height: '.$height.'px;">';
      $result .= '<p>'.$content.<span>(200x50)</span></p>;
      $result .= '<div>';
      return $result; 
    }
    $boxA = createBox("Box A", 500, 100);
    $boxB = createBox("Box B");
    echo $boxA . $boxB;
  ?>
  </div>
    
</body>

</html>
```

```sh
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
  
<body>
  <div class="content">
  <?php
    $value = "ABC";
    function createBox($content, $width = 150, $height = 50)
    {
      $result = '<div style="width: '.$width.'px; height: '.$height.'px;">';
      $result .= '<p>'.$content.<span>(200x50)</span></p>;
      $result .= '<div>';
      global $value;
      echo   $value;
      return $result; 
    }
    $boxA = createBox("Box A");
    echo $boxA ;
  ?>
  </div>
    
</body>

</html>
```

>Ví dụ truyền biến theo kiểu tham chiếu và tham trị:

```sh
<?php
  function pow2(&$n1, $n2)
  {
    $result = 0;

    $n1 = $n1 * $n1;
    $n2 = $n2 * $n2;

    $result = $n1 * $n2;
    return $result;

  }

  $n1 = 2;
  $n2 = 4;
  $number = pow2($n1, $n2);
  echo "Number: ".$number."<br/>";
  echo "n1: ".$n1."<br/>";
  echo "n2: ".$n2."<br/>";
?>
```
####Chương II: Thao tác với Array - String - Number - Time

 + II.1.PHP Array<a name="II.1"></a>

      + [1.1Mảng trong PHP]<a name="1.1"></a>

      **Khái niệm ASNT?**

      + ASNT là viết tắt của Number, String, Array và Time. Đây là 4 kiểu dữ liệu mà chú ng ta rất thường thao tác trong ngôn ngữ lập trình.

      + Trong chương học này, chúng ta sẽ được cài đặt ra các tình huống và xử lý các tình huống này khi thao tác với 4 kiểu dữ liệu trên.

      **Làm sao biết chúng ta đang theo tác vói kiểu dữ liệu nào?**

      + Sử dụng hàm var_dump hàm gettype để lấy kiểu dữ liệu của một biến.

      + Sử dụng nhóm hàm is_numberic, is_string, is_array, is_date để kiểm tra kiểu dữ liệu của một biến.

      ```sh
      <?php
          $n   = 20;
          $str = "PHP";

          var_dum($n);
          var_dump($str);

          echo "<br/>";
          echo gettype($str);

          if(is_numeric($n)){
            echo "Number";
          }else
          {
            echo "Not Number";
          }

        ?>
      ```

      **Hiểu như thế nào về array trong PHP?**

       + Mảng là một biến đặc biệt và có thể trữ nhiều giá trị.

       + Một biến thông thường chỉ chứa một giá trị duy nhất, nếu chúng ta muốn chứa nhiều giá trị trong một biến thì biến đó phải là mộ mảng (Ví dụ cần lưu trữ thông tin của 1000 sinh viên).

       + Trong PHP có 3 loại mảng: mảng số nguyên, mảng kết hợp và mảng đa chiều.

       ```sh
        <?php
          $php    = "PHP";
          $zend   = "Zend Framework";
          $joomla = "Joomla";

          $courses  = array();
          $courses  = "PHP";
          $courses  = "Zend Framework";
          $courses  = "Joomla";

          $length   = count($courses);
          echo $length;

          if($length > 0)
          {
            echo "Không phai mang rong";
          }
          else
          {
            echo "Mang rong";
          }


          if(!empty)($courses)){
          echo "khong la mang rong";
          }
          else
          {
            echo "Mang rong";
          }

        ?>
       ```



      + [1.2Mảng liên tục]<a name="1.2"></a>

      **Khai báo và sử dụng mảng số nguyên**

       + Mảng số nguyên là mảng mà các chỉ số của các phần tử phải thuộc kiểu số nguyên (mảng số nguyên còn được gọi là mảng liên tục).

       + Tìm hiểu cách truy cập vào phần tử của mảng và in mảng.

      ```sh
        <?php 
          //Cach 01
          $courses  = array();
          $courses  = "PHP";        //0
          $courses  = "Zend Framework"; //1 
          $courses  = "Joomla";     //2

          //Cách 02
          $courses  = array();
          $courses[0] = "PHP";        //0
          $courses[1] = "Zend Framework"; //1 
          $courses[2] = "Joomla";     //2

          //Cach 03
          $course   = array("PHP","Zend Framework","Joomla");

          for($i = 0; $i < count($course); $i++){
            echo $course[$i]."<br/>";
          }


        ?>
      ```



      + [1.3 Mảng không liên tục]<a name="1.3"></a>

      **Khai báo và sử dụng mảng kết hợp**

       + Mảng kết hợp là mảng mà các chỉ số cura các phần tử có thể là chuỗi hoặc số( Mảng kết hợp còn gọi là mảng liên tục).

       + In danh sách các phần tử trong mảng kết hợp: foreach.

       ```sh
          $courses  = array();
          $courses[0] = "PHP";            //0
          $courses[1] = "Zend Framework"; //1 
          $courses[2] = "Joomla";         //2

          echo "<pre>";
          printf_r($courses);
          echo "</pre>";
       ```

       **Khai báo và sử dụng mảng đa chiều**

       + Mảng đa chiều là mảng mà mỗi phần trư trong mảng chính có thể là một mảng và mỗi phần tử trong mảng con lại cũng có thể là một mảng (Mảng đa chiều còn gọi là mảng lồng).

       + In phần tử, in sách các phần tử trong mảng đa chiều: foreach.

       ```sh
        //Quan ly thông tin cua sinh vien
        //SV1 name,sex, scorce

        $students = array();
        $students["SV001"]  = array("name" => "Jone", "sex" => 1, "score" => array(4,5,6));
        $students["SV002"]  = array("name" => "Peter", "sex" => 1, "score" => array(8,9,10));
        $students["SV003"]  = array("name" => "Mary", "sex" => 0, "score" => array(4,9,6));

        //Quan ly thong tin sinh vien
        $students = array (
                            "SV001" => array ("name" => "Jone",
                                        "sex" => 1,
                                        "score" => array(4,5,6)
                                        ),
                            "SV002" => array ("name" => "Peter",
                                        "sex" => 1,
                                        "score" => array(8,9,10)
                                        ),
                            "SV003" => array ("name" => "Mary",
                                        "sex" => 0,
                                        "score" => array(4,9,6)
                                        ),
                            );

        echo "<pre>";
        print_r($students);
        echo "</pre>";

        //Ten cua SV002
        echo($students["SV002"]["name"]."<br>");

        //Diem mon thu 2 cua SV003
        echo($students["SV003"]["score"]."<br>");
       ```

    **Vấn đề 5: Lấy danh sách các khóa và danh sách các gia strij của một mảng nào đó?**<a name="1.4"></a>

      array_values($array) trả về một mảng liên tục có các phần tử có giá trị là giá trị lấy các phần tử của mảng `$array`.

      array_keys($array): trả về một mảng liên tục có các phần tử có giá trị là khóa lấy từ các phần tử của mảng `$array`.

      >Lấy values

      ```sh
          <?php
            $courses  = array("name" => "PHP", "time" => 200);

            echo "<pre>";
            print_r($course);
            echo "</pre>";

            $newArr = array_values($course);

            echo "<pre>";
            print_r($newArr);
            echo "</pre>";
          ?>
      ```

      >Lấy keys

      ```sh
          <?php
            $courses  = array("name" => "PHP", "time" => 200);

            echo "<pre>";
            print_r($course);
            echo "</pre>";

            $newArr = array_keys($course);

            echo "<pre>";
            print_r($newArr);
            echo "</pre>";
          ?>
      ```

    **Vấn đề 6: Loại bỏ phần tử ở đầu và cuối mảng**

      array_pop($array): Loại bỏ phần tử cuối cùng của mảng. Hàm trả về phần tử cuối cùng đã được loại bỏ.

      array_shift($array): Loại bỏ phần tử đầu tiên của mảng. Hàm tả về phần tuư đầu tiên đã đượ loại bỏ.


      >Loại bỏ phần tử cuối 

      ```sh
          <?php
            $courses  = array("PHP", "Joomla", "Zend", "jQuery");

            echo "<pre>";
            print_r($course);
            echo "</pre>";

            echo $lastItem  = array_pop($course);

            echo "<pre>";
            print_r($course);
            echo "</pre>";

          ?>
      ```

      >Loại bỏ phần tử đầu 

      ```sh
          <?php
            $courses  = array("PHP", "Joomla", "Zend", "jQuery");

            echo "<pre>";
            print_r($course);
            echo "</pre>";

            echo $firstItem  = array_shift($course);

            echo "<pre>";
            print_r($course);
            echo "</pre>";

          ?>
      ```

    **Vấn đề 7: Loại bỏ phần tử trùng nhau trong mảng?**

     array_unique($array): loại bỏ những phần tử trùng nhau trong mảng và trả về mảng mới.

       ```sh
        
          <?php
            $courses  = array("name" => "PHP","PHP", "Joomla", "Zend", "jQuery" );

            echo "<pre>";
            print_r($course);
            echo "</pre>";

            $newArr = array_unique($course);

            echo "<pre>";
            print_r($newArr);
            echo "</pre>";
          ?>
        
       ```

    **Vấn đề 8: Xóa phần tử ở vị trí bất kỳ trong mảng**

     Sử dụng hàm unset để xóa bỏ phần tử ở vị trí bất kỳ trong mảng. 

       ```sh
            <?php
              $courses  = array("PHP", "Joomla", "Zend", "jQuery" );

              echo "<pre>";
              print_r($course);
              echo "</pre>";

              unset($course[0]);

              echo "<pre>";
              print_r($course);
              echo "</pre>";
            ?>
       ```

    **Vấn đề 9: Thêm một hoặc nhiều phần tử ở đầu hoặc cuối mảng**

      array_push($array,$val1,$val2,...,$valn) thêm một hoặc nhiều phần tử vào cuối mảng $array. Hàm trả về kiểu số nguyên là số lượng phần tử của mảng $array mới.

      array_unshift($array,$val1,$val2,...,$valn) thêm một hoặc  nhiều phần tử vào đầu mảng $array. Hàm trả về kiểu số nguyên là số lượng phần trư của mảng $array mới.

      >Thêm vào cuối mảng

       ```sh
            <?php
              $courses  = array("PHP", "Joomla", "Zend", "jQuery" );

              echo "<pre>";
              print_r($course);
              echo "</pre>";

              echo $length  = array_push($course,"HTML","CSS");

              echo "<pre>";
              print_r($course);
              echo "</pre>";
            ?>
       ```

      >Thêm vào đầu mảng

       ```sh
            <?php
              $courses  = array("PHP", "Joomla", "Zend", "jQuery" );

              echo "<pre>";
              print_r($course);
              echo "</pre>";

              echo $length  = array_unshift($course,"HTML","CSS");

              echo "<pre>";
              print_r($course);
              echo "</pre>";
            ?>
       ```

       
    **Vấn đề 10: Đảo ngược vị trí các phần tử của mảng?**

      array_reverse($array) đảo ngược vị trí các phần tử của mảng, phần tử cuối trở thành phần tử đầu tiên, phần tử kế cuối trở thành phần tử thứ nhì,... kết quả về là mảng mới.

      >Ví dụ

        ```sh
            <?php
              $courses  = array("PHP", "Joomla", "Zend", "jQuery" );

              echo "<pre>";
              print_r($course);
              echo "</pre>";

              $newArr  = array_revese($course);

              echo "<pre>";
              print_r($newArr);
              echo "</pre>";
            ?>
        ```

    **Vấn đề 11: Hoán đổi chỉ số và giá trị của mảng (đảo $key và $value)?**

      Sử dụng hàm array_flip($array) trả về một mảng có khóa và giá trị được hoán đổi cho nhau so với mảng $array (giá trị thành khóa và khóa thành giá trị)

      >Ví dụ

      ```sh
            <?php
              $courses  = array("PHP", "Joomla", "Zend", "jQuery" );

              echo "<pre>";
              print_r($course);
              echo "</pre>";

              $newArr  = array_flip($course);

              echo "<pre>";
              print_r($newArr);
              echo "</pre>";
            ?>
      ```

    **Vấn đề 12: Xác định tổng, GTLN và GTNN trong mảng?**

      + Tính tổng các phần tử trong mảng array_sum ($array)

      + Xác định phần tử nhỏ nhất trong mảng min($array)

      + Xác định phần tử lớn nhất trong mảng max($array)

      >Ví dụ

      ```sh
            <?php
              $score  = array(2,3,5,1,3,5,7,2);

              $sum = array_sum($score);

              echo "<pre>";
              print_r($score);
              echo "</pre>";

              echo $sum;
            ?>
      ```

    **Vấn đề 13: Thống kê số lần xuất hiện của các phần tử trong mảng?**

      Để thống kê sự xuất hiện của các phần tử trong mảng chúng ta sử dụng hàm array_count_values(array)

      >Ví dụ

      ```sh
            <?php
              $scorce = array(2,3,5,1,3,5,7,2);

              $newArr = array_count_values($score);

              echo "<pre>";
              print_r($score);
              echo "</pre>";

              $newArr  = array_revese($course);

              echo "<pre>";
              print_r($newArr);
              echo "</pre>";
            ?>
      ```












