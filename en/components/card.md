---
title: Card - Design System Component
_description: The Card Component Symbol contains images and text outlining a single object, enhanced with relevant actions.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Card

Use the Card Component to display information for a single object through an image, map, or other media content, as well as text, allowing relevant quick actions to be triggered such as sharing, liking, bookmarking, etc. It usually works as an overview and entry point for more detailed information. Cards with various content and layout can be combined to create a dashboard. The Card is visually identical to the [Ignite UI for Angular Card Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html)

## Card Demo

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## Areas

The Card has four distinct areas: `image` at the top to show picture or map media, `header` which holds a combination of thumbnail Avatar, title, and subtitle, `body` which holds text paragraphs detailing the Card, and `actions` which serve as a toolbar with quick actions related to the Card.

|         |                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------- |
| image   | <img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" /> |
| header  | <img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" /> |
| body    | <img class="responsive-img" src="../images/card_content_image.png" srcset="../images/card_body@2x.png 2x" /> |
| actions | <img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" /> |

## Image and Body

The image and body Card areas support the same collection of eleven overrides: 6 continent maps for the populated world areas, one World Map, and one Navigation Map, as well as an Array of shortcuts like contacts, Image, and Paragraph for a short description text.

<img class="responsive-img" src="../images/card_media_worldmap.png" srcset="../images/card_media_worldmap@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_nav.png" srcset="../images/card_media_nav@2x.png 2x" />

<img class="responsive-img" src="../images/card_media_image.png" srcset="../images/card_media_image@2x.png 2x" />

<img class="responsive-img" src="../images/card_body.png" srcset="../images/card_body@2x.png 2x" />

## Header

The Card header supports various layouts, including an Avatar Thumbnail, Title, and Subtitle elements. In Sketch, the smart layout rules adjust the layout accordingly when you set the elements you want to hide to ~No Symbol. In Adobe XD, the use of a Stack lets you achieve the same when you delete unnecessary layers.

<img class="responsive-img" src="../images/card_header.png" srcset="../images/card_header@2x.png 2x" />

## Actions

The Card actions come in six distinct layouts: **Button + Icon Actions** with two Flat Buttons and three Icons and the inverse Icon + Button Actions laid the other way around, as well as their Justified~ variants, and variants with only Justified Button Actions and Justified Icon Actions. Each of the six is defined with a smart layout in Sketch, letting you remove elements by setting them to ~No Symbol and have the rest automatically adjust to the desired layout. In Adobe XD, you have to delete the unused layers instead, and the layout will adjust through the use of stacks.

<img class="responsive-img" src="../images/card_actions_buttons_icons.png" srcset="../images/card_actions_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_icons_buttons.png" srcset="../images/card_actions_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_buttons_icons.png" srcset="../images/card_actions_just_buttons_icons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_buttons.png" srcset="../images/card_actions_just_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_icons_buttons.png" srcset="../images/card_actions_just_icons_buttons@2x.png 2x" />

<img class="responsive-img" src="../images/card_actions_just_icons.png" srcset="../images/card_actions_just_icons@2x.png 2x" />

## Card Layout

Through the use of `Smart Layout` in Sketch and `Stacks` in Adobe XD, the Card can produce various layouts by excluding certain areas or elements within one area or another to create a myriad of distinct variants starting with the same Component initially.

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## Styling

The Card comes with styling flexibility through the various overrides available for image, header, body, and actions areas such as text, icons, and button colors, as well as the possibility to choose a Card background color.

<img class="responsive-img" src="../images/card_styling.png" srcset="../images/card_styling@2x.png 2x" />

## Usage

The Card usually works as an overview UI and an entry point for more detailed information. Avoid clogging it with too much information and as you create dashboards with it, size and arrange the Cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/card_do1.png" srcset="../images/card_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont1.png" srcset="../images/card_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/card_do2.png" srcset="../images/card_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont2.png" srcset="../images/card_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Button](button.md)
- [Icon](icon.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
