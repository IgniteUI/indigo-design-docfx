---
title: Card - Design System Component
_description: The Card Component Symbol contains images and text outlining a single object, enhanced with relevant actions.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Card

Use the Card Component to display information for a single object through an image, map, or other media content ,as well as text, allowing relevant quick actions to be triggered such as sharing, liking, bookmarking, etc. It usually works as an overview and entry point for more detailed information. Cards with various content and layout can be combined to create a dashboard. The Card is visually identical to the [Ignite UI for Angular Card Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html)

## Card Demo

<img class="responsive-img" src="../images/card_demo.png" srcset="../images/card_demo@2x.png 2x" />

## Areas

The Card has three distinct areas: `header` which holds a combination of title and subtitle, `content` which holds images and paragraphs detailing the Card, and `actions` which serves as a toolbar with quick actions related to the Card.

|         |                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------- |
| header  | <img class="responsive-img" src="../images/card_headerl.png" srcset="../images/card_headerl@2x.png 2x" />             |
| content | <img class="responsive-img" src="../images/card_content_image.png" srcset="../images/card_content_image@2x.png 2x" /> |
| actions | <img class="responsive-img" src="../images/card_actions_icons.png" srcset="../images/card_actions_icons@2x.png 2x" /> |

## Header

The Card Header supports three distinct layouts: **Large Title** which provides a large title and a subtitle, Small Title which provides a small title and a subtitle, and Small Title Only which provides a small title and no subtitle.

<img class="responsive-img" src="../images/card_headerl.png" srcset="../images/card_headerl@2x.png 2x" />
<img class="responsive-img" src="../images/card_headers.png" srcset="../images/card_headers@2x.png 2x" />
<img class="responsive-img" src="../images/card_header_title.png" srcset="../images/card_header_title@2x.png 2x" />

## Content

The Card Content supports five distinct layouts: **Array** for shortcuts like contacts, Image with or without a title, Map for showing geographical location, and Paragraph for a short description text.

<img class="responsive-img" src="../images/card_content_shortcuts.png" srcset="../images/card_content_shortcuts@2x.png 2x" />
<img class="responsive-img" src="../images/card_content_image.png" srcset="../images/card_content_image@2x.png 2x" />
<img class="responsive-img" src="../images/card_content_map.png" srcset="../images/card_content_map@2x.png 2x" />
<img class="responsive-img" src="../images/card_content_paragraph.png" srcset="../images/card_content_paragraph@2x.png 2x" />

## Actions

The Card Actions come in three distinct layouts: **Button Actions** with just a couple of Flat Buttons, Icon Actions with up to three icons, and Icon + Button Actions combining the two approaches.

<img class="responsive-img" src="../images/card_actions_buttons.png" srcset="../images/card_actions_buttons@2x.png 2x" />
<img class="responsive-img" src="../images/card_actions_icons.png" srcset="../images/card_actions_icons@2x.png 2x" />
<img class="responsive-img" src="../images/card_actions_mixed.png" srcset="../images/card_actions_mixed@2x.png 2x" />

## Types

The Card is available in one of the following layouts:

|                   |                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Point of Interest | <img class="responsive-img" src="../images/card_poi.png" srcset="../images/card_poi@2x.png 2x" />                     |
| Audio Video Card  | <img class="responsive-img" src="../images/card_av.png" srcset="../images/card_av@2x.png 2x" />                       |
| Normal Pin        | <img class="responsive-img" src="../images/card_normal-pin.png" srcset="../images/card_normal-pin@2x.png 2x" />       |
| Condensed Pin     | <img class="responsive-img" src="../images/card_condensed-pin.png" srcset="../images/card_condensed-pin@2x.png 2x" /> |
| Shortcuts         | <img class="responsive-img" src="../images/card_shortcuts.png" srcset="../images/card_shortcuts@2x.png 2x" />         |
| Simple Card       | <img class="responsive-img" src="../images/card_simple.png" srcset="../images/card_simple@2x.png 2x" />               |
| Small Card        | <img class="responsive-img" src="../images/card_small.png" srcset="../images/card_small@2x.png 2x" />                 |
| Square Card       | <img class="responsive-img" src="../images/card_square.png" srcset="../images/card_square@2x.png 2x" />               |
| Text Card         | <img class="responsive-img" src="../images/card_text.png" srcset="../images/card_text@2x.png 2x" />                   |
| Timeline Card     | <img class="responsive-img" src="../images/card_timeline.png" srcset="../images/card_timeline@2x.png 2x" />           |

If none of them works for your design, you may create your own [Custom Cards](cards-custom.md).

## Styling

The Card comes with styling flexibility through the various overrides available for header, content, and actions areas such as text, icons, and button colors, as well as the possibility to choose a Card background color.

<img class="responsive-img" src="../images/card_styling.png" srcset="../images/card_styling@2x.png 2x" />

## Usage

The Card usually works as an overview and entry point for more detailed information, therefore, you want to avoid clogging it with too much information. When creating card dashboards, size and arrange cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/card_do1.png" srcset="../images/card_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont1.png" srcset="../images/card_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/card_do2.png" srcset="../images/card_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/card_dont2.png" srcset="../images/card_dont2@2x.png 2x" /> |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Card in your design is very likely to result in loss of code generation capability for the Card.

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Button](button.md)
- [Icon](icon.md)
- [Card Collection Pattern](../patterns/card-collection.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


