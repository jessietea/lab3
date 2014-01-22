'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Javascript verified.");
		$('.jumbotron p').toggleClass('active');
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(submitForm);
}

function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	var projectTitle = $(this).find('p').text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.fadeOut();
    }
}

function submitForm(e) {
	var selectedProject = $("#project").val();
	var desiredWidth = $("#width").val();
	$(selectedProject).css("width", desiredWidth);
	var userDescription = $("#description").val();
	if ($(selectedProject).find(".project-description").length == 0) {
		$(selectedProject).append("<div class='project-description'>" + userDescription + "</div>");
	} else {
   		$(selectedProject + " .project-description").text(userDescription);
   	}
}