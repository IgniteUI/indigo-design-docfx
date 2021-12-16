---
title: Colors - Design System Styling
_description: The Colors library page is the go to place for setting up a theme for the Indigo.Design System.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Colors

On the `🎨 Colors` page of the **Indigo.Design System** you will find a collection of `primary`, `secondary`, `success`, `warn`, `error`, `info`, `grays`, and `series` colors to let you brand the library all at once. The way Colors are set up is identical to the [Ignite UI for Angular Themes](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html).

<img class="responsive-img" src="../images/colors_palette.png" />

The **Indigo.Design System** version 3 introduces the concept of series palettes with two collections of ten colors each optimized for various data visualization scenarios. Both palettes ensure good contrast between adjacent series colors so that the palette can be used e.g. to colorize ranges of a gauge. One of the palettes is further optimized to be 100% inclusive and facilitate easy comprehension by people with color vision defficiencies. 

## Palette Generation

To change the primary palette in Sketch open the Indigo.Design library file and select `View` -> `Components`. Then in the Sketch menu you will notice a group of four buttons, where the one to the right is an icon of a pantone guide and stands for `Show Color Variables`.

<img class="responsive-img" src="../images/colors-vars-sketch.png" srcset="../images/colors-vars-sketch@2x.png 2x"/>

On the canvas below you will see a collection of colored circles representing all color variables we have defined in the library. You need to find the one called `primary`, select it and use the panel on the right to specify a different color. You are all set, this change will not only update all variants and `Layer Styles` for the primary palette, but also propagate these changes across all Components and Patterns automatically.

<img class="responsive-img" src="../images/colors_palette_updated.png"/>

<img class="responsive-img" src="../images/colors_palette_components.png"/>

The same procedure can be followed for the `secondary` colors and other colors with special meaning in the library.

## Creating Custom Colors

There are cases where we need more colors than the ones we have available. There are two approaches for creating custom colors that differ in terms of the scope we do this for.

If you want your added colors to be available across all the projects that use the library, navigate to the `Colors` page in it, and zoom to the empty `Custom` section underneath the `series` palettes.

<img class="responsive-img" src="../images/colors_custom1.png"/>

Then complete the steps below to finish the process. If you want your added colors to be accessible only within the scope of your current project follow the steps below from any page in it.

1.  Draw a rectangle and set its fill to the color of your choice. 

    <img class="responsive-img" src="../images/colors_custom2.png"/>

2.  In the color picker you will notice a `Create Color Variable` button which you need to select once you are happy with your choice.

    <img class="responsive-img" src="../images/colors_custom3.png"/>

3.  Apply the same color variable to the border of the rectangle and name it accordingly e.g. `cool gray`.

    <img class="responsive-img" src="../images/colors_custom4.png"/>

4.  Now you have to create three color styles using the custom color rectange: one with just the fill, one with just the border, and one with both naming them accordingly.

    <img class="responsive-img" src="../images/colors_custom5.png"/>

5.  You are all set, your custom color will appear as a Color Variable and show up in the overrides for your Components and Patterns.

## Additional Resources

Related topics:

- [Elevation](elevation.md)
- [Typography](typography.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
