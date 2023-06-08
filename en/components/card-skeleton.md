---
title: Skeleton Card - Design System Component
_description: The Skeleton Card is a representation of a Card component that is shown while data is being loaded in the background to provide content for a collection of cards.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Skeleton Card

Use the Skeleton Card Component to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote data source and there is either lack of connectivity, or it takes some time. The Skeleton Card is just a visual representation of a [Card](card.md) with a known layout, but without any data to show.

## Skeleton Card Demo

<img class="responsive-img" src="../images/card_skeleton_demo.png" srcset="../images/card_skeleton_demo@2x.png 2x" />

## Areas

The Skeleton Card supports the same four areas like the standard [Card](card.md): `image`, `header`, `content`, and `actions`. 

## Image

The skeleton image area supports an Image, covering the maps available in the standard [Card](card.md).

<img class="responsive-img" src="../images/card_skeleton_media.png" srcset="../images/card_skeleton_media@2x.png 2x" />

## Header

The skeleton header is consistent with that of the standard [Card](card.md).

<img class="responsive-img" src="../images/card_skeleton_header.png" srcset="../images/card_skeleton_header@2x.png 2x" />

## Content

The content area supports a Paragraph for a short description text and an Array of shortcuts like Contacts.

<img class="responsive-img" src="../images/card_skeleton_content_paragraph.png" srcset="../images/card_skeleton_content_paragraph@2x.png 2x" />
<img class="responsive-img" src="../images/card_skeleton_content_array.png" srcset="../images/card_skeleton_content_array@2x.png 2x" />

## Actions

The skeleton actions map to the same layouts that can be found in the standard [Card](card.md). They are also defined with auto layout in Figma, letting you select the type from the Design tab in the right sidebar, with a smart layout in Sketch, letting you remove elements by setting them to ~No Symbol and have the rest automatically adjust to the desired layout. In Adobe XD, the use of a Stack lets you achieve the same when you remove unnecessary components.

|                   |  Justified Actions **Off**                                            |  Justified Actions **On**                                             |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Buttons + Icons   | <img class="responsive-img" src="../images/card_skeleton_actions_buttons_icons.png" srcset="../images/card_skeleton_actions_buttons_icons@2x.png 2x" /> | <img class="responsive-img" src="../images/card_skeleton_actions_just_buttons_icons.png" srcset="../images/card_skeleton_actions_just_buttons_icons@2x.png 2x" /> |
| Icons + Buttons   | <img class="responsive-img" src="../images/card_skeleton_actions_icons_buttons.png" srcset="../images/card_skeleton_actions_icons_buttons@2x.png 2x" /> | <img class="responsive-img" src="../images/card_skeleton_actions_just_icons_buttons.png" srcset="../images/card_skeleton_actions_just_icons_buttons@2x.png 2x" /> |
| Only Buttons      | <img class="responsive-img" src="../images/card_skeleton_actions_buttons_right.png" srcset="../images/card_skeleton_actions_buttons_right@2x.png 2x" /> <p style="width: 100%; text-align:left;">Content Position: Right</p> | <img class="responsive-img" src="../images/card_skeleton_actions_just_buttons_left.png" srcset="../images/card_skeleton_actions_just_buttons_left@2x.png 2x" /> <p style="width: 100%; text-align:left;">Content Position: Left</p>  |
| Only Icons        | <img class="responsive-img" src="../images/card_skeleton_actions_icons_right.png" srcset="../images/card_skeleton_actions_icons_right@2x.png 2x" /> <p style="width: 100%; text-align:left;">Content Position: Right</p> | <img class="responsive-img" src="../images/card_skeleton_actions_just_icons_left.png" srcset="../images/card_skeleton_actions_just_icons_left@2x.png 2x" /> <p style="width: 100%; text-align:left;">Content Position: Left</p> |

## Skeleton Card Layout

Through the use of an auto layout in Figma, a smart layout in Sketch and a Stack in Adobe XD, the Skeleton Card can produce various layouts by excluding certain areas or elements to allow the creation of a variety of cards based upon the same Component initially in a similar way like the standard [Card](card.md) does.

<img class="responsive-img" src="../images/card_skeleton_demo.png" srcset="../images/card_skeleton_demo@2x.png 2x" />

## Usage

When creating layouts with multiple cards, avoid combining standard and skeleton cards. Data is either present for all cards, or for none of them, thus the two types should not be used within the same grid layout.

| Do                                                                         | Don't                                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/card_skeleton_do.png" srcset="../images/card_skeleton_do@2x.png 2x" /> | <img class="responsive-img" src="../images/card_skeleton_dont.png" srcset="../images/card_skeleton_dont@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Card](card.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
