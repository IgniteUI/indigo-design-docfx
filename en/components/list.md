---
title: List - Design System Component
_description: The List Component Symbol provides means to browse and interact with a vertical collection of rows of data.
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## List

Use the List Component Symbol to let the user browse and interact with a continous, vertical collection of templatable items containing text, icons, and images, as well as components such as buttons and avatars among others.
The List is visually identical to the [Ignite UI for Angular List Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html)

### List Demo

![](../images/list_demo.png)

### Detach from Symbol

The List is essentially a repeater of rows showing data as an indexed vertical collection of items. Therefore, the easiest way to use it is by dragging a `Generic List` to your artboard, right clicking on top of it and selecting the `Detach from Symbol` option near the bottom of the contextual menu. In your layers panel under the newly appeared _List/Generic List_ group you should see the following:

> [!INFO]
> | Layer | Use |
> | ----------------------------- | ------------------------------- |
> | 🚫 igx-list | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
> | List Header | An instance of a list header item |
> | 1 Item | An instance of a two-line list item |
> | 2 Item | An instance of a two-line list item |
> | 🌈 Background | Defines the background color of the list |
> | 🕹️Data | Used by code generation for data binding |

After detaching you may insert additional headers or items either from the Sketch menu, or simply by duplicating an existing symbol. Always place items and headers one after another with consistent horizontal width and alignment, making sure there are no vertical gaps between the items.

### List Item Type

The List Item comes in three preset Types: Header for defining the headings of groups, One-line for shorter items with only one line of text, and Two-line for taller items supporting primary and secondary text.

![](../images/list_item_header.png)
![](../images/list_item_one-line.png)
![](../images/list_item_two-line.png)

### List Item State

The One-line and Two-line List Items support the following interactive states: **inactive** for the normal state and active for the selected state. The Header List Item is not selectable so it provides no support for such States.

![](../images/list_item_inactive.png)
![](../images/list_item_active.png)

### List Item Areas

The List Item has two distinct areas: `Primary Action` with non-interactive content is laid out such as Avatar and text, and `Secondary Action` with quick actions related to the List Item. Any combination of a Primary and Secondary action forms a valid list item template, that should be used consistently across the items of the List.

![](../images/list_item_primary.png)
![](../images/list_item_secondary.png)

### List Item Primary Action

There are numerous interchangable List Item Primary Actions that are listed below.

|                              |                                        |
| ---------------------------- | -------------------------------------- |
| Avatar + Description + Label | ![](../images/list_item_primary.png)   |
| Avatar + Label               | ![](../images/list_item_primary2.png)  |
| Avatar + Label + Description | ![](../images/list_item_primary3.png)  |
| Description + Label          | ![](../images/list_item_primary4.png)  |
| Icon + Description + Label   | ![](../images/list_item_primary5.png)  |
| Icon + Label                 | ![](../images/list_item_primary6.png)  |
| Icon + Label + Description   | ![](../images/list_item_primary7.png)  |
| Label                        | ![](../images/list_item_primary8.png)  |
| Label + Description          | ![](../images/list_item_primary9.png)  |
| Label + Progress             | ![](../images/list_item_primary10.png) |

### List Item Secondary Action

There are also many interchangable List Item Secondary Actions that are listed below.

|                  |                                         |
| ---------------- | --------------------------------------- |
| Badge            | ![](../images/list_item_secondary.png)  |
| Checkbox         | ![](../images/list_item_secondary2.png) |
| Icons            | ![](../images/list_item_secondary3.png) |
| Text             | ![](../images/list_item_secondary4.png) |
| Text + Icons     | ![](../images/list_item_secondary5.png) |
| Toggle           | ![](../images/list_item_secondary6.png) |
| Two-line Numbers | ![](../images/list_item_secondary7.png) |

### Styling

The List comes with styling flexibility through the overrides available for background color and the different elements used in the List Items such as icons and text, as well as components like Avatar, Badge, Chechbox, Icon, Progress, Switch etc. with their own styling capabilities.

![](../images/list_styling.png)

## Usage

The List and List Items have their own design specifics, but most importantly one should always remember that the List is a collection of similar items usually following a common template. Therefore, avoid combining multiple templates within the same list. Also, avoid hiding elements, but rather than that provide placeholders or empty elements if certain type of content is missing. Last but not least, pay special attention to the alignment of the elements consituting the template as they must be able to form perceived vertical continuity.

| Do                          | Don't                         |
| --------------------------- | ----------------------------- |
| ![](../images/list_do1.png) | ![](../images/list_dont1.png) |
| ![](../images/list_do2.png) | ![](../images/list_dont2.png) |
| ![](../images/list_do3.png) | ![](../images/list_dont3.png) |

## Code generation

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Icon](icon.md)
- [Progress](progress.md)
- [Switch](switch.md)
- [Lists Pattern](lists.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
