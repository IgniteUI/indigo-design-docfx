---
title: Badge - Design System Component
_description: The Badge Component Symbol is a small complimentary element that gives a subtle hint for additional information available. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Badge

Use the Badge Component Symbol to draw attention to another interface element or to display a notification. It enhances the component to which it is attached with additional information, disclosed to the user upon iteracting with it.
The Badge is visually identical to the [Ignite UI for Angular Badge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/badge.html)

### Badge Demo

![](../images/badge_demo.png)

### Shape

The Badge comes in two distinct shapes: round and square.

![](../images/badge_shapes.png)

### Type

The Badge can carry different types of content such as a **number** or an icon.

![](../images/badge_type.png)

### Styling

The Badge comes with styling flexibility through the various overrides controling the background and border colors, as well as the presence of a shadow that is casted on the underlying interface element.

![](../images/badge_styling.png)

## Usage

Use the Badge to "stamp" another piece of UI such as an Avatar or a text title. Avoid using the Badge on its own.

| Do                           | Don't                          |
| ---------------------------- | ------------------------------ |
| ![](../images/badge_do1.png) | ![](../images/badge_dont1.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Badge in your design is very likely to result in loss of code generation capability for the Badge.

The Badge symbol has a special `🕹️DataProperty` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.
The Badge symbol has a special `🕹️Event` field in its `Overrides` section. Use the curly braces notation _{???}_ to provide a reference for code generation to the ...

## Additional Resources

Related topics:

* [Avatar + Badge](avatar+badge.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
