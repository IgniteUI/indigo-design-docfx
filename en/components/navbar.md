---
title: Navbar - Design System Component
_description: The Navbar Component Symbol is used to inform the user of his current position in the application and provide a mechanism for simple navigation.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Navbar

Use the Navbar Component to provide clarity on the current position in the application and to implement simple application-level navigation. If your application requires more complex navigation with larger number of actions consider using a [Navigation Drawer](nav-drawer.md) or [Menu](../patterns/menu.md) instead. The Navbar is always situated at the top of the screen and is visually identical to the [Ignite UI for Angular Navbar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)

## Navbar Demo

<img class="responsive-img" src="../images/navbar_demo.png" srcset="../images/navbar_demo@2x.png 2x" />

## Type

The Navbar comes in two distinct type variants an Elevated one that casts a shadow on the main content area and an Outlined one which has a border instead to separate it from the rest of the content. Both variants support the same functionality inside.

<img class="responsive-img" src="../images/navbar_elevated.png" srcset="../images/navbar_elevated@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_outlined.png" srcset="../images/navbar_outlined@2x.png 2x" />

They both come in two action variants: Icon Actions and Icon Button Actions.

<img class="responsive-img" src="../images/navbar_icon.png" srcset="../images/navbar_icon@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_iconbutton.png" srcset="../images/navbar_iconbutton@2x.png 2x" />

## Content Layout

The Navbar content is split into a left area, consisting of a Left Action and a Title, and a right area with up to four adjacent icons or icon buttons that can trigger different simple events. You can configure the Navbar layout by setting the Left Action or the Icons/the Icon Buttons to the right to ~No Symbol in Sketch and thanks to the smart layout what is left will adjust automatically. In Adobe XD, the same can be achieved simply by deleting the unnecessary Components, and the layout will be adjusted automatically from the Stack. Furthermore, you may also insert additional Components from the Libraries panel in those areas unlike in Sketch, e.g. to show an Avatar at the far right.

<img class="responsive-img" src="../images/navbar_left&right.png" srcset="../images/navbar_left&right@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noright.png" srcset="../images/navbar_noright@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noleft.png" srcset="../images/navbar_noleft@2x.png 2x" />

## Styling

The Navbar comes with basic styling flexibility through the options available for the title, icons, border, and background colors.

<img class="responsive-img" src="../images/navbar_styling.png" srcset="../images/navbar_styling@2x.png 2x" />

## Usage

Navbar actions should be carefully set up to avoid situations where they overlap with the title. This can be avoided by hiding all icons to the right but one and assigning it a more icon represented by three dots to trigger the appearance of a simple menu. If a more icon is specified within the actions, aggregate all actions you would normally place in the Navbar under it and avoid placing any standalone actions in the Navbar.

| Do                                                                             | Don't                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/navbar_do1.png" srcset="../images/navbar_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/navbar_dont1.png" srcset="../images/navbar_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/navbar_do2.png" srcset="../images/navbar_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/navbar_dont2.png" srcset="../images/navbar_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Icon](icon.md)
- [Navigation Drawer](nav-drawer.md)
- [Menu Patterns](../patterns/menu.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
