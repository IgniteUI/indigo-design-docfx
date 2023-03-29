---
title: Layout Best Practices in Sketch - Design System
_description: Best practices regarding layout creation in Sketch and resizing configurations that result in the desired responsive behavior both in Sketch and Angular apps after code generation. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Layout Best Practices

This topic provides design guidance regarding the positioning of Components in your app layouts and the setting of resizing rules that ensure good responsive app design. By sticking to the recommendations below, you will be able to generate an Angular app effortlessly with the responsive behavior specified in Sketch.


## Layout

Sketch has no special responsive layout options out of the box, however we would recommend to create groups whenever certain elements should logically belong to the same layout.

For more information and example refer to the [Absolute Layout Best Practices](./best-layout-practices.md#layout) section.

## Sizing

Sketch allows setting fixed size to elements. The generator adheres to this setting when it determines whether an element should respond to size changes of parent containers or not.

<img class="responsive-img" src="./images/sketch_fixed_size.png" />

If the designer applies fixed size to an element, the size of the generated element or container is set in pixels.

It is recommended to avoid setting fixed sizes, especially to groups. The generator stretches non-fixed size elements and applies percentage-based size to them.

There are cases in which fixed size is required. Some of the components in Indigo.Design UI kit also have fixed size, like the Avatar, for example. If you do not want for a certain element to stretch, apply fixed width or height to it. Nevertheless, keep in mind that fixed size groups may limit the responsiveness of the app.

In addition, the elements receive `min-width` or `min-height` that is equal to the width and height in the design. This is to ensure a specific element does not get smaller than what the design specifies breaking the layout.

## Pinning
The code generator tries to position all elements from the design in a flex layout but in certain cases they have to be on top of other elements or retain a certain position on the screen even when responding to viewport resizes. In order to position elements absolutely in a layout, designers can pin elements to edges of their container. To ensure an element is on top of another or is located at the right place, it should be pinned to right or bottom. This way it receives an absolute position and the appropriate margin from the pinned side.

You should try to avoid overlapping elements and groups in Sketch for better responsive apps.

> [!Note]
> Opposite pins (left and right/top and bottom) are discarded and not taken into account. The code generator assumes the element should be stretched instead of receiving an absolute position.

## Additional Resources

Related topics:

- [Input](components/input.md)
- [Bottom Navigation](components/bottom-nav.md)
- [Navbar](components/navbar.md)
- [Navigation Drawer](components/nav-drawer.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


