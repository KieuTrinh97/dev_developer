$(document).ready(function()
 {
    $('#khungtimkiem2').hide(); // Giấu đối tượng khi Web vừa load lên
    $('#timkiem2').click(function()
    { // Khi nút được nhấn
         $('#khungtimkiem2').toggle('slow'); // Hiển thị đối tượng
         return false;
    });
$(document).click(function(event) {
    if (!$(event.target).is('#khungtimkiem2') && !$(event.target).is('#khungtimkiem2 *')) {
    $('#khungtimkiem2').hide('');
    }
    });
});