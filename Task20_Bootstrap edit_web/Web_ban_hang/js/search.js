$(document).ready(function()
 {
    $('#khungtimkiem').hide(); // Giấu đối tượng khi Web vừa load lên
    $('#timkiem').click(function()
    { // Khi nút được nhấn
         $('#khungtimkiem').toggle('slow'); // Hiển thị đối tượng
         return false;
    });
$(document).click(function(event) {
    if (!$(event.target).is('#khungtimkiem') && !$(event.target).is('#khungtimkiem *')) {
    $('#khungtimkiem').hide('');
    }
    });
});