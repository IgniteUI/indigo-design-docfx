---
title: Material Icons - Design System Styling
_description: The Material Icons Symbols offer hundreds of skilfully crafted icon symbols that designate common actions.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Material Icons

On the `🎨 Material Icons` page of the **Indigo.Design System** you will find 150+ icons imported from [Material resources](https://material.io/resources/icons/?style=baseline) and 250+ icons crafted by the **Indigo.Design System** team according to the [Material system icons guidelines](https://material.io/design/iconography/system-icons.html#design-principles). Icons are used to symbolize common actions in Icon Buttons, List Items, Cards etc. to reduce the amount of text that is normally used as a Button label, for example. Icon colors are defined via the `Layer Styles` for colors, which lets you customize the color appearance of an icon in the designs that you are crafting. All icons are also supported in [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular).

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />

> [!Note]
> There is also a dedicated [Icon](../components/icon.md) component with four sizes: ExtraLarge, Large, Medium and Small. Use it when creating intricate layouts for articles, custom Cards and List Items etc. assigning one of the glyphs available under `🎨 Material Icons` rather than inserting it directly on your artboard.

## Available Material Icons

There is a set of 150+ Material Icons already available in the **Indigo.Design System**, which is grouped in the following way according to the Material Design categorization:

- file
- communication
- action
- alert
- av
- content
- device
- image
- maps
- navigation
- notifications
- social
- toggle
- editor
- wb
- hardware

There is also a set of 250+ additional Material Icons that our team has crafted as an extention to the original Material set for the following categories:

- finance
- health
- logos
- programming
- social media
- content
- editor

These icons are also available on [GitHub](https://github.com/IgniteUI/material-icons-extended) to use in your projects.

## Adding Icons

With the preset collection of icons, you can design beautiful apps and pick the right symbolic representations for your Components and Patterns. Adding further icon sets is possible, but so is extending the current one with further Material Icons. Since [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular) supports any Material Icon out there, this could be exactly what you are looking for. To do so, follow these simple steps:

1.  First, navigate your browser to the [Material Design Icons Tool](https://material.io/tools/icons). Search for the icon you need, e.g. `copyright`, download it as an [SVG](https://material.io/resources/icons/?search=copy&icon=copyright&style=baseline), and note the category to which it belongs. In this case, would be `Action`. Now, open up the Indigo.Design library in Sketch navigate to the `🎨 Material Icons` page and look if that same category exists as a text layer on the left. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category and you should be looking at something like this.

    <img class="responsive-img" src="../images/icons_add1.png" srcset="../images/icons_add1@2x.png 2x" />

2.  Now, duplicate the Symbol for this right-most icon and move it right a bit. Its name should end with `...Copy` and its layers structure should look like this:
    | Layer | Use |
    | ----------------------- | ----------------------------------------------------- |
    | Color | Defines the icon shape and color |
    | Shape | Always a rectangle that defines the icon bounding box |
    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add2.png" srcset="../images/icons_add2@2x.png 2x" />

3.  Next, we want to replace the existing icon shape with the SVG we have downloaded, so we need to select the Color layer and drag and drop the SVG with the `copyright` icon on top of it. This will create a new group `copyright-24px` in our layers panel, which we need to expand and drag the desired icon shape just outside of this group, but above the rectangular Shape layer.

    <img class="responsive-img" src="../images/icons_add3.png" srcset="../images/icons_add3@2x.png 2x" />

4.  Let's remove the old icon glyph now and the leftover group after moving the new icon shape out of it. Then, we have to select the one and only icon shape we have left with the `copyright` symbol change its name to `Color` and set its appearance to `grays.700` fill-only style. 

   <img class="responsive-img" src="../images/icons_add4.png" srcset="../images/icons_add4@2x.png 2x" />

5.  After updating the Symbol name accordingly, we are all set to use this icon just like any other one.

    <img class="responsive-img" src="../images/icons_add5.png" srcset="../images/icons_add5@2x.png 2x" />

## Additional Resources

Related topic:

- [Colors](colors.md)
- [Icon](../components/icon.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


