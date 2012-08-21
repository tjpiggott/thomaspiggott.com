jQuery.noConflict();
var itemOrder = [16, 19, 20, 17, 18, 14, 15, 11, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var viewingItem = false;
var showingPortfolio = false;
var animationDuration = 500;

function setupPortfolio(){
	var marginLeft = 100;
	var forward = true;
	for(var index = 0; index < itemOrder.length; index++){
		jQuery("#item" + itemOrder[index]).css("marginLeft", marginLeft);
		
		if(forward){
			if(marginLeft == 500){
				forward = false;
				marginLeft -= 200;
			}
			else
				marginLeft += 200;
		}
		else{
			if(marginLeft == 100){
				forward = true;
				marginLeft += 200
			}
			else
				marginLeft -= 200;
		} 
	}
}

function showSocial(){
	showingPortfolio = false;
	movePortfolio();
	jQuery("#sideNavItemSelected").animate({
		top: 7,
		height: 40,
	});
}

function showPortfolio(){
	showingPortfolio = true;
	moveInstagramTile();
	jQuery("#sideNavItemSelected").animate({
		top: 50,
		height: 70,
	});
}

function moveInstagramTile(){
	if(showingPortfolio){
		var width = jQuery("#instagramTile").css("width").replace("px", "");
		jQuery("#instagramTile").animate({
		    marginRight: -1 * width,
		    opacity: 0
		  }, animationDuration);
		setTimeout(moveTwitterTile,250);
	}else{
		jQuery("#instagramTile").animate({
		    marginRight: 25,
		    opacity: 1
		  }, animationDuration);
	}
}

function moveTwitterTile(){
	if(showingPortfolio){
		jQuery("#instagramTile").hide();
		var width = jQuery("#twitterTile").css("width").replace("px", "");
		jQuery("#twitterTile").animate({
		    marginLeft: -1 * width,
		    opacity: 0
		  }, animationDuration);
		setTimeout(moveContactTile,250);
	}else{
		jQuery("#twitterTile").animate({
		    marginLeft: 25,
		    opacity: 1
		  }, animationDuration);
		setTimeout(moveInstagramTile,250)
	}
}

function moveContactTile(){
	if(showingPortfolio){
		jQuery("#contactTile").hide();
		var width = jQuery("#contactTile").css("width").replace("px", "");
		jQuery("#contactTile").animate({
		    marginRight: -1 * width,
		    opacity: 0
		  }, animationDuration);
		setTimeout(moveAboutTile,400);
	}else{
		jQuery("#contactTile").animate({
		    marginRight: 0,
		    opacity: 1
		  }, animationDuration);
		setTimeout(moveTwitterTile,450);
	}
}

function moveAboutTile(){
	if(showingPortfolio){
		jQuery("#twitterTile").hide();
		var width = jQuery("#aboutTile").css("width").replace("px", "");
		jQuery("#aboutTile").animate({
		    marginLeft: -1 * width,
		    opacity: 0
		  }, animationDuration);
		setTimeout(movePortfolio,250)
	}else{
		jQuery("#aboutTile").animate({
		    marginLeft: 0,
		    opacity: 1
		  }, animationDuration);
		setTimeout(moveContactTile,450);
	}
}

function movePortfolio(){
	if(showingPortfolio){
		jQuery("#aboutTile").hide();
		jQuery("#portfolioWrapper").fadeIn(500);
	}else{
		jQuery("#instagramTile").show();
		jQuery("#twitterTile").show();
		jQuery("#contactTile").show();
		jQuery("#aboutTile").show();
		jQuery("#portfolioWrapper").fadeOut(500);
		setTimeout(moveAboutTile,500);	
	}
}


