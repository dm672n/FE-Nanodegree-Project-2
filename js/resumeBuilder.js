/*
file provides the JSON data and code for Derrick Moss's resume for the Front-End Web Developer Nanodegree Project 2: Online Resume.
*/

/*
JSON
*/

// personal data
var bio = {
  // about me stuff
  "name": "Derrick Moss",
  "role": "Multimedia Designer/Developer",
  "contacts": {
    "mobile": "770.316.9994",
    "email": "dartiste@dartiste.com",
    "github": "dm672n",
    "twitter": "dartisteStudios",
    "location": "Atlanta"
  },
  "welcomeMsg": "Visionary designer/developer offering 10+ years of user-centered interface design for a wide variety of products and applications. Highly skilled in the concept, creation, and implementation of impactful web sites, screen designs, usability modeling and various creative materials. Well-versed in front-end development and web site transformation. Track record of meeting the most demanding project deadlines, communicating effectively with cross-functional teams, and unearthing creative solutions for all challenges. History of taking a hands-on approach when collaborating with clients to develop technology that bring creative concepts to life.",
  "note": "Grab the resume as a PDF by <a class=\"dartisteBlue-text\" href=js/docs/dMossResume.pdf>clicking here</a>.",
  "skills": ["Graphic & Interactive Design", "Wireframes & Flow Charts", "E-Commerce Applications", "Search Engine Optimization (SEO)", "Project Management", "Navigational Structures", "Information Architecture", "Usability Standards & Testing", "Mock-Up Development", "User Interface (UI) Design", "Web Application Development", "User & Trend Research", "Content Management Systems", "Illustration / Vector Design", "Creative Direction", "User Experience (UX) Design", "Email Campaign Design/Code", "Front-End Development", "Creative Direction", "jQuery Manipulation UI/UX", "Print Collater"],
  "pic": "imgs/dMossPhoto.png",
  // methods
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
        formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        formattedMobile = HTMLmobile.replace("%data%", HTMLtelLink.replace(/%data%/g, bio.contacts.mobile)),
        formattedEmail = HTMLemail.replace("%data%", HTMLemailLink.replace(/%data%/g, bio.contacts.email)),
        formattedGitHub = HTMLgithub.replace("%data%", HTMLgitHubLink.replace(/%data%/g, bio.contacts.github)),
        formattedTwitter = HTMLtwitter.replace("%data%", HTMLtwitterLink.replace(/%data%/g, bio.contacts.twitter)),
        formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
        formattedPic = HTMLbiopic.replace("%data%", bio.pic),
        formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "<p>" + bio.welcomeMsg + "</p>"),
        formattedNote = '<p class="stand-out">[NOTE: ' + bio.note + ']</p>';

    $("#header").prepend(HTMLdivEnd);
    $("#header").prepend(HTMLidDivStart.replace("%data%", "nameDescription"));

    $("#nameDescription").append(formattedPic);
    $("#nameDescription").append(formattedName);
    $("#nameDescription").append(formattedRole);

    // header contacts
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    // footer contacts
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    $("#header").append(HTMLidDivStart.replace("%data%", "summary"));
    $("#header").append(HTMLdivEnd);

    $("#summary").append(HTMLdivEnd);
    $("#summary").append(formattedWelcomeMsg);

    $(".welcome-message").prepend(HTMLskillsSummaryStart);

    if (bio.note) {
      $(".welcome-message").append(formattedNote);
    }

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

// professional experience
var work = {
  // job history
  "jobs": [
    {
      "employer": "AT&T", // AT&T
      "titles": ["Senior UI/UX Engineer"], // title
      "location": "Buckhead, GA",
      "dates": ["2012", "present"],
      "description": "Design and develop Frontend UI/UX for the Sales Dashboard application (reaches 30k internal employees worldwide). In charge of UI/UX/HTML/CSS/JS to be handed over to pure Java Developers and Teradata DB for lightweight Cloud based data driven transfer for real time interaction. In charge of brand standard and identity for entire internal Sales Dashboard team. Create icons and logos, to intranet site designs and enhanced wireframes for development purposes.",
      "url": "https://www.att.com/"
    },
    {
      "employer": "Swift Exchange", // Swift Exchange
      "titles": ["Senior UI/UX Engineer (Consultant)"], // title
      "location": "Alpharetta, GA",
      "dates": ["2012", "2012"],
      "description": "Responsible for designing and developing core app / website code (HTML5, CSS3, jQueryUI) for cutting edge promotional social media banking. Responsible for brand standards and identity for internal and online applications.  Utilized Front End development in a JSF/Eclipse environment for Product Team vision with cross browser compatibility. Hone design standards into something greater according to User Testing and Usability Studies conducted by 3rd Party vendors for company.",
      "url": "http://www.swiftexchange.com/"
    },
    {
      "employer": "Altisource", // Altisource
      "titles": ["Senior UI/UX Designer (Consultant)"], // title
      "location": "Atlanta, GA",
      "dates": ["2011", "2011"],
      "description": "Responsible for designing and developing UI/UX for the REALTrans and Asset Management online applications. Collaborated in the new design theme and brand style for an updated web presence and online experience for Altisource consumers. Worked with Senior Product Manager, Project Managers, BA's, and Web Development Team to deliver enhanced usability within a visual solution for the new interface. Utilized new functionality within HTML5, CSS3, and ExtJS to accomplish cutting edge interaction with the user.",
      "url": "http://http://www.altisource.com/"
    },
    {
      "employer": "Delta", // Delta
      "titles": ["GUI Developer (Consultant) "], // title
      "location": "Hapeville, GA",
      "dates": ["2011", "2011"],
      "description": "Developed Polaris Loyalty Tower apps such as Login, Account Maintenance, Profile, Sky Club and Purchasing utilizing HTML/CSS/jQuery/JavaScript/JSP pages through Clearcase/RAD and Adobe Day. Created from Razorfish's wireframes and comps, the Delta brand standards for page integration with Java Dev. Managed onsite and offshore GUI Developer teams and structured the technical specifications and guidelines.",
      "url": "http://www.delta.com/"
    },
    {
      "employer": "AT&T", // AT&T
      "titles": ["CXT Designer (Consultant)"], // title
      "location": "Atlanta, GA",
      "dates": ["2010", "2011"],
      "description": "Matched exact brand standards while creating templates for a major UI/UX brand integration. Developed an online chat wizard interface and worked with HTML/CSS/jQuery. Produced a creative landing experience on Mobile Windows Phone7 for Web Engineers.",
      "url": "http://www.att.com/esupport/index.jsp"
    },
    {
      "employer": "Kaplan", // Kaplan
      "titles": ["Multimedia Designer / Developer (Consultant)"], // title
      "location": "Alpharetta, GA",
      "dates": ["2010", "2011"],
      "description": "Designed Web 2.0 site, utilized CMS to update existing code, and developed HTML/CSS/jQuery. Significantly improved user experience; enhanced layout, design, and function by tweaking the interaction of proprietary software UI. Created distinctive brand identity, print collateral, and online marketing materials for a new company branch. Developed compelling walk-through tradeshow booth experience. Cleaned up HTML to function in popular email programs.",
      "url": "http://www.kaplan.com/"
    }
  ],
  // methods
  display: function() {
    for (var job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);

      // concatenate titles
      var titles = "";

      for (var title in work.jobs[job].titles) {
        titles += work.jobs[job].titles[title] + (title < work.jobs[job].titles.length - 1 ? "/" : "");
      }

      // if there's a URL associated with this job, then create a valid anchor
      // (<a></a>) element that the employer name will link to
      var formattedJob = HTMLentityName.replace("%data%", (work.jobs[job].url !== null ? HTMLentityLink.replace("%data%", work.jobs[job].employer).replace("%url%", work.jobs[job].url) : work.jobs[job].employer)),
          formattedTitle = HTMLentityTitle.replace("%data%", titles),
          formattedLocation = HTMLentityLocation.replace("%data%", "(" + work.jobs[job].location + ")"),
          formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates[0] + " - " + work.jobs[job].dates[1]),
          formattedDescription = HTMLentityDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedJob);
      $(".work-entry:last > .name-text").append(formattedLocation);
      $(".work-entry:last").append(HTMLclassDivStart.replace("%data%", "entry-data"));
      $(".work-entry:last > .entry-data").append(formattedTitle);
      $(".work-entry:last > .entry-data").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
      // remove empty paragraph tags inserted systematically by descriptions w/ ul
      $(".work-entry:last > p:empty").remove();
    }
  }
};

// projects
var projects = {
  // consultant samples
  "freelance": [
    {
      "title": "AT&T Design for Online Chat App",
      "dates": ["2011"],
      "description": "Designed concepts for chat interaction for customer online portal.",
      "images": [{"img": "imgs/VEtoLCtransitionV1.jpg", "alt": "Chat Design for Interaction"}],
      "url": "imgs/VEtoLCtransitionV1.jpg"
    },
    {
      "title": "PGi Design",
      "dates": ["2007"],
      "description": "Designed concepts new interactive online meetings.",
      "images": [{"img": "imgs/microsite-iMeetV13e.jpg", "alt": "Web Design for Online Meetings"}],
      "url": "imgs/microsite-iMeetV13e.jpg"
    },
    {
      "title": "Adobe Illustrator/Photoshop for Budget Conferences",
      "dates": ["2005"],
      "description": "Developed concept for new landing page.",
      "images": [{"img": "imgs/vector02.jpg", "alt": "Concept for online Marketing Campaign"}],
      "url": "imgs/vector02.jpg"
    },
    {
      "title": "Adobe Illustrator Line Art for the Art Institute of Atlanta",
      "dates": ["2001"],
      "description": "Drew from scratch the image for getting out of an Illustrator class.",
      "images": [{"img": "imgs/vector01.jpg", "alt": "Line Art of Female Model"}],
      "url": "imgs/vector01.jpg"
    }
  ],
  // methods
  display: function() {
    for (var project in this.freelance) {
      $('#projects').append(HTMLprojectStart);

      // if there's a URL associated with this project, then create a valid
      // anchor (<a></a>) element that the project name will link to
      var formattedProject = HTMLentityName.replace("%data%", (this.freelance[project].url !== null ? HTMLentityLink.replace("%data%", this.freelance[project].title).replace("%url%", this.freelance[project].url) : this.freelance[project].title)),
          formattedDates = HTMLprojectDates.replace("%data%", this.freelance[project].dates[0]),
          formattedDescription = HTMLentityDescription.replace("%data%", this.freelance[project].description);

      $(".project-entry:last").append(HTMLclassDivStart.replace("%data%", "entry-data"));
      $(".project-entry:last > .entry-data").append(formattedProject);
      $(".project-entry:last > .entry-data").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);

      // gather and output project images
      for (var image in this.freelance[project].images) {
          var formattedImg = HTMLprojectImage.replace("%data%", this.freelance[project].images[image]["img"]).replace("%description%", this.freelance[project].images[image]["alt"]);

          console.log(this.freelance[project].images[image]["img"]);
          console.log(this.freelance[project].images[image]["alt"]);

          $(".project-entry:last").append(formattedImg);
      }
    }
  }
};

// education
var education = {
  // schools and courses
  "schools": [
    {
      "name": "The University of Alabama", // UA
      "location": "Tuscaloosa, AL",
      "degree": "Bachelor of Arts",
      "focus": "Art / Advertising", // (major)
      "dates": [1990, 1993],
      "url": "https://www.ua.edu/"
    },
    {
      "name": "Troy University", // Troy U
      "location": "Troy, AL",
      "degree": "Math Minor",
      "focus": "Undergraduate", // (major)
      "dates": [1988, 1990],
      "url": "http://www.troy.edu/"
    }
  ],
  "courses": [
    {
      "title": "Adobe Flash: Actionscript", // Adobe Flash: AS3
      "school": "Sterling Ledet",
      "type": "Online",
      "dates": [2003],
      "url": "https://www.ledet.com/"

    },
    {
      "title": "Adobe Photoshop: Advanced", // Adobe Photoshop: Advanced
      "school": "Sterling Ledet",
      "type": "Online",
      "dates": [2001],
      "url": "https://www.ledet.com/"
    }
  ],
  // methods
  display: function() {
    for (var school in education.schools) {
      $('#education').append(HTMLschoolStart);

      // if there's a URL associated with this school, then create a valid
      // anchor (<a></a>) element that the school name will link to
      var formattedSchool = HTMLentityName.replace("%data%",  (education.schools[school].url !== null ? HTMLentityLink.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url) : education.schools[school].name)),
          formattedLocation = HTMLentityLocation.replace("%data%",  "(" + education.schools[school].location + ")"),
          formattedDegree = HTMLentityTitle.replace("%data%", education.schools[school].degree),
          formattedFocus = HTMLentityDescription.replace("%data%", "Focus/Major: " + education.schools[school].focus);
      // dates
      var dates = education.schools[school].dates[0] +  (education.schools[school].dates.length > 1 ? " - " + education.schools[school].dates[1] : ""),
          formattedDates = HTMLschoolDates.replace("%data%", dates);

      $(".education-entry:last").append(formattedSchool);
      $(".education-entry:last > .name-text").append(formattedLocation);
      $(".education-entry:last").append(HTMLclassDivStart.replace("%data%", "entry-data"));
      $(".education-entry:last > .entry-data").append(formattedDates);
      $(".education-entry:last > .entry-data").append(formattedDegree);
      $(".education-entry:last").append(formattedFocus);
    }

    // only display if additional coursework exists
    if (education.courses.length > 0) {
      $('#education').append(HTMLotherCourses);
    }

    for (var course in education.courses) {
      $('#education').append(HTMLschoolStart);

      // if there's a URL associated with this school, then create a valid
      // anchor (<a></a>) element that the school name will link to
      var formattedSchool = HTMLentityName.replace("%data%", (education.courses[course].url !== null ? HTMLentityLink.replace("%data%", education.courses[course].school).replace("%url%", education.courses[course].url) : education.courses[course].school)),
          formattedCourse = HTMLentityTitle.replace("%data%", education.courses[course].title),
          formattedType = HTMLentityDescription.replace("%data%", "Course Type: " + education.courses[course].type);
      // dates
      var dates = education.courses[course].dates[0] +  (education.courses[course].dates.length > 1 ? " - " + education.courses[course].dates[1] : ""),
      formattedDates = HTMLschoolDates.replace("%data%", dates);

      $(".education-entry:last").append(formattedSchool);
      $(".education-entry:last").append(HTMLclassDivStart.replace("%data%", "entry-data"));
      $(".education-entry:last > .entry-data").append(formattedCourse);
      $(".education-entry:last > .entry-data").append(formattedDates);
      $(".education-entry:last").append(formattedType);
    }
  }
};

/******************************************************************************
 * Main (Page)
 *****************************************************************************/
$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});

/******************************************************************************
 * Header (Personal Data Summary)
 *****************************************************************************/
bio.display();

/******************************************************************************
 * Professional Experience
 *****************************************************************************/
work.display();

/******************************************************************************
 * Professional Experience
 *****************************************************************************/
projects.display();

/******************************************************************************
 * Education
 *****************************************************************************/
education.display();

/******************************************************************************
 * Google Map
 *****************************************************************************/
$("#mapDiv").append(googleMap);