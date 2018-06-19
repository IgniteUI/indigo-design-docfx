---
title: Icon - Design System Component
_description: The Icon Component Symbol is used to provide subtle graphical indications to the user that also may trigger an interaction. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Icon

Use the Icon Component to provide subtle graphical information to the user that, in some cases, may also trigger simple interactions such as liking a product, saving an article for later, etc. You may choose between the already provided [Material Icons](https://material.io/tools/icons/) or add the ones you need to the list of available ones in the Styling library. The Icon is visually identical to the [Ignite UI for Angular Icon Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html)

### Icon Demo

![](../images/icon_demo.png)

### Size

The Icon comes in four different sizes:

- ExtraLarge
- Large
- Medium
- Small

![](../images/icon_sizes.png)

### Styling

The Icon comes with styling flexibility through the overrides for selectable graphic and the color used to fill it.

![](../images/icon_styling.png)

## Usage

Carefully pick the Icon color to assure good contrast with the background and definitely avoid similar shades of the same color or combinations that create chromatic aberrations.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| ![](../images/icon_do1.png) | ![](../images/icon_dont1.png) |

## Code Generation

When colors are specified for the Icon, the Icon HTML element will be wrapped in div. This is required by browsers to style a nested component (a component within another component).

> [!INFO]
> Important: There is an Icon Component in the NBL Components library and in the NBL Styles library. Only the Icon in the NBL Component library is rendered.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Icon in your design is very likely to result in loss of code generation capability for the Icon.

### Event Property

When supplied, this property is used to create a method in the component TypeScript and add an Angular click signature in the HTML. When supplied the event must be specified using the curly braces format: {onEventName}

## Additional Resources

Related topics:

- [Bottom Navigation](bottom-nav.md)
- [Card](card.md)
- [Navbar](navbar.md)
- [Navigation Drawer](nav-drawer.md)
- [Tabs](tabs.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
