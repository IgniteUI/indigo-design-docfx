---
title: Simple Combo - Design System Component
_description: The Simple Combo Component Symbol allows a single selection of an item from a collection.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Simple Combo

Use the Simple Combo component to allow users to select an option from a predefined list of choices or enter their own value. When the user clicks on the dropdown arrow, a dropdown list of options is displayed, and they can either select one of the options or search for a value from the input. The Single Select Combo is visually identical to the [ Ignite UI for Angular Single Select ComboBox Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/simple-combo.html)

> [!Note]
> The Combo has two layout options: Combo with Single Select `(Simple Combo)` and [Combo (Multiple Select) ](combo.md)

## Simple Combo Demo

The Simple Combo has two pieces: an Input containing the current selection or a placeholder, and a Dropdown that is shown in order to select an option from a predefined dropdown list.

<img class="responsive-img" src="../images/simple-combo_demo.png" srcset="../images/simple-combo_demo@2x.png 2x" />

## Combo Input Type

The Combo Input provides selection between a border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

| Border | Box |
| ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_border.png" srcset="../images/simple-combo_border@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_box.png" srcset="../images/simple-combo_box@2x.png 2x" /> |

## Interaction State

Each of the two Combo Input types can be inserted in an **enabled** or **disabled** state. In Figma we have border and box types available and they can be switched to a `Disabled` state from the properties panel.

<img class="responsive-img" src="../images/combo_enabledstate.png" srcset="../images/combo_enabledstate@2x.png 2x" />
<img class="responsive-img" src="../images/combo_disabledstate.png" srcset="../images/combo_disabledstate@2x.png 2x" />

## State

When the user interacts with the Simple Combo, its input goes through various selection states: **Idle** with a placeholder in the place of the content, **Focused** when the input is highlighted, **Filled** once the user has finished with selection and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

| Idle | Focused | Filled | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_idle.png" srcset="../images/simple-combo_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_focused.png" srcset="../images/simple-combo_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_filled.png" srcset="../images/simple-combo_filled@2x.png 2x" /> |

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo Input is consistent with the standard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

| Success | Warning | Error | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_success.png" srcset="../images/simple-combo_success@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_warning.png" srcset="../images/simple-combo_warning@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_error.png" srcset="../images/simple-combo_error@2x.png 2x" /> |

In Figma changing the states is achieved via the properties panel.

> [!Note]
> In Figma we have a separate base component called `.Combo Input`, which is explicitly used in the Combo component for both Single and Multiple selection types. The Combo Input has a Prefix container which can be switched **on** and **off**.

## Dropdown Type

The Dropdown used for the Simple Combo comes with the appropriate sizing for desktop and mobile use similarly to the normal [Dropdown](dropdown.md) component. The Dropdown can be switched **on** and **off** from a boolean property, which can visually affect the input, but this is an expected behaviour.

| Desktop | Mobile |
| ------- | ------- |
| <img class="responsive-img" src="../images/simple-combo_desktop.png" srcset="../images/simple-combo_desktop@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_mobile.png" srcset="../images/simple-combo_mobile@2x.png 2x" /> |

## Search Input

The search in the Simple Combo is the input by itself.

## Dropdown Items

The Dropdown used for the Simple Combo supports two types of items: header and single select item. Through headers, it is possible to organize items in groups. In Figma, the Dropdown utilizes the auto layout option, which adjusts the layout, once one or more items get hidden from the layers panel.

<img class="responsive-img" src="../images/simple-combo_header.png" srcset="../images/simple-combo_header@2x.png 2x" />
<img class="responsive-img" src="../images/simple-combo_item.png" srcset="../images/simple-combo_item@2x.png 2x" />

## Dropdown Item States

The Dropdown items within the Simple Combo support three different states: **Idle**, **Hover** and **Focused**. **Disabled** and **Selected** states can be switched on and off from boolean properties. The states of the Simple Combo Dropdown items are visually identical to the Combo Dropdown items without the checkbox icon for multiple selection.

|  | Idle | Hover | Focused | Disabled |
|  | ---- | ----- | ------- | -------- |
|  | <img class="responsive-img" src="../images/simple-combo_item_idle.png" srcset="../images/simple-combo_item_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_hover.png" srcset="../images/simple-combo_item_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_focused.png" srcset="../images/simple-combo_item_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_idle_disabled.png" srcset="../images/simple-combo_item_idle_disabled@2x.png 2x" /> |
| Selected | <img class="responsive-img" src="../images/simple-combo_item_selected.png" srcset="../images/simple-combo_item_selected@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_selected_hover.png" srcset="../images/simple-combo_item_selected_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_selected_focused.png" srcset="../images/simple-combo_item_selected_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_item_selected_disabled.png" srcset="../images/simple-combo_item_selected_disabled@2x.png 2x" /> |

## Styling

The Simple Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color and bottom line style and color. For the dropdown one may change the background color, or use the various options related to the items in the Simple Combo Dropdown, such as the search input and the items with their background and text colors.

<img class="responsive-img" src="../images/simple-combo_styling.png" srcset="../images/simple-combo_styling@2x.png 2x" />

## Usage

When using the Simple Combo, its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Simple Combo is focused, you should always show it on top of the content that follows the Simple Combo triggering its display. Combos don't push content like expansion panels do.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/simple-combo_do1.png" srcset="../images/simple-combo_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_dont1.png" srcset="../images/simple-combo_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/simple-combo_do2.png" srcset="../images/simple-combo_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/simple-combo_dont2.png" srcset="../images/simple-combo_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Combo](combo.md)
- [Dropdown](dropdown.md)
- [Form Pattern](../patterns/form.md)
- [Input](input.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
