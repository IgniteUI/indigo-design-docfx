---
title: Pie Chart - Design System Component
_description: The Pie Chart Component is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Pie Chart 
The Pie Chart is a circular graphic, which is divided into slices or segments to illustrate how categories (parts) of a data set add up to a total (whole) value. Each section, or pie slice, has an arc length, proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%. The Pie Charts are appropriate for small data sets and are easy to read and understand at a glance. The Pie Chart is visually identical to the [Ignite UI for Angular Pie Chart Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/pie-chart.html)

## Pie Chart Demo

<img class="responsive-img" src="../images/pie_chart_demo.png" srcset="../images/pie_chart_demo@2x.png 2x" />
<div class="divider--half"></div>

The Pie Chart comprises of a `Series` group, divided into individual series (slices) and `Labels` with `Hairlines`, pointing at the corresponding serie.

## Series

The Pie Chart component comes with 3, 4 and 5 series amounts. In Figma you can switch between the three using the `Series Amount` property from the properties panel.

<img class="responsive-img" src="../images/pie_chart_series3.png" srcset="../images/pie_chart_series3@2x.png 2x" />
<div class="divider--half"></div>
<img class="responsive-img" src="../images/pie_chart_series4.png" srcset="../images/pie_chart_series4@2x.png 2x" />
<div class="divider--half"></div>
<img class="responsive-img" src="../images/pie_chart_series5.png" srcset="../images/pie_chart_series5@2x.png 2x" />

## Hairlines

The Labels on the Pie Chart have corresponding Hairlines. You can choose from three Labels Positions - Center, InsideEnd and OutsideEnd. In Figma you can change the position simply by selecting the nested Labels Position component and changing the value of the `Position` property from the properties panel. You can also hide the Hairlines on the OutsideEnd type by switching off the boolean property `Hairlines` from the properties panel.

**Center** <br/>
<img class="responsive-img" src="../images/pie_chart_labels_center.png" srcset="../images/pie_chart_labels_center@2x.png 2x" />

**InsideEnd** <br/>
<img class="responsive-img" src="../images/pie_chart_labels_insideend.png" srcset="../images/pie_chart_labels_insideend@2x.png 2x" />

**OutsideEnd** <br/>
<img class="responsive-img" src="../images/pie_chart_labels_outsideend.png" srcset="../images/pie_chart_labels_outsideend@2x.png 2x" />

## Styling 

First and foremost, the Pie Chart lets you change the colors of the series. It is recommended to use only colors from the palette for data visualizations with nuances named series.1, series.2 and so on till series.10. You may also change the colors of the Hairlines, but they should match the corresponding series's colors. The Labels are also customizable via the available text styles in the **Indigo.Design System**.

<img class="responsive-img" src="../images/pie_chart_styling.png" srcset="../images/pie_chart_styling@2x.png 2x" />

## Usage

Use the Pie Chart to visualize how categories (parts) of a data set add up to a total (whole) value. You shouldn't use the same color for two or more categories to avoid confusion and misinterpretation of the data. It's also recommended to stick to a series amount between 3 and 5, in order to keep the Pie Chart easy to read and understand. To reduce chart clutter and make it easier to focus on larger, more significant values or categories, consider using an "Others" category slice or segment to represent the total percentage of all smaller values.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/pie_chart_do.png" srcset="../images/pie_chart_do@2x.png 2x" /> | <img class="responsive-img" src="../images/pie_chart_dont.png" srcset="../images/pie_chart_dont@2x.png 2x" /> |

## Additional Resources

Related topic:

- [Line Chart](line-chart.md)
- [Spline Chart](spline-chart.md)
- [Step Chart](step-chart.md)
- [Column Chart](column-chart.md)
- [Skeleton Charts](skeleton-charts.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
