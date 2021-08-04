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

## Content Layout

The Navbar content is split into a left area, consisting of a Left Action and a Title, and a right area with four adjacent icons for various actions. You can configure the Navbar layout by setting the Left Action or the Icons to the right to ~No Symbol in Sketch and through a smart layout it will adjust accordingly. In Adobe XD you have to delete the unused layers instead, and the layout will adjust through the use of stacks.

<img class="responsive-img" src="../images/navbar_left&right.png" srcset="../images/navbar_left&right@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noright.png" srcset="../images/navbar_noright@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_noleft.png" srcset="../images/navbar_noleft@2x.png 2x" />

## Action Icons

The Navbar can support up to four action icons on the right that can trigger different simple events.

<img class="responsive-img" src="../images/navbar_icon4.png" srcset="../images/navbar_icon4@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_icon3.png" srcset="../images/navbar_icon3@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_icon2.png" srcset="../images/navbar_icon2@2x.png 2x" />
<img class="responsive-img" src="../images/navbar_icon1.png" srcset="../images/navbar_icon1@2x.png 2x" />

## Styling

The Navbar comes with basic styling capabilities achievable through changing the title, icons, border and background colors.

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
