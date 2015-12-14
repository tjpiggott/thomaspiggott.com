var windowHeight = $(window).height();
var showingOverlay = false;

function goToSection(section, offsetAmount){
    $.scrollTo(section, {
        offset: offsetAmount,
        easing:'easeOutSine',
        duration: 750
    });
}

function startup(){
	setupBannerAnimation();
}

function setupBannerAnimation(){
	controlEachLetterInBanner()
	setTimeout(function(){ animateTitle(); animateSubtitle(); }, 2000);
}

function controlEachLetterInBanner(){
	title = $("#bannerTitle");
	title.html(title.text().replace(/./g, "<span>$&</span>"));
	subtitle = $("#bannerSubtitle");
	subtitle.html(subtitle.text().replace(/./g, "<span>$&</span>"));
}

function animateTitle() {
	var index, spans;

    index = 0;
    spans = title.children();
    doOne();

    function doOne() {
      	var span = $(spans[index]);
      	span.animate({ color: "#cccccc" }, 200);
      	setTimeout(function(){ span.animate({ color: "#999999" }, 200); }, 500);
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
      	span.animate({ color: "#cccccc" }, 200);
      	setTimeout(function(){ span.animate({ color: "#666666" }, 200); }, 500);
        setTimeout(next, 25);
    }

    function next() {
    	++index;
    	if (index < spans.length) {
        	doOne();
    	}
    }
}
