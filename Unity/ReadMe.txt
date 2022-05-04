Thanks for purchase 'WebGL Template Modern'.

Require Unity 2020.1 to work with the new embed API.

Get Started:

- Import the package in your unity project
- Go to Player Settings -> Resolution and Presentation -> Select 'Modern' as the WebGL Template
- Ready!

Customize:

Go to Player Settings -> Resolution and Presentation -> Select 'Modern' -> with the template selected you should see 3 text fields below the template preview,
if you can't see the fields, try selection one of the other templates and then select the 'Modern' template again,
this is how you use those fields to customize the template:
	 
  ■ Canvas Overlay Color: (Hexadecimal color e.g: f0f0f0) this is the color of the canvas background when the game is loading, you can leave this empty to use the
                          default splash screen color.

  ■ Fullscreen Canvas: Set 1 if you wanna the game canvas cover the whole browser window size, leave EMPTY if you wanna use a specific width and height.

  ■ Main Style Color: (Hexadecimal color e.g: f0f0f0) the color of the progress text and bar UI, if you leave empty, the default fuchsia color will be used.
	 
Change download / loading text: -----------------------------------------------------------------------------------------------------------------
- Open the 'index.html' file located in: WebGLTemplates -> Modern -> index.html with you favorite html / css editor
- Change these lines (at the bottom of the file):

     document.getElementById("loadingInfo").innerHTML = "loading";
	 document.getElementById("loadingInfo").innerHTML = "downloading";
	 
	 
Contact:
for any problem or question you can contact me on:

email: contact.lovattostudio@gmail.com
forum: http://www.lovattostudio.com/forum/index.php