$("#menu").click(function (){
	console.log("Hola");
	var element = $(this).siblings("nav");

	if($(element).hasClass("mostrar")){
		$(element).removeClass("mostrar");
	}else{
		$(element).addClass("mostrar")
		}

	});
