# Derrick Moss
Content Update 11-15-2015 (Original Files Added)
Content Update 11-16-2015 (Extreme manipulation and addition of new docs/res/js/imgs)
Content Final Update 11-20-2015
Sending to Github/Udacity after checks 11-23-15

## Udacity Front-End Web Developer Nanodegree Project 2: Online Resume

### Project 2: Online Resume for the Udacity Front-End Web Developer Nanodegree (https://www.udacity.com/course/viewer#!/c-nd001/l-2860078582/m-2948739080) which is Derrick Moss's online resume

#### Package includes the following files:

* **index.html**: main HTML document that contains links to all of the CSS and JS resources
* **README.md**: this document (which labels files for description and tracking)
* **package.json**: the JSON package file
* **css/dmossRes.css**: enhanced css from an original template for project
* **js/helper.js**: the JavaScript (JS) script needed to structure the resume and build the Google map
* **js/jQuery.js**: the jQuery library
* **js/resumeBuilder.js**: the JS script that defines content of the resume (contains specific JSON data/objects needed for resume subject matter)

* resume PDF in the docs directory
* images in the imgs directory

The resume is generated dynamically at runtime via JavaScript resources:
buildHelper.js, helper.js, jQuery.js, and resumeBuilder.js

* Libraries/Languages/Technologies:
jQuery (http://jquery.com/), CSS, HTML &amp; JavaScript

* Tools:
Chrome Dev Tools (https://developer.chrome.com/devtools), JSON Formatter &amp; Validator (https://jsonformatter.curiousconcept.com/), CSS Beautifier (http://html.fwpolice.com/css/), HTML Formatter (http://www.cleancss.com/html-beautify/), W3C CSS Validation Service(https://jigsaw.w3.org/css-validator/) &amp; W3C Markup Validation Service(https://validator.w3.org/)

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

**Original Content of README.md from Udacity Forked Github located at: https://github.com/udacity/frontend-nanodegree-resume**

## How do I complete this project?

1. Go to the [Javascript Basics course](https://www.udacity.com/course/ud804) and select "View Course Materials."
2. Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
3. Review your work against the Project Rubric (on the next page).
4. When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you'll find a large collection of strings containing snippets of HTML. Within many snippets, you'll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You'll need to:

1. Build four JSONs, each one representing a different resume section. The objects that you create need to follow the names within the schema below exactly. Make sure your JSONs are formatted correctly using <a href="http://jsonlint.com/" target="_blank">JSONlint.com</a>.

* `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters

* `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters

* `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters

* `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

2. Iterate through each JSON and append its information to index.html in the correct section.
 * First off, you'll be using jQuery's `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They'll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
* You'll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSONs.
* Here's an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 * Use the mockup at the page of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. Do the following to add it. 
 * In resumeBuilder.js, append the googleMap string to `<div id="mapDiv">`.
 * In index.html, uncomment the Google script element: `<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>`
 * In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
4. All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.
5. Your resume should also `console.log()` information about click locations. On line 90 in helper.js, you'll find a jQuery onclick handler that you'll need to modify to work with the `logClicks(x,y)` function above it.
6. It's possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.