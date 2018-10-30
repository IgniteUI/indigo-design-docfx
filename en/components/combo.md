---
title: Combo - Design System Component
_description: The Combo Component Symbol allows selection of multiple items from a collection.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Combo

Use the Combo Component to let the user select one or more items from a collection that is displayed upon user interaction in a scrollable list. In case you want to costrain the selection to a single item only, you should use the [Dropdown](dropdown.md) instead. The Combo is visually identical to the [Ignite UI for Angular Combo Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/combo.html)

### Combo Demo

The Combo has two pieces: an input containing the current selection and a dropdown that is shown in order to select one or more items.

<img src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />

### Combo Input Type

Just like the standard [Input](input.md), the Combo input provides selection between a line type for a more airy style, border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of an vivid image to improve readability.

<img src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />
`line`

<img src="../images/combo_border.png" srcset="../images/combo_border@2x.png 2x" />
`border`

<img src="../images/combo_box.png" srcset="../images/combo_box@2x.png 2x" />
`box`

### Combo Input Variant

Just like the standard [Input](input.md), the Combo input can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

<img src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />
<img src="../images/combo_light.png" srcset="../images/combo_light@2x.png 2x" />

### State

When the user interacts with the Combo, its input goes through various states: **idle** with a placeholder in the place of the content, focused when the dropdown is open, filled once the user has finished with selection and moved on, and disabled when the Combo does not support any interaction. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

<img src="../images/combo_idle.png" srcset="../images/combo_idle@2x.png 2x" />
`idle`

<img src="../images/combo_focused.png" srcset="../images/combo_focused@2x.png 2x" />
`focused`

<img src="../images/combo_filled.png" srcset="../images/combo_filled@2x.png 2x" />
`filled`

<img src="../images/combo_disabled.png" srcset="../images/combo_disabled@2x.png 2x" />
`disabled`

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo is consistent with the stadard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

<img src="../images/combo_success.png" srcset="../images/combo_success@2x.png 2x" />
<img src="../images/combo_warning.png" srcset="../images/combo_warning@2x.png 2x" />
<img src="../images/combo_error.png" srcset="../images/combo_error@2x.png 2x" />

### Layout

The Combo input has only one layout option but to assure consistency with the standard [Input](input.md) this override has been preserved.

### Combo Dropdown Type

The dropdown used for the Combo comes with the appropriate sizing for desktop and mobile use similarly to the normal [Dropdown](dropdown.md) component.

<img src="../images/combo_desktop.png" srcset="../images/combo_desktop@2x.png 2x" />
<img src="../images/combo_mobile.png" srcset="../images/combo_mobile@2x.png 2x" />

### Combo Dropdown Items

The dropdown used for the Combo supports three types of items: header, item and multiselect item. Through headers it is possible to organize the other items in groups.

<img src="../images/combo_header.png" srcset="../images/combo_header@2x.png 2x" />
<img src="../images/combo_item.png" srcset="../images/combo_item@2x.png 2x" />
<img src="../images/combo_multiselect_item.png" srcset="../images/combo_multiselect_item@2x.png 2x" />

### Combo Dropdown Item States

The dropdown items within the Combo support five different states: disabled, **idle**, focused, selected and focused&selected.

<img src="../images/combo_item_disabled.png" srcset="../images/combo_item_disabled@2x.png 2x" />
<img src="../images/combo_item_idle.png" srcset="../images/combo_item_idle@2x.png 2x" />
<img src="../images/combo_item_focused.png" srcset="../images/combo_item_focused@2x.png 2x" />
<img src="../images/combo_item_selected.png" srcset="../images/combo_item_selected@2x.png 2x" />
<img src="../images/combo_item_selected_focused.png" srcset="../images/combo_item_selected_focused@2x.png 2x" />

### Styling

The Combo comes with the combined styling flexibility of its input and dropdown pieces. There are overrides controlling the input texts' color and bottom line style and color, as well as dropdown background color, and various overrides related to the items in the Combo dropdown such as item and header background and text colors.

<img src="../images/combo_styling.png" srcset="../images/combo_styling@2x.png 2x" />

## Usage

When using the Combo its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Combo is focused, you should always show it on top of the content that follows the Combo triggering its display. Combos don't push content like accordions do.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img src="../images/combo_do1.png" srcset="../images/combo_do1@2x.png 2x" /> | <img src="../images/combo_dont1.png" srcset="../images/combo_dont1@2x.png 2x" /> |
| <img src="../images/combo_do2.png" srcset="../images/combo_do2@2x.png 2x" /> | <img src="../images/combo_dont2.png" srcset="../images/combo_dont2@2x.png 2x" /> |

## Code Generation

When colors or fonts are specified for the Combo, the Combo HTML element will be wrapped in a div. This is required by browser to style as nested component (a component within another component).

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Dropdown in your design is very likely to result in loss of code generation capability for the Dropdown.

### DataSource

When supplied, the `🕹️DataSource` value is used to setup the Data Source of the Combo. You can bind to an array of items (string or number) or array of objects. If the `🕹️DataSource` is not supplied the Combo drop down will not have any values to select from.

### ValueDataProperty and DisplayDataProperty

When supplied, the `🕹️ValueDataProperty` and `🕹️DisplayDataProperty` are used to setup the `valueKey` and `displayKey` fields of the Combo. These fields are used when binding to a `🕹️DataSource` that is an array of objects. If only one is supplied it will be used for both fields. If neither is supplied and the `🕹️DataSource` is an array of objects, the Combo will not know how to display the data provided.

### Variant

Determines if the theme is light or dark. If set to None, the control will not be rendered.

### State

If set to None, the control will not be rendered.

### Layout

If set to None, the control will not be rendered.

### Label

Not supported in the Combo.

### Combo Text

When supplied, the Combo Text will be used as a place holder text in the Combo input until a value is selected. May contain text, binding, or a combination of the two, examples:

- Settings
- {settingsLabel}
- Important {labelText}

## Additional Resources

Related topics:

- [Dropdown](dropdown.md)
- [Form Pattern](../patterns/form.md)
- [Input](input.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
