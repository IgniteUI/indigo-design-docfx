---
title: Material Icons - Design System Styling
_description: The Material Icons Symbols offer hundreds of skillfully crafted icon symbols that designate common actions.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Material Icons

The material icons that come with the **Indigo.Design System** contain 160+ icons imported from [Material resources](https://material.io/resources/icons/?style=baseline) and 360+ icons crafted by the **Indigo.Design System** team according to the [Material system icons guidelines](https://material.io/design/iconography/system-icons.html#design-principles). Icons are used to symbolize common actions in Icon Buttons, List Items, Cards, etc., to reduce the amount of text that is normally used in a label, for example. All icons are also supported in [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular).

<img class="responsive-img" src="../images/icons_demo.png" srcset="../images/icons_demo@2x.png 2x" />
<div class="divider--half"></div>

- In **Figma**, you can access all the icons on a dedicated page labeled `Icons`. The icons' appearance can be customized using predefined `Color Styles`, enabling you to adjust their colors to suit your design needs.
- In **Sketch**, these graphics are on a separate page named `🎨 Material Icons`, and their colors are defined via the `Layer Styles`, letting you customize the appearance of an icon in the designs that you are crafting.
- In **Adobe XD** they are placed on an Artboard with the same name at the bottom of the left column of the library file, and customization can be achieved with the `Colors` from the Libraries panel on the left.

> [!Note]
> There is also a dedicated [Icon](../components/icon.md) component with four sizes: ExtraLarge, Large, Medium and Small. Use it when creating intricate layouts for articles, custom Cards and List Items etc. assigning one of the glyphs available under `Icons` and `🎨 Material Icons` rather than inserting it directly on your artboard.

## Available Material Icons

There is a set of 160+ Material Icons already available in the **Indigo.Design System**, which are grouped in the following way according to the Material Design categorization:

- Action
- Alert
- AV
- Communication
- Content
- Device
- Editor
- File
- Hardware
- Images
- Maps
- Navigation
- Notification
- Places
- Social
- Toggle
- WB

There is also a set of 360+ additional Material Icons that our team has crafted as an extention to the original Material set for the following categories:

- Construction
- Content
- Editor
- Elections
- Finance
- Health
- Logos
- Programming
- Social Media

These icons are also available on [GitHub](https://github.com/IgniteUI/material-icons-extended) to use in your projects.

## Adding Icons

With the preset collection of icons, you can design beautiful apps and pick the right symbolic representations for your Components and Patterns. Adding further icon sets is possible, but so is extending the current one with further Material Icons. Since [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular) supports any Material Icon out there, this could be exactly what you are looking for. Navigate your browser to the [Material Design Icons Tool](https://fonts.google.com/icons?selected=Material+Icons). Search for the icon you need, e.g. `copyright`, download it as an [SVG](https://fonts.google.com/icons?selected=Material+Icons&icon.query=copyright), and note the category to which it belongs. In this case, it would be `Action`. 

### In Figma

1.  Open up the library in Figma, navigate to the `Icons` page and look if that same category exists as a frame in the layers panel, in the left sidebar. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category, and you should be looking at something like this. Please consider that the icons are alphabetically ordered in every category.

    <img class="responsive-img" src="../images/icons_add1.png" srcset="../images/icons_add1@2x.png 2x" />

2.  Now, duplicate the Component for this right-most icon and move it right a bit. Its name should be the same as the duplicated one and its layers structure should look like this:

    | Layer                                                                             | Use                                                                              |
    | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
    | Icon name  | Defines the icon name as a component |
    | Color      | Nested icon shape within the component which is the graphic visualisation of the icon |
    | Text layer | Displays the icon name as an additional text layer in the frame. |

    <img class="responsive-img" src="../images/icons_add2.png" srcset="../images/icons_add2@2x.png 2x" />

3.  Next, we want to replace the existing icon shape with the SVG we have downloaded, so we need to select the Icon name layer and drag and drop the SVG with the `copyright` icon in the workspace. This will place the SVG over the icon component and will help you to find it easier. After dropping the SVG, this will create a new frame, `copyright_black_24dp`, in our layers panel, which we need to expand and drag the desired icon shape just outside of any other groups, but still in its current frame. After that, remove any other additional groups - leave just the icon shape in the frame.

    <img class="responsive-img" src="../images/icons_add3.png" srcset="../images/icons_add3@2x.png 2x" />

4.  Then, we have to select the frame `copyright_black_24dp` with the `Vector` shape within and create a component from the frame. There are two quick options to do that: right-clicking on the frame and select the `Create component` option or click on the `Create component` icon in the Figma toolbar, positioned in the center over the workspace. After that change the vector shape name to `Color` and set its color to `grays.700` from the `Selection colors` in the right sidebar.

    <img class="responsive-img" src="../images/icons_add4.png" srcset="../images/icons_add4@2x.png 2x" />
    <div class="divider--half"></div>

5.  After updating the Icon component name accordingly, you need to swap it with the component in the duplicated one, and we are all set to use this icon just like any other one.

    <img class="responsive-img" src="../images/icons_add5.png" srcset="../images/icons_add5@2x.png 2x" />

### In Sketch

1.  Open up the library in Sketch, navigate to the `🎨 Material Icons` page and look if that same category exists as a text layer on the left. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category, and you should be looking at something like this.

    <img class="responsive-img" src="../images/icons_add6.png" srcset="../images/icons_add6@2x.png 2x" />
    <div class="divider--half"></div>

2.  Now, duplicate the Symbol for this right-most icon and move it right a bit. Its name should end with `...Copy` and its layers structure should look like this:

    | Layer                                                                             | Use                                                                              |
    | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
    | Color | Defines the icon shape and color |
      Shape | Always a rectangle that defines the icon bounding box |

    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add7.png" srcset="../images/icons_add7@2x.png 2x" />
    <div class="divider--half"></div>

3.  Next, we want to replace the existing icon shape with the SVG we have downloaded, so we need to select the Color layer and drag and drop the SVG with the `copyright` icon on top of it. This will create a new group `copyright-24px` in our layers panel, which we need to expand and drag the desired icon shape just outside of this group, but above the rectangular Shape layer.

    <img class="responsive-img" src="../images/icons_add8.png" srcset="../images/icons_add8@2x.png 2x" />
    <div class="divider--half"></div>

4.  Let's remove the old icon glyph now and the leftover group after moving the new icon shape out of it. Then, we have to select the one and only icon shape we have left with the `copyright` symbol change its name to `Color` and set its Appearance to `grays.700` Fill-only style.

    <img class="responsive-img" src="../images/icons_add9.png" srcset="../images/icons_add9@2x.png 2x" />
    <div class="divider--half"></div>

5.  After updating the Symbol name accordingly, we are all set to use this icon just like any other one.

    <img class="responsive-img" src="../images/icons_add10.png" srcset="../images/icons_add10@2x.png 2x" />
    <div class="divider--half"></div>

### In Adobe XD

1.  Open up the library in Adobe XD, navigate to the `🎨 Material Icons` artboard, and look if that same category exists as a text layer on the left. If it does not, create it and follow the steps below. If it does, which is our case for the `copyright` icon from the `Action` category, just find the right-most icon from that category, and you should be looking at something like this.

    <img class="responsive-img" src="../images/icons_add11.png" srcset="../images/icons_add11@2x.png 2x" />
    <div class="divider--half"></div>

2.  Now, duplicate the Symbol for this right-most icon and move it right a bit. This will create an instance of the symbol indicated by the white diamond shape with a green outline in the top-left corner when the instance is selected.

    <img class="responsive-img" src="../images/icons_add12.png" srcset="../images/icons_add12@2x.png 2x" />

3.  Ungroup this instance and create a new group from the two new layers, naming it "_Overrides/Material Icons/action/copyright".

    | Layer | Use |
    | ----------------------- | ----------------------------------------------------- |
    | Group ~ | Defines the icon shape and color |
    | Shape | Always a square that defines the icon bounding box |
    <div class="divider--half"></div>
    <img class="responsive-img" src="../images/icons_add13.png" srcset="../images/icons_add13@2x.png 2x" />
    <div class="divider--half"></div>

4.  Next, we want to replace the existing icon shape with the SVG we have downloaded, so we need to select the Group with the old glyph and drag and drop the SVG with the `copyright` icon on top of it, aligning the two on all sides. This will create a new group, `copyright-24px` in our layers panel, which we need to expand and drag the desired icon shape just outside of this group, but above the rectangular Shape layer.

    <img class="responsive-img" src="../images/icons_add14.png" srcset="../images/icons_add14@2x.png 2x" />
    <div class="divider--half"></div>

5.  Let's remove the old icon glyph now and the leftover group after moving the new icon shape out of it. Then, we have to select the one and only icon shape we have left with the `copyright` symbol and set its appearance to `grays.700` from Colors in the Libraries panel. 

    <img class="responsive-img" src="../images/icons_add15.png" srcset="../images/icons_add15@2x.png 2x" />
    <div class="divider--half"></div>

6.  The final step is to create a component from the _Overrides/Material Icons/action/copyright group to be able to start using it like any other icon element in our design.

    <img class="responsive-img" src="../images/icons_add16.png" srcset="../images/icons_add16@2x.png 2x" />
    <div class="divider--half"></div>

## Additional Resources

Related topic:

- [Colors](colors.md)
- [Icon](../components/icon.md)

Our community is active and always welcoming to new ideas.