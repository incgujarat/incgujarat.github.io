jQuery(document).load(function(){
	console.log("here");
	console.log("testing 123");
})

jQuery.fn.gdlr_fancybox = function(){
	if(typeof(jQuery.fn.fancybox) == 'function'){
		var fancybox_attr = {
			nextMethod : 'resizeIn',
			nextSpeed : 250,
			prevMethod : false,
			prevSpeed : 250,	
			helpers : { media : {} }
		};
		
		if( typeof(jQuery.fancybox.helpers.thumbs) == 'object' ){
			fancybox_attr.helpers.thumbs = { width: 50, height: 50 };
		}

		jQuery(this).fancybox(fancybox_attr);
	}	
}

jQuery(document).ready(function(){
	
	jQuery('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').not('[rel="fancybox"]').attr('rel', 'fancybox');
	jQuery('[rel="fancybox"]').gdlr_fancybox();	
})

