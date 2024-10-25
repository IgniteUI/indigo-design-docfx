---
title: Carousel - Design System Component
_description: The Carousel Component Symbol allows sequential browsing through a collection of images. 
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Carousel

Use the Carousel Component to let the user navigate through a collection of images in a sequential fashion, moving to the previous/next one through the arrows on the sides. The Carousel is visually identical to the [Ignite UI for Angular Carousel Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/carousel.html)

## Carousel Demo

<img class="responsive-img" src="../images/carousel_demo.png" srcset="../images/carousel_demo@2x.png 2x" />

## Indicators and Slides

The Carousel lets you define up to 5 slides, where for each one there is a matching indicator dot, allowing the user to navigate to that respective slide. In **Figma**, you can adjust the amount of indicators by hiding the layers, and the auto layout will adjust the layout. In **Sketch**, indicator states are achieved with `Symbol Overrides` and you can adjust their amount by setting the unnecessary indicators to ~No Symbol, the smart layout rules applied allow the layout to adjust accordingly. In **Adobe XD** we are using the `Component States` paradigm to let you easily switch between them and you can adjust the amount simply by deleting the layers of the unnecessary indicators, the applied stack will take care to adjust the layout accordingly.

<img class="responsive-img" src="../images/carousel_indicators&slides.png" srcset="../images/carousel_indicators&slides@2x.png 2x" />

## Styling

The Carousel comes with styling flexibility through the various options for the navigation buttons background and icon colors, the indicator colors, border colors, and the slide image for the currently active slide, along with button elevation and state where applicable. You should keep in mind that only one indicator may be active at a time.

<img class="responsive-img" src="../images/carousel_styling.png" srcset="../images/carousel_styling@2x.png 2x" />

## Usage

The previous and next navigation buttons of the Carousel should always appear on top of the image slide, and the indicators should have consistent styling, where only the active one should be emphasized.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/carousel_do1.png" srcset="../images/carousel_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont1.png" srcset="../images/carousel_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/carousel_do2.png" srcset="../images/carousel_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/carousel_dont2.png" srcset="../images/carousel_dont2@2x.png 2x" /> |

## Additional Resources

Related topic:

- [Grid](grid.md)

Our community is active and always welcoming to new ideas.
