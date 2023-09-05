---
title: Combo - Design System Component
_description: The Combo Component Symbol allows selection of multiple items from a collection.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Combo

Use the Combo component to allow users to select an option from a predefined list of choices or enter their own value. When the user clicks on the arrow down icon, a Dropdown list of options is displayed, and they can select one of the options, search for a value, or type their own value into the text box. The Combo is visually identical to the [ Ignite UI for Angular Combobox Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/combo.html)

> [!Note]
> The Combo has two layout options: Combo with Multiple Select `(Combo)` and [Single Select Combo (Simple Combo) ](simple-combo.md)

## Combo Demo

The Combo has two pieces: an input containing the current selection or a placeholder and a Dropdown that is shown in order to select one or more items.

<img class="responsive-img" src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />

## Combo Input Type

The Combo input provides selection between a line type for a more airy style, border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability. Since we are deprecating the line style, in Figma we have only the border and box types available.

| Border | Box |
| ------- | ------- |
| <img class="responsive-img" src="../images/combo_border.png" srcset="../images/combo_border@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_box.png" srcset="../images/combo_box@2x.png 2x" /> |

## Interaction State

Each of the three Combo Input types can be inserted in an **enabled** or **disabled** state. Since we are deprecating the line style, in Figma we have only the border and box types available and they can be switched on and off to a disabled state from the properties panel.

<img class="responsive-img" src="../images/combo_enabledstate.png" srcset="../images/combo_enabledstate@2x.png 2x" />
<img class="responsive-img" src="../images/combo_disabledstate.png" srcset="../images/combo_disabledstate@2x.png 2x" />

## State

When the user interacts with the Combo, its input goes through various selection states: **Idle** with a placeholder in the place of the content, **Focused** when the Dropdown is open and the Search is **Focused**, **Filled** once the user has finished with selection and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

| Idle | Focused | Filled | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/combo_idle.png" srcset="../images/combo_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_focused.png" srcset="../images/combo_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_filled.png" srcset="../images/combo_filled@2x.png 2x" /> |

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo is consistent with the standard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

| Success | Warning | Error | 
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/combo_success.png" srcset="../images/combo_success@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_warning.png" srcset="../images/combo_warning@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_error.png" srcset="../images/combo_error@2x.png 2x" /> |

In Sketch, the states and validation states are achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them. In Figma changing the states is achieved via the properties panel.

> [!Note]
> The Combo Input has only one layout option, but this override has been preserved in Sketch to ensure consistency with the standard [Input](input.md). In Figma we have a separate base component called `.Combo Input`, which is explicitly used in the Combo component for both Single and Multiple selection types. The Combo Input has a Prefix container which can be switched **on** and **off**.

## Dropdown Type

The Dropdown used for the Combo comes with the appropriate sizing for desktop and mobile use similarly to the normal [Dropdown](dropdown.md) component. The Dropdown can be switched **on** and **off** from a boolean property which can visually affect the input, but this is an expected behaviour.

| Desktop | Mobile |
| ------- | ------- |
| <img class="responsive-img" src="../images/combo_desktop.png" srcset="../images/combo_desktop@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_mobile.png" srcset="../images/combo_mobile@2x.png 2x" /> |

## Dropdown Search Input

In Figma and Sketch the Dropdown contains a Search Input that comes with a selection of states and options for layout akin to the standard [Input](input.md).

## Dropdown Items

The Dropdown used for the Combo supports two types of items: header and multi-select item. Through headers, it is possible to organize items in groups. In Figma, the Dropdown utilizes the auto layout option, which adjusts the layout, once one or more items get hidden from the layers panel. In Sketch, the Dropdown uses a smart layout allowing it to adjust accordingly when one or more of its items are set to ~No Symbol. In Adobe XD you should delete the unnecessary ones, and the layout will adjust through the use of a Stack.

<img class="responsive-img" src="../images/combo_header.png" srcset="../images/combo_header@2x.png 2x" />
<img class="responsive-img" src="../images/combo_multiselect_item.png" srcset="../images/combo_multiselect_item@2x.png 2x" />

## Dropdown Item States

The Dropdown items within the Combo support three different states: **Idle**, **Hover** and **Focused**. **Disabled** and **Selected** states can be switched on and off from boolean properties and they are applicable for all states of the Dropdown.

|  | Idle | Hover | Focused | Disabled |
|  | ---- | ----- | ------- | -------- |
|  | <img class="responsive-img" src="../images/combo_item_idle.png" srcset="../images/combo_item_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_hover.png" srcset="../images/combo_item_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_focused.png" srcset="../images/combo_item_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_idle_disabled.png" srcset="../images/combo_item_idle_disabled@2x.png 2x" /> |
| Selected | <img class="responsive-img" src="../images/combo_item_selected.png" srcset="../images/combo_item_selected@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_selected_hover.png" srcset="../images/combo_item_selected_hover@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_selected_focused.png" srcset="../images/combo_item_selected_focused@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_item_selected_disabled.png" srcset="../images/combo_item_selected_disabled@2x.png 2x" /> |

## Styling

The Combo comes with the combined styling flexibility of its input and dropdown pieces. There are options for the input text elements' color and bottom line style and color. For the dropdown one may change the background color, or use the various options related to the items in the Combo Dropdown, such as the Search Input and the items with their background and text colors.

<img class="responsive-img" src="../images/combo_styling.png" srcset="../images/combo_styling@2x.png 2x" />

## Usage

When using the Combo, its input and dropdown should have the same width and their left and right borders should match. Regarding how the dropdown is shown when the Combo is focused, you should always show it on top of the content that follows the Combo triggering its display. Combos don't push content like expansion panels do.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/combo_do1.png" srcset="../images/combo_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_dont1.png" srcset="../images/combo_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/combo_do2.png" srcset="../images/combo_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/combo_dont2.png" srcset="../images/combo_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Dropdown](dropdown.md)
- [Form Pattern](../patterns/form.md)
- [Input](input.md)
- [Simple Combo](simple-combo.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
