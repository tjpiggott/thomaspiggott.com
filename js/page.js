var viewingItem = false;
var lastViewedItem = 0;
var animationDuration = 500;

function showMe(){
	if(!$("#meWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemMe").addClass("navItemLinkSelected");
		
		$("#navItemSelected").animate({
			top: '112'
		}, animationDuration)
		
		if(viewingItem)
			toggleItem(lastViewedItem);
			
		$(".wrapper").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#meWrapper").fadeIn(animationDuration/2)}, animationDuration);
	}
}

function showPortfolio(){
	if(!$("#portfolioWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemPortfolio").addClass("navItemLinkSelected");
		
		$("#navItemSelected").animate({
			top: '162'
		}, animationDuration)
		
		$(".wrapper").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#portfolioWrapper").fadeIn(animationDuration/2)}, animationDuration);
	}
}

function showResume(){
	if(!$("#resumeWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemResume").addClass("navItemLinkSelected");
		
		$("#navItemSelected").animate({
			top: '213'
		}, animationDuration)
		
		if(viewingItem)
			toggleItem(lastViewedItem);
		
		$(".wrapper").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#resumeWrapper").fadeIn(animationDuration/2)}, animationDuration);
	}
}

function showSocial(){
	if(!$("#socialWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemSocial").addClass("navItemLinkSelected");
		
		$("#navItemSelected").animate({
			top: '264'
		}, animationDuration)
		
		if(viewingItem)
			toggleItem(lastViewedItem);
			
		$(".wrapper").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#socialWrapper").fadeIn(animationDuration/2)}, animationDuration);
	}
}

function toggleItem(itemNumber){
	viewingItem = !viewingItem;
	lastViewedItem = itemNumber;
	$("#portfolioBackground").fadeToggle(animationDuration);
	$("#closePortfolioItemButton").fadeToggle(animationDuration);
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
		$.scrollTo("#item" + itemNumber, animationDuration, {offset: {top:-50}});
	}
}

function closeItem(){
	viewingItem = false;
	$("#portfolioBackground").fadeOut(animationDuration);
	$("#closePortfolioItemButton").fadeOut(animationDuration);
	$("#item" + lastViewedItem).removeClass('itemContentForDescription');
	$("#item" + lastViewedItem).addClass('itemContent');
	$(".itemContent").animate({opacity: 1}, animationDuration);
	$(".itemDescription").hide();
	$.scrollTo("#item" + lastViewedItem, animationDuration, {offset: {top:-50}});
}

