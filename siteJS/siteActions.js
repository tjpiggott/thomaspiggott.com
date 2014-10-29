var viewingItem = false;
var lastViewedItem = 0;
var animationDuration = 500;

function toggleSubsection(subsection, example){
	$('.subsectionExample').hide();
	$(example).show();
	$(subsection).slideToggle(animationDuration);
}
