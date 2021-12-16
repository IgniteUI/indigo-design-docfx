---
title: Layout Best Practices - Design System
_description: Best practices regarding layout creation in Sketch and resizing configurations that result in the desired responsive behavior both in Sketch and Angular apps after code generation. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Layout Best Practices

This topic provides design guidance regarding the positioning of Components in your app layouts and the setting of resizing rules that ensure good responsive app design. By sticking to the recommendations below, you will be able to generate an Angular app effortlessly with the responsive behavior specified in Sketch.


## Layout
This section provides guidance on how to group your elements in Sketch for best results.

The code generation algorithm starts by creating the layout horizontally. It forms the rows first. If your design is column oriented, then you should take advantage of the groups in Sketch for better results. For the following design, there are six buttons and no groups:

<img class="responsive-img" src="./images/layout-rows.png" />

The generated app would have three rows, each of them containing two buttons.

The designer can very easily organize this layout in two columns by applying groups in Sketch:

<img class="responsive-img" src="./images/layout-columns.png" />

The generated app from this design would contain a single row and two columns in it.

In this way the designer may control the generated result using Sketch grouping. It is recommended to always group elements in Sketch. This produces not only cleaner and well-organized design, but also ensures bundling the elements that are meant to be together. Note that code generation may apply additional rows or columns for elements in a Sketch group. This is done to further improve the position of elements in flex-display containers.

## Justification & Alignment
In real world scenarios, an app designed with flex containers in mind uses `justify-content` and `align-items` to arrange its groups and elements. The generator does the same thing. It applies justification and alignment properties to the rows and columns. This determines the elements' placement in the space of those rows and columns. The generator takes into account several parameters like position, size and offset of elements to apply proper values for the `justify-content` and `align-items` CSS properties.

Possible values for `justify-content` are `flex-start`, `flex-end`, `center`, `space-around`, `space-between`, `space-evenly`. Their usage is explained in the following diagram.

<img class="responsive-img" src="./images/layout-justify-content.png" />

To achieve the desired responsive alignment, the designer should strive to position the elements and form the groups in one of the following configurations.

If there is a match, the generator applies the corresponding value. For some scenarios neither of the options match the layout. In this case, the generator splits the elements creating smaller groups. Then it executes the same logic for these smaller groups until each one gets the justification that best matches its layout.

Possible values for `align-items` are `flex-start`, `flex-end`, `center`, `stretch`. Their usage is explained in the diagram below.

<img class="responsive-img" src="./images/layout-align-items.png" />

Similar rules apply for `align-items`. The design should be close to either of these configurations to achieve the best responsive alignment.

> [!Note]
> For some groups there may be more than one suitable value. In such cases the generator applies the first that fits.

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


