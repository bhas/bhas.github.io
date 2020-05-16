---
layout: default
title: D3.js Bar Chart using YAML and Jekyll
---

<link rel="stylesheet" type="text/css" href="styles.css">
<h3>D3.js Bar Chart Using YAML and Jekyll</h3>
<p>This is a D3.js bar chart that is driven from dynamically generated JSON, from YAML stored in the _data folder within this Github Pages repository running Jekyll.</p>
<svg id="barChartSvg"></svg>
<p>The YAML can be found in <a href="https://github.com/kinlane/d3-js-using-yaml-jekyll/tree/gh-pages/_data" target="_blank">_data/bar-chart.yaml</a>, but is transformed into the JSON needed for this chart, using <a href="https://github.com/kinlane/d3-js-using-yaml-jekyll/blob/gh-pages/data/bar-chart.json" target="_blank">/data/bar-chart.json</a>, demonstrating how YAML can be used to drive visualizations on Github.</p>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="Charts/barChart.js"></script>
<script>
createBarChart();
</script>