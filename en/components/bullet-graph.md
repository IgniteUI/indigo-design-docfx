---
title: Bullet Graph - Design System Component
_description: The Bullet Graph Component is a data visualization that displays contextual progress of a value to a target value.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma HTML, Figma UI kits, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular
---

# Bullet Graph

Use the Bullet Graph Component as a data visualization that displays the progress of a value to a target value, within context depicted by color-coded ranges underneath. The Bullet Graph is visually identical to the [Ignite UI for Angular Bullet Graph Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/bulletgraph.html)

For scenarios where no target value exists or is irrelevant you should use the [Linear Gauge](linear-gauge.md) instead.

## Bullet Graph Demo

<img class="responsive-img" src="../images/bullet_graph_three_ranges_demo.png" srcset="../images/bullet_graph_three_ranges_demo@2x.png 2x" />

## Title and Subtitle

The Bullet Graph has a Title and Subtitle which text can be changed. In Figma you can toggle on and off the Title and Subtitle layers visibility in the Layers panel.

<img class="responsive-img" src="../images/bullet_graph_title.png" srcset="../images/bullet_graph_title@2x.png 2x" />

## Legend

The Bullet Graph comes with a Legend that can be adjusted accordingly to match the selected Series Amount. In Figma you can toggle on and off the `Legend` instance visibility in the Layers panel. Additionally, for each `Serie` base component you can change the icon type between Square, Line, or Circle.

<img class="responsive-img" src="../images/bullet_graph_legend.png" srcset="../images/bullet_graph_legend@2x.png 2x" />

## Tooltip

The Bullet Graph comes with a tooltip that may be hidden by toggling off the `Tooltip` base component from the layers panel in Figma.

<img class="responsive-img" src="../images/bullet_graph_tooltip-off.png" srcset="../images/bullet_graph_tooltip-off@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_tooltip-on.png" srcset="../images/bullet_graph_tooltip-on@2x.png 2x" />

## Ranges Amount

The Bullet Graph comes with three preset range configurations: two, three, and four. In Figma you can change the Series amount using the `Series Amount` property in the properties panel.

<img class="responsive-img" src="../images/bullet_graph_two_ranges.png" srcset="../images/bullet_graph_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_three_ranges.png" srcset="../images/bullet_graph_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/bullet_graph_four_ranges.png" srcset="../images/bullet_graph_four_ranges@2x.png 2x" />

## Ticks and Values

Ticks and Values are also configurable. The two types of ticks: Ticks and Minor Ticks can be hidden by setting their color to Transparent. The default Values 0,10,20 etc. up to 100 can be adjusted according to one's needs.

<img class="responsive-img" src="../images/bullet_graph_values.png" srcset="../images/bullet_graph_values@2x.png 2x" />

## Styling

The Bullet Graph comes with styling flexibility through the various options for brushes including Value Brush, Target Value Brush, Tick Brush, Minor Tick Brush, and a collection of Range Brushes.

<img class="responsive-img" src="../images/bullet_graph_styling.png" srcset="../images/bullet_graph_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Bullet Graph and Linear Gauge depending on whether your scenario has a target value or not. Keep in mind that both Graphs and Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the Line or Column charts. To create an easy on the eye and crisp data visualization pick colors for the Value and Target Value Brushes that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/bullet_graph_do.png" srcset="../images/bullet_graph_do@2x.png 2x" /> | <img class="responsive-img" src="../images/bullet_graph_dont.png" srcset="../images/bullet_graph_dont@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Linear Gauge](linear-gauge.md)
- [Radial Gauge](radial-gauge.md)
- [Line Chart](line-chart.md)
- [Column Chart](column-chart.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
