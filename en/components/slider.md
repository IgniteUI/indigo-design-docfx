---
title: Slider - Design System Component
_description: The Slider Component Symbol is used to allow the user to select a single value or a range. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Slider

Use the Slider Component Symbol to allow the user to select a single value or specify a range of values by choosing values for both its ends.
The Slider is visually identical to the [Ignite UI for Angular Slider Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/slider.html)

### Slider Demo

![](../images/slider_demo.png)

### Type

The Slider offers a variant with one thumb for selecting a single value and with two thumbs for specifying a range.

![](../images/slider_one-thumb.png)
![](../images/slider_two-thumb.png)

### Theme

The Slider can be used styled in **dark** or light theme to assure good readability and contrast for both lighter and darker backgrounds.

![](../images/slider_dark.png)
![](../images/slider_light.png)

### State

The Slider supports **enabled** and disabled states reflecting the possibility to change the value(s).

![](../images/slider_enabled.png)
![](../images/slider_disabled.png)

### Styling

The Slider comes with styling flexibility through the overrides for the label background, thumb, track and base track colors.

![](../images/slider_styling.png)

## Usage

The Slider track color should always have a higher emphasis than the track base color. Both single value and range Sliders should be consistently styled i.e. the label background should match the thumb and track color.

| Do                            | Don't                           |
| ----------------------------- | ------------------------------- |
| ![](../images/slider_do1.png) | ![](../images/slider_dont1.png) |
| ![](../images/slider_do2.png) | ![](../images/slider_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Navigation Drawer will reduce the accuracy of code generation for the Navigation Drawer. Do this only if you need to create more items than provided and make sure you keep the `🚫igx-nav-drawer` and `🕹️DataSource` layers intact.

The Navigation Drawer symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
