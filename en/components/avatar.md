---
title: Avatar - Design System Component
_description: The Avatar Component Symbol is a graphical representation of personal information. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Avatar

Use the Avatar Component Symbol as a graphical representation of a person through a profile picture, icon or string with his/her initials.
The Avatar is visually identical to the [Ignite UI for Angular Avatar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html)

### Avatar Demo

![](../images/avatar_demo.png)

### Size

The Avatar comes in three different sizes:

* large - suitable for profile pages
* medium - appropriate for custom menus and visualizations
* small - easily embeddable in a contact list and similar repetative scenarios

![](../images/avatar_sizes.png)

### Type

The Avatar can carry different types of content such as an **image**, a string with initials or an icon.

![](../images/avatar_content.png)

The avatar comes in two distinct types determined by its shape: a **round** and a square form.

![](../images/avatar_type.png)

### Styling

The Avatar comes with styling flexibility through the various overrides controling the background color, as well as initials and icon colors, where applicable.

![](../images/avatar_styling.png)

## Usage

When using an Avatar with initials or icon pick their color carefully to assure good contrast with the Avatar background color. Avoid colors with poor contrast like similar shades of the same color, or combinations that create chromatic aberrations.

| Do                            | Don't                           |
| ----------------------------- | ------------------------------- |
| ![](../images/avatar_do1.png) | ![](../images/avatar_dont1.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Avatar in your design is very likely to result in loss of code generation capability for the Avatar.

The Avatar symbol has a special `🕹️DataProperty` field in its `Overrides` section. Use the curly braces notation _{customer.name}_ to provide a reference for code generation to the database property, which should be used as a binding.
The Avatar symbol has a special `🕹️Event` field in its `Overrides` section. Use the curly braces notation _{???}_ to provide a reference for code generation to the ...

## Additional Resources

Related topics:

* [Avatar + Badge](avatar+badge.md)
* [Cards](cards.md)
* [File Upload](fileUpload.md)
* [User Profile](userProfile.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
