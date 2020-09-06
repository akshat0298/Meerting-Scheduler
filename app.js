const express = require('express');
const bodyParser = require('body-parser');
const  https = require('https');
const func= require(__dirname+'/func.js');

const app= express();

// const daynum= require(__dirname+'/daynum.js');
// const day=daynum();
// console.log(day);

var day=new Date();
const url = "https://fathomless-shelf-5846.herokuapp.com/api/schedule?date="+'"'+day+'"';

start=[]
end=[]
desp=[]

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const date= require(__dirname+'/date.js');

app.get('/', function(req, res){
	var day=date();
	res.render("ind",{
		start:start,
		end:end,
		desp:desp,
		day:day
	});
});

https.get(url, function(res){
	res.on("data",function(data){
      const element=JSON.parse(data);
      element.forEach(function(item){
      	start.push(item.start_time);
      	end.push(item.end_time);
      	desp.push(item.description);
      })   
});
});
app.get('/Addmeeting', function(req, res){
	res.render('add', {
		start: start
	});
});

app.post('/Addmeeting', function(req,res){
	var s=req.body.start;
	var e=req.body.end;
	var d=req.body.date;

	var b=func(d,s,e);

	console.log(b);
})


app.post('/',function(req,res){
	res.redirect('/Addmeeting');
});



app.post('/prev',function(req,res){
	day.setDate(day.getDate() - 1);
	res.redirect('/');
});
app.post('/next',function(req,res){
	day.setDate(day.getDate() + 1);
	res.redirect('/');
});




app.listen(3000,function(){
	console.log("server on");
});