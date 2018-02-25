var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
    'article-one':{
        title: 'Article One | Ravi Ranjan',
        heading: 'Article One',
        date: 'Feb 16, 2017',
        content:`<p>
                        This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.
                    </p>
                    <p>
                        This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.
                    </p>
                    <p>
                        This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.This is content of my first article.
                    </p>`
    },
    'article-two':{
        title: 'Article Two | Ravi Ranjan',
        heading: 'Article Two',
        date: 'Feb 17, 2017',
        content:`<p>
                        This is content of my second article.
                    </p>`
    },
    'article-three':{
        title: 'Article Three | Ravi Ranjan',
        heading: 'Article Three',
        date: 'Feb 18, 2017',
        content:`<p>
                        This is content of my third article.
                    </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`
    <html>
        
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">HOME</a>
                </div>
                <hr>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
        
    </html>
    
    `;
    return htmlTemplate;
}

var blog={
    title:"blog2"
};

var counter=0;
app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//blog pages
app.get('/blog', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/blogName',function(req, res){
    //blogName==blog-one
    var blogName=req.params.blogName;
    res.send("blog2");
    
   
});

var names=[];
app.get('/submit-name',function(req,res){ //URL=/submit-name?name=xxxxx
   //get the name from the request
   var name=req.query.name;
   names.push(name);
   //JSON
   res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res){
    //articleName==article-one
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
