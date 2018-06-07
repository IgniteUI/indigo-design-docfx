---
title: Dialog - Design System Component
_description: The Dialog Component Symbol is used to show a message or alert to the user in a modal fashion. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Dialog

Use the Dialog Component Symbol to show a message or alert to the user, allowing him to take action accordingly or to present a form that requires immediate action before proceeding, such as a login. The Dialog is displayed modally, meaning that the user has to complete or close it before moving on.
The Dialog is visually identical to the [Ignite UI for Angular Dialog Window Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)

### Dialog Demo

![](../images/dialog_demo.png)

### Types

The Dialog can be used to show an alert with only a confirming button, a message with cancellation and confirmation or as a containter for action that need immediate attention such as a user logging into his account.

![](../images/dialog_alert.png)
![](../images/dialog_standard.png)
![](../images/dialog_custom.png)

### Styling

The Dialog comes with styling flexibility through the various overrides for its title and message, as well as the buttons at the bottom that individually styled as flat or raised with all the styling options that these two [Button](button.md) types provide.

![](../images/dialog_styling.png)

## Usage

When designing a custom content Dialog avoid placing buttons in the content section and use the existing dialog buttons for your actions instead.

| Do                            | Don't                           |
| ----------------------------- | ------------------------------- |
| ![](../images/dialog_do1.png) | ![](../images/dialog_dont1.png) |

## Code generation

When colors or fonts are specified for the Dialog, the Dialog HTML element will be wrapped in a div. This is required by browsers to style a nested component (a component within another component). Currently changing of the button background color, button text style isn’t supported.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Dialog in your design is very likely to result in loss of code generation capability for the Dialog.

### Text Binding

There are Text properties for the Title, Message, Left Button, and Right Button. When supplied they can be bound to a nested or non-nested data item.
If the property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

#### Example Not Nested

```typescript
Customer {
titleText: string;
}
Text would be: {titleText}
```

#### Example Nested

```typescript
Profile {
titleText: number;
}
Customer {
profile: Profile;
}
Text would be: {profile. titleText }
```

### Buttons

There are Left and Right buttons which can be set Flat or Raised. Currently Text Style and Background on the Buttons are ignored.

### Event

There is no event property for this control for the user to set. However, the onLeftButtonSelect and onRightButtonSelect events are automatically outputted when the corresponding button is rendered.

## Additional Resources

Related topics:

  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
