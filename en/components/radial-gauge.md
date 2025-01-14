---
title: Radial Gauge - Design System Component
_description: The Radial Gauge Component Symbol is a data visualization that displays a value in a certain context.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma HTML, Figma UI kits, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular
---

# Radial Gauge

Use the Radial Gauge Component as a circular-shaped data visualization that displays a value within context depicted by color-coded ranges underneath. The Radial Gauge is visually identical to the [Ignite UI for Angular Radial Gauge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/radialgauge.html)

For scenarios where a target value is critically important for understanding and interpreting the information, you should use the [Bullet Graph](bullet-graph.md) instead.

## Radial Gauge Demo

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />

## Needle Type

The Radial Gauge provides various overrides that control the shape of the needle, which indicates the current value: Needle, Trapezoid, and Triangle. In Figma, you can switch between these types by selecting the `Needle Shape` instance and then choosing the type from the right sidebar.

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_needle@2x.png 2x" />

## Ticks Type

The ticks of the Radial Gauge can be placed outside or inside, with two inside variants for Thick and Thin range areas. In Figma you can select the `Ranges` and the `Ticks Type` from the provided properties in the right sidebar.

<img class="responsive-img" src="../images/radial_gauge_inside.png" srcset="../images/radial_gauge_inside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_outside.png" srcset="../images/radial_gauge_outside@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_inside-2.png" srcset="../images/radial_gauge_inside-2@2x.png 2x" />

## Ranges

The Radial Gauge provides various overrides that control the ranges on the dial: Full, Half, and Quarter. In Figma select the `Range` property to be the same for Ranges and Ticks from the right sidebar.

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_half.png" srcset="../images/radial_gauge_half@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_quarter.png" srcset="../images/radial_gauge_quarter@2x.png 2x" />

## Series Thickness

The Radial Gauge comes with two kinds of Series Thickness: Thick and Thin. In Figma use the right sidebar properties and select between the two Series Thickness options.

<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_full-thin.png" srcset="../images/radial_gauge_full-thin@2x.png 2x" />

## Ranges Amount

The Radial Gauge comes with three preset range configurations: two, three, and four ranges. In Figma you can change the Ranges amount using the `Ranges Amount` property in the properties panel.

<img class="responsive-img" src="../images/radial_gauge_two_ranges.png" srcset="../images/radial_gauge_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_three_ranges.png" srcset="../images/radial_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/radial_gauge_four_ranges.png" srcset="../images/radial_gauge_four_ranges@2x.png 2x" />

## Styling

The Radial Gauge comes with styling flexibility through the various options for background color and a selection of brushes including Needle Brush, a collection of Range Brushes, as well as Tick Brush and Minor Tick Brush that are available only for inside and outside dial types.

<img class="responsive-img" src="../images/radial_gauge_styling.png" srcset="../images/radial_gauge_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Linear and Radial Gauges based on the amount of screen space you have at hand. Keep in mind that Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the Line or Column chart.
To create an easy on the eye and crisp data visualization pick colors for the Needle that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret. Unlike the [Linear Gauge](linear-gauge.md), the Radial Gauge Component has enough empty space around and you may layout a collection of Radial Gauges next to one another without sacrificing comprehension of the information that they display.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/radial_gauge_do.png" srcset="../images/radial_gauge_do@2x.png 2x" /> | <img class="responsive-img" src="../images/radial_gauge_dont.png" srcset="../images/radial_gauge_dont@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Bullet Graph](bullet-graph.md)
- [Linear Gauge](linear-gauge.md)
- [Line Chart](line-chart.md)
- [Column Chart](column-chart.md)

Our community is active and always welcoming to new ideas.
