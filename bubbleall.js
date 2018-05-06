var DateColor;

function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}


var Root = {};
var node;
Data = [
{ Date: "2010", Categories: [{ Name: "California", Value: 208446 }, { Name: "New York", Value: 147999 }, { Name: "Florida", Value: 107276 }, { Name: "Texas", Value: 87750 }, { Name: "New Jersey", Value: 56920 }] },
{ Date: "2011", Categories: [{ Name: "California", Value: 210591 }, { Name: "New York", Value: 148426 }, { Name: "Florida", Value: 109229 }, { Name: "Texas", Value: 94481 }, { Name: "New Jersey", Value: 55547 }] },
{ Date: "2012", Categories: [{ Name: "California", Value: 196622 }, { Name: "New York", Value: 149505 }, { Name: "Florida", Value: 103047 }, { Name: "Texas", Value: 95557 }, { Name: "New Jersey", Value: 50790 }] },
{ Date: "2013", Categories: [{ Name: "California", Value: 191806 }, { Name: "New York", Value: 133601 }, { Name: "Florida", Value: 102939 }, { Name: "Texas", Value: 92674 }, { Name: "New Jersey", Value: 53082 }] },
{ Date: "2014", Categories: [{ Name: "California", Value: 198379 }, { Name: "New York", Value: 141406 }, { Name: "Florida", Value: 109310 }, { Name: "Texas", Value: 95295 }, { Name: "New Jersey", Value: 51609 }] },
{ Date: "2014", Categories: [{ Name: "California", Value: 209568 }, { Name: "New York", Value: 130010 }, { Name: "Florida", Value: 118873 }, { Name: "Texas", Value: 99727 }, { Name: "New Jersey", Value: 49801 }] },
{ Date: "2014", Categories: [{ Name: "California", Value: 223568 }, { Name: "New York", Value: 159878 }, { Name: "Florida", Value: 136337 }, { Name: "Texas", Value: 110651 }, { Name: "New Jersey", Value: 56187 }] }
];


BubbleArray = new Array();
window.onload = function () {
    var Categories, Days;
     DateColor = d3.scale.category10();

    BubbleDS = {};
    Data.forEach(function (d) {
        d.Categories.forEach(function (b, i) {
            // checking if the category is already added
            FoundAt = KeyValueindex(BubbleArray, "name", b.Name);
            if (FoundAt > -1) {
                temp = BubbleArray[KeyValueindex(BubbleArray, "name", b.Name)];
                temp.children.push({ "name": d.Date, "value": b.Value, "color": DateColor(d.Date) });
            }
                //if not found new object is created and pushed into array
            else {
                temp = new Object();
                temp.name = b.Name;
                temp.children = new Array();
                temp.children.push({ "name": d.Date, "value": b.Value, color: DateColor(d.Date) });
                BubbleArray.push(temp);
            }

        });
    });


    Root.name = "main"
    Root.children = BubbleArray;
    Bubblechart(Root)

}

function KeyValueindex(array, key, value) {
    var FoundAt = -1;
    array.forEach(function (d, i) {
        if (d[key] == value) {
            FoundAt = i;
        }
    })

    return FoundAt > -1 ? FoundAt : -1;
}

  function Bubblechart(root)
  {

      var diameter = 700,
      format = d3.format(",d");

      var pack = d3.layout.pack()
          .size([diameter - 4, diameter - 4])
          .value(function (d) { return d.value; });

      var svg = d3.select("body").append("svg")
          .attr("width", diameter)
          .attr("height", diameter)
        .append("g")
          .attr("transform", "translate(2,2)");


      var color = d3.scale.linear()
      .domain([-1, 5])
      .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
      .interpolate(d3.interpolateHcl);

       node = svg.datum(Root).selectAll(".node")
              .data(pack.nodes)
            .enter().append("g")
              .attr("class", function (d) { return d.children ? "node" : "leaf node"; })
              .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

      node.append("title")
          .text(function (d) { return d.name + (d.children ? "" : ": " + format(d.value)); });

      node.append("circle")
          .attr("r", function (d) { return d.r; })
          .attr("fill", function (d) { return d.children ? color(d.depth) : d.color });

      node.filter(function (d) { return !d.children; }).append("text")
          .attr("dy", ".1em")
          .style("text-anchor", "middle")
          .style({"font-style":"calibri","font-weight":"bold","fill":"lightgrey"})
          .text(function (d) { return d.value; });

      node.filter(function (d) { return d.children && d.name != "main" })
      .selectAll("circle").attr("class", "categories")
      .each(
      function (dat) {
          svg.append("text")
      .style({ "font-style": "calibri", "font-weight": "bold", "fill": "lightgrey","font-size":"2em","opacity":".7" })
      .text(dat.name)
          .attr("y", function () { return dat.y })
          .attr("x", function () { return dat.x  -getTextWidth(dat.name,"bold 2em calibri")});
      });


      var legend = svg.selectAll(".legend")
.data(DateColor.domain())
.enter().append("g")
.attr("class", "legend")
.attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
          .attr("x", diameter - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", DateColor);

legend.append("text")
          .attr("x", diameter - 24)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function (d) { return d; });

      d3.select(self.frameElement).style("height", diameter + "px");
  }
