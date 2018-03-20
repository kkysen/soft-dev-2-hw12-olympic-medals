/*
Anish Shenoy
Khyber Sen
SoftDev2 pd07
K12 -- Medallions... of Data!
2017-03-19
*/

//DATA
var data = {"norway": {"medals": [14,14,11], "xcors": [150, 300, 450], "ycors": [250, 250, 250], "colors": ["gold", "silver", "brown"]},
            "sweden": {"medals": [7,6,1], "xcors": [150, 300, 450], "ycors": [250, 250, 250], "colors": ["gold", "silver", "brown"]}};

var svg = d3.select("svg");
var buttons = d3.selectAll("button");
var norwayButton = buttons[0];
var swedenButton = buttons[1];

var generatePage = function(name){

  //generate the 3 circles
  for(var i = 0; i < 3; i++){
    svg.append("circle");
  }

  country_data = data[name];
  circles = d3.selectAll("circle");
  circles.data(country_data["medals"]).attr("r", function(d){ return d * 4; });
  circles.data(country_data["xcors"]).attr('cx', function(d){ return d; });
  circles.data(country_data["ycors"]).attr('cy', function(d){ return d; });
  circles.data(country_data["colors"]).attr('fill', function(d){ return d; });
  circles.attr('stroke', 'green');
};

generatePage("sweden");
