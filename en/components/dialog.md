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

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Bottom Navigation in your design is very likely to result in loss of code generation capability for the Bottom Navigation.

The Bottom Navigation symbol has a special `🕹️DataSource` field in its `Overrides` section. Use the curly braces notation _{notifications.count}_ to provide a reference for code generation to the database property, which should be used as a binding.
The Bottom Navigation symbol has special `🕹️Event` fields, one for each item, in its `Overrides` section. Use the curly braces notation _{???}_ to provide a reference for code generation to the ...

## Additional Resources

Related topics:

  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Design System **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Design System **GitHub**](https://github.com/IgniteUI/igniteui-angular)
