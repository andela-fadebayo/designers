$(document).ready(function() {

  // Clear all classes
  var clearClass = function() {
  	$('.left-1').removeClass('left-active');
  	$('.left-2').removeClass('left-active');
  	$('.left-3').removeClass('left-active');
  	$('#right').removeClass('bg-left-1');
  	$('#right').removeClass('bg-left-2');
  	$('#right').removeClass('bg-left-3');
  };
  
  // Toggle left indicators and Background image
  $(".left-1").click(function() {
		 clearClass();
		$(this).toggleClass("left-active");
		$("#right").toggleClass("bg-left-1");
	});

	$(".left-2").click(function() {
		 clearClass();
		$(this).toggleClass("left-active");
		$("#right").toggleClass("bg-left-2");
	});

	$(".left-3").click(function() {
		 clearClass();
		$(this).toggleClass("left-active");
		$("#right").toggleClass("bg-left-3");
	});
});