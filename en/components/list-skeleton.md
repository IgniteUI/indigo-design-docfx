---
title: Skeleton List - Design System Component
_description: The Skeleton List is a representation of a List component that is shown while data is being loaded in the background to provide content for its items.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma HTML, Figma UI kits, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular
---

# Skeleton List

Use the Skeleton List Component to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote datasource and there is either lack of connectivity, or it takes some time. The Skeleton List is just a visual representation of a [List](list.md) with known layout, but without any data to show.

## Skeleton List Demo

<img class="responsive-img" src="../images/list_skeleton_demo.png" srcset="../images/list_skeleton_demo@2x.png 2x" />

## Type

The Skeleton List supports the same two types like the standard [List](list.md): One-line Item List and Two-line Item List. 

<img class="responsive-img" src="../images/list_skeleton_one-line_item.png" srcset="../images/list_skeleton_one-line_item@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_two-line_item.png" srcset="../images/list_skeleton_two-line_item@2x.png 2x" />

## Skeleton List Item 

The Skeleton List Item comes in the same three preset types like the standard [List](list.md) under the property `Line` in the property panel: Header, One-line, and Two-line.

<img class="responsive-img" src="../images/list_skeleton_item_header.png" srcset="../images/list_skeleton_item_header@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_one-line.png" srcset="../images/list_skeleton_item_one-line@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_two-line.png" srcset="../images/list_skeleton_item_two-line@2x.png 2x" />

## List Item Areas

The Skeleton List Item has two distinct areas like the standard [List](list.md): Primary Action and Secondary Action.

<img class="responsive-img" src="../images/list_skeleton_item_primary.png" srcset="../images/list_skeleton_item_primary@2x.png 2x" />
<img class="responsive-img" src="../images/list_skeleton_item_secondary.png" srcset="../images/list_skeleton_item_secondary@2x.png 2x" />

## Primary Action in Figma and Sketch

There are 5 interchangeable Skeleton List Item Primary Actions available under `Type` property in Figma. The Skeleton List Item Primary Actions are like the standard [List Item](list-item.md). The List Item supports One-line and Two-line options which can be found under `Line` property.

|                              |                                                                                                  |                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Avatar + Label + Description | <img class="responsive-img" src="../images/list_skeleton_item_primary1.png" srcset="../images/list_skeleton_item_primary1@2x.png 2x" />     |                                                                                                                                            |
| Checkbox + Label               | <img class="responsive-img" src="../images/list_skeleton_item_primary2.png" srcset="../images/list_skeleton_item_primary2@2x.png 2x" />   |  Checkbox in a Primary Action can not have a label, therefore, the before and after labels are toggled off in the layers panel in Figma and this setting should not be changed |
| Icon + Label + Desc | <img class="responsive-img" src="../images/list_skeleton_item_primary3.png" srcset="../images/list_skeleton_item_primary3@2x.png 2x" />   |                                                                                                                                            |
| Label + Progress          | <img class="responsive-img" src="../images/list_skeleton_item_primary4.png" srcset="../images/list_skeleton_item_primary4@2x.png 2x" />   | |                                                                                                                                            |
| Label | <img class="responsive-img" src="../images/list_skeleton_item_primary5.png" srcset="../images/list_skeleton_item_primary5@2x.png 2x" />     |                                                                                                                                            |

## Secondary Action in Figma

The Secondary Action of the Skeleton List Item covers all scenarios possible with its counterpart from the standard [List Item](list-item.md). In Figma all the actions will be added soon.

|                  |                                                                                                    |                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Text and Icon            | <img class="responsive-img" src="../images/list_skeleton_item_secondary3.png" srcset="../images/list_skeleton_item_secondary3@2x.png 2x" /> |                                                                                                                                       |

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
