---
title: Bullet Graph - Design System Component
_description: The Bullet Graph Component Symbol is a data visualization that displays contextual progress of a value to a target value.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Bullet Graph

Use the Bullet Graph Component as a data visualization that displays the progress of a value to a target value, within context depicted by color-coded ranges underneath. The Bullet Graph is visually identical to the [Ignite UI for Angular Bullet Graph Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/bulletgraph.html)

For scenarios where no target value exists or is irrelevant you should use the [Linear Gauge](linear-gauge.md) instead.

### Bullet Graph Demo

<img src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />

### Ranges Amount

The Bullet Graph comes with three preset range configurations: two, **three**, and four ranges.

<img src="../images/bullet_graph_two_ranges.png" srcset="../images/bullet_graph_two_ranges@2x.png 2x" />
<img src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />
<img src="../images/bullet_graph_four_ranges.png" srcset="../images/bullet_graph_four_ranges@2x.png 2x" />

### Styling

The Bullet Graph comes with styling flexibility through the various overrides controlling the background color and a range of brushes including: Value Brush, Target Value Brush, Tick Brush, Minor Tick Brush, and a collection of Range Brushes.

<img src="../images/bullet_graph_styling.png" srcset="../images/bullet_graph_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Bullet Graph and Linear Gauge depending on whether your scenario has a target value or not. Keep in mind that both Graphs and Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the [Category Chart](chart-category.md). To create an easy to the eye and crisp data visualization pick colors for the Value and Target Value Brushes that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret.

| Do                                                                                       | Don't                                                                                        |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| <img src="../images/bullet_graph_do.png" srcset="../images/bullet_graph_do@2x.png 2x" /> | <img src="../images/bullet_graph_dont.png" srcset="../images/bullet_graph_dont@2x.png 2x" /> |

## Code Generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Bullet Graph in your design is very likely to result in loss of code generation capability for the Bullet Graph.

## Additional Resources

Related topics:

- [Linear Gauge](linear-gauge.md)
- [Category Chart](chart-category.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
