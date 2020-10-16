![header image](/images/readmeBanner.jpg "SASS Modules Workshop")

# SASS + AJAX Workshop
[Google Docs Roadmap](https://docs.google.com/document/d/1SSwXIiQPdvruc3d9QbsBFiCMXykN63cleB-4mkwt0TA/edit?usp=sharing 'Google Docs')

## Description:
Rewrite some of the CSS for the course home page (supplied) as SASS. Think about modulare
development and how to break down the page into logical sections. Use the SASS language to
create modules that compile into a production-ready CSS file.

Use an object to store data that will be populated on the page in the appropriate sections. Use
Fetch or XHTTP on a page load to retrieve the data and place it in a data store (your application
state). The content on your page should reflect your application state.


## Assignment Requirements:
Use the supplied CSS file as your starting point. You’ll need to break this down and move parts
of it into modular SASS files - one for the header, one for the nav, one for the main content etc.
Be sure to follow the correct folder structure as outlined in class, and use the required files
(_vars.scss, etc)
Compile your SASS into a production-ready CSS file, and load that into your application.
You’ll likely have more than one CSS file linked in at the top of your index.html file, which is
perfectly fine.
Use branches as appropriate, and merge everything to your master branch.
Create a well-written readme file for the project.

Use the supplied JSON file as your remote resource. It will contain all of the data that
represents your application state.
Create an AJAX request for the JSON file using the Fetch API or the XHTTP object. Use that
application state to build out your application’s view (the course home page).
Your XHTTP / Fetch function should handle the stages of an AJAX request gracefully - give
some feedback if the request fails (use separate functions / handlers for each stage of an AJAX
request). Most importantly, handle failure first - what happens if you can’t connect, if the
resource is missing, etc. This is UX / UI - give the user some visual feedback.
If the AJAX request is successful, build out your view - the content of the page - using the
response data (the application state).


## Additional Resources:
[Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)

## Installation:
No particular installation required. Pull down and open index.html in any modern browser to view the content.

## MIT License:
MIT License

Copyright (c) [2020] [Jonathan Miller]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
