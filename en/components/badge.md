---
title: Badge - Design System Component
_description: The Badge Component Symbol is a small complimentary element that gives a subtle hint for additional information available. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Badge

Use the Badge Component Symbol to draw attention to another interface element or to display a notification. It enhances the component to which it is attached with additional information, disclosed to the user upon iteracting with it. The Badge is visually identical to the [Ignite UI for Angular Badge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/badge.html)

### Badge Demo

<img src="../images/badge_demo.png" srcset="../images/badge_demo@2x.png 2x" />

### Shape

The Badge comes in two distinct shapes: round and square.

<img src="../images/badge_shapes.png" srcset="../images/badge_shapes@2x.png 2x" />

### Type

The Badge can carry different types of content such as a **number** or an icon.

<img src="../images/badge_type.png" srcset="../images/badge_type@2x.png 2x" />

### Styling

The Badge comes with styling flexibility through the various overrides controlling the background and border colors, as well as the presence of a shadow that is cast on the underlying interface element.

<img src="../images/badge_styling.png" srcset="../images/badge_styling@2x.png 2x" />

## Usage

Use the Badge to "stamp" another piece of UI, such as an Avatar or a text title and avoid using the Badge on its own.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img src="../images/badge_do1.png" srcset="../images/badge_do1@2x.png 2x" /> | <img src="../images/badge_dont1.png" srcset="../images/badge_dont1@2x.png 2x" /> |

## Code Generation

When colors or fonts are specified for the Badge, the Badge HTML element will be wrapped in a div. This is required by browsers to style a nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Badge in your design is very likely to result in loss of code generation capability for the Badge.

### Data Bindings

Data bindings are specified by using curly brace syntax, example: {isAdmin}. Text fields (not `🕹️DataProperty` or `🕹️DataSource`) also support string interpolation syntax example: Admin: {isAdmin}. Data bindings can be non-nested or nested. If the target property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Not Nested

```typescript
Customer {
  imageName: String;
}
```

DataProperty would be: `{imageName}`

#### Nested

```typescript
Profile {
  imageName: String;
}

Customer {
  profile: Profile;
}
```

DataProperty would be: `{profile.imageName}`

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an Angular click signature in the HTML. When supplied the event must be specified using the curly braces format: {onEventName}.

### Data Property

When supplied, the `🕹️DataProperty` value is used to set up a data binding to the badge value property. The `🕹️DataProperty` is optional. The `🕹️DataProperty` is the name of the property on the data object specified by the model object name provided in the generation request. When the badge type is Icon, the `🕹️DataProperty` is ignored.

### Type

Determines if the badge is a number/text or an icon badge.

### Text

When the Type is set to Number the following is applied:

- If a `🕹️DataProperty` is supplied the value will be data bound to the specified property.
- If Text has a data binding, the value will be data bound to the specified property.
- If Text has a value, the value will be set to the text.

## Additional Resources

Related topics:

- [Avatar + Badge](../patterns/avatar-badge.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
