---
title: Badge - Design System Component
_description: The Badge Component Symbol is a small complimentary element that gives a subtle hint for additional information available. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Badge

Use the Badge Component Symbol to draw attention to another interface element or to display a notification. It enhances the component to which it is attached with additional information, disclosed to the user upon iteracting with it. The Badge is visually identical to the [Ignite UI for Angular Badge Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/badge.html)

### Badge Demo

![](../images/badge_demo.png)

### Shape

The Badge comes in two distinct shapes: round and square.

![](../images/badge_shapes.png)

### Type

The Badge can carry different types of content such as a **number** or an icon.

![](../images/badge_type.png)

### Styling

The Badge comes with styling flexibility through the various overrides controlling the background and border colors, as well as the presence of a shadow that is cast on the underlying interface element.

![](../images/badge_styling.png)

## Usage

Use the Badge to "stamp" another piece of UI, such as an Avatar or a text title and avoid using the Badge on its own.

| Do                           | Don't                          |
| ---------------------------- | ------------------------------ |
| ![](../images/badge_do1.png) | ![](../images/badge_dont1.png) |

## Code generation

When colors or fonts are specified for the Badge, the Badge HTML element will be wrapped in a div. This is required by browsers to style a nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Badge in your design is very likely to result in loss of code generation capability for the Badge.

### Data Property Binding

When supplied, the `🕹️DataProperty` binding can be non-nested or nested. This property data binds the Badge’s value. The value specifies the text displayed in the badge. When the type of the Badge is set to Icon the `🕹️DataProperty` is ignored.

If the property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Example Not Nested

```typescript
Customer {
userRank: number;
}
DataProperty would be: {userRank}
```

#### Example Nested

```typescript
Profile {
userRank: number;
}
Customer {
profile: Profile;
}
DataProperty would be: {profile.userRank}
```

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an Angular click signature in the HTML.

## Additional Resources

Related topics:

- [Avatar + Badge](avatar+badge.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
