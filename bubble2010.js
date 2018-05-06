dataset = {
    "children": [{"Name":"Alabama","Count":3740},
        {"Name":"Alaska","Count":1703},
        {"Name":"Arizona","Count":18243},
        {"Name":"Arkansas","Count":2684},
        {"Name":"California","Count":208446},
        {"Name":"Colorado","Count":12489},
        {"Name":"Connecticut","Count":12222},
        {"Name":"Delaware","Count":2198},
        {"Name":"District of Columbia","Count":2897},
        {"Name":"Florida","Count":107276},
        {"Name":"Georgia","Count":24833},
        {"Name":"Guam","Count":1383},
        {"Name":"Hawaii","Count":7037},
        {"Name":"Idaho","Count":2556},
        {"Name":"Illinois","Count":37909},
        {"Name":"Indiana","Count":8539},
        {"Name":"Iowa","Count":4245},
        {"Name":"Kansas","Count":5501},
        {"Name":"Kentucky","Count":4930},
        {"Name":"Louisiana","Count":4397},
        {"Name":"Maine","Count":1349},
        {"Name":"Maryland","Count":26450},
        {"Name":"Massachusetts","Count":31069},
        {"Name":"Michigan","Count":18579},
        {"Name":"Minnesota","Count":12408},
        {"Name":"Mississippi","Count":1709},
        {"Name":"Missouri","Count":7151},
        {"Name":"Montana","Count":457},
        {"Name":"Nebraska","Count":4400},
        {"Name":"Nevada","Count":10803},
        {"Name":"New Hampshire","Count":2556},
        {"Name":"New Jersy","Count":56920},
        {"Name":"New Mexico","Count":3528},
        {"Name":"New York","Count":147999},
        {"Name":"North Carolina","Count":16112},
        {"Name":"North Dakota","Count":1058},
        {"Name":"Ohio","Count":13585},
        {"Name":"Oklahoma","Count":4627},
        {"Name":"Oregon","Count":7997},
        {"Name":"Pennsylvania","Count":24130},
        {"Name":"Puerto Rico","Count":4283},
        {"Name":"Rhode Island","Count":4027},
        {"Name":"South Carolina","Count":4401},
        {"Name":"South Dakota","Count":987},
        {"Name":"Tennessee","Count":8156},
        {"Name":"Texas","Count":87750},
        {"Name":"Utah","Count":6085},
        {"Name":"Vermont","Count":867},
        {"Name":"Virginia","Count":28607},
        {"Name":"Washington","Count":22283},
        {"Name":"West Virginia","Count":729},
        {"Name":"Wisconsin","Count":6189},
        {"Name":"Wyoming","Count":452},
        {"Name":"Other","Count":1694}]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("div2010")
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
