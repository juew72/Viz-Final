window.onload = function () {

  var chart = new CanvasJS.Chart("occuvstype", {

    toolTip: {
      shared: true,
      contentFormatter: function(e){
        var str = "";
        for (var i = 0; i < e.entries.length; i++){
          var  temp = e.entries[i].dataSeries.name + " <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
          str = str.concat(temp);
        }
        return (str);
      }
    },

    data: [
    {
      type: "line",
      name: "Family-Sponsored Visa",
      dataPoints: [
      { label: 'Management, Professional', y: 11532 },
      { label: 'Service', y: 2258 },
      { label: 'Sales and Office', y: 14529 },
      { label: 'Farming, Fishing, Forestry', y: 5018 },
      { label: 'Construction, Extraction, Maintenance', y: 1675 },
      { label: 'Production, Transportation', y: 6941 },
      { label: 'Military', y: 6 },
      { label: 'Homemakers', y: 35023 },
      { label: 'Students or Children', y: 96981 },
      { label: 'Retirees', y: 47 },
      { label: 'Unemployed', y: 15860 },
      { label: 'Others', y: 48217 }
      ]
    },
    {
      type: "line",
      name: "Employment-based Visa",
      dataPoints: [
      { label: 'Management, Professional', y: 56147 },
      { label: 'Service', y: 1600 },
      { label: 'Sales and Office', y: 4628 },
      { label: 'Farming, Fishing, Forestry', y: 196 },
      { label: 'Construction, Extraction, Maintenance', y: 406 },
      { label: 'Production, Transportation', y: 1110 },
      { label: 'Military', y: 11 },
      { label: 'Homemakers', y: 12279 },
      { label: 'Students or Children', y: 35388 },
      { label: 'Retirees', y: 191 },
      { label: 'Unemployed', y: 6252 },
      { label: 'Others', y: 19685 }
      ]
    },
    {
      type: "line",
      name: "Immediate Relatives of US Citizens Visa",
      dataPoints: [
      { label: 'Management, Professional', y: 28829 },
      { label: 'Service', y: 14090 },
      { label: 'Sales and Office', y: 19677 },
      { label: 'Farming, Fishing, Forestry', y: 7396 },
      { label: 'Construction, Extraction, Maintenance', y: 7861 },
      { label: 'Production, Transportation', y: 24434 },
      { label: 'Military', y: 49 },
      { label: 'Homemakers', y: 102975 },
      { label: 'Students or Children', y: 85545 },
      { label: 'Retirees', y: 10371 },
      { label: 'Unemployed', y: 72155 },
      { label: 'Others', y: 193324 }
      ]
    },
    {
      type: "line",
      name: "Diversity Visa",
      dataPoints: [
      { label: 'Management, Professional', y: 11354 },
      { label: 'Service', y: 371 },
      { label: 'Sales and Office', y: 1845 },
      { label: 'Farming, Fishing, Forestry', y: 0 },
      { label: 'Construction, Extraction, Maintenance', y: 193 },
      { label: 'Production, Transportation', y: 326 },
      { label: 'Military', y: 0 },
      { label: 'Homemakers', y: 2237 },
      { label: 'Students or Children', y: 18653 },
      { label: 'Retirees', y: 0 },
      { label: 'Unemployed', y: 0 },
      { label: 'Others', y: 12904 }
      ]
    },
    {
      type: "line",
      name: "Refugees and Asylees Visa",
      dataPoints: [
      { label: 'Management, Professional', y: 7262 },
      { label: 'Service', y: 11026 },
      { label: 'Sales and Office', y: 3339 },
      { label: 'Farming, Fishing, Forestry', y: 0 },
      { label: 'Construction, Extraction, Maintenance', y: 2008 },
      { label: 'Production, Transportation', y: 10338 },
      { label: 'Military', y: 0 },
      { label: 'Homemakers', y: 6127 },
      { label: 'Students or Children', y: 37965 },
      { label: 'Retirees', y: 1139 },
      { label: 'Unemployed', y: 14410 },
      { label: 'Others', y: 63499 }
      ]
    },
    {
      type: "line",
      name: "Others",
      dataPoints: [
      { label: 'Management, Professional', y: 837 },
      { label: 'Service', y: 119 },
      { label: 'Sales and Office', y: 227 },
      { label: 'Farming, Fishing, Forestry', y: 29 },
      { label: 'Construction, Extraction, Maintenance', y: 70 },
      { label: 'Production, Transportation', y: 119 },
      { label: 'Military', y: 0 },
      { label: 'Homemakers', y: 2117 },
      { label: 'Students or Children', y: 7401 },
      { label: 'Retirees', y: 0 },
      { label: 'Unemployed', y: 0 },
      { label: 'Others', y: 22178 }
      ]
    },
  ]
});

chart.render();
}
