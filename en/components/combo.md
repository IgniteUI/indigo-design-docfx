---
title: Combo - Design System Component
_description: The Combo Component Symbol allows selection of multiple items from a collection.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Combo

Use the Combo Component to let the user select one or more items from a collection that is displayed upon user interaction in a scrollable list. In case you want to costrain the selection to a single item only, you should use the [Dropdown](dropdown.md) instead. The Combo is visually identical to the [Ignite UI for Angular Combo Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/combo.html)

## Combo Demo

The Combo has two pieces: an input containing the current selection and a dropdown that is shown in order to select one or more items.

<img class="responsive-img" src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />

## Input Type

The Combo input provides selection between a line type for a more airy style, border type for a more structured perception on solid color backgrounds, and a boxed type that is most appropriate when placed on top of a vivid image to improve readability.

<img class="responsive-img" src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />
`line`

<img class="responsive-img" src="../images/combo_border.png" srcset="../images/combo_border@2x.png 2x" />
`border`

<img class="responsive-img" src="../images/combo_box.png" srcset="../images/combo_box@2x.png 2x" />
`box`

## Interaction State

Each of the three Combo input types can be inserted in an enabled or disabled state.

<img class="responsive-img" src="../images/combo_enabledstate.png" srcset="../images/combo_enabledstate@2x.png 2x" />
<img class="responsive-img" src="../images/combo_disabledstate.png" srcset="../images/combo_disabledstate@2x.png 2x" />

## Input Variant

The Combo input can be used styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

<img class="responsive-img" src="../images/combo_demo.png" srcset="../images/combo_demo@2x.png 2x" />
<img class="responsive-img" src="../images/combo_light.png" srcset="../images/combo_light@2x.png 2x" />

## State

When the user interacts with the Combo, its input goes through various selection states: **idle** with a placeholder in the place of the content, focused when the dropdown is open, filled once the user has finished with selection and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

<img class="responsive-img" src="../images/combo_idle.png" srcset="../images/combo_idle@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/combo_focused.png" srcset="../images/combo_focused@2x.png 2x" />
`focused`

<img class="responsive-img" src="../images/combo_filled.png" srcset="../images/combo_filled@2x.png 2x" />
`filled`

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Combo is consistent with the standard [Input](input.md) and equipped for sophisticated designs that display success, warning, and error visuals.

<img class="responsive-img" src="../images/combo_success.png" srcset="../images/combo_success@2x.png 2x" />
<img class="responsive-img" src="../images/combo_warning.png" srcset="../images/combo_warning@2x.png 2x" />
<img class="responsive-img" src="../images/combo_error.png" srcset="../images/combo_error@2x.png 2x" />

## Layout

The Combo input has only one layout option but to assure consistency with the standard [Input](input.md) this override has been preserved.

## Dropdown Type

The dropdown used for the Combo comes with the appropriate sizing for desktop and mobile use similarly to the normal [Dropdown](dropdown.md) component.

<img class="responsive-img" src="../images/combo_desktop.png" srcset="../images/combo_desktop@2x.png 2x" />
<img class="responsive-img" src="../images/combo_mobile.png" srcset="../images/combo_mobile@2x.png 2x" />

## Dropdown Search Input

The dropdown contains a Search Input that comes with dark and light variants, a selection of states, and options for layout akin to the standard [Input](input.md).

## Dropdown Items

The dropdown used for the Combo supports two types of items: header and multi-select item. Through headers, it is possible to organize items in groups. In Sketch, the dropdown uses a smart layout allowing it to adjust accordingly when one or more of its items are set to ~No Symbol, while in Adobe XD you have to delete the unused layers instead, and the layout will adjust through the use of stacks.

<img class="responsive-img" src="../images/combo_header.png" srcset="../images/combo_header@2x.png 2x" />
<img class="responsive-img" src="../images/combo_multiselect_item.png" srcset="../images/combo_multiselect_item@2x.png 2x" />

## Dropdown Item States

The dropdown items within the Combo support five different states: disabled, **idle**, focused, selected and selected&focused.

<img class="responsive-img" src="../images/combo_item_disabled.png" srcset="../images/combo_item_disabled@2x.png 2x" />
<img class="responsive-img" src="../images/combo_item_idle.png" srcset="../images/combo_item_idle@2x.png 2x" />
<img class="responsive-img" src="../images/combo_item_focused.png" srcset="../images/combo_item_focused@2x.png 2x" />
<img class="responsive-img" src="../images/combo_item_selected.png" srcset="../images/combo_item_selected@2x.png 2x" />
<img class="responsive-img" src="../images/combo_item_selected_focused.png" srcset="../images/combo_item_selected_focused@2x.png 2x" />

## Styling

The Combo comes with the combined styling flexibility of its input and dropdown pieces. There are overrides controlling the input text elements' color and bottom line style and color. For the dropdown one may change the background color, or use the various overrides related to the items in the Combo dropdown, such as the search input and the items with their background and text colors.

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
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

