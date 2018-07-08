$(".remplir").click(function(){
  $(".affiche_image").addClass("image");
});

$(".vider").click(function(){
  $(".affiche_image").removeClass("image");
});

$(".rond").click(function(){
  $(this).toggleClass("image");
});

$("#colonne1").click(function() {
	$(this).toggleClass("image");
	$(".table1 .affiche_image").toggleClass("image");
	$(".table div:nth-child(1)").toggleClass("image");
});

$("#colonne2").click(function() {
	$(this).toggleClass("image");
	$(".table2 .affiche_image").toggleClass("image");
	$(".table div:nth-child(2)").toggleClass("image");
});

$("#colonne3").click(function() {
	$(this).toggleClass("image");
	$(".table3 .affiche_image").toggleClass("image");
	$(".table div:nth-child(3)").toggleClass("image");
});

$("#colonne4").click(function() {
	$(this).toggleClass("image");
	$(".table4 .affiche_image").toggleClass("image");
	$(".table div:nth-child(4)").toggleClass("image");
});

$("#colonne5").click(function() {
	$(this).toggleClass("image");
	$(".table5 .affiche_image").toggleClass("image");
	$(".table div:nth-child(5)").toggleClass("image");
});


