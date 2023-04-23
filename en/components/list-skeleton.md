---
title: Skeleton List - Design System Component
_description: The Skeleton List is a representation of a List component that is shown while data is being loaded in the background to provide content for its items.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Skeleton List

Use the Skeleton List Component to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote datasource and there is either lack of connectivity, or it takes some time. The Skeleton List is just a visual representation of a [List](list.md) with known layout, but without any data to show.

## Skeleton List Demo

<img class="responsive-img" src="../images/list_skeleton_demo.png" srcset="../images/list_skeleton_demo@2x.png 2x" />

## Type

The Skeleton List supports the same two types like the standard [List](list.md): One-line Item List and Two-line Item List. 

<img class="responsive-img" src="../images/list_skeleton_one-line_item.png" srcset="../images/list_skeleton_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_two-line_item.png" srcset="../images/list_skeleton_two-line_item@2x.png 2x" />

## List Item Type

The Skeleton List Item comes in the same three preset types like the standard [List](list.md): Header, One-line, and Two-line.

<img class="responsive-img" src="../images/list_skeleton_item_header.png" srcset="../images/list_skeleton_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_one-line.png" srcset="../images/list_skeleton_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_two-line.png" srcset="../images/list_skeleton_item_two-line@2x.png 2x" />

## List Item Areas

The Skeleton List Item has two distinct areas like the standard [List](list.md): Primary Action and Secondary Action.

<img class="responsive-img" src="../images/list_skeleton_item_primary.png" srcset="../images/list_skeleton_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_secondary.png" srcset="../images/list_skeleton_item_secondary@2x.png 2x" />

## Primary Action in Figma and Sketch

There are 5 interchangeable Skeleton List Item Primary Actions available in Figma and 4 available as `Symbol Overrides` in Sketch. The Skeleton List Item Primary Actions are like the standard [List Item](list-item.md). Thanks to the Smart Layout in Sketch, List Items can be adjusted further by setting unnecessary elements to ~No Symbol.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_skeleton_item_primary1.png" srcset="../images/list_skeleton_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_skeleton_item_primary2.png" srcset="../images/list_skeleton_item_primary2@2x.png 2x" />   |  Checkbox in a Primary Action can not have a label, therefore, the before and after labels are set to ~No Symbol and this setting should not be changed |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_skeleton_item_primary3.png" srcset="../images/list_skeleton_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_skeleton_item_primary4.png" srcset="../images/list_skeleton_item_primary4@2x.png 2x" />   | Linear Progress Bar in a Primary Action can not have a value label, therefore, it is set to ~No Symbol and this setting should not be changed |                                                                                                                                            |
| Label | <img class="responsive-img" src="../images/list_skeleton_item_primary5.png" srcset="../images/list_skeleton_item_primary5@2x.png 2x" />     |                                                                                                                                            |

## Secondary Action in Sketch

The Secondary Action of the Skeleton List Item covers all scenarios possible with its counterpart from the standard [List Item](list-item.md).

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Text and Icon            | <img class="responsive-img" src="../images/list_skeleton_item_secondary3.png" srcset="../images/list_skeleton_item_secondary3@2x.png 2x" /> |                                                                                                                                       |

## Thumbnail in Adobe XD

The Thumbnail component in the left Skeleton List Item area in Adobe XD provides 3 interchangeable options like the standard [List Item](list-item.md) via the `Component States` paradigm to let you easily switch them.

<img class="responsive-img" src="../images/thumbnail_xd_skeleton.png" srcset="../images/thumbnail_xd_skeleton@2x.png 2x" />

## Actions in Adobe XD

The Actions component that constitutes the right Skeleton List Item area in Adobe XD covers all scenarios possible with its counterpart from the standard [List Item](list-item.md).

<img class="responsive-img" src="../images/actions_xd_skeleton.png" srcset="../images/actions_xd_skeleton@2x.png 2x" />

## Usage

When creating a list layout, avoid combining standard and skeleton list items. Data is either present for all list items, or for none of them, thus the two types should not be used within the same layout.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/list_skeleton_do1.png" srcset="../images/list_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/list_skeleton_dont1.png" srcset="../images/list_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [List](list.md)
- [List Item](list-item.md)

Our community is active and always welcoming to new ideas.
