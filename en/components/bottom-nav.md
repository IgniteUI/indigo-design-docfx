---
title: Bottom Navigation - Design System Component
_description: The Bottom Navigation Component Symbol is used to design simple application-level navigation. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Bottom Navigation

Use the Bottom Navigation Component to implement application-level navigation by placing it at the bottom of the screen with up to five items that allow browsing between their associated views. The Bottom Navigation is visually identical to the [Ignite UI for Angular Bottom Navigation Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/tabbar.html)

### Bottom Navigation Demo

![](../images/bottom-nav_demo.png)

### Items Amount

The Bottom Navigation supports between two to five items. If you need to design application-level navigation with more than five items or views, consider using consider using the [Navigation Drawer](nav-drawer.md) instead.

![](../images/bottom-nav_items2.png)
![](../images/bottom-nav_items3.png)
![](../images/bottom-nav_items4.png)
![](../images/bottom-nav_items5.png)

### Item Style

The Bottom Navigation item contains either a combination of **icon+text** or just an icon. There is always one item in active (selected) state, and the remaining items must be set to inactive.

![](../images/bottom-nav_icon&text.png)
![](../images/bottom-nav_icon.png)

### Styling

The Bottom Navigation comes with styling flexibility through the various overrides controling the background color, as well as the item label and icon colors.

![](../images/bottom-nav_styling.png)

## Usage

The Bottom Navigation always appears on top of other content, and the shadow it casts is a crucial visual element. Make sure that you always place its layer over those representing the screen content and under no circumstances should you remove the shadow it casts.

| Do                                | Don't                               |
| --------------------------------- | ----------------------------------- |
| ![](../images/bottom-nav_do1.png) | ![](../images/bottom-nav_dont1.png) |
| ![](../images/bottom-nav_do2.png) | ![](../images/bottom-nav_dont2.png) |

## Code generation - TODO

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Bottom Navigation in your design is very likely to result in loss of code generation capability for the Bottom Navigation.

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

- [Navigation Drawer](nav-drawer.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
