dataset = {
    "children": [{"Name":"Alabama","Count":3685},
        {"Name":"Alaska","Count":1505},
        {"Name":"Arizona","Count":16908},
        {"Name":"Arkansas","Count":2793},
        {"Name":"California","Count":198379},
        {"Name":"Colorado","Count":10872},
        {"Name":"Connecticut","Count":11252},
        {"Name":"Delaware","Count":2085},
        {"Name":"District of Columbia","Count":3169},
        {"Name":"Florida","Count":109310},
        {"Name":"Georgia","Count":23792},
        {"Name":"Guam","Count":1089},
        {"Name":"Hawaii","Count":5741},
        {"Name":"Idaho","Count":2202},
        {"Name":"Illinois","Count":36535},
        {"Name":"Indiana","Count":8008},
        {"Name":"Iowa","Count":4225},
        {"Name":"Kansas","Count":4861},
        {"Name":"Kentucky","Count":5634},
        {"Name":"Louisiana","Count":4382},
        {"Name":"Maine","Count":1382},
        {"Name":"Maryland","Count":24787},
        {"Name":"Massachusetts","Count":29776},
        {"Name":"Michigan","Count":18185},
        {"Name":"Minnesota","Count":13764},
        {"Name":"Mississippi","Count":1587},
        {"Name":"Missouri","Count":6419},
        {"Name":"Montana","Count":451},
        {"Name":"Nebraska","Count":4442},
        {"Name":"Nevada","Count":10089},
        {"Name":"New Hampshire","Count":2103},
        {"Name":"New Jersy","Count":51609},
        {"Name":"New Mexico","Count":3359},
        {"Name":"New York","Count":141406},
        {"Name":"North Carolina","Count":17152},
        {"Name":"North Dakota","Count":1351},
        {"Name":"Ohio","Count":14641},
        {"Name":"Oklahoma","Count":4441},
        {"Name":"Oregon","Count":7379},
        {"Name":"Pennsylvania","Count":23944},
        {"Name":"Puerto Rico","Count":2709},
        {"Name":"Rhode Island","Count":3297},
        {"Name":"South Carolina","Count":4233},
        {"Name":"South Dakota","Count":1108},
        {"Name":"Tennessee","Count":8507},
        {"Name":"Texas","Count":95295},
        {"Name":"Utah","Count":6166},
        {"Name":"Vermont","Count":791},
        {"Name":"Virginia","Count":28477},
        {"Name":"Washington","Count":22710},
        {"Name":"West Virginia","Count":783},
        {"Name":"Wisconsin","Count":5997},
        {"Name":"Wyoming","Count":414},
        {"Name":"Other","Count":1336}]
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
