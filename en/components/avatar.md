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

- large - suitable for profile pages
- medium - appropriate for custom menus and visualizations
- small - easily embeddable in a contact list and similar repetative scenarios

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

When colors are specified for the Avatar, the Avatar HTML element will be wrapped in div. This is required by browsers to style a nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Avatar in your design is very likely to result in loss of code generation capability for the Avatar.

### Data Property Binding

When supplied, the `🕹️DataProperty` binding can be non-nested or nested.

If the property is a nest property, include the nested property chain, but don’t include the model object name. Examples:

#### Example Not Nested

```typescript
Customer {
  imageName: String;
}
DataProperty would be: {imageName}
```

#### Example Nested

```typescript
Profile {
  imageName: String;
}
Customer {
  profile: Profile;
}
DataProperty would be: {profile.imageName}
```

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an Angular click signature in the HTML.

|                 |                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Picture Avatar  | `🕹️DataProperty` – when supplied, this property can be used to data bind the image source. When provided, it will be the name of the property on the data object specified by the model object name provided in the generation request. |
| Icon Avatar     | `🕹️DataProperty` – this property is ignored.                                                                                                                                                                                            |
| Initials Avatar | `🕹️DataProperty` – when supplied, this property is used to databind the initials property.                                                                                                                                              |

## Additional Resources

Related topics:

- [Avatar + Badge](avatar+badge.md)
- [Cards](cards.md)
- [File Upload](fileUpload.md)
- [User Profile](userProfile.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
