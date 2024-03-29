---
title: List Item - Design System Component
_description: The List Item Component Symbol is used to display information and possible actions to it.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# List Item

Use the List Item to display a repeated piece of information in the List component with text, icons, and images and components such as Switch and Checkbox, among others, to allow users to take possible actions. The List Item is visually identical to the building blocks of the [Ignite UI for Angular List Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html)

## List Item Demo

<img class="responsive-img" src="../images/list_item_demo.png" srcset="../images/list_item_demo@2x.png 2x" />

## Type

In Sketch and Figma the List Item comes in three preset types: Header for defining the headings of groups, One-line for shorter items with only one line of primary text, and Two-line for taller items supporting primary and secondary text. In Adobe XD with just two presets you can achieve the same and much more, so there we have only Header and Item types.

<img class="responsive-img" src="../images/list_item_header.png" srcset="../images/list_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_one-line.png" srcset="../images/list_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_two-line.png" srcset="../images/list_item_two-line@2x.png 2x" />
<div class="divider--half"></div>

> [!NOTE]
> To ensure proper alignment in cases where a list item consists of **three** or **four** lines, manual adjustment of the Avatar and Actions is required to align them to the top. This alignment is considered the expected behavior. Currently, this is possible and available in Figma **Indigo.Design System** and these adjustments are easily accessible and feasible.
>
> To achieve this top alignment, you should set the `State` and `Thumbnail` frames to **top left**. In rare cases where the Secondary Actions need to consist of a text container and an action icon, you should also set the `Secondary Actions` frame to **top right**.

<img class="responsive-img" src="../images/list_item_three-line.png" srcset="../images/list_item_three-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_four-line.png" srcset="../images/list_item_four-line@2x.png 2x" />

## State

The Items support the following interactive states: **inactive** for the normal state and **active** for the selected state. In Figma the states can be found under `State` property in the right sidebar. In Sketch, this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states. The Header List Item is not selectable so it provides no support for such states.

<img class="responsive-img" src="../images/list_item_inactive.png" srcset="../images/list_item_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_active.png" srcset="../images/list_item_active@2x.png 2x" />

## Area

In Figma and Sketch, the List Item has two distinct areas: Primary Action with non-interactive content such as Avatar and text, and Secondary Action with quick actions related to the List Item. Any combination of a Primary and Secondary action creates a unique list item template that should be used consistently across all items of a List.

In Adobe XD, the list item has a Group where non-interactive content such as Avatar, Progress bar, and text are laid out, as well as an Actions component containing actionable icons for the right side of the item. In both areas, you can drag arbitrary components from the `Libraries` panel to create the layout that you need without ever having to destroy any of the components in the template or the item itself.

<img class="responsive-img" src="../images/list_item_primary.png" srcset="../images/list_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />

## Primary Action in Figma and Sketch

There are 5 interchangeable List Item Primary Actions available under `Type` property in Figma and 4 available as `Symbol Overrides` in Sketch. Thanks to the Smart Layout in Sketch, List Items can be adjusted further by setting unnecessary elements to ~No Symbol.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_item_primary1.png" srcset="../images/list_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_item_primary2.png" srcset="../images/list_item_primary2@2x.png 2x" />   |  Checkbox inside a List Item can not have its own label, therefore, the before and after labels are set to ~No Symbol in Sketch and the label layer is not present in Adobe XD. This setting should not be changed! |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_item_primary3.png" srcset="../images/list_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_item_primary4.png" srcset="../images/list_item_primary4@2x.png 2x" />   | Linear Progress Bar inside a List Item can not have a value label, therefore, it is set to ~No Symbol in Sketch and the value label layer is not present in Adobe XD. This setting should not be changed! |                                    
| Label | <img class="responsive-img" src="../images/list_item_primary5.png" srcset="../images/list_item_primary5@2x.png 2x" />     |                                                                                                                                            |

## Secondary Action in Figma and Sketch

There are 4 interchangeable List Item Secondary Actions in Figma and Sketch. In Figma, they are available under the `Secondary Action` base component properties where they can be switched and turned on and off, depending on the case and needs. The auto layout in Figma will automatically adjust the component based on the selected properties. In Sketch, the Secondary Actions are available as `Symbol Overrides` and thanks to the Smart Layout, they can be adjusted further by setting unnecessary elements to ~No Symbol.

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Badge            | <img class="responsive-img" src="../images/list_item_secondary.png" srcset="../images/list_item_secondary@2x.png 2x" />   |                                                                                                                                       |
| Checkbox         | <img class="responsive-img" src="../images/list_item_secondary2.png" srcset="../images/list_item_secondary2@2x.png 2x" /> | Checkbox inside a List Item can not have a label, therefore, the before and after labels are hidden in Figma, set to ~No Symbol in Sketch and the label layer is not present in Adobe XD. This setting should not be changed! |
| Text and Icon            | <img class="responsive-img" src="../images/list_item_secondary3.png" srcset="../images/list_item_secondary3@2x.png 2x" /> | Text and Icons could be used independently. In Figma, you can turn on and off the Text Container and hide one or both icons, in Sketch, setting them to ~No Symbol will hide them.                                                                                                                                     |
| Toggle/Switch             | <img class="responsive-img" src="../images/list_item_secondary4.png" srcset="../images/list_item_secondary4@2x.png 2x" /> | Switch inside a List Item can not have a label, therefore, the before and after labels are hidden in Figma, set to ~ No Symbol in Sketch and the label layer is not present in Adobe XD. This setting should not be changed!   |                                                                                                                                          |

## Thumbnail in Adobe XD

The Thumbnail component in the left List Item area in Adobe XD provides 3 interchangeable options via the `Component States` paradigm to let you easily switch them. This makes it possible to create a matching design for each of the Primary Actions in Sketch.

<img class="responsive-img" src="../images/thumbnail_xd.png" srcset="../images/thumbnail_xd@2x.png 2x" />

## Actions in Adobe XD

The Actions component that constitutes the right List Item area in Adobe XD provides 4 interchangeable options via the `Component States` paradigm to let you easily switch them. This makes it possible to create a matching design for each of the Secondary Actions in Sketch.

<img class="responsive-img" src="../images/actions_xd.png" srcset="../images/actions_xd@2x.png 2x" />

## Styling

The List Item comes with styling flexibility through the options available for the different elements used in it, such as icons, text and components like Avatar, Badge, Checkbox, Icon, Progress, Switch, etc., each with its own styling capabilities.

<img class="responsive-img" src="../images/list_item_styling.png" srcset="../images/list_item_styling@2x.png 2x" />

## Additional Resources

Related topics:

- [Avatar](avatar.md)
- [Badge](badge.md)
- [Checkbox](checkbox.md)
- [Icon](icon.md)
- [List](list.md)
- [Custom List Item in Sketch](list-custom.md)
- [Skeleton List](list-skeleton.md)
- [Progress](progress.md)
- [Switch](switch.md)
- [Lists Pattern](../patterns/lists.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
