---
title: List Item - Design System Component
_description: The List Item Component Symbol is used to display information and possible actions to it.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# List Item

Use the List Item to display a repeated piece of information in the List component with text, icons, and images and components such as Switch and Checkbox, among others, to allow users to take possible actions. The List Item is visually identical to the building blocks of the [Ignite UI for Angular List Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html)

## List Item Demo

<img class="responsive-img" src="../images/list_item_demo.png" srcset="../images/list_item_demo@2x.png 2x" />

## Type

In Sketch, the List Item comes in three preset types: Header for defining the headings of groups, One-line for shorter items with only one line of primary text, and Two-line for taller items supporting primary and secondary text. In Adobe XD with just two presets you can achieve the same and much more, so there we have only Header and Item types.

<img class="responsive-img" src="../images/list_item_header.png" srcset="../images/list_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_one-line.png" srcset="../images/list_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_two-line.png" srcset="../images/list_item_two-line@2x.png 2x" />

## State

The Items support the following interactive states: **inactive** for the normal state and active for the selected state. In Sketch, this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states. The Header List Item is not selectable so it provides no support for such states.

<img class="responsive-img" src="../images/list_item_inactive.png" srcset="../images/list_item_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_active.png" srcset="../images/list_item_active@2x.png 2x" />

## Area

In Sketch, the List Item has two distinct areas: Primary Action with non-interactive content such as Avatar and text, and Secondary Action with quick actions related to the List Item. Any combination of a Primary and Secondary action creates a unique list item template that should be used consistently across all items of a List.

In Adobe XD, the list item has a Group where non-interactive content such as Avatar, Progress bar, and text are laid out, as well as an Actions component containing actionable icons for the right side of the item. In both areas, you can drag arbitrary components from the `Libraries` panel to create the layout that you need without ever having to destroy any of the components in the template or the item itself.

<img class="responsive-img" src="../images/list_item_primary.png" srcset="../images/list_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />

## Primary Action in Sketch

4 interchangeable List Item Primary Actions are listed below. In Sketch, this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them. Thanks to Smart Layout in Sketch, they can be adjusted further by setting unnecessary elements to ~No Symbol. In Adobe XD you have to delete the unused layers instead, and the layout will adjust due to the Stack applied to it.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_item_primary1.png" srcset="../images/list_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_item_primary2.png" srcset="../images/list_item_primary2@2x.png 2x" />   |  Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_item_primary3.png" srcset="../images/list_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_item_primary4.png" srcset="../images/list_item_primary4@2x.png 2x" />   | Linear Progress Bar in a Primary Action can not have a value label, therefore, it is set to ~No Symbol and this setting should not be changed |                                                                                                                                            |

## Secondary Action

4 interchangeable List Item Secondary Actions are listed below. In Sketch, this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them. Thanks to Smart Layout in Sketch, they can be adjusted further by setting unnecessary elements to ~No Symbol. In Adobe XD you have to delete the unused layers instead, and the layout will adjust through the use of stacks.

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Badge            | <img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />   |                                                                                                                                       |
| Checkbox         | <img class="responsive-img" src="../images/list_item_secondary2.png" srcset="../images/list_item_secondary2@2x.png 2x" /> | Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Text and Icon            | <img class="responsive-img" src="../images/list_item_secondary3.png" srcset="../images/list_item_secondary3@2x.png 2x" /> |                                                                                                                                       |
| Toggle             | <img class="responsive-img" src="../images/list_item_secondary4.png" srcset="../images/list_item_secondary4@2x.png 2x" /> | Switch in a Secondary Action can not have a label, therefore, the before and after labels are set to ~ No Symbol and this setting should not be changed                                                                                                                 |

## Thumbnail in Adobe XD

The Thumbnail component in the left List Item area in Adobe XD provides 3 interchangeable options via the `Component States` paradigm to let you easily switch them. This makes it possible to create a matching design for each of the Primary Actions in Sketch.

## Actions in Adobe XD

The Actions component that constitutes the right List Item area in Adobe XD provides 4 interchangeable options via the `Component States` paradigm to let you easily switch them. This makes it possible to create a matching design for each of the Secondary Actions in Sketch.
## Styling

The List Item comes with styling flexibility through the options available for the different elements used in it, such as icons, text and components like Avatar, Badge, Checkbox, Icon, Progress, Switch, etc., each with its own styling capabilities.

<img class="responsive-img" src="../images/list_item_styling.png" srcset="../images/list_item_styling@2x.png 2x" />

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Custom List Item in Sketch](list-custom.md)
- [Icon](icon.md)
- [List](list.md)
- [Lists Pattern](../patterns/lists.md)
- [Progress](progress.md)
- [Skeleton List](list-skeleton.md)
- [Switch](switch.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
