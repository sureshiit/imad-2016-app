var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
    'plant' : { title : 'Plant',
			    heading : 'plant heading',
			    content :'Hi! Welcome to plant. All  construction materials are avalible at best rate.'
		    	} ,
    'dairy' : { title : 'dairy',
			heading : 'Shree balaji dairy Products',
			content : 
					`
					Hi! Welcome to Shree balaji dairy products	. 
					All dairy products are avalible at best rate.`
},
    'tutor' : { title : 'tutor' ,
			heading : 'Shree balaji computer center',
			content : 
					`
					Hi! Welcome to Shree balaji computer center	. 
					All educational solutions are avalible at best rate.

					`
			}
    };

var plant = {
title : 'Plant', 
heading : 'Shree balaji Cement Products',
content : 
		`
		Hi! Welcome to Shree balaji cement products	. 
		All  construction materials are avalible at best rate.

		`
}

/*

var dairy = {
title : 'dairy' ; 
heading : 'Shree balaji dairy Products'; 
content : 
		`
		Hi! Welcome to Shree balaji dairy products	. 
		All dairy products are avalible at best rate.

		`
;}

var dairy = {
title : 'tutor' ; 
heading : 'Shree balaji computer center'; 
content : 
		`
		Hi! Welcome to Shree balaji computer center	. 
		All educational solutions are avalible at best rate.

		`
;}

*/
function CreateTemplate (data) {

	var title = data.title; 
	var heading = data.heading; 
	var content = data.content;
var HtmlTemplate  =  `
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title
        	${title}
        </title>
    </head>
    <body>

        <br>
        <h3>
 			${heading}
        </h3>
        <div class="center text-big bold">
           ${content}
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>

`;
return HtmlTemplate ;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get( '/:articleName', function (req, res) {	

var articleName = req.params.articleName ;

 res.send( CreateTemplate ( articles[articleName] ) );
});
/*
app.get( '/plant', function (req, res) {	
 res.send( CreateTemplate ( plant ) );
});

app.get( '/dairy', function (req, res) {	
 //res.sendFile(path.join(__dirname, 'ui', 'dairy.html'));
 res.send( CreateTemplate ( dairy ) );
});

app.get( '/tutor', function (req, res) {	
// res.sendFile(path.join(__dirname, 'ui', 'tutor.html'));
res.send( CreateTemplate ( tutor ) );
});
*/ 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
