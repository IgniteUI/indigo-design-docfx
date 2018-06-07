---
title: Checkbox - Design System Component
_description: The Checkbox Component Symbol is used to allow the user to mark a selection. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Checkbox

Use the Checkbox Component Symbol to allow the user make a selection, which most often expresses a preference or agreement in a form.
The Checkbox is visually identical to the [Ignite UI for Angular Checkbox Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html)

### Checkbox Demo

![](../images/checkbox_demo.png)

### Theme

The Checkbox can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

![](../images/checkbox_dark.png)
![](../images/checkbox_light.png)

### State

The Checkbox provides **on**, off and indeterminate selection states with additional variants for a disabled interaction state.

![](../images/checkbox_states.png)
![](../images/checkbox_selection.png)

### Styling

The Checkbox comes with styling flexibility through the various overrides controling its check and fill colors, as well as the label text color.

![](../images/calendar_styling.png)

## Usage

When many Checkboxes are necessary arrange them in a column group which makes it really easy to scan quickly through the list. Fewer checkboxes may also be aranged on a single line next to each other but avoid arrangements in multiple columns.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/checkbox_do1.png) | ![](../images/checkbox_dont1.png) |

## Code generation

When colors or the check state is specified for the Checkbox, the Checkbox HTML element will be wrapped in div. This is required by browsers to style a nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Checkbox in your design is very likely to result in loss of code generation capability for the Checkbox.

### Data Property Binding

When supplied, the `🕹️DataProperty` binding can be non-nested or nested.
If the property is a nest property, include the nested property chain, but don’t include the model object name. Examples:

#### Example Not Nested

```typescript
Customer {
Public checkState: boolean;
}
DataProperty in Sketch would be: {checkState}
```

### Event Property

When supplied the `🕹️Event` property is used to create a method in the component TypeScript and add an Angular click signature in the HTML.
EventProperty in Sketch would be: clickValue

## Additional Resources

Related topics:

- [Form Pattern](forms.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
