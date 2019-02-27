---
title: Toast - Design System Component
_description: The Toast Component Symbol is used to show a non-interactive information message or notification.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Toast

Use the Toast Component to show a short information message or notification, which is neither interactive nor possible to dismiss by the user. The Toast should be hidden automatically after a defined time interval. The Toast is visually identical to the [Ignite UI for Angular Toast Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast.html)

### Toast Demo

<img class="responsive-img" src="../images/toast_demo.png" srcset="../images/toast_demo@2x.png 2x" />

### Position

The Toast should be relatively positioned towards the bottom, center, or top of the content its information concerns.

<img class="responsive-img" src="../images/toast_bottom.png" srcset="../images/toast_bottom@2x.png 2x" />
<img class="responsive-img" src="../images/toast_center.png" srcset="../images/toast_center@2x.png 2x" />
<img class="responsive-img" src="../images/toast_top.png" srcset="../images/toast_top@2x.png 2x" />

### Styling

The Toast comes with constrained styling possibility, allowing only control of the background and message text colors. However, it is highly advisable to choose between `white` and `grays.900` for the message text, whichever of the two gives better contrast with the background.

<img class="responsive-img" src="../images/toast_styling.png" srcset="../images/toast_styling@2x.png 2x" />

## Usage

The Toast should always be centrally aligned on the horizontal and other placements should be avoided. Approach the Toast styling with care, avoiding too distinct background colors and message text color that is neither white nor dark gray or black.

| Do                           | Don't                          |
| ---------------------------- | ------------------------------ |
| <img class="responsive-img" src="../images/toast_do1.png" srcset="../images/toast_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/toast_dont1.png" srcset="../images/toast_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/toast_do2.png" srcset="../images/toast_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/toast_dont2.png" srcset="../images/toast_dont2@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Toast in your design is very likely to result in loss of code generation capability for the Toast.

### Data Property

When supplied, the `🕹️DataProperty` value is used to set up a [data binding](../codegen/data-binding.md) to the toast text property. The `🕹️DataProperty` is optional. The `🕹️DataProperty` is the name of the property on the data object specified by the model object name provided during code generation. When supplied, this value overrides the Text property.

### Text

When supplied, the Text property may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topic:

- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


