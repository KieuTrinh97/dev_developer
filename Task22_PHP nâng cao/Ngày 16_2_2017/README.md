##PHP


>Tên tài liệu: PHP Cookbook
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 16/02/2017

##Mục lục:

[CHAPTER 1: Strings](#1)




##Nội dung:

####CHAPTER 1: Strings<a name="1"></a>

>1.1 Accessing Substrings ( Trả về chuỗi con)

**Đặt vấn đề:** Bạn muốn nhận dạng một chuỗi, Ví dụ như địa chỉ email???

**Cách giải quyết:** 

	Sử dụng hàm tìm kiếm chuỗi `strpos()`:

>Ví dụ:

```javascript
	if (strpos($_POST['email'], '@') === false) 
	{
	echo 'There was no @ in the e-mail address!';
	}
```

>Ví dụ tìm thêm:

```javascipt
<?php

	echo strpos('I love You, I love You too !', 'You');

?>
```

 + Các ký tự trong chuỗi cho trước sẽ được đánh số bắt đầu từ 0.
 
 + Hàm `strpos` có giá trị trả về là vị trí mà chuỗi tìm kiếm xuất hiện trong chuỗi $string. Trường hợp không tìm thấy chuỗi tìm kiếm trong chuỗi cho trước thì hàm này trả về giá trị là FALSE.

 + Lưu ý: Nếu chuỗi tiềm kiếm xuất hiện ở vị trí đầu tiên trong $string thì hàm này trả về giá trị là 0 tương tự với FALSE. Do đó khi so sánh kết quả trả về của hàm này chúng ta nên dùng toán tử ===.

>1.2 Extracting Substrings (Trích chuỗi con)

**Đặt vấn đề:** Bạn muốn lấy ra 1 phần của một chuỗi, bắt đầu tại 1 vị trí. Như là muốn lấy ra 8 ký tự đầu tiên của tên người dùng khi họ nhập vào 1 mẫu đăng ký nào đó.

**Cách giải quyết:** 

 Dùng câu lệnh cắt chuỗi `substr()`

>Ví dụ

```javascript
	$substring = substr($string,$start,$length);
	$username = substr($_GET['username'],0,8);
```

>Ví dụ tìm thêm

```javascript
<?php
    $str="Vo Thi Kieu Trinh";
    echo $str."<br/>"; // Hiển thị chuỗi gốc.
    echo substr($str,1)."<br/>"; // Cắt chuối con từ vị trí 1 đến hết chuỗi
    echo substr($str,-6)."<br/>"; //Cắt từ vị trí số 6 đếm từ cuối chuỗi đến hết chuỗi
    echo substr($str,1,9)."<br/>"; // Cắt từ vị trí số 1 đến vị trí số 9
    echo substr($str,2,-10)."<br/>"; //Cắt từ vị trí số 2 đến vị trí số 10 từ cuối chuỗi.
?>
```

>Tham số trong `substr()`

**$star**

 + Nếu $start là một số không âm, chuỗi trả về sẽ bắt đầu từ vị trí thứ $start trong chuỗi, ký tự đầu tiên được tính là vị trí số 0. Ví dụ, trong chuỗi ‘abcdef’, ký tự ở vị trí số 0 là ‘a’, ký tự ở vị trí số 2 là ‘c’.
 
 + Nếu $start là một số âm, chuỗi trả về sẽ bắt đầu từ vị trí thứ $start nhưng tính từ cuối chuỗi trở lại.

 + Nếu độ dài của chuỗi nhỏ hơn giá trị $start, giá trị trả về sẽ là FALSE.

**length**

 + Nếu tham số $length được sử dụng và là một số dương, chuỗi trả về sẽ bao gồm $length ký tự, tính từ vị trí thứ $start (tùy thuộc vào độ dài của chuỗi).

 + Nếu tham số $length được sử dụng và là một số âm, chuỗi trả về được tính từ vị trí $start đến vị trí $length (trong đó vị trí $length được tính từ cuối chuỗi trở lại). Nếu vị trí $start nằm giữa vị trí $length đến cuối chuỗi, giá trị trả về sẽ là FALSE.

 + Nếu tham số $length được sử dụng và là có giá trị là 0, FALSE hoặc NULL, giá trị trả về sẽ là một chuỗi rỗng.

 + Nếu tham số $length không được sử dụng, chuỗi trả về sẽ bắt đầu từ vị trí $start cho đến hết chuỗi.

>Ví dụ tìm thêm

```javascript
<?php
	echo substr('abcdef', 1);     // bcdef
	echo substr('abcdef', 1, 3);  // bcd
	echo substr('abcdef', 0, 4);  // abcd
	echo substr('abcdef', 0, 8);  // abcdef
	echo substr('abcdef', -1, 1); // f
	 
	// Để lấy một ký tự trong chuỗi
	// bạn có thể sử dụng 2 dấu ngoặc nhọn (như mảng)
	$string = 'abcdef';
	echo $string[0];                 // a
	echo $string[3];                 // d
	echo $string[strlen($string)-1]; // f
?>
```

>1.3 Replacing Substrings (Thay thế chuỗi con)

**Đặt vấn đề:** Bạn muốn thay chuỗi này bằng một chuỗi khác.

**Cách giải quyết:** 

Dùng hàm thay thế chuỗi `substr_replace()`

 + Nếu không có chuỗi `$length`, `substr_replace ()` thay thế cho tất cả mọi thứ tự `$start` đến cuối của chuỗi. Nếu `$length` được chọn, có rất nhiều ký tự được thay thế.

>Ví dụ

```javascript
	echo substr_replace('My pet is a blue dog.','fish.',12);//My pet is a fish.
	echo "<br/>";

	echo substr_replace('My pet is a blue dog.','green',12,4);//My pet is a green dog.
	echo "<br/>";

	$credit_card = '4111 1111 1111 1111';

	echo substr_replace($credit_card,'xxxx ',0,strlen($credit_card)-4);//xxxx 111	
```

 + `$start` bị bác bỏ, các chuỗi con mới được đặt bằng cách đếm ký tự từ đầu chuỗi `$start` từ cuối chuỗi `$old_string`.

```javascript
	echo substr_replace('My pet is a blue dog.','fish.',-9);//My pet is a fish.
	echo "<br/>";

	echo substr_replace('My pet is a blue dog.','green',-9,4);//My pet is a green dog.
	
```

 + Nếu `$start` và `$length` bắt đầu từ vị trí 0, các chuỗi con mới được chèn vào đầu chuỗi `$old_string`

```javascript

	echo substr_replace('My pet is a blue dog.','Title: ',0,0);//Title: My pet is a blue dog.

```

 + Các chức năng substr_replace () rất hữu ích khi bạn đã có văn bản đó là quá lớn để hiển thị tất cả cùng một lúc, và bạn muốn hiển thị một số văn bản với một liên kết đến các phần còn lại.

```javascrpit
	$r = mysql_query("SELECT id,message FROM messages WHERE id = $ Id ") orthe();
	$ob = mysql_fetch_object($r);
	echo('<a href="more-text.php?id=%d">%s</a>',$ob->id, substr_replace($ob->message,' ...',25));
```

Ở ví dụ trên, ta có thể sử dụng cách này qua ID tin nhắn, bằng cách truy vẫn chuỗi để nhận thông báo đầy đủ và hiển thị nó.






