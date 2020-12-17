---
title: Navbar - Design System Component
_description: The Navbar Component Symbol is used to inform the user of his current position in the application and provide a mechanism for simple navigation.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Navbar

Use the Navbar Component to provide clarity on the current position in the application and to implement simple application-level navigation. If your application requires more complex navigation with larger number of actions consider using a [Navigation Drawer](nav-drawer.md) or [Menu](../patterns/menu.md) instead. The Navbar is always situated at the top of the screen and is visually identical to the [Ignite UI for Angular Navbar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)

## Navbar Demo

<img class="responsive-img" src="../images/navbar_demo.png" srcset="../images/navbar_demo@2x.png 2x" />

## Content Layout

The Navbar content consists of a left action, a title, and four icons next to each other on the right. You can configure the Navbar layout by setting the left action or the icons to ~No Symbol.

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


