(function($){
	$.fn.multiButtons=function(options){
		if(options!==null&&typeof options==='object'){
			var settings=$.extend({
				element:null,
				type:'HORIZONTAL'
			},options);
		}
		else{
			settings={
				element:options,
				type:'HORIZONTAL'
			};
		}

		var child=$(this).children(settings.element);
		var borders=new Array(
			parseInt(child.css('border-top-width')),
			parseInt(child.css('border-right-width')),
			parseInt(child.css('border-bottom-width')),
			parseInt(child.css('border-left-width'))
		);

		var notfirst=$(this).children(settings.element).not(':first-child');

		if(settings.type=='HORIZONTAL'){
			notfirst.css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px 0');

			notfirst.on('mouseenter',function(){
				$(this).css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');

				var prev=$(this).prev(settings.element);
				if(prev.is(':first-child')){
					prev.css('border-width',borders[0]+'px 0 '+borders[2]+'px '+borders[3]+'px');
				}
				else{
					prev.css('border-width',borders[0]+'px 0 '+borders[2]+'px 0');
				}

				$(this).next(settings.element).css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px 0');
			})
			.on('mouseleave',function(){
				if($(this).is(':last-child')){
					$(this).add($(this).prev(settings.element)).css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px 0');
				}
				else{
					$(this).add($(this).next(settings.element)).css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px 0');
					var prev=$(this).prev(settings.element);
					if(prev.is(':first-child')){
						prev.css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
					}
					else{
						prev.css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px 0');
					}
				}
			});
		}
		else if(settings.type=='VERTICAL'){
			notfirst.css('border-width','0 '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');

			notfirst.on('mouseenter',function(){
				$(this).css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');

				var prev=$(this).prev(settings.element);
				if(prev.is(':first-child')){
					prev.css('border-width',borders[0]+'px '+borders[1]+'px 0 '+borders[3]+'px');
				}
				else{
					prev.css('border-width','0 '+borders[1]+'px 0 '+borders[3]+'px');
				}

				$(this).next(settings.element).css('border-width','0 '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
			})
			.on('mouseleave',function(){
				if($(this).is(':last-child')){
					$(this).add($(this).prev(settings.element)).css('border-width','0 '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
				}
				else{
					$(this).add($(this).next(settings.element)).css('border-width','0 '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
					var prev=$(this).prev(settings.element);
					if(prev.is(':first-child')){
						prev.css('border-width',borders[0]+'px '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
					}
					else{
						prev.css('border-width','0 '+borders[1]+'px '+borders[2]+'px '+borders[3]+'px');
					}
				}
			});
		}
	};
}(jQuery));
