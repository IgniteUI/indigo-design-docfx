---
title: Column Chart - Design System Component
_description: The Column Chart Component Symbol is used to quickly compare frequency, count, total, or average of data in different categories with data encoded by vertical bars with equal width and differing lengths..
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Column Chart

 The Column Chart is among the most common chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by vertical bars of equal width and differing heights. They are ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the bottom to the top of the chart towards the values of data points.

## Column Chart Demo

<img class="responsive-img" src="../images/column_chart_demo.png" srcset="../images/column_chart_demo@2x.png 2x" />

The Column Chart comprises of `Title`, a `Legend` that is hidden by default, and `Chart Area` available in Idle and Hover states.

## Title

The Column Chart has a title that can be changed or hidden if not needed by setting its override to ~No Symbol.

<img class="responsive-img" src="../images/column_chart_title-off.png" srcset="../images/column_chart_title-off@2x.png 2x" />

## State

The Column Chart has two states - Idle and Hover. In the Hover state a tooltip is shown upon hovering over a data point, which is then focused and the other columns are dimmed out.

<img class="responsive-img" src="../images/column_chart_tooltip-off.png" srcset="../images/column_chart_tooltip-off@2x .png 2x" />
<img class="responsive-img" src="../images/column_chart_tooltip-on.png" srcset="../images/column_chart_tooltip-on@2x.png 2x" />

## Y-Axis

The Y-axis of the column chart comprises of a Title, Labels, and the Axis itself. The Title and the Labels are configurable and to hide a label simply set its override to ~No Symbol. You may hide the axis line by setting its color to `Transparent` and to hide all elements at once, change the Y-axis override to ~No Symbol.

<img class="responsive-img" src="../images/column_chart_yaxis.png" srcset="../images/column_chart_yaxis@2x.png 2x" />

## Gridlines

The Column Chart has built-in Gridlines to make it easier to visually trace a data point to a value on the Y-axis. To hide them just set their color to `Transparent`.

<img class="responsive-img" src="../images/column_chart_gridlines.png" srcset="../images/column_chart_gridlines@2x.png 2x" />

## Data Points

The Data Points (the columns) can be hidden by setting individual columns to ~No Symbol in order to change their number. The annotations can be changed or removed by deleting their content and placing a Spacebar instead.

<img class="responsive-img" src="../images/column_chart_columns.png" srcset="../images/column_chart_columns@2x.png 2x" />


## Styling

First and foremost, the Column Chart lets you change the color of the series. It is recommended to change it only for another color of the palette we have defined for data visualizations with nuances named series.1, series.2 and so on till series.10. You may also change the colors of the vertical and horizontal axis, the gridlines, as well as the chart area background and border colors. Titles, labels, annotation values etc. are also customizable via the available text styles in the **Indigo.Design System**.

<img class="responsive-img" src="../images/column_chart_styling.png" srcset="../images/column_chart_styling@2x.png 2x" />

## Usage

Use the Column Chart when you want to see the amount of change over a period of time. Always start you numeric Axis at 0, so you don't misrepresent the data. Don't use different colors for the same category. If you use time to represent the change in the category you should always set it on the horizontal axis. Don't use too active color for the Gridlines as it will make the chart hard to read and will take away the focus. If you need a detailed Time-Series analysis  - consider a Line Chart with a Time-Series for this type of data.

| Do                                                                                             | Don't                                                                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/column_chart_do1.png" srcset="../images/column_chart_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/column_chart_dont1.png" srcset="../images/column_chart_dont1@2x.png 2x" /> |

## Additional Resources

Related topic:

- [Line Chart](../line-chart.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
