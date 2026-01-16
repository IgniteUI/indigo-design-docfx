---
title: Select - Design System Component
_description: The Select Component allows a single selection from a list of items placed in a dropdown.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Select

Use the Select Component to let the user choose a single option from a scrollable list of items placed in a dropdown. The Select is a type of input for users to submit data. If your scenario requires the selection of multiple items, you should use the [Combo](combo.md) instead. The Select is visually identical to the [Ignite UI for Angular Select Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/select.html).

## Select Demo

The Select is built by combining an input containing the current selection with a dropdown that appears to let you select an item.

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## Input Type

The Select supports the same two input types typical for the [Input](input.md) component: a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

| Border | Box |
| ------- | ------- |
| <img class="responsive-img" src="../images/select_border.png" srcset="../images/select_border@2x.png 2x" /> | <img class="responsive-img" src="../images/select_box.png" srcset="../images/select_box@2x.png 2x" /> |

## Size

The Select component is available in three sizes:
- Large 
- Medium 
- Small

The Dropdown automatically adjusts its dimensions to match the selected size variant.

<img class="responsive-img" src="../images/select_sizeborder.png" srcset="../images/select_sizeborder@2x.png 2x" />
<img class="responsive-img" src="../images/select_sizebox.png" srcset="../images/select_sizebox@2x.png 2x" />

## Interaction State

In Figma, both border and box type Select inputs can be set to a Disabled state using the properties panel.

<img class="responsive-img" src="../images/select_interaction.png" srcset="../images/select_interaction@2x.png 2x" />

## State

The Select component supports five states for the enabled variants: **Idle**, **Idle & Hover**, **Filled**, **Filled & Hover** and **Focused**, as well as three validation states: **Success**, **Warn**, and **Error**. From the properties panel, you can easily change the Select’s state and toggle the Dropdown’s visibility, while within the nested Dropdown component, you can further customize its content. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

<img class="responsive-img" src="../images/select_states.png" srcset="../images/select_states@2x.png 2x" /> 

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Select is consistent with the standard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

<img class="responsive-img" src="../images/select_validation.png" srcset="../images/select_validation@2x.png 2x" /> 

In Figma you can switch between all the states using the `State` property from the properties panel.

## Layout

The Select has rich support for Prefix and Suffix through a combination of text and icons. In Figma, removing the Prefix or Suffix can be achieved in the properties panel by switching them on or off.

| Prefix | Suffix | Prefix and Suffix |
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/select_prefix.png" srcset="../images/select_prefix@2x.png 2x" /> | <img class="responsive-img" src="../images/select_suffix.png" srcset="../images/select_suffix@2x.png 2x" /> |  <img class="responsive-img" src="../images/select_prefixandsuffix.png" srcset="../images/select_prefixandsuffix@2x.png 2x" /> |

## Dropdown

The Select utilizes the Dropdown component in its structure, in order to display available options. If you'd like to learn more about its available configurations, visit the [Dropdown](dropdown.md) page.

<img class="responsive-img" src="../images/select_demo.png" srcset="../images/select_demo@2x.png 2x" />

## Styling

The Select comes with the combined styling flexibility of its input and dropdown items. The user can experiment with different styles and colors for the text and for the input. For the dropdown items, one may change their background and text colors.

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
