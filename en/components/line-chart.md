---
title: Line Chart - Design System Component
_description: The Line Chart Component Symbol shows data as a series of points connected by straight lines.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Line Chart

 A Line Chart is a type of category line graph that shows the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on the left side) shows numeric values, while the X-Axis (labels at the bottom) shows a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart. The Line Chart is identical to the Spline Chart in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.


## Line Chart Demo

<img class="responsive-img" src="../images/line_chart_demo.png" srcset="../images/line_chart_demo@2x.png 2x" />

The Line Chart has Title, Legend, and Chart Area, where you choose between Idle and Hover states. It also supports two chart types: Line and Area with a number of Series Amount configurations and allows to adjust the Legend accordingly.

## Title

The Line Chart has a title that when not needed can be removed by setting its override to ~No Symbol.

<img class="responsive-img" src="../images/line_chart_title.png" srcset="../images/line_chart_title@2x.png 2x" />

## Legend

The Line Chart comes with a Legend to show the number of series in it and what they represent. The Legend is built using a Smart Layout in Sketch and can be adjusted to contain the exact amount of series items by setting the overrides of those not needed to ~No Symbol. Legend items' shape is also configurable with built-in support for rectangle, line, and dot.

<img class="responsive-img" src="../images/line_chart_legend.png" srcset="../images/line_chart_legend@2x.png 2x" />
<img class="responsive-img" src="../images/line_chart_legend-off.png" srcset="../images/line_chart_legend-off@2x.png 2x" />

## Chart Type

The Chart Type allows switching between Line and Area. The latter one has the area between the X-axis and the line filled with the series' color. Area charts are used to represent how big of a change there is and what the trend is over time.

<img class="responsive-img" src="../images/line_area_chart_three_series.png" srcset="../images/line_area_chart_three_series@2x.png 2x" />

## State

The Line Chart has two states - Idle and Hover. In the Hover state a tooltip, giving information about the series' values at this point, is shown upon hovering over a data point.

<img class="responsive-img" src="../images/line_area_chart_tooltip-off.png" srcset="../images/line_area_chart_tooltip-off@2x.png 2x" />
<img class="responsive-img" src="../images/line_area_chart_tooltip-on.png" srcset="../images/line_area_chart_tooltip-on@2x.png 2x" />

## Y-Axis

The Y-axis of the Line chart comprises of a Title, Labels and an Axis. The title and the labels can be changed or hidden. To hide the title just type a Spacebar in its field and to hide a label set its override to ~No Symbol. Changing the Axis' color from the default transparent color will show it if needed. And to hide all of the Y-axis change its state to ~No Symbol.

<img class="responsive-img" src="../images/line_chart_yaxis.png" srcset="../images/line_chart_yaxis@2x.png 2x" />

## Gridlines

The Gridlines can change color, making them more or less visible and active. To hide them select their color to transparent.

<img class="responsive-img" src="../images/line_chart_gridlines.png" srcset="../images/line_chart_gridlines@2x.png 2x" />

## Line and Points

The line and its corresponding points' color on the chart can be changed if it's needed. If the series color is changed the points' color should also be changed to match the color of the series.

<img class="responsive-img" src="../images/line_chart_colors.png" srcset="../images/line_chart_colors@2x.png 2x" />

## Series Amount

This override provides flexibility to select between one, two and **three** series that will be rendered. They can also be changed for the Line Area Chart type.

<img class="responsive-img" src="../images/line_chart_one_series.png" srcset="../images/line_chart_one_series@2x.png 2x" />
<img class="responsive-img" src="../images/line_chart_two_series.png" srcset="../images/line_chart_two_series@2x.png 2x" />
<img class="responsive-img" src="../images/line_chart_three_series.png" srcset="../images/line_chart_three_series@2x.png 2x" />

<img class="responsive-img" src="../images/line_area_chart_one_series.png" srcset="../images/line_area_chart_one_series@2x.png 2x" />
<img class="responsive-img" src="../images/line_area_chart_two_series.png" srcset="../images/line_area_chart_two_series@2x.png 2x" />
<img class="responsive-img" src="../images/line_area_chart_three_series.png" srcset="../images/line_area_hart_three_series@2x.png 2x" />

## Styling

The Line and Area Line Chart's color of the series, dots and area can be easily changed and also border and background color.

<img class="responsive-img" src="../images/line_chart_styling.png" srcset="../images/line_chart_styling@2x.png 2x" />

## Usage

Use the Line Chart when you have a continuous data set and want to see the amount of change over a period of time. If you use time to represent the change in the category you should always set it on the horizontal axis. Always start the Y-Axis at 0 so data comparison is accurate and order time-series data from left to right. Use proper aspect ratio to minimize dramatic slope drops. When there are more than one serie in the chart it is best they be different colors to be distinguishable. It is also good to have a legend signifying the different colors in the series and what they represent.


 | Do                                                                                             | Don't                                                                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/line_chart_do1.png" srcset="../images/line_chart_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/line_chart_dont1.png" srcset="../images/line_chart_dont1@2x.png 2x" /> | 

## Additional Resources

Related topics:

- [Spline Chart](spline-chart.md)
- [Step Line Chart](step-line-chart.md)
- [Column Chart](column-chart.md)

Our community is active and always welcoming to new ideas.
