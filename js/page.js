var viewingItem = false;
var animationDuration = 500;

function showSocial(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemSocial").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '112'
	}, animationDuration)
	
	$("#portfolioBackground").fadeOut(animationDuration);
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#socialWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function showPortfolio(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemPortfolio").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '162'
	}, animationDuration)
	
	$("#portfolioBackground").fadeOut(animationDuration);
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#portfolioWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function showResume(){
	$(".navItemLink").removeClass("navItemLinkSelected");
	$("#navItemResume").addClass("navItemLinkSelected");
	
	$("#navItemSelected").animate({
		top: '212'
	}, animationDuration)
	
	$("#portfolioBackground").fadeOut(animationDuration);
	$(".wrapper").fadeOut(animationDuration);
	setTimeout(function(){$("#resumeWrapper").fadeIn(animationDuration/2)}, animationDuration);
}

function toggleItem(itemNumber){
	viewingItem = !viewingItem;
	$("#portfolioBackground").fadeToggle(animationDuration);
	$("#item" + itemNumber).toggleClass('itemContentForDescription');
	$("#item" + itemNumber).toggleClass('itemContent');
			
	if(viewingItem){
		$("#item" + itemNumber).siblings().animate({opacity: 0}, animationDuration);
		$("#item" + itemNumber + "Description").fadeIn(animationDuration);
		$.scrollTo("#item" + itemNumber, animationDuration, {offset: {top:-50}});
	}
	else{
		$(".itemContent").animate({opacity: 1}, animationDuration);
		$("#item" + itemNumber + "Description").hide();
	}
}

