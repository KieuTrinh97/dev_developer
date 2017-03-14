jQuery(document).ready(function($){
	jQuery(window).load(function(){
		
		jQuery('.product-quantity').each(function(){
            var quantity1 = jQuery(this).children('.quantity').children('input');
            var step1 = jQuery(this).children('input[name="quantity"]');
            var Ste1 = "1";
            if(isNaN(Ste1)){
                  Ste1 = 1;
            }
            jQuery(this).children('input.quantity-plus').click(function(){
                var Qtt1 = parseInt(quantity1.val());
                
                
                if (!isNaN(Qtt1)) {
    				quantity1.val(Qtt1 + 1);
                }
                
                
                
            })
            
            
            
            jQuery(this).children('input.quantity-minus').click(function(){
                var Qtt1 = parseInt(quantity1.val());
                
                if (!isNaN(Qtt1) && Qtt1 >Ste1) {
    							quantity1.val(Qtt1 - 1);
    						} else quantity1.val(Ste1);
            })
        })
	})
})