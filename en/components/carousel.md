---
title: Carousel - Design System Component
_description: The Carousel Component Symbol allows sequential browsing through a collection of images. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Carousel

Use the Carousel Component Symbol to let the user navigate through a collection of images in a seqential fashion, moving to the previous/next one through the arrows on the sides.
The Carousel is visually identical to the [Ignite UI for Angular Carousel Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)

### Carousel Demo

![](../images/carousel_demo.png)

### Styling

The Carousel comes with styling flexibility through the various overrides controling the navigation button background and icon colors, the indicator colors and border colors and a slide image for the currently active slide. Remember that only one indicator may be active at a time.

![](../images/carousel_styling.png)

## Usage

The previous and next navigation buttons of the Carousel should always appear on top of the image slide and the indicators should have consistent styling, where only the active one should be emphasized.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/carousel_do1.png) | ![](../images/carousel_dont1.png) |
| ![](../images/carousel_do2.png) | ![](../images/carousel_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Bottom Navigation in your design is very likely to result in loss of code generation capability for the Bottom Navigation.

The Bottom Navigation symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.
The Bottom Navigation symbol has special `🕹️Event` fields, one for each item, in its `Overrides` section. Use the curly braces notation _{???}_ to provide a reference for code generation to the ...

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
