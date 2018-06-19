---
title: Snackbar - Design System Component
_description: The Snackbar Component Symbol is used to show a short notification or indicate the last action performed by the user.
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Snackbar

Use the Snackbar Component to show a short notification or provide indication for the most recent action such as adding or deleting a record in a listing, with the option to trigger a simple extra action such as undo. The Snackbar is visually identical to the [Ignite UI for Angular Snackbar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)

### Snackbar Demo

![](../images/snackbar_demo.png)

### Styling

The Snackbar comes with constrained styling flexibility, allowing only to change the text color of its action button.

![](../images/snackbar_styling.png)

## Usage

The Snackbar always appears on top of other content, so avoid placing on top of the main application navigation. Pick an emphasizing style for its action button that contrasts it with the message and avoid stacking multiple Snackbars in a column - show only the most recent one instead.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/snackbar_do1.png) | ![](../images/snackbar_dont1.png) |
| ![](../images/snackbar_do2.png) | ![](../images/snackbar_dont2.png) |
| ![](../images/snackbar_do3.png) | ![](../images/snackbar_dont3.png) |

## Code generation

When colors are specified for the Snackbar, the Snackbar HTML element will be wrapped in a div. This is required by browsers to style a nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Snackbar in your design is very likely to result in loss of code generation capability for the Snackbar.

### Data Bindings

Data bindings are specified by using curly brace syntax, example: {isAdmin}. Text fields (not `🕹️DataProperty` or `🕹️DataSource`) also support string interpolation syntax example: Admin: {isAdmin}. Data bindings can be non-nested or nested. If the target property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Not Nested

```PseudoCode
Customer {
    imageName: String;
}

DataProperty would be: {imageName}
```

#### Nested

```PseudoCode
Profile {
    imageName: String;
}

Customer {
    profile: Profile;
}

DataProperty would be: {profile.imageName}
```

### Event

When supplied the `🕹️Event` Event property is used to create a method in the component TypeScript and add an onAction signature in the HTML of the Snackbar. When supplied the event must be specified using the curly braces format: {onEventName}

### Text

There are Text properties for the Message and Button. These properties may contain text, binding, or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
