var viewingItem = false;
var showingPortfolio = false;
var animationDuration = 500;


function showSocial(){
	showingPortfolio = false;
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemSocial").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '112'
	}, animationDuration)
	
	$("#portfolioWrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#socialWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function showPortfolio(){
	showingPortfolio = true;
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemPortfolio").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '162'
	}, animationDuration)
	
	$("#socialWrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#portfolioWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

