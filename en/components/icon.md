---
title: Icon - Design System Component
_description: The Icon Component Symbol is used to provide subtle graphical indications to the user that also may trigger an interaction. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Icon

Use the Icon Component to provide subtle graphical information to the user that, in some cases, may also trigger simple interactions such as liking a product, saving an article for later, etc. You may choose between the already provided [Material Icons](https://material.io/tools/icons/) or add the ones you need to the list of available ones in the Styling library. The Icon is visually identical to the [Ignite UI for Angular Icon Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html)

### Icon Demo

<img src="../images/icon_demo.png" srcset="../images/icon_demo@2x.png 2x" />

### Size

The Icon comes in four different sizes:

- ExtraLarge
- Large
- Medium
- Small

<img src="../images/icon_sizes.png" srcset="../images/icon_sizes@2x.png 2x" />

### Styling

The Icon comes with styling flexibility through the overrides for selectable graphic and the color used to fill it.

<img src="../images/icon_styling.png" srcset="../images/icon_styling@2x.png 2x" />

## Usage

Carefully pick the Icon color to assure good contrast with the background and definitely avoid similar shades of the same color or combinations that create chromatic aberrations.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| <img src="../images/icon_do1.png" srcset="../images/icon_do1@2x.png 2x" /> | <img src="../images/icon_dont1.png" srcset="../images/icon_dont1@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!Note]
> Important: There is an Icon component in the Indigo-Components library and in the Indigo-Styling library. Only the Icon in the Indigo-Components library is rendered.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Icon in your design is very likely to result in loss of code generation capability for the Icon.

### Event Property

When supplied, this property is used to create a method in the component TypeScript and add an Angular click signature in the HTML. When supplied the event must be specified using the curly braces format: {onEventName}

## Additional Resources

Related topics:

- [Bottom Navigation](bottom-nav.md)
- [Card](cards.md)
- [Navbar](navbar.md)
- [Navigation Drawer](nav-drawer.md)
- [Tabs](tabs.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


