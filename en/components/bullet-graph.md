---
title: Bullet Graph - Design System Component
_description: The Bullet Graph Component Symbol is a data visualization that displays contextual progress of a value to a target value.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Bullet Graph

Use the Bullet Graph Component as a data visualization that displays the progress of a value to a target value, within context depicted by color-coded ranges underneath. The Bullet Graph is visually identical to the [Ignite UI for Angular Bullet Graph Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/bulletgraph.html)

For scenarios where no target value exists or is irrelevant you should use the [Linear Gauge](linear-gauge.md) instead.

## Bullet Graph Demo

<img class="responsive-img" src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />

## Title and Subtitle

The Bullet Graph has a Title and Subtitle whose text can be changed. They can also be hidden if they are not needed.

//add image

## Legend

The Bullet Graph comes with a Legend that can be adjusted to match the selected Series Amount. //explain how to add/remove legend items by setting them to No Symbol or the Serie Item

//add image

## Tooltip

The Bullet Graph comes with an override for the tooltip visibility: **Tooltip Off** hides it and Tooltip On shows it on top of the series.

<img class="responsive-img" src="../images/bullet_graph_tooltip-off.png" srcset="../images/bullet_graph_tooltip-off@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_tooltip-on.png" srcset="../images/bullet_graph_tooltip-on@2x.png" />

## Ranges Amount

The Bullet Graph comes with three preset range configurations: two, **three**, and four ranges.

<img class="responsive-img" src="../images/bullet_graph_two_ranges.png" srcset="../images/bullet_graph_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_four_ranges.png" srcset="../images/bullet_graph_four_ranges@2x.png 2x" />

## Styling

The Bullet Graph comes with styling flexibility through the various overrides controlling the range of brushes including: Value Brush, Target Value Brush, Tick Brush, Minor Tick Brush, and a collection of Range Brushes.

<img class="responsive-img" src="../images/bullet_graph_styling.png" srcset="../images/bullet_graph_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Bullet Graph and Linear Gauge depending on whether your scenario has a target value or not. Keep in mind that both Graphs and Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the Line or Column charts. To create an easy to the eye and crisp data visualization pick colors for the Value and Target Value Brushes that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret.

| Do                                                                                       | Don't                                                                                        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/bullet_graph_do.png" srcset="../images/bullet_graph_do@2x.png 2x" /> | <img class="responsive-img" src="../images/bullet_graph_dont.png" srcset="../images/bullet_graph_dont@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Linear Gauge](linear-gauge.md)
- [Category Chart](chart-category.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

