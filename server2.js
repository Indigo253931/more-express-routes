var express = require('express');
var app = express();


app.get("/burgers", function(req, res){
	if (res.query.id) !== undefined){

}
res.send(burgers.join(", "));
});

app.get("/");


var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.findById('/tacos/:id', function(req, res){
  console.log('taco show', req.params);
for(var i=0; i < tacos.length; i++) {
    if (tacos._id === req.params.id) {
      res.json(tacos[i]);
      break; 
    }
}
});

app.get("/tacos/2", function(req, res){
	var taco = parseInt(req.query.taco);

    res.send("Super Taco");
});

app.get("/pickanumber?number=10", function (req, res) {
    var number = parseInt(req.query.number);
    if (number === 7) {
        res.send("nailed it!");
        }else if (number < 7){
		res.send("too low");
		} else {
			(res.send("too high")
		);}

         res.send("You picked " + number + "!");
	});
 

 app.listen(3000, function(){
console.log("go to local host 3000");
 }
 }
    
};