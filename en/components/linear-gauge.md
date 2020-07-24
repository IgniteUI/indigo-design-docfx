---
title: Linear Gauge - Design System Component
_description: The Linear Gauge Component Symbol is a data visualization that displays a value in a certain context.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Linear Gauge

Use the Linear Gauge Component as a data visualization that displays a value within context depicted by color-coded ranges underneath. The Linear Gauge is visually identical to the [Ignite UI for Angular Linear Gauge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/lineargauge.html)

For scenarios where a target value is critically important for understanding and interpreting the information, you should use the [Bullet Graph](bullet-graph.md) instead.

### Linear Gauge Demo

<img class="responsive-img" src="../images/linear_gauge_three_ranges.png" srcset="../images/linear_gauge_three_ranges@2x.png 2x" />

### Needle Type

The Linear Gauge provides various overrides that control the shape of the needle, which indicates the current value: **needle**, trapezoid, and triangle.

<img class="responsive-img" src="../images/linear_gauge_three_ranges.png" srcset="../images/linear_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/linear_gauge_trapezoid.png" srcset="../images/linear_gauge_trapezoid@2x.png 2x" />
<img class="responsive-img" src="../images/linear_gauge_triangle.png" srcset="../images/linear_gauge_triangle@2x.png 2x" />

### Ranges Amount

The Linear Gauge comes with three preset range configurations: two, **three**, and four ranges.

<img class="responsive-img" src="../images/linear_gauge_two_ranges.png" srcset="../images/linear_gauge_two_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/linear_gauge_three_ranges.png" srcset="../images/linear_gauge_three_ranges@2x.png 2x" />
<img class="responsive-img" src="../images/linear_gauge_four_ranges.png" srcset="../images/linear_gauge_four_ranges@2x.png 2x" />

### Styling

The Linear Gauge comes with styling flexibility through the various overrides controlling the background color and a range of brushes including: Needle Brush, Tick Brush, Minor Tick Brush, and a collection of Range Brushes.

<img class="responsive-img" src="../images/linear_gauge_styling.png" srcset="../images/linear_gauge_styling@2x.png 2x" />

## Usage

When creating data visualizations and information dashboards pick carefully between Bullet Graph and Linear Gauge depending on whether your scenario has a target value or not, and between Linear and Radial Gauge based on the amount of screen space you have at hand. Keep in mind that both Graphs and Gauges only show the current value and have no way to display historical values, if your application scenario requires such display, you should consider using the [Category Chart](chart-category.md).
To create an easy to the eye and crisp data visualization pick colors for the Needle that have good contrast with the ranges and background underneath, avoid using variants of the same color as this makes the visualization hard to read and interpret. Unlike the [Radial Gauge](radial-gauge.md), the Linear Gauge Component needs more empty space around and you should avoid laying out a collection of Linear Gauges too densely next to one another as this makes them hard to comprehend.

| Do                                                                                         | Don't                                                                                          |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/linear_gauge_do1.png" srcset="../images/linear_gauge_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/linear_gauge_dont1.png" srcset="../images/linear_gauge_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/linear_gauge_do2.png" srcset="../images/linear_gauge_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/linear_gauge_dont2.png" srcset="../images/linear_gauge_dont2@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Linear Gauge in your design is very likely to result in loss of code generation capability for the Linear Gauge.

### Minimum Value

This override controls the minimum value displayed by the Linear Gauge. It supports [data binding](../codegen/data-binding.md) as well as direct setting of a number. If a binding is used the bound property must result in a number at runtime. If no binding is used the value must be a number. If the value provided is not in the correct format the Linear Gauge will be generated without a minimum value set and the control default will be used.

Binding:

<img class="responsive-img" src="../images/linear_gauge_bind_min.png"/>

No binding:

<img class="responsive-img" src="../images/linear_gauge_nobind_min.png"/>

### Maximum Value

This override controls the maximum value displayed by the Linear Gauge. It supports [data binding](../codegen/data-binding.md) as well as direct setting of a number. If a binding is used the bound property must result in a number at runtime. If no binding is used the value must be a number. If the value provided is not in the correct format the Linear Gauge will be generated without a maximum value set and the control default will be used.

Binding:

<img class="responsive-img" src="../images/linear_gauge_bind_max.png"/>

No binding:

<img class="responsive-img" src="../images/linear_gauge_nobind_max.png"/>

### Ranges Amount

This override controls how many ranges are displayed within the Linear Gauge. During code generation it will create `<igx-linear-graph-range>` elements which are what represents a single range. This range element has `startValue`, `endValue` and `brush` properties which are used to define where the range starts and ends and what color it is. These are all automatically generated for you such that regardless of what the Minimum Value and Maximum Value overrides are set to, you will always get the same appearance as what is displayed in the Sketch.

You may not want the ranges to use the auto-generated start and end values, however, in that case you will need to manually update the ranges in the generated HTML.

### ValueDataProperty

This override controls the needle value displayed by the Linear Gauge. It only supports [data binding](../codegen/data-binding.md) so provided values must be in the correct format.

<img class="responsive-img" src="../images/linear_gauge_valueprop.png"/>

The bound property **must** result in a number at runtime.

## Additional Resources

Related topics:

- [Bullet Graph](bullet-graph.md)
- [Category Chart](chart-category.md)
- [Radial Gauge](radial-gauge.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


