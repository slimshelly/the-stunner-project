
let $currentPage = void 0;
let $nextPage = void 0;

let inClass = void 0;
let outClass = void 0;
let $FW18 = $('.grid');
let $SS19 = $(".blob-wrapper");

function myFunction1() {

	$currentPage = $(".blob-wrapper");
	$nextPage = $(".grid");
	// transition from right to left
	inClass = 'moveFromLeft';
    outClass = 'moveToRight';

    $('#fw18').addClass("underscore");
    $currentPage.removeClass("underscore");

	  $currentPage.addClass("current-page").addClass(outClass).on("animationend", function () {
	    $currentPage.removeClass(outClass).removeClass("current-page");
	    $currentPage.off("animationend");
	  });

	  $nextPage.addClass("current-page").addClass(inClass).on("animationend", function () {
	    $nextPage.removeClass(inClass);
	    $nextPage.off("animationend");

		$(".blob-wrapper").addClass("hidden");
	  });

}

function myFunction2() {
	$(".blob-wrapper").removeClass("hidden");



	$currentPage = $(".grid");
	$nextPage = $(".blob-wrapper");

	$('#ss19').addClass("underscore");
    $currentPage.removeClass("underscore");
	// transition from right to left
	inClass = "moveFromRight";
    outClass = "moveToLeft";

	  $currentPage.addClass("current-page").addClass(outClass).on("animationend", function () {
	    $currentPage.removeClass(outClass).removeClass("current-page");
	    $currentPage.off("animationend");
	  });

	  $nextPage.addClass("current-page").addClass(inClass).on("animationend", function () {
	    $nextPage.removeClass(inClass);
	    $nextPage.off("animationend");
	  });



}

