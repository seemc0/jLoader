# jLoader
A simple jQuery loading screen

Example: http://www.gravitymedia.co.za/jLoader/example.html

# Step 1:

Download and include the jLoader library and stylesheet in your html document. Also link to the jQuery library. (paste this code between the opening and closing ```<head>``` tags):
```
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   <script type="text/javascript" src="scripts/jLoader.js"></script>
   <link href="styles/jLoader.css" rel="stylesheet" />
```
# Step 2:

Download an animated loading graphic and name it "loader.gif" and place it in the "images" folder. I used this one here: http://www.gravitymedia.co.za/jLoader/images/loader.gif

# Step 3:

Directly after your opening body tag, create a div with an id of "jLoader" like so
```
<div id="jLoader"></div>
```

# You're done!
Your html code should look something like this:
```
<!DOCTYPE html>
<html>
<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   <script type="text/javascript" src="scripts/jLoader.js"></script>
   <link href="styles/jLoader.css" rel="stylesheet" />
</head>

<body>
    <div id="jLoader"></div>
    <div id="myContent">
      <h1>My website appears here</h1>
    </div>
</body>
</html>
```
