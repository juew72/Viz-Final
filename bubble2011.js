dataset = {
    "children": [{"Name":"Alabama","Count":4063},
        {"Name":"Alaska","Count":1799},
        {"Name":"Arizona","Count":20333},
        {"Name":"Arkansas","Count":2874},
        {"Name":"California","Count":210591},
        {"Name":"Colorado","Count":13547},
        {"Name":"Connecticut","Count":12577},
        {"Name":"Delaware","Count":2355},
        {"Name":"District of Columbia","Count":2724},
        {"Name":"Florida","Count":109229},
        {"Name":"Georgia","Count":27015},
        {"Name":"Guam","Count":1313},
        {"Name":"Hawaii","Count":7296},
        {"Name":"Idaho","Count":2602},
        {"Name":"Illinois","Count":38325},
        {"Name":"Indiana","Count":8262},
        {"Name":"Iowa","Count":4624},
        {"Name":"Kansas","Count":5086},
        {"Name":"Kentucky","Count":5403},
        {"Name":"Louisiana","Count":4226},
        {"Name":"Maine","Count":1467},
        {"Name":"Maryland","Count":25778},
        {"Name":"Massachusetts","Count":32236},
        {"Name":"Michigan","Count":18347},
        {"Name":"Minnesota","Count":12389},
        {"Name":"Mississippi","Count":1666},
        {"Name":"Missouri","Count":7048},
        {"Name":"Montana","Count":511},
        {"Name":"Nebraska","Count":4535},
        {"Name":"Nevada","Count":10449},
        {"Name":"New Hampshire","Count":2478},
        {"Name":"New Jersy","Count":55547},
        {"Name":"New Mexico","Count":3767},
        {"Name":"New York","Count":148426},
        {"Name":"North Carolina","Count":17571},
        {"Name":"North Dakota","Count":948},
        {"Name":"Ohio","Count":13857},
        {"Name":"Oklahoma","Count":4503},
        {"Name":"Oregon","Count":7694},
        {"Name":"Pennsylvania","Count":25397},
        {"Name":"Puerto Rico","Count":3288},
        {"Name":"Rhode Island","Count":3681},
        {"Name":"South Carolina","Count":4216},
        {"Name":"South Dakota","Count":1337},
        {"Name":"Tennessee","Count":8279},
        {"Name":"Texas","Count":94481},
        {"Name":"Utah","Count":6426},
        {"Name":"Vermont","Count":943},
        {"Name":"Virginia","Count":27767},
        {"Name":"Washington","Count":23789},
        {"Name":"West Virginia","Count":830},
        {"Name":"Wisconsin","Count":6245},
        {"Name":"Wyoming","Count":420},
        {"Name":"Other","Count":1480}]
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
