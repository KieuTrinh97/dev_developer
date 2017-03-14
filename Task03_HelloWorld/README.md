###BÁO CÁO TASK 3

"Hello world"-Chương trình đầu tiên
Name: Võ Thị Kiều Trinh
Ngày:4/11/2016
------------------------
#Mục lục:
  	 1.Cài đặt python với windows
     2.Cafiddawjt pip và tìm hiểu
   	 3.Cài đặt biến môi trường với windows
	 4.Khái niệm thông dịch và biên dịch
 	 5.Viết chương trình hello world bằng thông dịch và biên dịch
	 6.Up source và bài báo cáo lên github

#Nội dung
 ------------------------------------------
 
**1.Cài đặt python với windows**
   Trước tiên bạn cần lên trang chủ python.org để download phiên bản phù hợp với máy.
  ![text](http://i.imgur.com/mrrXF5i.png)
   Việc cài đặt Python cũng giống như bạn cài đặt các phần mềm khác, bạn cứ click next, next và next nhé!
   ![text](http://i.imgur.com/f3sYm7G.png)
   Sau khi cài đặt xong thì ta sẽ có một biểu tượng chạy chương trình như hình dưới đây:
   ![text](http://i.imgur.com/jARZeXE.png)
   ![text](http://i.imgur.com/NIGTh2e.png)
   Vậy là đã cài đặt python cho windows thành công!.
**2.Cài đặt pip và tìm hiểu pip**
   Đầu tiên,Pip là một trình quản lý gói (package manager), thư viện cho Python. Giống như Composer cho PHP hay Bower cho Javascript.



   Với Pip, bạn có thể dễ dàng cài đặt các package cho Python chỉ với 1 dòng lệnh đơn giản:
     >>pip install --upgrade<package_name>
   Tuy nhiên, pip lại không có câu lệnh nào hỗ trợ việc cập nhật tất cả package cùng lúc. Vì vậy khi có phiên bản mới thì cập nhật lần lượt từng package cũng hơi mệt. Chỉ cần tạo 1 tập tin Python mới và sao chép mã nguồn sau đây:




   -------------------------------
  	 # Source: http://stackoverflow.com/a/5839291
			import pip
		from subprocess import call

		for dist in pip.get_installed_distributions():
    	call("pip install --upgrade " + dist.project_name, shell=True)

 Cuối cùng, chỉ việc lưu lại và chạy thôi!
 Về nguyên tắc hoạt động của đoạn script trên đó là lấy danh sách các package đã cài đặt rồi sử dụng vòng lặp For để chạy lệnh Upgrade cho tất cả các package đó. Pip sẽ tự động bỏ qua các package hiện đang ở phiên bản mới nhất.
    **Cài đặt pip**
      *Chúng ta sẽ tải file get-pip.py về và tiến hành chạy để cài đặt pip.*
      *Ngoài ra, chúng ta có thể sử dụng câu lệnh:*

	Đối với Windows: python -m pip install -U pip setuptools

  Lưu ý: đối với Windows, để thực hiện câu lệnh trên, ta cần tiến hành cài đặt biến đối với môi trường Windows, cách cài đặt sẽ được nhắc đến ở mục 3.
**3.Cài đặt biến môi trường với windows**
   
 Vì mình sài windows 7 nên mình sẽ hướng dẫn trên windows 7
  
 Để cập nhật biến môi trường trên hệ điều hành Windows 7 bạn thực hiện các bước sau:

	 Trên desktop, nhấp chuột phải vào biểu tượng Computer.
 		Nhấp chọn Properties trong cửa sổ hiện ra.
 		Nhấp chọn Advanced system settings.
 		Nhấp Environment Variables và trong cửa sổ hiện ra bạn tìm trường PATH ở trong mục System Variables (mục này thứ 2 sau mục User Variables).
	 Nhấp chọn trường PATH và sau đó nhấp nút Edit nằm gần phía cuối của cửa sổ. Nếu bạn không tìm thấy trường PATH thì nhấp vào nút New để tạo mới.
	 Trong cửa sổ Edit System Variable (hoặc New System Variable trong trường hợp bạn nhấp nút New ở trên) hiện ra bạn nhấp vào ô nhập dữ liệu Variable value và di chuyển tới cuối dòng (nhờ ấn phím End)
	 Nhập giá trị của biến mà bạn muốn thêm vào sau đó lần lượt bấm nút OK để xác nhận thay đổi và đóng các cửa sổ đã mở từ bước 1.
   ![text](http://i.imgur.com/U1QxmCd.png)
   ![text](http://i.imgur.com/7jqILNC.png)
   ![text](http://i.imgur.com/WF981aw.png)
    **4.Khái niệm thông dịch và biên dịch.**
Gọi một cách đầy đủ thì là "Trình biên dịch" (Compiler) hoặc "Trình thông dịch" (Interpreter)
Trình biên dịch: làm công việc chuyển các câu lệnh được gõ bằng 1 ngôn ngữ lập trình nào đấy (gọi là mã nguồn) sang một chương trình tương đương nhưng bằng một ngôn ngữ máy tính mới (gọi là chương trình đích). Lần sau muốn chạy lại chương trình, chỉ cần chạy lại chương trình đã được dịch. 
Ví dụ: khi soạn xong 1 chương trình pascal hoặc C, sau khi biên dịch bạn sẽ được chương trình dạng mã máy (.exe)
khi biên dịch 1 chương trình viết bằng java, sau khi biên dịch bạn sẽ được chương trình dạng mã byte (byte code)
Trình thông dịch: sau khi bạn soạn thảo một chương trình bằng 1 ngôn ngữ lập trình nào đấy (mã nguồn), thì quá trình thông dịch là quá trình xảy ra lúc runtime, trình thông dịch sẽ dịch từng lệnh của chương trình bạn và thực thi. Lần sau muốn chạy lại chương trình thì phải thông dịch lại. 
Ví dụ: php hoặc asp. Mỗi khi bạn chạy website, trình thông dịch sẽ dịch lại từ đầu mã nguồn và thực thi. 
Còn vấn đề kiểm tra từng câu từng chữ trong code ngay lúc đang gõ bàn phím và báo lỗi thì chả liên quan gì đến thông dịch và biên dịch. Đó chẳng qua chỉ là sự kiểm tra cú pháp (syntax) đơn thuần mà thôi. 
Một số ngôn ngữ dạng nửa biên dịch, nửa thông dịch như: 
Java: sau khi biên dịch sẽ được byte code. Khi chạy chương trình (runtime) sẽ là quá trình thông dịch. 

Nếu nói nôm na 1 cách đại khái: trình biên dịch giống như 1 nhà dịch thuật. Giả sử ông ta dịch 1 cuốn sách từ English sang Vietnamese. Thì với những người không cần biết nội dung cuốn English thế nào, chỉ cần cầm cuốn Vietnamese là đọc và hiểu. 
Nhưng trình thông dịch lại giống 1 thông dịch viên. Ví dụ khi giao tiếp với người nước ngoài, bạn cần thuê 1 thông dịch viên dịch cho bạn hiểu những gì họ nói. Xong xuôi đâu đấy, lần sau nếu bạn muốn hiểu những gì họ nói thì lại thuê thông dịch viên tiếp.
            **5.Viết chương trình Hello world bằng thông dịch và biên dịch.**
            Đầu tiên, mình sẽ viết chương trình bằng trình thông dịch cmd:
   			>>Viết một đoạn code vào notepad và lưu lại với tên **hello.c** trong file **laptrinh**.
   					void main()
   					{
   					printf("Hello World");
   					}
 Sau đó, vào **Start** chọn **run** gõ lệnh **cmd**. Tiếp theo gõ như hình bên dưới:
 ![text](http://i.imgur.com/zVryFwx.png) 




