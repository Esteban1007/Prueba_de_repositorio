$(document).ready(function(){

	$(".IconMenu").click(function(){
		$(".Menu").toggleClass('activar');
		});

	$(window).scroll(function(){
		var pos = $(window).scrollLeft();
		var Pos1 = $("#Or").offset().left;
		var Pos2 = $("#May").offset().left;
		var Pos3 = $("#Reg").offset().left;
		var Pos4 = $("#Pt").offset().left;

		var Pos5 = $("#Evo").offset().left;
		var Pos6 = $("#Fi").offset().left;
		var Pos7 = $("#Tn").offset().left;
		var Pos8 = $("#Cm").offset().left;

		var Pos9 = $("#JO").offset().left;
		var Pos10 = $("#Jo1").offset().left;
		var Pos11 = $("#Md").offset().left;

		var Pos12 = $("#Act").offset().left;

	if(pos >= Pos1){
		$(".barra").fadeIn();
		$(".carga").css({
			width : "1%"
		})
	}
	else{
	$(".barra").fadeOut();
	}

	if(pos >= Pos2){
		$(".carga").css({
			width : "10%"
		})
	}
	if(pos >= Pos3){
		$(".carga").css({
			width : "19%"
		})
	}
	if(pos >= Pos4){
	$(".carga").css({
		width : "28%"
		})
	}
		if(pos >= Pos5){
	$(".carga").css({
		width : "37%"
		})
	}
		if(pos >= Pos6){
	$(".carga").css({
		width : "46%"
		})
	}
		if(pos >= Pos7){
	$(".carga").css({
		width : "55%"
		})
	}
	if(pos >= Pos8){
	$(".carga").css({
		width : "64%"
		})
	}
	if(pos >= Pos9){
	$(".carga").css({
		width : "73%"
		})
	}
	if(pos >= Pos10){
	$(".carga").css({
		width : "82%"
		})
	}
	if(pos >= Pos11){
	$(".carga").css({
		width : "90%"
		})
	}
	if(pos >= Pos12){
	$(".carga").css({
		width : "100%"
		})
	}











	if(pos >= Pos1){
		$(".logo_esquina").fadeIn();
	}
	else{
	$(".logo_esquina").fadeOut();
	}
	})
});



