---
title: Checkbox - Design System Component
_description: The Checkbox Component Symbol is used to allow the user to mark a selection. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Checkbox

Use the Checkbox Component to allow the user make a selection, which most often expresses a preference or agreement in a form. The Checkbox is visually identical to the [Ignite UI for Angular Checkbox Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html)

### Checkbox Demo

<img src="../images/checkbox_demo.png" srcset="../images/checkbox_demo@2x.png 2x" />

### Theme

The Checkbox can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

<img src="../images/checkbox_dark.png" srcset="../images/checkbox_dark@2x.png 2x" />
<img src="../images/checkbox_light.png" srcset="../images/checkbox_light@2x.png 2x" />

### State

The Checkbox provides **on**, off, and indeterminate selection states with additional variants for a disabled interaction state.

<img src="../images/checkbox_states.png" srcset="../images/checkbox_states@2x.png 2x" />
<img src="../images/checkbox_selection.png" srcset="../images/checkbox_selection@2x.png 2x" />

### Styling

The Checkbox comes with styling flexibility through the various overrides controlling its check and fill colors, as well as the label text color.

<img src="../images/calendar_styling.png" srcset="../images/calendar_styling@2x.png 2x" />

## Usage

When many Checkboxes are necessary, you'll want to arrange them in a column group which makes it really easy to scan quickly through the list. Fewer Checkboxes may also be arranged on a single line next to each other but you should avoid arrangements in multiple columns.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img src="../images/checkbox_do1.png" srcset="../images/checkbox_do1@2x.png 2x" /> | <img src="../images/checkbox_dont1.png" srcset="../images/checkbox_dont1@2x.png 2x" /> |

## Code Generation

This section describes some important overrides and how they affect code generation.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Checkbox in your design is very likely to result in loss of code generation capability for the Checkbox.

### Data Property

When supplied, the `🕹️DataProperty` value is used to set up a two-way [data binding](../codegen/data-binding.md) using [Angular Reactive Forms](https://angular.io/guide/reactive-forms) to the checkbox's checked property. The `🕹️DataProperty` is optional. The `🕹️DataProperty` is the name of the property on the data object specified by the model object name provided during code generation.

When both a model object name and `🕹️DataProperty` are provided, the TypeScript `ngOnInit` method with be populated with form builder code to create the Reactive Forms form. The `🕹️DataProperty` will be used to populate the formControlName property on the checkbox control.

### Theme

Theme specified the theme the checkbox will use, either Dark or Light theme. When Theme is None, the control will not render.

### State

The State is used by the designer to represent checkboxes in different states in the design. If the State is **not** On, the checkbox will not render. An On State is required to be able to discover the check and fill properties from the Sketch drawing for the checkbox.

### Text

The Text property may contain text, [binding text](../codegen/data-binding.md), or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topic:

- [Form Pattern](../patterns/form.md)
- [Data Binding](../codegen/data-binding.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
