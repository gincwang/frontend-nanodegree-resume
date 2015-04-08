////////////////////////////////////////////////
////////////////////Bio Area////////////////////
var bio = {
	"name" : "Gin Wang",
	"role" : "Web Developer",
	"welcomeMessage" : "Welcome to my site!",
	"picture" : "images/gin.jpg",
	"contacts" : 
		{	
			"mobile" : "626-689-8876",
			"email" : "gincwang@gmail.com",
			"location" : "2276 Arboreta Ct, San Jose, CA 95116",
			"github" : "github.com/gincwang"
		},
	"skills" : [
		"HTML5", "CSS", "Javascript", "LabVIEW", "MySQL"
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMyPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedMyPic);
	$("#header").append(formattedWelcome);

	if(bio.skills.length >0) {
		$("#header").append(HTMLskillsStart);
		for (var n = 0; n < bio.skills.length; n++){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[n]);
			$("#skills").append(formattedSkills);
		}
	}
}

////////////////////////////////////////////////
////////////////////Work Area///////////////////
var work = {
	"jobs" : [
		{
			"employer" : "NETGEAR",
			"title" : "RF Design Engineer",
			"location" : "San Jose, CA",
			"dates" : "Oct 2010-Present",
			"description" : "Help design, testing, and validation of RF performance in wireless routers. <br> Use automation to increase test efficiency and capacity."
		},
		{
			"employer" : "Non-linear Ion Dynamics",
			"title" : "Intern",
			"location" : "Van Nuys, Los Angeles, CA",
			"dates" : "Jun-Aug 2009",
			"description" : "Experiment with separating gas elements through plasma physics.<br> Work with super-fast camera to capture elemental separation through high energy discharge."
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedYears = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedLocation + formattedYears);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

////////////////////////////////////////////////
////////////////Projects Area///////////////////
var projects = {
	"projects" : [
		{
			"title" : "Intro Project:HTML5 Hello World",
			"dates" : "Mar 2015",
			"description" : "First Exposure to creating HTML page with 'Hello World'",
			"images" : [
				{
					"img1" : "img/img1.jpg",
					"img2" : "img/im2.jpg"
				}
			]
		},
		{
			"title" : "P1: Build a Portfolio Site",
			"dates" : "Mar 2015",
			"description" : "Create a responsive webpage using HTML and css to render as close to the pdf drawing as possible.",
			"images" : [
				{
					"img1" : "img/img1.jpg",
					"img2" : "img/im2.jpg"
				}
			]
		}
	]
};

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var	formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var	formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var	formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		//var	formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		//$("#projects:last").append(formattedProjectImage);
	}
}

////////////////////////////////////////////////
////////////////Education Area//////////////////
var education = {
	"schools" : [
		{
			"name" : "UCLA",
			"location" : "Westwood, Los Angeles, CA",
			"major" : "Electrical Engineering",
			"dates" : "2006-2010",
			"degree" : "Bachelor of Science"
		}
	],
	"onlineCourse" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "03/15/2015-present",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		}
	]
};

education.display = function() {

	for(i = 0; i < education.schools.length ; i++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

}

/////////////////////////////////////////////////
/////////////////Display Objects/////////////////

bio.display();
work.display();
projects.display();
education.display();

/////////////////////////////////////////////////
/////////////Internationalize Button/////////////

function inName(name) {
	var oldName = name;

	name = name.trim().split(" ");
	var lName = name[1].toUpperCase();
	var fName = name[0].toLowerCase();
	fName = fName[0].toUpperCase() + fName.slice(1);
	var newName = fName + " " + lName;

	return newName;
}

$("#main").append(internationalizeButton);

/////////////////////////////////////////////////
////////////////Google Maps Area/////////////////

$("#mapDiv").append(googleMap);






