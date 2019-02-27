---
title: Carousel - Design System Component
_description: The Carousel Component Symbol allows sequential browsing through a collection of images. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Carousel

Use the Carousel Component to let the user navigate through a collection of images in a sequential fashion, moving to the previous/next one through the arrows on the sides. The Carousel is visually identical to the [Ignite UI for Angular Carousel Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)

### Carousel Demo

<img class="responsive-img" src="../images/carousel_demo.png" srcset="../images/carousel_demo@2x.png 2x" />

### Styling

The Carousel comes with styling flexibility through the various overrides controlling the navigation button background and icon colors, the indicator colors, border colors, and a slide image for the currently active slide. You should keep in mind that only one indicator may be active at a time.

<img class="responsive-img" src="../images/carousel_styling.png" srcset="../images/carousel_styling@2x.png 2x" />

## Usage

The previous and next navigation buttons of the Carousel should always appear on top of the image slide, and the indicators should have consistent styling, where only the active one should be emphasized.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/carousel_do1.png" srcset="../images/carousel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont1.png" srcset="../images/carousel_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/carousel_do2.png" srcset="../images/carousel_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont2.png" srcset="../images/carousel_dont2@2x.png 2x" /> |

## Code generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Carousel in your design is very likely to result in loss of code generation capability for the Carousel.

### Data Source Property

When supplied, the `🕹️DataSource` value is used to set up [binding](../codegen/data-binding.md) to the Carousel. The data source must be a string array of image names to display. The `🕹️DataSource` property is optional. When the `🕹️DataSource` is supplied, Slide styles are gathered from the first Slide in the group. Other Slide styles are ignored.

### Sketch Elevations

Button and Slide elevation changes in Sketch drawings are not rendered during code generation.  Each button type has a default elevation that will be applied by the Ignite UI Component. Currently, this is a known limitation of the Ignite UI for Angular product that will be resolved in the upcoming releases.

## Additional Resources

Related topic:

- [Grid](grid.md)
- [Data Binding](../codegen/data-binding.md)

Our community is active and always welcoming to new ideas.


