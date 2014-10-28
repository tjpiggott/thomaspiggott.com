var viewingItem = false;
var lastViewedItem = 0;
var animationDuration = 500;

function showMe(){
	if(!$("#meWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemMe").addClass("navItemLinkSelected");
		
		if(viewingItem)
			toggleItem(lastViewedItem);
			
		$(".wrapper").fadeOut(animationDuration);
		$("#filterTile").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#meWrapper").fadeIn(animationDuration/2)}, animationDuration);
	}
}

function showPortfolio(){
	if(!$("#portfolioWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemPortfolio").addClass("navItemLinkSelected");
		
		$(".wrapper").fadeOut(animationDuration);
		$.scrollTo(0, animationDuration);
		setTimeout(function(){$("#portfolioWrapper").fadeIn(animationDuration/2);}, animationDuration);
	}
}

function showSocial(){
	if(!$("#socialWrapper").is(':visible')){
		$(".navItemLink").removeClass("navItemLinkSelected");
		$("#navItemSocial").addClass("navItemLinkSelected");
		
		if(viewingItem)
			toggleItem(lastViewedItem);
			
		$(".wrapper").fadeOut(animationDuration);
		$("#filterTile").fadeOut(animationDuration);
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
		$.scrollTo("#item" + itemNumber, animationDuration, {offset: {top:-100}});
	}
	else{
		$(".itemContent").animate({opacity: 1}, animationDuration);
		$("#portfolioHead").animate({opacity: 1}, animationDuration);
		$("#item" + itemNumber + "Description").hide();
		$.scrollTo("#item" + itemNumber, animationDuration, {offset: {top:-100}});
	}
}

function closeItem(){
	viewingItem = false;
	$("#portfolioBackground").fadeOut(animationDuration);
	$("#closePortfolioItemButton").fadeOut(animationDuration);
	$("#item" + lastViewedItem).removeClass('itemContentForDescription');
	$("#item" + lastViewedItem).addClass('itemContent');
	$(".itemContent").animate({opacity: 1}, animationDuration);
	$("#portfolioHead").animate({opacity: 1}, animationDuration);
	$(".itemDescription").hide();
	$.scrollTo("#item" + lastViewedItem, animationDuration, {offset: {top:-100}});
}

function filter(filterTag){
	if(filterTag == "all"){
		$(".itemContent").show();
		$("#portfolioFilterTitle").text("Full Portfolio");
		$("#portfolioFilterDescription").text("Take a look at the full list of places I've worked and projects I've worked on.");
	}else{
		$("." + filterTag).show();
		$(".itemContent:not(." + filterTag + ")").hide();
		
		if(filterTag == "filter_dev"){
			$("#portfolioFilterTitle").text("Development Work");
			$("#portfolioFilterDescription").text("Each of the projects in this list involved the creation of a fully functional product that was actually released into the world.");
		}else if(filterTag == "filter_work"){
			$("#portfolioFilterTitle").text("Professional Work");
			$("#portfolioFilterDescription").text("These are the projects that I have done professionally and that I'm allowed to share with the world.");
		}else if(filterTag == "filter_school"){
			$("#portfolioFilterTitle").text("Schoolwork");
			$("#portfolioFilterDescription").text("Projects from my time at the University of Michigan while pursuing my graduate and undergraduate degrees.");
		}else if(filterTag == "filter_infoVis"){
			$("#portfolioFilterTitle").text("Information Visualization");
			$("#portfolioFilterDescription").text("These projects show off my implementation of information visualization and use the Javascript libraries D3 and Protovis.");
		}else if(filterTag == "filter_videoGames"){
			$("#portfolioFilterTitle").text("Video Games");
			$("#portfolioFilterDescription").text("These projects represent my foray into the world of Video Games.");
		}else if(filterTag == "filter_graphics"){
			$("#portfolioFilterTitle").text("Graphic Design");
			$("#portfolioFilterDescription").text("These projects all involved significant amounts of graphic design.");
		}else if(filterTag == "filter_prototypes"){
			$("#portfolioFilterTitle").text("Prototypes");
			$("#portfolioFilterDescription").text("These projects have all involved taking designs and moving them into the prototype stage.");
		}
	}
	
	$.scrollTo(0, animationDuration/2);
}

