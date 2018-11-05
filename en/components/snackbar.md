---
title: Snackbar - Design System Component
_description: The Snackbar Component Symbol is used to show a short notification or indicate the last action performed by the user.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Snackbar

Use the Snackbar Component to show a short notification or provide indication for the most recent action such as adding or deleting a record in a listing, with the option to trigger a simple extra action such as undo. The Snackbar is visually identical to the [Ignite UI for Angular Snackbar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar.html)

### Snackbar Demo

<img src="../images/snackbar_demo.png" srcset="../images/snackbar_demo@2x.png 2x" />

### Styling

The Snackbar comes with constrained styling flexibility, allowing only to change the text color of its action button.

<img src="../images/snackbar_styling.png" srcset="../images/snackbar_styling@2x.png 2x" />

## Usage

The Snackbar always appears on top of other content, so avoid placing on top of the main application navigation. Pick an emphasizing style for its action button that contrasts it with the message and avoid stacking multiple Snackbars in a column - show only the most recent one instead.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| <img src="../images/snackbar_do1.png" srcset="../images/snackbar_do1@2x.png 2x" /> | <img src="../images/snackbar_dont1.png" srcset="../images/snackbar_dont1@2x.png 2x" /> |
| <img src="../images/snackbar_do2.png" srcset="../images/snackbar_do2@2x.png 2x" /> | <img src="../images/snackbar_dont2.png" srcset="../images/snackbar_dont2@2x.png 2x" /> |
| <img src="../images/snackbar_do3.png" srcset="../images/snackbar_do3@2x.png 2x" /> | <img src="../images/snackbar_dont3.png" srcset="../images/snackbar_dont3@2x.png 2x" /> |

## Code generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Snackbar in your design is very likely to result in loss of code generation capability for the Snackbar.

### Event Property

When supplied the `🕹️Event` Event property is used to create a method in the component TypeScript and add an onAction signature in the HTML of the Snackbar. When supplied the event must be specified using the curly braces format: {onEventName}

### Text

There are Text properties for the Message and Button. These properties may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topics:

- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
