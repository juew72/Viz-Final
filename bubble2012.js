dataset = {
    "children": [{"Name":"Alabama","Count":3873},
        {"Name":"Alaska","Count":1612},
        {"Name":"Arizona","Count":18434},
        {"Name":"Arkansas","Count":2795},
        {"Name":"California","Count":196622},
        {"Name":"Colorado","Count":13327},
        {"Name":"Connecticut","Count":12237},
        {"Name":"Delaware","Count":2208},
        {"Name":"District of Columbia","Count":2811},
        {"Name":"Florida","Count":103047},
        {"Name":"Georgia","Count":26134},
        {"Name":"Guam","Count":1430},
        {"Name":"Hawaii","Count":6764},
        {"Name":"Idaho","Count":2428},
        {"Name":"Illinois","Count":38373},
        {"Name":"Indiana","Count":8359},
        {"Name":"Iowa","Count":4679},
        {"Name":"Kansas","Count":4980},
        {"Name":"Kentucky","Count":5243},
        {"Name":"Louisiana","Count":4454},
        {"Name":"Maine","Count":1497},
        {"Name":"Maryland","Count":24971},
        {"Name":"Massachusetts","Count":31392},
        {"Name":"Michigan","Count":17494},
        {"Name":"Minnesota","Count":12999},
        {"Name":"Mississippi","Count":1583},
        {"Name":"Missouri","Count":6635},
        {"Name":"Montana","Count":503},
        {"Name":"Nebraska","Count":4384},
        {"Name":"Nevada","Count":10343},
        {"Name":"New Hampshire","Count":2466},
        {"Name":"New Jersy","Count":50790},
        {"Name":"New Mexico","Count":3714},
        {"Name":"New York","Count":149505},
        {"Name":"North Carolina","Count":17487},
        {"Name":"North Dakota","Count":1144},
        {"Name":"Ohio","Count":13948},
        {"Name":"Oklahoma","Count":4646},
        {"Name":"Oregon","Count":7791},
        {"Name":"Pennsylvania","Count":25032},
        {"Name":"Puerto Rico","Count":3106},
        {"Name":"Rhode Island","Count":3798},
        {"Name":"South Carolina","Count":3924},
        {"Name":"South Dakota","Count":1521},
        {"Name":"Tennessee","Count":8573},
        {"Name":"Texas","Count":95557},
        {"Name":"Utah","Count":5932},
        {"Name":"Vermont","Count":877},
        {"Name":"Virginia","Count":28227},
        {"Name":"Washington","Count":23060},
        {"Name":"West Virginia","Count":779},
        {"Name":"Wisconsin","Count":6049},
        {"Name":"Wyoming","Count":427},
        {"Name":"Other","Count":1667}]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("body")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(dataset)
    .sum(function(d) { return d.Count; });

var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function(d){
        return  !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

node.append("title")
    .text(function(d) {
        return d.Name + ": " + d.Count;
    });

node.append("circle")
    .attr("r", function(d) {
        return d.r;
    })
    .style("fill", function(d,i) {
        return color(i);
    });

node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Name.substring(0, d.r / 3);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Count;
    })
    .attr("font-family",  "Gill Sans", "Gill Sans MT")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

d3.select(self.frameElement)
    .style("height", diameter + "px");
