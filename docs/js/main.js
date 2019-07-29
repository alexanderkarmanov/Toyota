$(document).ready(function(){

	// $("nav").hide();

    
    // Создаем переменые для кнопки и для меню
	var pull = $("#nav_mobile");
	var nav = $(".nav_block ul");

	// $("nav").hide();

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();
	});


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && nav.is(':hidden')) {
		    nav.removeAttr('style');
		}
	});



});