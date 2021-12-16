---
title: Elevation - Design System Styling
_description: The Elevation layer styles are used to mimic the relative position between surfaces stacked on top of one another.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Elevation

On the `🎨 Elevation` page of the **Indigo.Design System** you will find 24 Elevations that are used across Components and Patterns to cast a shadow on the underlying content. There are Components, such as the Bottom Navigation and Floating Action Button that use this to establish some visual hierarchy, but you may also use them to make certain elements float like a Registration or Login Form. The Elevations are identical to the [Material Design Elevation](https://material.io/design/environment/elevation.html#) & [Ignite UI for Angular Shadows](https://www.infragistics.com/products/ignite-ui-angular/angular/components/shadows.html).

## Support for Elevations

Elevations follow a simple logic: the higher the number of the Elevation, the more prominent the shadow. Shadows come as a combination of three stacked shadow colors, umbra, penumbra, and ambient, whose values match the Material Design definition. In Sketch Elevations are available as Layer Styles that can be applied to any shape and on components that use them we have applied this style to the correct layer, which is most often a Mask layer, or a specially designated `Elevation` rectangle.

<img class="responsive-img" src="../images/elevation_people.png" srcset="../images/elevation_people@2x.png 2x" />

> [!Note]
> Changing the Elevation in a Component by changing its style is possible in Sketch and will produce the expected outcome, but the same will not be achievable with Ignite UI for Angular yet.

## Use of Standalone Elevations

To use an Elevation on its own e.g. to lift one part of the content and draw more focus to it than the rest, simply apply the Elevation Layer Style of your choice to a rectangle matching the size of the content you would like to enhance.

<img class="responsive-img" src="../images/elevation_standalone.png" srcset="../images/elevation_standalone@2x.png 2x" />

## Additional Resources

Related topics:

- [Bottom navigation](../components/bottom-nav.md)
- [Button](../components/button.md)
- [Card](../components/card.md)
- [Forms](../patterns/form.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


