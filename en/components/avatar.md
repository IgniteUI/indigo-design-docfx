---
title: Avatar - Design System Component
_description: The Avatar Component Symbol is a graphical representation of personal information. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Avatar

Use the Avatar Component as a graphical representation of a person through a profile picture or image, an icon, or a string with initials. The Avatar is visually identical to the [Ignite UI for Angular Avatar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html)

### Avatar Demo

<img class="responsive-img" src="../images/avatar_demo.png" srcset="../images/avatar_demo@2x.png 2x" />

### Size

The Avatar comes in three different sizes:

- Large - Suitable for profile pages
- Medium - Appropriate for custom menus and visualizations
- Small - Easily embedded in a contact list and similar repetitive scenarios

<img class="responsive-img" src="../images/avatar_sizes.png" srcset="../images/avatar_sizes@2x.png 2x" />

### Type

The Avatar can carry different types of content such as an **image**, a string with initials, or an icon.

<img class="responsive-img" src="../images/avatar_content.png" srcset="../images/avatar_content@2x.png 2x" />

The avatar comes in two distinct types determined by its shape: a **round** and a square form.

<img class="responsive-img" src="../images/avatar_type.png" srcset="../images/avatar_type@2x.png 2x" />

### Styling

The Avatar comes with styling flexibility through the various overrides controlling the background color, as well as initials and icon colors, where applicable.

<img class="responsive-img" src="../images/avatar_styling.png" srcset="../images/avatar_styling@2x.png 2x" />

## Usage

When using an Avatar with initials or icons, pick their colors carefully to assure good contrast with the Avatar background color. Avoid colors with poor contrast like similar shades of the same color or combinations that create chromatic aberrations.

| Do                                                                             | Don't                                                                              |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/avatar_do1.png" srcset="../images/avatar_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/avatar_dont1.png" srcset="../images/avatar_dont1@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Avatar in your design is very likely to result in loss of code generation capability for the Avatar.

### Event Property

When supplied, this property is used to create a method in the component TypeScript and add an Angular click signature in the HTML. When supplied the event must be specified using the curly braces format: {onEventName}

### Data Property

| Avatar Type     | `🕹️DataProperty`                                                                                                                                                                                                                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Picture Avatar  | When supplied, this property can be used to [data bind](../codegen/data-binding.md) the image source. When provided, it will be the name of the property on the data object specified by the model object name provided during code generation.                                                                                     |
| Icon Avatar     | This property is ignored.                                                                                                                                                                                                                                                                                |
| Initials Avatar | When supplied, this property is used to [data bind](../codegen/data-binding.md) the initials property. When provided, it will be the name of the property on the data object specified by the model object name provided during code generation. The Avatar initials only renders two characters, this is a limitation of Ignite UI. |

## Additional Resources

Related topics:

- [Avatar + Badge](../patterns/avatar-badge.md)
- [Cards](cards.md)
- [File Upload](../patterns/file-upload.md)
- [User Profile](../patterns/user-profile.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


