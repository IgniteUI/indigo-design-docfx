---
title: Skeleton List - Design System Component
_description: The Skeleton List is a representation of a List component that is shown while data is being loaded in the background to provide content for a list.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Skeleton List

Use the Skeleton List Component to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote datasource and there is either lack of connectivity, or it takes some time. The Skeleton List is just a visual representation of a [List](list.md) with known layout, but without any data to show.

## Skeleton List Demo

<img class="responsive-img" src="../images/list_skeleton_demo.png" srcset="../images/list_skeleton_demo@2x.png 2x" />

## Types

The Skeleton List supports the same two types like the standard [List](list.md): one-line item list and  two-line item list. 

<img class="responsive-img" src="../images/list_skeleton_one-line_item.png" srcset="../images/list_skeleton_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_two-line_item.png" srcset="../images/list_skeleton_two-line_item@2x.png 2x" />

## List Item Type

The Skeleton List Item comes in the same three preset types like the standard [List](list.md): Header, One-line, and Two-line.

<img class="responsive-img" src="../images/list_skeleton_item_header.png" srcset="../images/list_skeleton_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_one-line.png" srcset="../images/list_skeleton_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_two-line.png" srcset="../images/list_skeleton_item_two-line@2x.png 2x" />

## List Item State

The One-line and Two-line List Items support the same interactive states like the standard [List](list.md): **inactive** and active.

<img class="responsive-img" src="../images/list_skeleton_item_inactive.png" srcset="../images/list_skeleton_item_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_active.png" srcset="../images/list_skeleton_item_active@2x.png 2x" />

## List Item Areas

The Skeleton List Item has two distinct areas like the standard [List](list.md): Primary Action and Secondary Action.

<img class="responsive-img" src="../images/list_skeleton_item_primary.png" srcset="../images/list_skeleton_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_secondary.png" srcset="../images/list_skeleton_item_secondary@2x.png 2x" />

## List Item Primary Action

There are 4 interchangeable List Item Primary Actions like the standard [List](list.md) that are listed below. Thanks to the use of Smart Layout in Sketch they can be adjusted further by setting unnecessary elements to ~No Symbol.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_skeleton_item_primary1.png" srcset="../images/list_skeleton_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_skeleton_item_primary2.png" srcset="../images/list_skeleton_item_primary2@2x.png 2x" />   |  Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_skeleton_item_primary3.png" srcset="../images/list_skeleton_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_skeleton_item_primary4.png" srcset="../images/list_skeleton_item_primary4@2x.png 2x" />   | Linear Progress Bar in a Primary Action can not have a value label, therefore, it is set to ~No Symbol and this setting should not be changed |                                                                                                                                            |

## List Item Secondary Action

There are 4 interchangeable List Item Secondary Actions like the standard [List](list.md) that are listed below. Thanks to the use of Smart Layout in Sketch they can be adjusted further by setting unnecessary elements to ~No Symbol.

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Badge            | <img class="responsive-img" src="../images/list_skeleton_item_secondary.png" srcset="../images/list_skeleton_item_secondary@2x.png 2x" />   |                                                                                                                                       |
| Checkbox         | <img class="responsive-img" src="../images/list_skeleton_item_secondary2.png" srcset="../images/list_skeleton_item_secondary2@2x.png 2x" /> | Checkbox in a Secondary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Text and Icon            | <img class="responsive-img" src="../images/list_skeleton_item_secondary3.png" srcset="../images/list_skeleton_item_secondary3@2x.png 2x" /> |                                                                                                                                       |
| Toggle             | <img class="responsive-img" src="../images/list_skeleton_item_secondary4.png" srcset="../images/list_skeleton_item_secondary4@2x.png 2x" /> | Switch in a Secondary Action can not have a label, therefore, the before and after labels are set to ~ No Symbol and this setting should not be changed                                                                                                                 |

## Usage

When creating a list layout, avoid combining standard and skeleton list items. Data is either present for all list items, or for none of them, thus the two types should not be used within the same layout.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/list_skeleton_do1.png" srcset="../images/list_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/list_skeleton_dont1.png" srcset="../images/list_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [List](list.md)

Our community is active and always welcoming to new ideas.