var currentSection = "#banner";
var windowHeight = $(window).height();

function startup(){
	$("#banner").css('height', windowHeight);
	$(".section").css('height', windowHeight);
	$("#pageContent").css("display", "block");

	if(windowHeight < 600)
		$("#bannerLogo").css("width", "350px");

	$(window).scroll(showNav);

	$("#bannerLogo").fadeIn(500);
	setTimeout(function(){$("#bannerTitle").fadeIn(500);}, 200);
	setTimeout(function(){$("#bannerSubtitle").fadeIn(500);}, 400);
	setTimeout(function(){$("#arrowDown").fadeIn(400);}, 600);

	setTimeout(function(){$("#welcome").addClass("welcome")}, 1000);
	setTimeout(function(){$("#aboutMe").addClass("aboutMe")}, 1000);

	Tipped.create('.skillIcon', '', {
		position: 'right',
		maxWidth: 350,
		skin: 'black',
		size: 'large',
		radius: false
	});
}

function showNav(){
	if(window.pageYOffset < 70){
		$("#navigation").css("bottom", -70 + window.pageYOffset);
	}else{
		$("#navigation").css("bottom", 0);
	}

	if(window.pageYOffset >= windowHeight * 5){
		currentSection = "#aboutMe";
		$("#arrowDown").addClass("rotated180");
	}else{
		$("#arrowDown").removeClass("rotated180");
		if(window.pageYOffset >= windowHeight * 4)
			currentSection = "#consulting";
		else if(window.pageYOffset >= windowHeight * 3)
			currentSection = "#skills";
		else if(window.pageYOffset >= windowHeight * 2)
			currentSection = "#finishedProducts";
		else if(window.pageYOffset >= windowHeight)
			currentSection = "#welcome";
		else if(window.pageYOffset == 0)
			currentSection = "#banner";
	}
}

function toNextSection(section){
	if(section == ""){
		console.log("ArrowDown: -" + section + "- " + currentSection)
		if(currentSection == "#banner")
			currentSection = "#welcome";
		else if(currentSection == "#welcome")
			currentSection = "#finishedProducts";
		else if(currentSection == "#finishedProducts")
			currentSection = "#skills";
		else if(currentSection == "#skills")
			currentSection = "#consulting";
		else if(currentSection == "#consulting"){
			currentSection = "#aboutMe";
			$("#arrowDown").addClass("rotated180");
		}else if(currentSection == "#aboutMe"){
			currentSection = "#banner";
			$("#arrowDown").removeClass("rotated180");
			setTimeout(function(){currentSection = "#banner"}, 500);
			console.log("giggity");
		}
		$.scrollTo(currentSection, 500);
	}else{
		currentSection = section;
		if(currentSection == "#aboutMe"){
			$("#arrowDown").addClass("rotated180");
		}else{
			$("#arrowDown").removeClass("rotated180");
		}
		$.scrollTo(currentSection, 500);
	}
}

function showSectionItem(section, item){
	var timing = 250
	$(section).fadeOut(timing);
	setTimeout(function(){$(item).fadeIn(timing)}, timing);
}