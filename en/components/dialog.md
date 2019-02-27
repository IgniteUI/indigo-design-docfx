---
title: Dialog - Design System Component
_description: The Dialog Component Symbol is used to show a message or alert to the user in a modal fashion. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Dialog

Use the Dialog Component to show a message or alert to the user, allowing him to take action accordingly or to present a form that requires immediate action before proceeding, such as a login. The Dialog is displayed modally, meaning that the user has to complete or close it before moving on. The Dialog is visually identical to the [Ignite UI for Angular Dialog Window Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog.html)

### Dialog Demo

<img class="responsive-img" src="../images/dialog_demo.png" srcset="../images/dialog_demo@2x.png 2x" />

### Types

The Dialog can be used to show an alert with only a confirming button, a message with cancellation and confirmation, or as a container for action that needs immediate attention, such as a user logging into his account.

<img class="responsive-img" src="../images/dialog_alert.png" srcset="../images/dialog_alert@2x.png 2x" />
<img class="responsive-img" src="../images/dialog_standard.png" srcset="../images/dialog_standard@2x.png 2x" />
<img class="responsive-img" src="../images/dialog_custom.png" srcset="../images/dialog_custom@2x.png 2x" />

### Styling

The Dialog comes with styling flexibility through the various overrides for its title and message, as well as the buttons at the bottom that individually styled as flat or raised with all the styling options that these two [Button](button.md) types provide.

<img class="responsive-img" src="../images/dialog_styling.png" srcset="../images/dialog_styling@2x.png 2x" />

## Usage

When designing a custom content Dialog, avoid placing buttons in the content section and use the existing dialog buttons for your actions instead.

| Do                            | Don't                           |
| ----------------------------- | ------------------------------- |
| <img class="responsive-img" src="../images/dialog_do1.png" srcset="../images/dialog_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/dialog_dont1.png" srcset="../images/dialog_dont1@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Dialog in your design is very likely to result in loss of code generation capability for the Dialog.

### Text

There are four Text properties for the Dialog, Title, Message, Left Button, and Right Button. These properties may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

### Dialog Naming

Dialog components are hidden at runtime until code opens them. The code generator uses the name given to the dialog in Sketch, to assign a name to the dialog in the HTML. For example, if the dialog was named "ErrorDialog" in Sketch then the below HTML will be generated.

```html
<igx-dialog #errordialog>
```

### Dialog Cancel Button

The code generator will add standard cancel button code to the HTML if no `🕹️Event` is specified for the LEFT button and the LEFT button text is Cancel (case insensitive comparison). In the below example, the name of the dialog was "ErrorDialog", the following will be added to the dialog HTML.

``` html
<igx-dialog #errordialog (onLeftButtonSelect)="errordialog.close()">
```

### Buttons

There are Left and Right buttons. Each Button has a Type field that can be set Flat or Raised. Currently Text Style and Background on the Buttons are ignored.

### Button Event

Each button has an `🕹️Event` property. If supplied, onLeftButtonSelect and onRightButtonSelect events are outputted when the corresponding button is rendered. Additionally, the JavaScript $event argument will be added to the HTML signature and TypeScript method signature.

## Additional Resources

Related topics:

- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


