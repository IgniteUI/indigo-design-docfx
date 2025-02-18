---
title: Select - Design System Component
_description: The Select Component Symbol allows a single selection from a list of items placed in a dropdown.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Select

Use the Select Component to let the user choose a single option from a scrollable list of items placed in a dropdown. The Select is a type of input for users to submit data. If your scenario requires the selection of multiple items, you should use the [Combo](combo.md) instead. The Select is visually identical to the [Ignite UI for Angular Select Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/select.html).

## Select Demo

The Select is built by combining an input containing the current selection with a dropdown that appears to let you select an item.

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## Input Type

The Select supports the same three input types typical for the [Input](input.md) component: a line type for a more airy style, border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability. Since we are deprecating the line style, in Figma we have only the border and box types available.


<img class="responsive-img" src="../images/select_border.png" srcset="../images/select_border@2x.png 2x" />
`border`
<img class="responsive-img" src="../images/select_box.png" srcset="../images/select_box@2x.png 2x" />
`box`

## Interaction State

In Sketch and Adobe XD each of the three Select input types can be inserted either in an enabled or a disabled state. Since we are deprecating the line style, in Figma we have only the border and box types available and they can be switched to a disabled state from the properties panel.

<img class="responsive-img" src="../images/select_enabledstate.png" srcset="../images/select_enabledstate@2x.png 2x" />
`enabled state`
<img class="responsive-img" src="../images/select_disabledstate.png" srcset="../images/select_disabledstate@2x.png 2x" />
`disabled state`

## State

When the user interacts with the Select, its input goes through various selection states: **Idle** with a placeholder in the place of the content; **Focused** when the dropdown is open; and **Filled** once the user has finished with selection and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.


<img class="responsive-img" src="../images/select_idle.png" srcset="../images/select_idle@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/select_filled.png" srcset="../images/select_filled@2x.png 2x" />
`filled`

<img class="responsive-img" src="../images/select_focused.png" srcset="../images/select_focused@2x.png 2x" />
`focused`

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Select is consistent with the standard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

<img class="responsive-img" src="../images/select_success.png" srcset="../images/select_success@2x.png 2x" />
`success`
<img class="responsive-img" src="../images/select_warning.png" srcset="../images/select_warning@2x.png 2x" />
`warn`
<img class="responsive-img" src="../images/select_error.png" srcset="../images/select_error@2x.png 2x" />
`error`

In Sketch, the states and validation states are achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them. In Figma you can switch between them using the `State` property from the properties panel.

> [!NOTE]
> The Select input has only one layout option, but this override has been preserved in Sketch to ensure consistency with the standard [Input](input.md). In Figma on the other hand we have a separate base component called `.Select Input`, which is used explicitly on the Select component.

## Layout

The Select has rich support for Prefix and Suffix through a combination of text and icons. In Figma, removing the Prefix or Suffix can be achieved in the properties panel by switching them on or off. In Sketch, to remove the Prefix or Suffix simply set their override to ~No Symbol, and the smart layout rules will adjust the Select accordingly. In Adobe XD, the same can be achieved by switching on and off the Prefix and/or Suffix layer visibility, and the Stack will take care to adjust the layout accordingly.

<img class="responsive-img" src="../images/select_prefix.png" srcset="../images/select_prefix@2x.png 2x" />

<img class="responsive-img" src="../images/select_suffix.png" srcset="../images/select_suffix@2x.png 2x" />

<img class="responsive-img" src="../images/select_prefixandsuffix.png" srcset="../images/select_prefixandsuffix@2x.png 2x" />

## Dropdown

The Select utilizes the Dropdown component in its structure, in order to display available options. If you'd like to learn more about its available configurations, visit the [Dropdown](dropdown.md) page.

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## Styling

The Select comes with the combined styling flexibility of its input and dropdown items. There are options for the input text elements' color and bottom line style and color. For the dropdown items, one may change their background and text colors.

<img class="responsive-img" src="../images/select_styling.png" srcset="../images/select_styling@2x.png 2x" />

## Usage

When using the Select, its input and dropdown should have the same width and their left and right borders should match. When the Select is focused, the dropdown is shown above or below the input, never over the input, since the user should always be informed about the current selection. Once an item from the list is selected, the dropdown gets hidden. The dropdown on the other hand should be on top of other content that is on the same surface as the Select input. The Select doesn't push content as the expansion panel does.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/select_do1.png" srcset="../images/select_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/select_dont1.png" srcset="../images/select_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/select_do2.png" srcset="../images/select_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/select_dont2.png" srcset="../images/select_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Combo](combo.md)
- [Dropdown](dropdown.md)
- [Input](input.md)
- [Form Pattern](../patterns/form.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
