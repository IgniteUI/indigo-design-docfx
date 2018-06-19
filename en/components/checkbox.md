---
title: Checkbox - Design System Component
_description: The Checkbox Component Symbol is used to allow the user to mark a selection. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Checkbox

Use the Checkbox Component to allow the user make a selection, which most often expresses a preference or agreement in a form. The Checkbox is visually identical to the [Ignite UI for Angular Checkbox Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html)

### Checkbox Demo

![](../images/checkbox_demo.png)

### Theme

The Checkbox can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

![](../images/checkbox_dark.png)
![](../images/checkbox_light.png)

### State

The Checkbox provides **on**, off, and indeterminate selection states with additional variants for a disabled interaction state.

![](../images/checkbox_states.png)
![](../images/checkbox_selection.png)

### Styling

The Checkbox comes with styling flexibility through the various overrides controlling its check and fill colors, as well as the label text color.

![](../images/calendar_styling.png)

## Usage

When many Checkboxes are necessary, you'll want to arrange them in a column group which makes it really easy to scan quickly through the list. Fewer Checkboxes may also be arranged on a single line next to each other but you should avoid arrangements in multiple columns.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/checkbox_do1.png) | ![](../images/checkbox_dont1.png) |

## Code Generation

When check mark, check box colors or the check state is specified for the Checkbox, the Checkbox HTML element will be wrapped in div. This is required by browsers to style a nested component (a component within another component). In addition, when the State is turned off or disabled the control is not rendered.

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Checkbox in your design is very likely to result in loss of code generation capability for the Checkbox.

### Data Bindings

Data bindings are specified by using curly brace syntax, example: {isAdmin}. Text fields (not `🕹️DataProperty` or `🕹DataSource`) also support string interpolation syntax example: Admin: {isAdmin}. Data bindings can be non-nested or nested. If the target property is a nested property, include the nested property chain, but don’t include the model object name. Examples:

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

### Reactive Forms

When a model object name and `🕹️DataProperty` are provided, a TypeScript ngOnInit method with be populated with form builder code to create the Reactive Forms form. The `🕹️DataProperty` will be used to populate the formControlName property on the checkbox control.

### DataProperty

When supplied, the `🕹️DataProperty` value is used to set up a two-way data binding using Angular Reactive Forms to the checkbox checked property. The `🕹️DataProperty` is optional. The `🕹️DataProperty` is the name of the property on the data object specified by the model object name provided in the generation request.

### Theme

Theme specified the theme the checkbox will use, either Dark or Light theme. When Theme is None, the control will not render.

### State

The State is used by the designer to represent checkboxes in different states in the design. If the State is not On, the checkbox will not render. An On State is require to be able to discover the check and fill properties from the Sketch drawing for the checkbox.

### Text

The Text property may contain text, binding, or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topics:

- [Form Pattern](forms.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
