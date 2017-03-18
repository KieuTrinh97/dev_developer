#PHP


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

 + [1.9 Interpolating Functions and Expressions WithinStrings](#1.9)

 + [1.10 Trimming Blanks from a String(Cắt bỏ khoản trắng)](#1.10)

 + [1.11 Generating Comma-Separated Data](#1.11)

 + [1.12 Parsing Comma-Separated Data](#1.12)

 + [1.13 Generating Fixed-Width Field Data Records](#1.13)

 + [1.14 Parsing Fixed-Width Field Data Records](#1.14)

 + [1.15 Taking Strings Apart(Lấy chuỗi ngoài)](#1.15)

 + [1.16 Wrapping Text at a Certain Line Length](#1.16)

 + [1.17 Storing Binary Data in Strings](#1.17)

 + [1.18 Program: Downloadable CSV File](#1.18)



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
		 $s = lookandsay($s);echo "$s\n";
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

####1.9 Interpolating Functions and Expressions WithinStrings<a name="1.9"></a>

**Đặt vấn đề:** Bạn muốn bao gồm các kết quả của việc thực hiện một chức năng hoặc biểu hiện trong một chuỗi.

**Cách giải quyết:** Sử dụng toán tử nối chuỗi `operator()`,khi giá trị mà bạn muốn bao gồm không thể được nằm trong chuỗi.

>Ví dụ

```javascript
	echo 'You have '.($_POST['boys'] + $_POST['girls']).' children.';
	echo "The word '$word' is ".strlen($word).' characters long.';
	echo 'You owe '.$amounts['payment'].' immediately.';
	echo "My circle's diameter is ".$circle->getDiameter().' inches.';
```

 + Bạn có thể đặt các biến, thuộc tính đối tượng, và các phần tử mảng (nếu subscript là không thể viện chứng) trực tiếp trong chuỗi dấu ngoặc kép.

>Ví dụ

```javascript
	echo "I have $children children.";
	echo "You owe $amounts[payment] immediately.";
	echo "My circle's diameter is $circle->diameter inches.";
```

####1.10 Trimming Blanks from a String(Cắt bỏ khoản trắng)<a name="1.10"></a>

**Đặt vấn đề:** Bạn muốn loại bỏ khoảng trắng từ đầu hoặc cuối của một chuỗi. Ví dụ, bạn muốn dọn dẹp người dùng trước khi xác nhận nó.

**Cách giải quyết:** Sử dụng các hàm: `ltrim(), rtrim(), or trim()`.Hàm `ltrim ()` chức năng loại bỏ khoảng trắng từ đầu của một chuỗi, `rtrim ()` từ cuối của một chuỗi, và `trim ()` từ cả hai đầu và kết thúc của một chuỗi.

>Ví dụ

```javascript
	$zipcode = trim($_GET['zipcode']);
	$no_linefeed = rtrim($_GET['text']);
	$name = ltrim($_GET['name']);
```

 + Đối với các chức năng này, khoảng trắng được định nghĩa là các ký tự sau: xuống dòng, trở về, cách, tab , và trống.

 + Cắt khoảng trắng ra khỏi dây tiết kiệm không gian lưu trữ và có thể làm cho precisedisplay hơn các dữ liệu định dạng hoặc văn bản trong thẻ `<pre>`. 

 + Nếu bạn đang làm việc so sánh với người sử dụng, bạn nên cắt các dữ liệu đầu tiên, người khác hiểu sai 98.052 theo dõi là một vài không gian như mã zip của họ không bắt buộc phải sửa chữa một lỗi. Cắt trước khi so sánh văn bản chính xác cũng đảm bảo rằng, ví dụ, "salami \n" bằng "salami". Nó cũng là một ý tưởng tốt để chuẩn hóa dữ liệu chuỗi bằng cách cắt tỉa trước khi lưu trữ nó trong một cơ sở dữ liệu.

>Ví dụ

```javascript
		// Hủy bỏ các chữ số và không gian từ đầu dòng
	echo ltrim('10 echo A$',' 0..9');
		// Hủy bỏ dấu chấm phẩy từ cuối dòng
	echo rtrim('SELECT * FROM turtles;',';');
```

  `echo A$`
  `SELECT * FROM turtles`

####1.11Generating Comma-Separated Data<a name="1.11"></a>

**Đặt vấn đề:** Tập tin CVS (Comma Separated Values, các giá trị định giới bằng dấu phẩy) là một định dạng văn bản mà bạn có thể dùng để chuyển dữ liệu từ một cơ sở dữ liệu hoặc bảng tính giữa các ứng dụng khác nhau. 

**Cách giải quyết:** Sử dụng hàm `fputcsv()` để tạo ra một dòng có định dạng CSV từ một mảng dữ liệu.

>Ví dụ:

```javascript
	$sales = array( array('Northeast','2005-01-01','2005-02-01',12.54),
			array('Northwest','2005-01-01','2005-02-01',546.33),
			array('Southeast','2005-01-01','2005-02-01',93.26),
			array('Southwest','2005-01-01','2005-02-01',945.21),
			array('All Regions','--','--',1597.34) );
	$filename = './sales.csv';
	$fh = fopen($filename,'w') ordie("Can't open $filename");
	foreach ($salesas $sales_line) {
		if (fputcsv($fh, $sales_line) === false)
		 {
			die("Can't write CSV line");
		  }
		}
		fclose($fh) ordie("Can't close $filename");
```

 + Để in dữ liệu có định dạng CSV thay vì viết nó vào một tập tin, sử dụng dòng đặc biệt này php://output.

>Ví dụ

```javascript
	$sales = array( array('Northeast','2005-01-01','2005-02-01',12.54),
			array('Northwest','2005-01-01','2005-02-01',546.33),
			array('Southeast','2005-01-01','2005-02-01',93.26),
			array('Southwest','2005-01-01','2005-02-01',945.21),
			array('All Regions','--','--',1597.34) );
	$fh = fopen('php://output','w');
		foreach ($salesas $sales_line) {
			if (fputcsv($fh, $sales_line) === false)
			 {
			 	die("Can't write CSV line");  
			   }
			   }
	fclose($fh);
```

 + Để đưa các dữ liệu định dạng CSV vào một chuỗi thay vì in ra hoặc ghi nó vào một tập tin, kết hợp kỹ thuật của ví dụ trên với đệm đầu ra.

>Ví dụ

```javascript
	$sales = array( array('Northeast','2005-01-01','2005-02-01',12.54),
			array('Northwest','2005-01-01','2005-02-01',546.33),
			array('Southeast','2005-01-01','2005-02-01',93.26),
			array('Southwest','2005-01-01','2005-02-01',945.21),
			array('All Regions','--','--',1597.34) );
	ob_start();
	$fh = fopen('php://output','w') ordie("Can't open php://output");
	foreach ($salesas $sales_line) 
		{
			if (fputcsv($fh, $sales_line) === false) 
				{
					die("Can't write CSV line"); 
				   }
				  }
	fclose($fh) ordie("Can't close php://output");
	$output = ob_get_contents();
	ob_end_clean();
```

####1.12 Parsing Comma-Separated Data(Phân tích cú pháp dữ liệu)<a name="1.12"></a>

**Đặt vấn đề:** Bạn có dữ liệu định dạng (CSV) , một tập tin xuất ra từ Excel hoặc một cơ sở dữ liệu và bạn muốn trích xuất các hồ sơ và các lĩnh vực thành một định dạng mà bạn có thể thao tác trong PHP.

**Cách giải quyết:** Nếu dữ liệu CSV là trong một tập tin (hoặc có sẵn thông qua một URL), mở tập tin với fopen () và đọc dữ liệu với fgetcsv ()

>Ví dụ:

```javascript
	$fp = fopen($filename,'r') ordie("can't open file");
	echo "<table>\n";
	while($csv_line = fgetcsv($fp)) 
		{
			echo '<tr>';for ($i = 0, $j = count($csv_line); 
			$i < $j; $i++) 
				{
					echo '<td>'.htmlentities($csv_line[$i]).'</td>';    
					}
	echo "</tr>\n";}echo "</table>\n";
    fclose($fp) ordie("can't close file");
```

 + Hàm fgetcsv () đọc trong toàn bộ một dòng dữ liệu. Nếu chiều dài đường trung bình của bạn là morethan 8.192 byte, chương trình của bạn có thể chạy nhanh hơn nếu bạn chỉ định một chiều dài đường dây rõ ràng thay vì để cho hình PHP nó ra. Làm điều này bằng cách cung cấp một số thứ hai để fgetcsv () đó là một giá trị lớn hơn chiều dài tối đa của một dòng trong tập tin CSV của bạn.

####1.13 Generating Fixed-Width Field Data Records (Tạo cố định chiều rộng dữ liệu<a name="1.13"></a>

**Đặt vấn đề:** Bạn cần định dạng bản ghi dữ liệu như vậy thì mỗi lĩnh vực chiếm một lượng của bộ ký tự.

**Cách giải quyết:** Sử dụng hàm `pack()` với một chuỗi định dạng xác định một chuỗi các chuỗi không gian độn.

>Ví dụ

```sh
	$books = array( array('Elmer Gantry', 'Sinclair Lewis', 1927),
		array('The Scarlatti Inheritance','Robert Ludlum', 1971),
		array('The Parsifal Mosaic','William Styron', 1979) );
	foreach ($booksas $book) 
		{
			echo pack('A25A15A4', $book[0], $book[1], $book[2]) . "\n";
	}
```

+ Chuỗi định dạng A25A14A4 nói pack () để biến đổi đối số tiếp theo của nó vào ký tự A25 trong chuỗi space-padded , ký tự 14 của chuỗi space-padded, và ký tự 4 của chuỗi space-padded. Đối với space-padded trong hồ sơ chiều rộng cố định, đóng gói () cung cấp một giải pháp ngắn gọn.

>Ví dụ

```sh
	$books = array( array('Elmer Gantry', 'Sinclair Lewis', 1927),
		array('The Scarlatti Inheritance','Robert Ludlum', 1971),
		array('The Parsifal Mosaic','William Styron', 1979) );
	foreach ($booksas $book) 
		{  
		  $title  = str_pad(substr($book[0], 0, 25), 25, '.');  
		  $author = str_pad(substr($book[1], 0, 15), 15, '.');
		  $year   = str_pad(substr($book[2], 0, 4), 4, '.');
	echo "$title$author$year\n";
	    }
```

####1.14 Parsing Fixed-Width Field Data Records<a name="1.14"></a>

**Đặt vấn đề:** Bạn cần phải phá vỡ các khoảng cách cố định chiều rộng trong chuỗi.

**Cách giải quyết:** Sử dụng hàm cắt chuỗi `substr()` hoặc dùng hàm `unpack()`

>Ví dụ

```sh
	$fp = fopen('fixed-width-records.txt','r',true) ordie ("can't open file");
	while ($s = fgets($fp,1024)) 
		{  
		  $fields[1] = substr($s,0,25);  // first field:  first 25 characters of the line  
		  $fields[2] = substr($s,25,15); // second field: next 15 characters of the line    
		  $fields[3] = substr($s,40,4);  // third field:  next 4 characters of the line    
		  $fields = array_map('rtrim', $fields); // strip the trailing whitespace
		  // a function to do something with the fields    
	process_fields($fields);
		}
	fclose($fp) ordie("can't close file");
```
> Ví dụ

```sh
	function fixed_width_unpack($format_string,$data)
		 { 
		 	 $r = array();
		 	 for ($i = 0, $j = count($data); $i < $j; $i++) 
		 	 { 
		 	    $r[$i] = unpack($format_string,$data[$i]); 
		 	  }
		 	  return $r;
		 }
```

 
 + Dữ liệu trong đó mỗi lĩnh vực được phân bổ một số cố định các ký tự trên mỗi dòng có thể trông giống như danh sách này, tiêu đề, và ngày xuất bản.

>Ví dụ

```sh
	$booklist=<<<END
	Elmer GantrySinclair Lewis 1927
	The Scarlatti InheritanceRobert Ludlum  1971
	The Parsifal MosaicRobert Ludlum  1982
	Sophie's ChoiceWilliam Styron 1979
	END;
```

 + Trong mỗi dòng, tiêu đề chiếm 25 ký tự đầu tiên, tên của tác giả 15 ký tự tiếp theo, và năm xuất bản 4 ký tự tiếp theo. Biết những độ rộng lĩnh vực, bạn có thể dễ dàng sử dụng `substr ()` để phân tích các lĩnh vực vào một mảng.

>Ví dụ

```sh
	$books = explode("\n",$booklist);

	for($i = 0, $j = count($books); $i < $j; $i++)
	 { 
	 	 $book_array[$i]['title'] = substr($books[$i],0,25); 
	 	  $book_array[$i]['author'] = substr($books[$i],25,15); 
	 	   $book_array[$i]['publication_year'] = substr($books[$i],40,4);}
```

 + Làm nổ `$book` thành một mảng các dòng làm cho mã vòng lặp như nhau cho dù nó hoạt động trên một chuỗi hoặc một loạt các dòng được đọc từ một tập tin.

>Ví dụ

```sh
	function fixed_width_substr($fields,$data) 
	{ 
	 $r = array();
	 for ($i = 0, $j = count($data); 
	 $i < $j; $i++)
	  {   
	   $line_pos = 0;
	   foreach($fieldsas $field_name => $field_length) 
	   	{
	   		$r[$i][$field_name] = rtrim(substr($data[$i],$line_pos,$field_length));
	   		$line_pos += $field_length; 
	     } 
	  }
	  return $r;
	 }
$book_fields = array('title' => 25.'author' => 15,'publication_year' => 4);
$book_array = fixed_width_substr($book_fields,$booklist);
```

 + Giá trị $line_pos biến theo dõi những sự khởi đầu của từng lĩnh vực và được đưa lên bằng chiều rộng theprevious của lĩnh vực như mã di chuyển qua từng dòng. Sử dụng `rtrim()` để removetrailing khoảng trắng từ từng lĩnh vực.

 + Bạn có thể sử dụng `unpack()` như là một thay thế cho `substr()` để trích xuất các lĩnh vực. Thay vì chỉ định tên trường và độ rộng như một mảng kết hợp, tạo ra một chuỗi định dạng cho `unpack()`.

>Ví dụ:

```sh
	function fixed_width_unpack($format_string,$data)
		 {  $r = array();
		 	for ($i = 0, $j = count($data); 
		 	$i < $j; $i++) 
		 {    $r[$i] = unpack($format_string,$data[$i]);  
		 }
		 return $r;
		 }
```

 + Bởi vì một định dạng để `unpack()` có nghĩa là chuỗi không gian đệm, không có cần phải `rtrim()` ra dấu không gian.

 + Một khi các lĩnh vực đã được phân tích thành $ cuốn sách mảng bởi một trong hai chức năng, dữ liệu có thể được in như một bảng HTML.

>Ví dụ

```sh
	$book_array = fixed_width_unpack('A25title/A15author/A4publication_year',$books);
		echo "<table>\n";
		// echo a header rowecho '<tr><td>';
		echo join('</td><td>',array_keys($book_array[0]));
		echo "</td></tr>\n";
		// echo each data rowforeach ($book_arrayas $row)
		 {
		 	echo '<tr><td>';
		 	echo join('</td><td>',array_values($row));
		 	echo "</td></tr>\n";
		 }
	echo "</table>\n";
```

 + Gia nhập dữ liệu trên </ td> <td> sản xuất một dòng của bảng đó là mất tích của nó đầu tiên <td> và cuối cùng </ td>. Chúng tôi sản xuất một dòng của bảng hoàn chỉnh bằng cách in ra <tr> <td> trước khi joineddata và </ td> </ tr> sau khi dữ liệu tham gia.

 + Cả hai substr () và giải nén () có khả năng tương đương khi cố định chiều rộng các lĩnh vực là chuỗi, nhưng giải nén () là giải pháp tốt hơn khi các yếu tố của các trường là không chỉ là chuỗi.

 + Nếu tất cả các lĩnh vực của bạn có cùng kích thước, `str_split ()` là một phím tắt tiện dụng để cắt dữ liệu. Nó trả về một mảng gồm các phần của một chuỗi.`usesstr_split()` để phá vỡ một chuỗi thành phần 32-byte.

####1.15 Taking Strings Apart<a name="1.15"></a>

**Đặt vấn đề** Bạn cần phải phá vỡ một chuỗi thành từng miếng. Ví dụ: bạn muốn truy cập vào mỗi dòng mà người dùng nhập vào trong một mẫu `<textarea>`.

**Cách giải quyết**: Dùng `explode()` nếu những gì tách các miến là một chuỗi liên tục.

```sh
$words = explode(' ','My sentence is not very complicated');
```

 + Dùng `preg_split()` Nếu bạn cần một biểu thức chính quy tương thích với Perl để mô tả thuật phân cách

```sh
	$word = preg_split('/\d\. /','my day: 1. get up 2. get dressed 3. eat toast');
	$lines = preg_split('/[\n\r]+/',$_POST['textarea']);
```


```sh
	$words = preg_split('/ x /i','31 inches x 22 inches X 9 inches');
```

 + Giải pháp đơn giản nhất của bó là bùng nổ (). Vượt qua chuỗi phân cách của bạn, chuỗi được tách ra, và giới hạn tùy chọn về số lượng các phần tử nên được trả lại.

```sh
	$dwarves = 'dopey,sleepy,happy,grumpy,sneezy,bashful,doc';
	$dwarf_array = explode(',',$dwarves);
```
```sh
	Array
	(  
		  [0] => dopey
		  [1] => sleepy    
		  [2] => happy    
		  [3] => grumpy    
		  [4] => sneezy    
		  [5] => bashful    
		  [6] => doc
	)
```

 + Nếu giới hạn quy định nhỏ hơn số khối có thể, phần cuối cùng chứa phần còn lại.

```sh
	$dwarf_array = explode(',',$dwarves,5);
	print_r($dwarf_array);
```

```sh
	Array
	(
	    [0] => dopey    
	    [1] => sleepy    
	    [2] => happy    
	    [3] => grumpy    
	    [4] => sneezy,bashful,doc
	)
```

 + Dấu tách được xử lý theo nghĩa đen bằng cách `explode()`. Nếu bạn chỉ định một dấu phẩy và một dấu cách như dấu phân tách, nó sẽ phá vỡ chuỗi chỉ bằng dấu phẩy theo sau bởi dấu cách, chứ không phải ở dấu phẩy.

 + Với `preg_split()`, bạn có sự linh hoạt hơn. Thay vì một chuỗi ký tự như một dấu tách, nó sử dụng một công cụ biểu thức chính quy tương thích với Perl. Với `preg_split()`, bạn có thể lợi dụng các phần mở rộng biểu thức chính quy Perl-ish khác nhau, cũng như các thủ thuật như là bao gồm cả văn bản tách trong chuỗi trả lại của chuỗi.

```sh
 	$math = "3 + 2 / 7 - 9";
 	$stack = preg_split('/ *([+\-\/*]) */',$math,-1,PREG_SPLIT_DELIM_CAPTURE);
 	print_r($stack);
```

```sh
	Array
	(    
		[0] => 3    
		[1] => +    
		[2] => 2    
		[3] => /
		[4] => 7    
		[5] => -    
		[6] => 9)
```

 + Biểu thức chính quy tách biệt sẽ tìm ra bốn toán tử toán học (+, -, /, *), được bao quanh bởi các khoảng trống dẫn hoặc dấu cuối tùy chọn. PREG_SPLIT_DELIM_CAPTURE flagtells `preg_split()` để bao gồm các kết quả phù hợp như một phần của dấu ngoặc đơn biểu thức thông thường trong chuỗi các chuỗi được trả về. Chỉ có ký tự toán hạng toán tử nằm trong dấu ngoặc, do đó mảng trả lại không có dấu cách nào trong đó.

####1.16 Wrapping Text at a Certain Line Length<a name="1.16"></a>

**Đặt vấn đề**: Bạn cần phải bọc các dòng trong một chuỗi. Ví dụ: bạn muốn hiển thị văn bản bằng cách sử dụng thẻ <pre> và </ pre> nhưng giữ nó trong một cửa sổ trình duyệt kích thước thông thường.

**Cách giải quyết**: Dùng `wordwrap()`:

```sh
	$s = "Four score and seven years ago our fathers brought forth on this continent ↵a new nation, conceived in libertyand dedicated to the proposition ↵that all men are created equal.";

	print "<pre>\n".wordwrap($s)."\n</pre>";
```

```sh
	<pre>
	Four score and seven years ago our fathers brought forth on this continenta new nation, conceived in liberty and dedicated to the proposition thatall men are created equal.
	</pre>
```

 + Theo mặc định, từ `wrapper()` gói gọn văn bản với 75 ký tự trên mỗi dòng. Đối số thứ hai tùy chọn xác định độ dài đường khác.

```sh
	print wordwrap($s,50);
```

```sh
	Four score and seven years ago our fathers broughtforth on this continent a new nation, conceived inliberty and dedicated to the proposition that allmen are created equal.
```

 + Các ký tự khác \ n có thể được sử dụng cho các ngắt dòng. Đối với khoảng cách đôi, hãy sử dụng "\ n \ n".

```sh
	print wordwrap($s,50,"\n\n");
```

```sh
	Four score and seven years ago our fathers brought

	forth on this continent a new nation, conceived in

	liberty and dedicated to the proposition that all

	men are created equal.
```

 + Có một đối số thứ tư tùy chọn cho `wordwrap()` kiểm soát điều trị wordsthat dài hơn chiều dài đường kẻ được chỉ định. Nếu đối số này là 1, những từ này được đánh dấu. Nếu không, chúng vượt qua chiều dài đường kẻ được chỉ định.

```sh
	print wordwrap('jabberwocky',5) . "\n";
	print wordwrap('jabberwocky',5,"\n",1);
```

Kết quả:


```sh
	jabberwocky
	jabbe
	rwock
	y
```

####1.17 Storing Binary Data in Strings<a name="1.17"></a>

**Đặt vấn đề:** Bạn muốn phân tích một chuỗi có chứa các giá trị được mã hóa như là một cấu trúc nhị phân hoặc mã hóa giá trị thành một chuỗi. Ví dụ, bạn muốn để lưu trữ số điện thoại trong nhị phân thay vì như là trình tự của các ký tự ASCII.

**Cách giải quyết:** Sử dụng pack() để lưu trữ dữ liệu nhị phân trong một chuỗi.

```sh
	$packed = pack('S4',1974,106,28225,32725);28 | Chapter 1: Stringswww.it-ebooks.info

```

Sử dụng unpack() để trích xuất dữ liệu nhị phân từ một chuỗi:

```sh
$nums = unpack('S4',$packed);
```

 + Đối số đầu tiên để pack() là thông qua một chuỗi định dạng mô tả làm thế nào để mã hóa của datathat trong phần còn lại của các đối số. Các chuỗi định dạng S4 cho pack() để producefour unsigned ngắn 16-bit số theo thứ tự byte máy từ đầu vào dữ liệu của nó. 

 + Được đưa ra năm 1974, 106, 28225 và 32725 như là đầu vào trên máy về cuối nhỏ, điều này trả về 8 byte: 182, 7, 106, 0, 65, 110, 213 và 127. Mỗi cặp 2-byte tương ứng với một trong những số đầu vào: 7 * 256 + 182 là 1974; 0 * 256 + 106 là 106; 110 * 256 + 65 = 28225; 127 * 256 + 213 = 32725

 + Đối số đầu tiên để unpack() cũng là một chuỗi định dạng, và các đối số thứ hai là dữ liệu để giải mã. Đi qua một chuỗi định dạng S4, Chuỗi 8 byte gói () sản xuất trả về một mảng bốn yếu tố của các con số ban đầu. bản in print_r($nums).

```sh
	Array
	(    
	[1] => 1974    
	[2] => 106    
	[3] => 28225    
	[4] => 32725
	)
```

 + Trong unpack(), định dạng ký tự và số lượng của họ có thể được theo sau bởi một chuỗi sẽ được sử dụng như một chìa khóa mảng.

>Ví dụ:

```sh
	$nums = unpack('S4num',$packed);
	print_r($nums);
```

```sh
	Array
	(    
		[num1] => 1974    
		[num2] => 106    
		[num3] => 28225    
		[num4] => 32725
	)
```

 + Nhiều định dạng ký tự phải được tách ra với / trong unpack().

```sh
	$nums = unpack('S1a/S1b/S1c/S1d',$packed);
	print_r($nums);
```

```sh
	Array
	(    
	[a] => 1974
	[b] => 106    
	[c] => 28225    
	[d] => 32725
	)
```

 + Cho a, A, h, và H, một số sau khi định dạng ký tự cho thấy chuỗi là bao lâu. Ví dụ: A25 có nghĩa là một chuỗi không gian đệm 25 ký tự. Cho các nhân vật khác của định dạng, một số sau đây có nghĩa là có bao nhiêu loại xuất hiện liên tiếp trong một chuỗi. Sử dụng * để phần còn lại của dữ liệu có sẵn.

 + Bạn có thể chuyển đổi giữa các loại dữ liệu với unpack().

```sh
	$s = 'platypus';
	$ascii = unpack('c*',$s);
	print_r($ascii);
```

```sh
	Array
	(    
		[1] => 112    
		[2] => 108    
		[3] => 97    
		[4] => 116    
		[5] => 121    
		[6] => 112    
		[7] => 117    
		[8] => 115
	)
```

####1.18 Program: Downloadable CSV File<a name="1.18"></a>

 + Kết hợp các chức năng header() để thay đổi các loại nội dung gì pro‐gram PHP của bạn kết quả đầu ra với chức năng fputcsv() cho dữ liệu định dạng cho phép bạn gửi tệp CSV để trình duyệt sẽ tự động được bàn giao ra một chương trình bảng tính (hoặc bất kỳ ứng dụng được cấu hình trên một hệ thống khách hàng cụ thể để xử lý các tập tin CSV). Ví dụ 1-38 và định dạng các kết quả của một chọn SQL query như dữ liệu CSV cung cấp các tiêu đề chính xác để nó được xử lý bởi trình duyệt.

```sh
	$db = new PDO('sqlite:/usr/local/data/sales.db');
	$query = $db->query('SELECT region, start, end, amount FROM sales', PDO::FETCH_NUM);
	$sales_data = $db->fetchAll();

	// Open filehandle for fputcsv()
	$output = fopen('php://output','w') ordie("Can't open php://output");$total = 0;
	// Tell browser to expect a CSV 

	fileheader('Content-Type: application/csv');
	header('Content-Disposition: attachment; 
	filename="sales.csv"');

	// Print header row
	fputcsv($output,array('Region','Start Date','End Date','Amount'));
	// Print each data row and increment $total
	foreach ($sales_dataas $sales_line) {    
		fputcsv($output, $sales_line);    
		$total += $sales_line[3];
		}
	// Print total row and close file handle
	fputcsv($output,array('All Regions','--','--',$total));
	fclose($output) ordie("Can't close php://output");
```

 + Các tiêu đề đầu tiên, Content-Type, cho trình duyệt mà đầu ra không phải là HTML, nhưng CSV. Các tiêu đề thứ hai, Content-Disposition, cho trình duyệt không hiển thị đầu ra nhưng cố gắng để tải một chương trình bên ngoài để xử lý nó. Các thuộc tính tên tập tin của tiêu đề này cung cấp một tên tập tin mặc định cho trình duyệt để sử dụng cho các tập tin tải về.

 






