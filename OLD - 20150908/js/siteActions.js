var currentSection = "#banner";
var windowHeight = $(window).height();
var title;

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

	title = $("#bannerTitle");
	title.html(title.text().replace(/./g, "<span>$&</span>"));
	subtitle = $("#bannerSubtitle");
	subtitle.html(subtitle.text().replace(/./g, "<span>$&</span>"));
	setTimeout(function(){ animateTitle(); animateSubtitle(); }, 2000);
}

function showSkillDescription(descToShow, descsToHide, skillIcon, skillIcons){
	$(skillIcons).removeClass("skillIconSelected");
	$(skillIcon).addClass("skillIconSelected");
	$(descsToHide).hide();
	$(descToShow).fadeIn(250);
}

function showNav(){
	if(window.pageYOffset < 70){
		$("#navigation").css("bottom", -70 + window.pageYOffset);
	}else{
		$("#navigation").css("bottom", 0);
	}

	var duration = 600;
	var options = "{direction: 'left', easing: 'easeOutQuad'}";
	
	if(window.pageYOffset >= windowHeight * 5){
		currentSection = "#aboutMe";
		$("#arrowDown").addClass("rotated180");
		$("#aboutMeText").show("slide", options, duration);
	}else{
		$("#arrowDown").removeClass("rotated180");
		if(window.pageYOffset >= windowHeight * 4)
			currentSection = "#consulting";
		else if(window.pageYOffset >= windowHeight * 3)
			currentSection = "#skills";
		else if(window.pageYOffset >= windowHeight * 2)
			currentSection = "#projects";
		else if(window.pageYOffset >= windowHeight){
			currentSection = "#welcome";
			$("#welcomeText").show("slide", options, duration);
		}
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
			currentSection = "#projects";
		else if(currentSection == "#projects")
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

function showSectionItem(item, subtitle, subtitleSection, section, contentSection){
	var timing = 250;
	$(subtitleSection).html(subtitle);
	$(section).fadeOut(timing);
	$(section + "Item").removeClass("sectionItemSelected");
	$(item).addClass("sectionItemSelected");
	setTimeout(function(){$(contentSection).fadeIn(timing)}, timing);
}

function animateTitle() {
	var index, spans;

    index = 0;
    spans = title.children();
    doOne();

    function doOne() {
      	var span = $(spans[index]);
      	span.animate({ color: "#666666" }, 200);
      	setTimeout(function(){ span.animate({ color: "#cccccc" }, 200); }, 500);
        setTimeout(next, 40);
    }

    function next() {
    	++index;
    	if (index < spans.length) {
        	doOne();
    	}
    	else {
        	setTimeout(function(){ animateTitle(); animateSubtitle(); }, 5000);
    	}
    }
}

function animateSubtitle() {
	var index, spans;

    index = 0;
    spans = subtitle.children();
    setTimeout(doOne, 200);

    function doOne() {
      	var span = $(spans[index]);
      	span.animate({ color: "#999999" }, 200);
      	setTimeout(function(){ span.animate({ color: "#ffffff" }, 200); }, 500);
        setTimeout(next, 25);
    }

    function next() {
    	++index;
    	if (index < spans.length) {
        	doOne();
    	}
    }
}
