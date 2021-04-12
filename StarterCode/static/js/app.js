
function buildCharts(sample) {

    // Grab values from the data json object to build the plots
    d3.json("samples.json").then((data) => {
 
      var samples= data.samples;
      var resultsArray= samples.filter(sampleObj => sampleObj.id === sample);  
      var result = resultsArray[0];  
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;

      // Bubble Chart
      var bubbleLayout = {
        margin: { t: 0 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        };
  
        var bubbleData = [
        {
          x: ids,
          y: values,
          text: labels,
          mode: "markers",
          marker: {
            color: ids,
            size: values,
            }
        }
      ];
  
      Plotly.plot("bubble", bubbleData, bubbleLayout);
      
      // Bar chart
      var barChart =[
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          orientation:"h"  
        }
      ];
  
      var barLayout = {
        title: "Top 10 Bacteria Cultures",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", barChart, barLayout);
    });
  }
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metaData= data.metaData;
      var resultsArray= metadata.filter(sampleobject => sampleobject.id == sample);
      var result= resultsArray[0]
      var panel = d3.select("#sample-metadata");
      panel.html("");
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key}: ${value}`);
      });
  
    });
  }

// Dropdown
  function init() {
    // Select the element in which should display in the dropdown
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use first sample to initialize plot
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Grab new data when different ID is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  init();
