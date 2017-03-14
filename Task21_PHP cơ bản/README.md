##PHP cơ bản


>Tên tài liệu: PHP cơ bản
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 7/2/2017

##Mục lục:

[1.PHP là gì?](#1)

[2.Chương trình Hello World](#2)

[3.Biến và chú thích.](#3)

[4.Định dạng code.](#4)

[5.Sử dụng echo, print.](#5)

[6.Biểu thức nối chuỗi.](#6)

[7.Nhúng code Php vào trang HTML](#7)

[8.Biểu thức điều kiện if else](#8) 

[9.Biểu thức gán](#9)

[10.Biểu thức toán học](#10)

[11.Toán tử tăng và giảm](#11)

[12.Biểu thức so sánh](#12)

[13.Biểu thức quan hệ (logic)](#13)

[14.Hàm die và exit](#14)

[15.Vòng lặp do while](#15)

[16.Vòng lặp while](#16)

[17.Vòng lặp for](#17)

[18.Break and contine](#18)

[19.Cấu trúc rẽ nhánh switch](#19)

[20.Expression matching](#20)

[21.Hàm (function)](#21)

[22.Hàm với tham số](#22)

[23.Hàm với giá trị trả về](#23)

[24.Biến toàn cục và biến cục bộ](#24)




##Nội dung:

####1.PHP là gì?<a name="1"></a>

 + PHP là ngôn ngữ lập trình kịch bản viết cho máy chủ mà được nhúng trong HTML. Nó được sử dụng để quản lý nội dụng động, Database, Session tracking, …

 + Cú pháp PHP là giống C.

####2.Chương trình Hello World<a name="2"></a>

>**"Hello World" trong PHP**

```javascript 
<?php 
echo "Hello World!";
?>   
```

####3.Biến và chú thích<a name="3"></a>

>Cách command 1: (Command 1 dòng)

```javascript
<?php
   //Day la bien variable
   #Day la bien variable
   $variable=" My Name";
?>
```

>Cách command 2: (Command nhiều dòng)

```javascript
<?php
 /*
 This is a multiphe line comment
 first line
 second line
 third line
 .....
 */
```
>Câu lệnh kết thúc bằng dấu `;`

```javascript
<?php
   $var = 1;
   $myName = "hbsdjkhcb";

   echo $myName
?>
```
**Note**: Không phải câu lệnh nào cũng kết thúc bằng dấu `;` như câu lệnh `if`.

>Dấu `$`

Dấu `$` bắt buộc khi khai báo một biến trong PHP. Nếu không có thì nó không hiểu đây là một biến và nó sẽ báo lỗi.

>Biến

 + Giá trị của một biến là giá trị của phép gán gần đây nhất của nó.

 + Các biến được gán với toán tử =, biến ở bên trái còn biểu thức được ước lượng ở bên phải.

 + Biến có thể, nhưng không cần, được khai báo trước khi gán giá trị.

 + Biến trong PHP không có các kiểu nội tại, tức là một biến không biết trước có hay không nó sẽ được sử dụng để lưu trữ một số hoặc một chuỗi ký tự.

 + Biến, được sử dụng trước khi chúng được gán, có các giá trị mặc định.

 + PHP làm rất tốt việc chuyển đổi tự động từ kiểu này sang kiểu khác khi cần thiết.

Khi muốn in ra màn hình một giá trị, thì dùng câu lệnh `echo $ten_bien`.

####4.Định dạng code<a name="4"></a>

**Đoạn code thế nào là đoạn code chuẩn và định dạng đẹp mắt??**
 
 + Mỗi câu lệnh nằm trên một dòng, vào trong lề trái 1 tab so với the đóng và thẻ mở.

 + Đặt dấu cách dòng sao cho hợp lí, hoặc thêm command, lưu ý không nên thêm quá nhiều dấu cách.

 + Trong một câu lệnh thì phần bên trong cho 1 tab.

>Ví dụ:

```javascript
<?php
	//echo phpinfo()
	$a = 10;
	$b = 5;
	$c = $a;

	//kiem tra bien a
	if ($a == 5)
	{
		echo "Correct!".'<br/>';	
	}
	else
	{
		echo "Oops!!!!".'<br/>';
		if ($b <= 2)
		{
			echo 'Yeah!'."<br/>";
		}
		else
		{
			echo 'Aaaaaa!'."<br/>";
		}
	}

	//aaaaaaaa
	echo "JD";
?>
```

####5.Sử dụng echo, print<a name="5"></a>

 + `echo` còn được gọi là hàm, có người gọi là dòng xuất - có thể xuất ra một hoặc nhiều chuỗi.

>Ví dụ

```javascript
<?php
	//echo phpinfo()
	$a = 10;
	$b = 5;
	$c = $a;

	//kiem tra bien a
	if ($a == 5)
	{
		echo "Correct!".'<br/>';	
	}
	else
	{
		echo "Oops!!!!".'<br/>';
		if ($b <= 2)
		{
			echo 'Yeah!'."<br/>";
		}
		else
		{
			echo 'Aaaaaa!'."<br/>";
		}
	}

	//aaaaaaaa
	echo "JD";
```

>Ví dụ tìm thêm:

```javasript
<?php
	$txt1="Learn PHP";
	$txt2="W3Schools.com";
	$cars=array("Volvo","BMW","Toyota");

	echo $txt1;
	echo "<br>";
	echo "Study PHP at $txt2";
	echo "My car is a {$cars[0]}";
?>
```

 + `print` không khác `echo` mấy, nhưng dùng `echo` tiện hơn - có thể chỉ xuất ra một chuỗi , và luôn trả về 1.

>Ví dụ

```javascript
<?php
	//echo phpinfo()
	$a = 10;
	$b = 5;
	$c = $a;

	//kiem tra bien a
	if ($a == 5)
	{
		echo "Correct!".'<br/>';	
	}
	else
	{
		echo "Oops!!!!".'<br/>';
		if ($b <= 2)
		{
			echo 'Yeah!'."<br/>";
		}
		else
		{
			print 'Aaaaaa!'."<br/>";
		}
	}

	//aaaaaaaa
	echo "JD";
```

>Ví dụ tìm thêm:

```javascript
<?php
	$txt1="Learn PHP";
	$txt2="W3Schools.com";
	$cars=array("Volvo","BMW","Toyota");

	print $txt1;
	print "<br>";
	print "Study PHP at $txt2";
	print "My car is a {$cars[0]}";
?>
```

**`echo` và `print` mã html**

 + Code php được nhúng trực tiếp vào html, đặt code php ở bất cứ vị trí nào của trang đó, có thể đặt trên đầu, giữa thẻ body hoặc sau thẻ html đều được.

>Ví dụ

```javascript
<?php

?>

<!doctype html>
<html>
	<head>
		<title>PHP basic</title>
	</head>
	<body>
		<p>This is <strong>bold</strong> text, <em>italic</em> text and some span tag in<span> id= "spanTag">here</span>.</p>
	</body>
</html>
```

`Thay đổi đoạn code một chút nhé`

```javascript
<!doctype html>
<html>
	<head>
		<title>PHP basic</title>
	</head>
	<body>
		<?php
			$name = "JD";
			echo	'<p>This is <strong>bold</strong> text, <em>italic</em> text and '.$name.' some span tag in<span> id= "spanTag">here</span>.</p>';
		?>
	</body>
</html>
```
>Thêm một ví dụ nữa nhé

```javascript
<!doctype html>
<html>
	<head>
		<title>PHP basic</title>
		<style>
			#str { color: red; }
		</style>
	</head>
	<body>
		<?php
			$dayOfWeek = 2;

			if ($dayOfWeek == 2)
			{
				echo 'strong id="str'.$dayOfWeek.'</strong>';
			}
			else
			{
				echo 'Nothing in here!';
			}
		?>
	</body>
</html>
```

>Ví dụ tìm thêm

```javasript
<?php
	echo "<h2>PHP is fun!</h2>";
	echo "Hello world!<br>";
	echo "I'm about to learn PHP!<br>";
	echo "This", " string", " was", " made", " with multiple parameters.";
?>
```

####6.Biểu thức nối chuỗi.<a name="6"></a>

`str` là tên đối số nhận vào.

** Các quy tắc nối chuỗi**
 + Nếu chuỗi được đặt trong dấu nháy kép "" thì các ký tự nháy kép " bên trong chuỗi phải thêm dấu gạch chéo đằng trước nó.

 + Nếu chuối được đặt trong dấu nháy kép thì trong chuỗi ta có thể truyền biến vào mà không cần dùng phép nối chuỗi.

 + Nếu chuỗi được đặt trong dấu nháy đơn '' thì các ký tự nháy đơn ' bên trong chuỗi phải thêm dấu gạch chéo đằng trước nó.

>Ví dụ:

```javascript
<?php
	$str = "32 Street, Washin gton DC";
	$str2 = "USA";

	//Bieu thuc noi chuoi dang dau cham
	echo $str.$str2;

	//Bieu thuc noi chuoi dang dau phay
	echo $str,$str2;
?>
```

>Ví dụ tìm thêm

```javascript
<?php
	$str = "đang ăn tối";
	echo "Nam nói\"Cậu ấy $str\" ";
?>
```

####7.Nhúng code Php vào trang HTML<a name="7"></a>

```javascript
<?php
	//khoi tao gia tri bien, mang, ket noi, ...
	$name = "JD";
	$age = 22;

	//xu ly ...
	$name .=" is the nothing in here";
?>
<!doctype html>
<html>
	<head>
		<title>PHP basic</title>
	</head>
	<body>
			<?php
				//dua ra ket qua + html format
				echo "My name: ".$name."<br/>";
				ec ho "Age: ".$age."<br/>";
			?>
	</body>
</html>
<?php
	//huy gia tri bien, mang, ket noi 
	//closeConnection();
?>
```

>Ví dụ tìm thêm

```javascript
<!doctype html>
<html>
	<head>
		<title>Bài 5 - Nhúng mã PHP trong HTML</title>
	</head>
	<body>
		<?php
		    /*
		        In ra một chuỗi
		        các ký tự
		    */
		    echo "Đây là một chuỗi";
		     
		    //In ra một số
		    echo 123;
		?>
	</body>
</html>
```

####8.Biểu thức điều kiện if else<a name="8"></a>

**Lệnh if** dùng để kiểm tra một điều kiện có đúng hay không? Giả sử trường hợp ngược lại điều kiện không đúng thì sẽ thực hiện điều gì ? để giải đáp câu hỏi này ta sẽ nghiên cứu đến **lệnh if else trong php**

```javascript
	if ($bieuthuc){
	    // Những Câu Lệnh 1;
	}
	else{
	    // Những câu lệnh 2;
	}
```

**Câu lệnh điều kiện if else** cho phép ta thay đổi luồng của chương trình dựa trên một điều kiện nào đó. Nếu điều kiện là đúng (true) thì chương trình sẽ được thực hiện, ngược lại nếu điều kiện đưa ra là sai (false) thì nội dung công việc đó sẽ không được thực hiện.

```javascript
<?php
	$dayOfWeek = 2;
	$dayOfWeek = 3;

	if ($dayOfWeek == 3)
	{
		echo 'Two';
		echo 'Three';
	}
	else
	{
		echo "Oops";

		if ($weekOfMonth == 3)
		{
			echo "True";
		}
		else
		{
			echo "False";
		}

	}
?>
```

>Ví du tìm thêm

```javascript
<?php	
	$so_can_kiem_tra = 12;
	$so_du = $so_can_kiem_tra % 2;
	if ($so_du == 0){
	     echo 'Số '.$so_can_kiem_tra.' Là Số Chẵn';
?>
```

Trong thực tế không phải lúc nào cũng chỉ có 2 điều kiện mà sẽ có hàng chục điều kiện khác nhau, lúc này ta phải kết hợp nhuần nhuyễn giữa 2 lệnh **if và else** để xử lý.

```javascript
<?php
	$dayOfWeek =2;

	if ($dayOfWeek == 2)
	{
		echo "Monday";
	}
	else if ($dayOfWeek == 3)
	{
		echo 'Tuesday';
	}
	else if ($dayOfWeek == 4)
	{
		echo 'Wednesday';
	}
	else if ($dayOfWeek == 5)
	{
		echo 'Thursday';
	}
	else if ($dayOfWeek == 6)
	{
		echo 'Friday';
	}
	else if ($dayOfWeek == 7)
	{
		echo 'Saturday';
	}
	else if ($dayOfWeek == 8)
	{
		echo 'Sunday';
	}
	else
	{
		echo 'Sory, plese try again!!!';
	}
?>
```

####9.Biểu thức gán<a name="9"></a>

**Toán tử gán**: Đây là toán tử thông dụng nhất trong mọi ngôn ngữ, ta dùng dấu = để gán giá trị cho một biến bất kỳ nào đó. Nhiều biến có thể được gán cùng một giá trị qua một câu lệnh đơn gọi là gán liên tiếp.

```javascript
<?php
	$x = 15;
	$y = 7;

	$z = $x + $y; //22
	echo $z.'<br/>';
	$z += $y; //$z=$z + $y 29
	echo $z.'<br/>';
	$z -= $x; //14
	echo $z.'<br/>';
	$z *= ($x + $y);// 14 * 22= 308
	echo $z.'<br/>';
	$z /= ($x - $y);//308 / -8 = -38.5
	echo $z.'<br/>';
	$z %= ($x % $y);//-38.5 % 1 = 0
	echo $z.'<br/>';
?>
```

>Ví dụ tìm thêm

```javascript
<?php
$a=5;
switch ($a) {
    case '2':
    echo "Hom nay la thu 2";
    break;
    case '3':
    echo "Hom nay la thu 3";
    break;
    case '4':
    echo "Hom nay la thu 4";
    break;  
    case '5':
    echo "Hom nay la thu 5";
    break;
    case '6':
    echo "Hom nay la thu 6";
    break;  
    case '7':
    echo "Hom nay la thu 7";
    break;                      
    default:
    echo "Hom nay la chu nhat";
    break;
}
?>
```

####10.Biểu thức toán học<a name="10"></a>

```javascript
<?php
	$i = 5;
	$j = 10;

	$x = $i + $j;
	$y = $j - $i;
	$k = $i * $j;
	$z = $j / $i;
	$u = $j % $i;

	echo $x,',',$y,',',$k,',',$z,',',$u;
?>
```

```javascript
<?php
	$x = 10;
	echo $x.'<br/>';

	$x++; //$x = $x + 1, $x += 1 => 11
	echo $x.'<br/>';
?>
```

####11.Toán tử tăng và giảm (increment and decrement operator)<a name="11"></a>

 + Toán tử tăng (++) cộng toán hạng thêm một đơn vị, và toán tử giảm (--) trừ một đơn vị từ toán hạng. 

 ![text](http://i.imgur.com/tzkZ6W0.png)

 + Khi một toán tử tăng hay toán tử giảm được sử dụng như là một phần của biểu thức, thì sẽ có một sự khác nhau quan trọng giữa dạng tiền tố và hậu tố. Nếu bạn sử dụng dạng tiền tố thì toán tử tăng hoặc toán tử giảm được thực hiện trước biểu thức, và nếu bạn sử dụng dạng hậu tố thì toán tử tăng hoặc toán tử giảm được thực hiện sau khi biểu thức được ước lượng.

```javascript
<?php
	$x = 10;
	echo $x.'<br/>';

	$x++; //$x = $x + 1, $x +=1
	echo $x.'<br/>';

	$y = ++$x; //x = 12 -> y = x =12
	$z = $x++; //z = x = 12, x = 13
	echo $x.','.$y.','.$z.'<br/>';
	echo $x++.'<br/>'; //x = 13 (thuc chat x = 14)
	echo $x; // 14

	$a = 10;
	$b = --$a; //a = 9, b = a = 9
	$c = $a--; // c = a = 9, a = 8
	$d = $a-- - --$b + $c--;// d = 8-8+9 = 9
	echo $a.','.$b.','.$c.','.$d.'<br/>';//7,8,8,9
	echo $a--.'<br/>';//7 ( thuc chat a = 6)
	echo $a; //6
?>
```

####12.Biểu thức so sánh<a name="12"></a>

 + Là toán tử được sử dụng để thực hiện các phép toán so sánh giữa hai số hạng. Chi tiết, xem bảng bên dưới.

 ![text](http://i.imgur.com/s7QUkpc.png)

```javascript
<?php
	$a = 10;
	$b = 20;

	$x = true;
	$y = false;

	if ($a == $b)
	{
		echo 'a = b<br/>';
	}
	else
	{
		if ($a > $b)
		echo 'a > b<br/>';
        else echo 'a < b<br/>';
	}

	if ( $a >= $b ) echo "a >= b<br/>";
	else echo " a < b<br/>";

	if ( $x) echo "x is True<br/>";
	else echo "x is False<br/>";

	if ( !$y) echo "y is False<br/>";
	else echo "y is True<br/>";

	if ( $a) echo "a != 0<br/>";
	else echo " a = 0<br/>";

	if ( $a != $b ) echo "a != b";
	else echo " a == b<br/>";
?>
```
**Biểu thức so sánh ===**

```javascript
<?php
	$a = 10;
	$b = '10';
	$c = 10;

	$x = true;
	$y = 'true';
	$z = true;

	// == and !=
	if ($x == $y) echo 'x == y<br/>';
	else echo 'x != y <br/>';

	// === and !==
	if ($a === $b) e cho 'a === b<br/>';
	else echo 'a !== b<br/>';

	if ($x !== $x) echo 'x === z<br/>';
	if ($a !== $c) echo 'a === c<br/>';
?>
```

####13.Biểu thức quan hệ (logic)<a name="13"></a>

 + Các phép toán logic như so sánh bằng, lớn hơn hoặc nhỏ hơn

![text](http://i.imgur.com/6LVq7Jo.png)

```javascript
<?php
	$a = 10;
	$b = 20;

	$x = true;
	$y = false;
	
	// o or 1 -> 1
	if ($a == $b || $x)
	{
		echo 'a = b or x is True<br/>';
	}

	//1 and 1 -> 1
	if ($a >= 5 && !$y)
	{
		echo 'a >= 5 and y is false<br/>';
	}

	//1 XOR 1 ->
	if ($a xor !$x)
	{
		echo 'True';
	}

?>
```

####14.Hàm die và exit<a name="14"></a>

 + Định nghĩa: cả hai hàm này đều dùng để dừng hệ thống lại không dịch nội dung PHP nữa và sẽ trả về thông báo.

```javascript
<?php
	
	$a = 10;

	echo 'a = '.$a.'<br/>';
	die();
	$b = $a;
	echo 'b = a = '.$b.'<br/>';
?>
```

####15.Vòng lặp do while<a name="15"></a>

 + Vòng lặp while sẽ kiểm tra điều kiện trước rồi thực hiện câu lệnh bên trong vòng lặp, còn vòng lặp do while thì ngược lại sẽ thực hiện câu lệnh bên trong vòng lặp trước rồi mới kiểm tra điều kiện. Nếu điều kiện đúng thì sẽ thực hiện tiếp vòng lặp kế tiếp, nếu điều kiện sai thì sẽ dừng vòng lặp. Vòng lặp do while trong php luôn luôn thực hiện ít nhất một lần lặp vì nó thực hiện trước rồi mới kiểm tra điều kiện.

 + Note: Cũng như lưu ý ở vòng lặp while, vòng lặp do while trong php rất dễ bị lặp vô hạn, vì thế hãy cẩn thận khi sử dụng nó.

```javascript
<?php
	
	$so_qua_tao = 10;

	do
	{
		ec ho 'Toi da ăn mot qua tao va con lai'.
		$so_qua_tao.'<br/>';
		$so_qua_tao--;	
	}
	while ($so_qua_tao > 0);

	$so_qua_tao = 0;
	do
	{
		echo 'Hien tai toi dang co'.$so_qua_tao.'qua tao<br/>';
		$so_qua_tao++;
	}
	while ($so_qua_tao < 10);
?>
```

####16.Vòng lặp while<a name="16"></a>

 + Để giải bài toán này ta có thể dùng vòng lặp for trong php để giải một cách dễ dàng. While kiểm tra điều kiện trước rồi mới thực hiện câ lệnh trong vòng lặp.


```javascript
<?php
	
	$so_qua_tao = 10;

	while ($so_qua_tao > 20)
	{
		$so_qua_tao--;
		echo 'Toi da an mot qua tao va con lai'.$so_qua_tao.'<br/>';
	}

	$so_qua_tao = 0;
	while ($so_qua_tao < 10)
	{
		echo 'Hien tai toi dang co'.$so_qua_tao.'qua tao<br/>';
		$so_qua_tao++;
	}
?>
```

####17.Vòng lặp for<a name="17"></a>

 + Vòng lặp for được sử dụng khi biết được số lần lặp của một công việc nào đó.
 + Trong đó:
	- Giá trị bắt đầu biến đếm: Giá trị khởi động của vòng lặp
	- Biểu thức điều kiện: Là điều kiện để thực hiện vòng lặp
	- Cập nhật biến đếm: Thay đổi biến đếm sau mỗi vòng lặp

```javascript
<?php
	
	$so_qua_tao = 10;

	for ($i = 0; $i < $so_qua_tao; $i+=2)
	{
		echo 'Hien tai toi dang co'.$i.'qua tao<br/>';
	}

	for ($i = $so_qua_tao; $i >= 0; $i--)
	{
		if ($i == 0)
			echo 'Toi het mat tao roi!!! huhu<br/>';
		else
		{
			echo 'So qua tao toi dang co'.$i.'qua tao<br/>';
		}
	}
?>
```

####18.Break and contine<a name="18"></a>

 + Lệnh break thường được dùng để thoát khỏi vòng lặp cho dù vòng lặp vẫn chưa kết thúc.

 +  lệnh continue sẽ bỏ qua những đoạn code bên dưới nó và nhảy qua vòng lặp kế tiếp (không thoát hẳn vòng lặp như lệnh break).

```javascript
<?php
	
	$a = 10;
	$b = 4;

	do
	{
		$a--;
		if ($a == $b) continue;
		echo $a.'<br/>';
	}
	while ($a > 0);
?>
```

####19.Cấu trúc rẽ nhánh switch<a name="19"></a>

 + Nguyên tắc hoạt động của cấu trúc switch trong PHP giống như trong C/C++. Về mặt cú pháp thì cấu trúc switch có hai cách trình bày, có thể dùng toán tử “{” và “}” hoặc có thể dùng toán tử “:” và “endswitch” cho khối lệnh của switch.

 + Khi câu lệnh trong mỗi case được thực hiên xong, lệnh break giúp thoát switch case. Điều này giúp các câu lệnh của các case bên dưới không được thực hiện.

>Ví dụ:

```javascript
<?php
	
	$dayOfWeek = 4;

	if ($dayOfWeek == 2) echo 'Monday<br/>';
	else if ($dayOfWeek == 3) echo 'Tuesday<br/>';
	else if ($dayOfWeek == 4) echo 'Wednesday<br/>';
	else if ($dayOfWeek == 3) echo 'Thursday<br/>';
	else if ($dayOfWeek == 3) echo 'Friday<br/>';
	else if ($dayOfWeek == 3) echo 'Saturday<br/>';
	else if ($dayOfWeek == 3) echo 'Sunday<br/>';
	else echo 'Sorry. Not a day of week!<br/>';

	switch ($dayOfWeek)
	{
		case 2:
			echo 'Monday<br/>';
			break;
	    case '3':
		    echo "Tuesday<br/>";
		    break;
	    case '4':
		    echo "Wednesday<br/>";
		    break;  
	    case '5':
		    echo "Thursday<br/>";
		    break;
	    case '6':
		    echo "Friday<br/>";
		    break;  
	    case '7':
		    echo "Saturday<br/>";
		    break; 
		case '8':
			echo "Sunday<br/>";
			break;                     
	    default:
	    echo "Sory, Not a day of week<br/>";
	    break;
	}
?>
```
####20.Expression matching<a name="20"></a>

 + Đây là chủ đề khá mới, Expression matching tức là kiểm tra tính hợp lạ của dữ liệu.

![text](http://i.imgur.com/UUD4AXz.png)

```javascript
<?php
	
	$str = "I want to sing a song";

	if (preg_match('/[0-9]/',$str))
	{
		echo 'Found it';
	}
	else
	{
		echo 'Not found';
	}
?>
```

####21.Hàm (function)<a name="21"></a>

 + Hàm trong PHP dùng để thực hiện một khối lệnh liên tiếp có điểm đầu và điểm cuối. Một hàm được xác định thực hiện một công việc cụ thể nào đó, giả sử tôi viết một hàm kiểm tra số chẵn hay số lẻ thì mục đích của hàm đó là kiểm tra một số là số chẵn hay lẻ. Điều đặc biệt hàm có thể gọi ở nhiều nơi, nhiều chương trình khác nhau.

```javascript
<?php
	
	function hello_world()
	{
		echo 'Hello world!';
		echo '.I\'m a learner.'
	}

	function sample()
	{
		for ($i = 0; $i < 100; $i++)
		{
			echo 'This is the'.$i.'<br/>'
		}
	}

	hello_world();
	hello_world();
	hello_world();
	hello_world();
	hello_world();

?>
```

####22. Hàm với tham số<a name="22"></a>

```javascript
<?php
	
	function detectDayOfWeek($dOW)
	{
	   switch ($dOW)
	 {
		case 2:
			echo 'Monday<br/>';
			break;
	    case '3':
		    echo "Tuesday<br/>";
		    break;
	    case '4':
		    echo "Wednesday<br/>";
		    break;  
	    case '5':
		    echo "Thursday<br/>";
		    break;
	    case '6':
		    echo "Friday<br/>";
		    break;  
	    case '7':
		    echo "Saturday<br/>";
		    break; 
		case '8':
			echo "Sunday<br/>";
			break;                     
	    default:
	    echo "Sory, Not a day of week<br/>";
	    break;
	  }
    }

    $dayOfWeek = 2;
    detectDayOfWeek($dayOfWeek);
    detectDayOfWeek(8);
    detectDayOfWeek(15);
?>
```

####.23.Hàm với giá trị trả về<a name="23"></a>

 ```javascript
 <?php

 	function add($a,$b);
 	{
 		$c = $a + $b;
 		return $c;
 	}

 	function concatStr($str1, $str2)
 	{
 		$str = $str1.$str2;
 		return $str;
 	}

 	$d = add(5,8);
 	echo $d;

 	$s = concatStr(" I'm a leaner"."I'm programer");
 	echo $s;
 ?>
 ```

####24.Biến toàn cục và biến cục bộ<a name="24"></a>

 + Một biến toàn cục có thể được truy cập trong bất kỳ phần chương trình nào. Tuy nhiên, để được chỉnh sửa, một biến toàn cục phải được khai báo một cách tường minh là GLOBAL trong hàm mà nó chuẩn bị được sửa đổi. Điều này được thực hiện bằng việc đặt từ khóa GLOBAL ở trước biến mà nên được xác định là toàn cục. Việc đặt từ khóa này ở trước biến đang tồn tại nói cho PHP sử dụng biến có tên như thế.

 + Một biến được khai báo trong một hàm được xem như là cục bộ; nghĩa là, nó có thể được tham chiếu chỉ bởi hàm đó. Bất kỳ phép gán nào bên ngoài hàm này sẽ được xem như là một biến hoàn toàn khác với biến được chứa trong hàm đó.
 
```javascript
<?php
	
	$a = 5;
	$b = 10;
	$c = 12;

	function something()
	{
		global $a, $b; //$a_temp = $GLOBALS['a'];
		echoi 'a = '.$a.',b = '.$b.'<br/>';
	}
     //echo $a_temp;
	something();
?>
```



































