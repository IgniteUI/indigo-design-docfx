---
title: Cards - Design System Component
_description: The Card Component Symbol contains images and text outlining a single object, enhanced with relevant actions.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Cards

Use the Card Component to display information for a single object through images and text, allowing relevant quick actions to be triggered such as sharing, liking, bookmarking, etc. The Card usually works as an overview and entry point for more detailed information, and dashboards are created by combining different types of Cards. The Card is visually identical to the [Ignite UI for Angular Card Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/card.html)

### Card Demo

![](../images/card_demo.png)

### Areas

The Card has three distinct areas: `header` which holds a combination of title and subtitle, `content` which holds images and paragraphs detailing the Card, and `actions` which serves as a toolbar with quick actions related to the Card.

|         |                                       |
| ------- | ------------------------------------- |
| header  | ![](../images/card_headerL.png)       |
| content | ![](../images/card_content_image.png) |
| actions | ![](../images/card_actions_icons.png) |

### Header

The Card Header supports three distinct layouts: **Large Title** which provides a large title and a subtitle, Small Title which provides a small title and a subtitle, and Small Title Only which provides a small title and no subtitle.

![](../images/card_headerL.png)
![](../images/card_headerS.png)
![](../images/card_header_title.png)

### Content

The Card Content supports five distinct layouts: **Array** for shortcuts like contacts, Image with or without a title, Map for showing geographical location, and Paragraph for a short description text.

![](../images/card_content_shortcuts.png)
![](../images/card_content_image.png)
![](../images/card_content_map.png)
![](../images/card_content_paragraph.png)

### Actions

The Card Actions come in three distinct layouts: **Button Actions** with just a couple of Flat Buttons, Icon Actions with up to three icons, and Icon + Button Actions combining the two approaches.

![](../images/card_actions_buttons.png)
![](../images/card_actions_icons.png)
![](../images/card_actions_mixed.png)

### Types

The Card is available in one of the following layouts:

|                   |                                       |
| ----------------- | ------------------------------------- |
| Point of Interest | ![](../images/card_poi.png)           |
| Audio Video Card  | ![](../images/card_av.png)            |
| Normal Pin        | ![](../images/card_normal-pin.png)    |
| Condensed Pin     | ![](../images/card_condensed-pin.png) |
| Shortcuts         | ![](../images/card_shortcuts.png)     |
| Simple Card       | ![](../images/card_simple.png)        |
| Small Card        | ![](../images/card_small.png)         |
| Square Card       | ![](../images/card_square.png)        |
| Text Card         | ![](../images/card_text.png)          |
| Timeline Card     | ![](../images/card_timeline.png)      |

If none of them works for your design, you may create your own [Custom Cards](cards-custom.md).

### Styling

The Card comes with styling flexibility through the various overrides available for header, content, and actions areas such as text, icons, and button colors, as well as the possibility to choose a Card background color.

![](../images/card_styling.png)

## Usage

The Card usually works as an overview and entry point for more detailed information, therefore, you want to avoid clogging it with too much information. When creating card dashboards, size and arrange cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| ![](../images/card_do1.png) | ![](../images/card_dont1.png) |
| ![](../images/card_do2.png) | ![](../images/card_dont2.png) |

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
- [Card Collection Pattern](card-collection.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
