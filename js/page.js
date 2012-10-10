var viewingItem = false;
var animationDuration = 500;

function showSocial(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemSocial").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '112'
	}, animationDuration)
	
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#socialWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function showPortfolio(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemPortfolio").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '162'
	}, animationDuration)
	
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#portfolioWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function showResume(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemResume").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '212'
	}, animationDuration)
	
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#resumeWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

