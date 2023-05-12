---
title: Elevation - Design System Styling
_description: The elevations are used to mimic the relative position between surfaces stacked on top of one another.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
---

# Elevation

There are 24 elevations supported by the **Indigo.Design System** that are used across Components and Patterns to cast a shadow on the underlying content. There are Components, such as the Bottom Navigation and Floating Action Button that use this to establish some visual hierarchy, but you may also use them to make certain elements float like a Registration or Login Form. The Elevations are identical to the [Material Design Elevation](https://material.io/design/environment/elevation.html#) & [Ignite UI for Angular Shadows](https://www.infragistics.com/products/ignite-ui-angular/angular/components/shadows.html).

## Support for Elevations

Elevations follow a simple logic: the higher the number of the Elevation, the more prominent the shadow. Shadows come as a combination of three stacked shadow colors, umbra, penumbra, and ambient, whose values match the Material Design definition. 

<img class="responsive-img" src="../images/elevation_people.png" srcset="../images/elevation_people@2x.png 2x" />

In Figma, the Elevations are placed on a separate page called `↳ Elevation`. Most often they are applied to the component's frame or to a background layer inside the component's structure and are available as Effect styles on the properties panel. In Sketch, Elevations can be found on a separate page named `🎨 Elevation` and are available as Layer Styles that can be applied to any shape. In the components that use them, we have applied this style to the correct layer, which is most often a Mask layer, or a specially designated `Elevation` rectangle. In Adobe XD elevations are placed on an Artboard with the same name in the left column of the library file and exist as components that are used across components and patterns.

> [!Note]
> Changing the Elevation in a Component by changing its style is possible in Sketch and Figma and will produce the expected outcome, but the same will not be achievable with Ignite UI for Angular yet.

## Use of Standalone Elevations in Figma 

To use an Elevation on its own e.g. to lift one part of the content and draw more focus to it than the rest, simply apply it either to a separate background layer as an effect style or if you're using frames inside your project, you can directly apply it to the frame, but make sure you also apply a fill color to it, in order to make the elevation visible.

## Use of Standalone Elevations in Sketch

To use an Elevation on its own e.g. to lift one part of the content and draw more focus to it than the rest, simply apply the Elevation Layer Style of your choice to a rectangle matching the size of the content you would like to enhance.

## Use of Standalone Elevations in Adobe XD

To use an Elevation on its own e.g. to lift one part of the content and draw more focus to it than the rest, simply drag one of them from the `Libraries` panel to your artboard and use it as a surface on top of which you will add the rest of the user interface, including a layer for background color. Sometimes you would like to have rounded corners e.g. when designing a dialog so in order to have your elevation conform to this, expand it from the Layers panel, select its three internal layers, and set their corner radius to the desired value.

## Example of a Standalone Elevation

<img class="responsive-img" src="../images/elevation_standalone.png" srcset="../images/elevation_standalone@2x.png 2x" />

## Additional Resources

Related topics:

- [Bottom navigation](../components/bottom-nav.md)
- [Button](../components/button.md)
- [Card](../components/card.md)
- [Forms](../patterns/form.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
