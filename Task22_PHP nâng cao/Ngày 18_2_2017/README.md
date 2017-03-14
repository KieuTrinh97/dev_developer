##PHP


>Tên tài liệu: PHP Cookbook
>
>Người thực hiện: Võ Thị Kiều Trinh
>
>Ngày cập nhật: 16/02/2017

##Mục lục:

[CHAPTER 1: Strings](#1)

 + [1.1 Accessing Substrings ( Trả về chuỗi con)](#1.1)

 + [1.2 Extracting Substrings (Trích chuỗi con)](#1.2)

 + [1.3 Replacing Substrings (Thay thế chuỗi con)](#1.3)

 + [1.4 Processing a String One Byte at a Time (Xử lí byte 1 chuỗi tại một thời điểm)](#1.4)

 + [1.5 Reversing a String by Word or Byte (Đảo một chuỗi)](#1.5)

 + [1.6 Generating a Random String ( Tạo chuỗi ngẫu nhiên)](#1.6)

 + [1.7 Expanding and Compressing Tabs (Mở rộng và nén các thẻ)](#1.7)

 + [1.8 Controlling Case (Kiểm tra tình huống)](#1.8)






##Nội dung:

####CHAPTER 1: Strings<a name="1"></a>

>1.1 Accessing Substrings ( Trả về chuỗi con)<a name="1.1"></a>

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

>1.2 Extracting Substrings (Trích chuỗi con)<a name="1.2"></a>

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

>1.3 Replacing Substrings (Thay thế chuỗi con)<a name="1.3"></a>

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

####1.4 Processing a String One Byte at a Time (Xử lí byte 1 chuỗi tại một thời điểm)<a name="1.4"></a>

**Đạt vấn đề:** Bạn mưốn xử lí từng byte trong một chuỗi riêng.

**Cách giải quyết:** Dùng vòng lặp với mỗi byte trong chuỗi với `for`

>Ví dụ

```javascript
	$string = "This weekend, I'm going shopping for a pet chicken.";
	$vowels = 0;for ($i = 0, $j = strlen($string); 
	$i < $j; $i++) 
	{
	  if (strstr('aeiouAEIOU',$string[$i]))  
	    {	$vowels++;
	    }
	}
```

 + Xử lí một chuỗi một ký tự tại một thời điểm là một cách dễ dàng để tính toán theo trình tự "Nhìn và nói ".

>Ví dụ:

```javascript
	function lookandsay($s) 
	{
		// initialize the return value to the empty string    
			$r = '';
		// $m holds the character we're counting, initialize to the first
		// character in the string    
			$m = $s[0];
		// $n is the number of $m's we've seen, initialize to 1    
			$n = 1;
			for ($i = 1, $j = strlen($s); 
			$i < $j; $i++) 
		{
			// if this character is the same as the last one
				if ($s[$i] == $m) 
			{
			// increment the count of this character
				$n++;
			} 
				else 
				{
				// otherwise, add the count and character to the return value
					$r .= $n.$m;
				// set the character we're looking for to the current one
					$m = $s[$i];
				// and reset the count to 1
					$n = 1;
				}
			}
		return $r.$n.$m;
		}
		for ($i = 0, $s = 1; $i < 10; $i++)
		 {   
		 $s = lookandsay($s);print "$s\n";
		 }
```
>Kết quả:
 ```
 1
 11
 21
 1211
 111221
 312211
 13112221
 1113213211
 31131211131221
 13211311123112112211
 ```

 + Nó được gọi là "Hãy nhìn và nói" tự do mỗi phần tử là những gì bạn nhận được bằng cách nhìn vào các phần tử trước đó và nói những gì trong đó. Ví dụ, nhìn vào các yếu tố đầu tiên, 1, bạn nói "một một." Vì vậy, yếu tố thứ hai là "11." Đó là hai người, vì vậy các yếu tố thứ ba "21." Tương tự như vậy, đó là một trong hai và một một, vì vậy các Yếu tố thứ tư là "1211", và tiếp theo.

####1.5 Reversing a String by Word or Byte (Đảo một chuỗi)<a name="1.5"></a>

**Đặt vấn đề:** Bạn mưốn đảo một từ hoặc một byte trong một chuỗi.

**Cách giải quyết:** Dùng hàm `strrev()` để đảo ngược các câu lệnh trong chuỗi.

>Ví dụ

```javascript
	echo strrev('This is not a palindrome.');
``` 

>Kết quả

```
	.emordnilap a ton si sihT
```

 + Để đảo ngược từ, ta cho chuỗi nổ tung bằng cách phân cách các từ bằng ranh giới, rồi đảo ngược các từ lại, sau đó là nối chúng lại.

>Ví dụ

```javascript
	$s = "Once upon a time there was a turtle.";
		// break the string up into words
	$words = explode(' ',$s);
		// reverse the array of words
	$words = array_reverse($words);
		// rebuild the string
	$s = implode(' ',$words);
	echo $s;
```

>Kết quả

```
	turtle. a was there time a upon Once
```

 + Đảo ngược một chuỗi bằng các từ cũng có thể được thực hiện trong một dòng với mã code sau.

>Ví dụ

```javascript
	$reversed_s = implode(' ',array_reverse(explode(' ',$s)));
```

####1.6 Generating a Random String ( Tạo chuỗi ngẫu nhiên)<a name="1.6"></a>

**Đặt vấn đề:** Bạn muốn tạo một chuối ngẫu nhiên.

**Cách giải quyết:** Dùng hàm `str_rand()` để tạo một chuỗi ngẫu nhiên.

>Ví dụ

```javascript
	function str_rand($length = 32,    $characters = ↵'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') 
	{
	if (!is_int($length) || $length < 0) 
	{
	returnfalse;
	}    
		 $characters_length = strlen($characters) - 1;
		 $string = '';
		 for ($i = $length; $i > 0; $i--) 
		{
		 $string .= $characters[mt_rand(0, $characters_length)];
		}
			return $string;
		}

```

 + PHP có chức năng tự nhiên để tạo ra các số ngẫu nhiên, nhưng không có gì cho các chuỗi ngẫu nhiên. Các str_rand () trả về một chuỗi 32 ký tự được xây dựng từ con số cát thư. Truyền vào một số nguyên để thay đổi độ dài của chuỗi trả lại. Để sử dụng một bộ thay thế các ký tự, vượt qua chúng như là một chuỗi như là đối số thứ hai. Ví dụ, để có được 16 chữ số mã Morse.

>Ví dụ

```javascript
	echo str_rand(16, '.-');
```

>Kết quả

```
	.--..-.-.--.----
```

####1.7 Expanding and Compressing Tabs (Mở rộng và nén các thẻ)<a name="1.7"></a>

**Đặt vấn đề:** Bạn muốn thay đổi không gian để các thẻ (hoặc thẻ để dấu cách) trong một chuỗi trong khi vẫn giữ văn bản liên kết với các thẻ đóng. Ví dụ, bạn muốn hiển thị văn bản định dạng để sử dụng trong một cách chính xác nhất.

**Cách giải quyết:** Dùng hàm `str_replace()` để chuyển các các thẻ trống.

>Ví dụ

```javascript
	$rows = $db->query('SELECT message FROM messages WHERE id = 1');
	$obj = $rows->fetch(PDO::FETCH_OBJ);

	$tabbed = str_replace(' ' , "\t", $obj->message);
	$spaced = str_replace("\t", ' ' , $obj->message);

	echo "With Tabs: <pre>$tabbed</pre>";
	echo "With Spaces: <pre>$spaced</pre>";
```

####1.8 Controlling Case (Kiểm tra tình huống)<a name="1.8"></a>

**Đặt vấn đề:** Bạn cần phải tận dụng, chữ thường, hoặc nếu không sửa đổi các trường hợp ký tự trong một chuỗi. Ví dụ, bạn muốn tận dụng các chữ cái đầu tiên của tên nhưng trường hợp giảm phần còn lại.

**Cách giải quyết:** 

 + Dùng hàm ucfirst() và ucwords() để hoa chữ đầu tiên của một hoặc nhiều từ.

 + Hàm ucfirst(): Chuyển đổi ký tự đầu tiên của chuỗi thành ký tự hoa.

>Ví dụ

```javascript
	$nam = "nam";
	echo ucfirst($nam); //kết quả: Nam
```
 + Hàm ucwords(): Chuyển đổi các từ trong chuổi, mỗi từ chữ cái đầu tiên thành chữ hoa như: My Name is Trinh.

>Ví dụ

```javascript
	$trinh = "my name is trinh";
	echo ucwords($trinh); //kết quả: My Name Is Trinh
```

>Ví dụ

```javascript
	echo ucfirst("how do you do today?");//How do you do today?
	echo ucwords("the prince of wales");//The Prince Of Wales
```

 + Sử dụng Hàm `strtolower ()` hoặc `strtoupper ()` để sửa đổi các trường hợp toàn bộ chuỗi.

>Ví dụ:

```javascript
	echo strtoupper("i'm not yelling!");//I'M NOT YELLING! 
	echo strtolower('<A HREF="one.php">one</A>');//<a href="one.php">one</a>
```

 + Sử dụng ucfirst () để tận dụng các ký tự đầu tiên trong một chuỗi.

>Ví dụ

```javascript
	echo ucfirst('monkey face');//Monkey face
	echo ucfirst('1 monkey face');//1 monkey face
```

 + Sử dụng ucwords () để in hoa các ký tự đầu tiên của mỗi từ trong một chuỗi.

>Ví dụ

```javascript
	echo ucwords('1 monkey face');//1 Monkey Face
	echo ucwords("don't play zone defense against the philadelphia 76-ers");//Don't Play Zone Defense Against The Philadelphia 76-ers.
```

 + Theo dự kiến, `ucwords()` không hoa "t" trong "don't." Nhưng nó cũng không hoa "e" trong "76-ers." Đối với `ucwords()`, một từ mà bất kỳ chuỗi ký tự khoảng trắng không mà sau một hoặc nhiều ký tự khoảng trắng. Bởi vì cả hai `'`và `-` không phải là ký tự khoảng trắng, `ucwords()` không xem xét "t" trong "don't." hay "e" trong "76-ers" là các ký tự đầu.

 + Cả hai `ucfirst()` và `ucwords()` không in hoa các chữ cái đầu tiên.

>Ví dụ 

```javascript
	echo ucfirst('macWorld says I should get an iBook');//MacWorld says I should get an iBook
	echo ucwords('eTunaFish.com might buy itunaFish.Com!');//ETunaFish.com Might Buy ItunaFish.Com!
```

 + chức năng của hàm `strtolower()` và `strtoupper()` làm việc trên cả chuỗi, không chỉ ký tự Indi-vidual. Tất cả các ký tự chữ cái được thay đổi thành chữ thường bởi `strtolower()` và `strtoupper()` thay đổi tất cả các ký tự chữ sang chữ hoa.

 + Chức năng hàm `strtolower()` và `strtoupper()` làm việc trên cả chuỗi, không chỉ ký tự Indi-vidual. Tất cả các ký tự chữ cái được thay đổi thành chữ thường bởi `strtolower()` và `strtoupper()` thay đổi tất cả các ký tự chữ sang chữ hoa.

>Ví dụ

```javascript
	echo strtolower("I programmed the WOPR and the TRS-80.");//i programmed the wopr and the trs-80.
	echo strtoupper('"since feeling is first" is a poem by e. e. cummings.');//"SINCE FEELING IS FIRST" IS A POEM BY E. E. CUMMINGS.
```











