
const  https = require('https');
module.exports=check;

function check(day,s,e) {
	var a=1
	start=[]
	end=[]
	desp=[]
	const url = "https://fathomless-shelf-5846.herokuapp.com/api/schedule?date="+'"'+day+'"';

	https.get(url, function(res){
		res.on("data",function(data){
	      const element=JSON.parse(data);
	      element.forEach(function(item){
	      	start.push(item.start_time);
	      	end.push(item.end_time);
	      	desp.push(item.description);
	      })  

});
	var b=1	
	for(i=0; i<start.length;i++){
		if (start[i]==s){
			console.log("a");
			alert("Slot not available");
			b=10
		}
	}
	 if (b==1){
	 	alert("Slot available");
	 }

});

}