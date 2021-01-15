---
title: Radial Gauge - Design System Component
_description: The Radial Gauge Component Symbol is a data visualization that displays a value in a certain context.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Radial Gauge

Use the Radial Gauge Component as a circular-shaped data visualization that displays a value within context depicted by color-coded ranges underneath. The Radial Gauge is visually identical to the [Ignite UI for Angular Radial Gauge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radialgauge.html)

For scenarios where a target value is critically important for understanding and interpreting the information, you should use the [Bullet Graph](bullet-graph.md) instead.

## Radial Gauge Demo

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />

## Needle Type

The Radial Gauge provides various overrides that control the shape of the needle, which indicates the current value: **needle**, trapezoid, and triangle.

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_trapezoid.png" srcset="../images/radial_gauge_trapezoid@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_triangle.png" srcset="../images/radial_gauge_triangle@2x.png 2x" />

## Ranges

The Radial Gauge provides various overrides that control the dial, on which ranges appear: **full**, half, and quarter.

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_half.png" srcset="../images/radial_gauge_half@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_quarter.png" srcset="../images/radial_gauge_quarter@2x.png 2x" />

## Series Thickness

The Radial Gauge comes with two kinds of Series Thickness - Thick and Thin. Depending on the example that is needed you can switch between one or the other. Here are the examples for the Thin series.

<img class="responsive-img" src="../images/radial_gauge_full-thin.png" srcset="../images/radial_gauge_full-thin@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_half-thin.png" srcset="../images/radial_gauge_half-thin@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_quarter-thin.png" srcset="../images/radial_gauge_quarter-thin@2x.png 2x" />

## Ticks Type

The ticks of the Radial Gauge can be placed **outside** or inside, with two inside variants for thick and thin range areas.

<img class="responsive-img" src="../images/radial_gauge_inside.png" srcset="../images/radial_gauge_inside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_outside.png" srcset="../images/radial_gauge_outside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_inside-2.png" srcset="../images/radial_gauge_inside-2@2x.png 2x" />

## Ranges Amount

The Radial Gauge comes with three preset range configurations: **two**, three, and four ranges.

<img class="responsive-img" src="../images/radial_gauge_two_ranges.png" srcset="../images/radial_gauge_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_four_ranges.png" srcset="../images/radial_gauge_four_ranges@2x.png 2x" />

## Styling

The Radial Gauge comes with styling flexibility through the various overrides controlling the background color and a range of brushes including: Needle Brush and a collection of Range Brushes, as well as Tick Brush and Minor Tick Brush that are available only for inside and outside dial types. For the Range brushes it is recommended to choose one of the data viz Series palette colors.

<img class="responsive-img" src="../images/radial_gauge_styling.png" srcset="../images/radial_gauge_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Linear and Radial Gauges based on the amount of screen space you have at hand. Keep in mind that Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the Line or Column chart.
To create an easy to the eye and crisp data visualization pick colors for the Needle that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret. Unlike the [Linear Gauge](linear-gauge.md), the Radial Gauge Component has enough empty space around and you should can laying out a collection of Radial Gauges next to one another without sacrificing comprehension of the information that they display.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/radial_gauge_do.png" srcset="../images/radial_gauge_do@2x.png 2x" /> | <img class="responsive-img" src="../images/radial_gauge_dont.png" srcset="../images/radial_gauge_dont@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Bullet Graph](bullet-graph.md)
- [Line Chart](line-chart.md)
- [Column Chart](column-chart.md)
- [Linear Gauge](linear-gauge.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

