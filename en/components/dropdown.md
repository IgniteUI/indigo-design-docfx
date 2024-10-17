---
title: Dropdown - Design System Component
_description: The Dropdown Component Symbol allows selection of a single item from a collection.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Dropdown

Use the Dropdown Component to let the user select an item from a collection that is displayed upon user interaction in a scrollable list. Only one item can be selected at a time and if your scenario requires the selection of multiple items, you should use the [Combo](combo.md) instead. The Dropdown is visually identical to the [Ignite UI for Angular Dropdown Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html)

## Dropdown Demo

<img class="responsive-img" src="../images/dropdown_demo.png" srcset="../images/dropdown_demo@2x.png 2x" />

## Size

The Dropdown comes in three sizes: Large, Medium, and Small.

<img class="responsive-img" src="../images/dropdown_large.png" srcset="../images/dropdown_large@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_medium.png" srcset="../images/dropdown_medium@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_small.png" srcset="../images/dropdown_small@2x.png 2x" />

## Items

The Dropdown supports two types of items: header and item. Through headers it is possible to organize the other items in groups.

<img class="responsive-img" src="../images/dropdown_header.png" srcset="../images/dropdown_header@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item.png" srcset="../images/dropdown_item@2x.png 2x" />

## Item States

The Dropdown items support five different states: **Idle**, **Disabled**, **Focused**, **Selected** and **Selected & Focused**. In Figma the states are different variants that can be achieved by changing the `State` property and/or the boolean properties for selected and disabled. In Sketch this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states.

<img class="responsive-img" src="../images/dropdown_item_idle.png" srcset="../images/dropdown_item_idle@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_disabled.png" srcset="../images/dropdown_item_disabled@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_focused.png" srcset="../images/dropdown_item_focused@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_selected.png" srcset="../images/dropdown_item_selected@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_selected_focused.png" srcset="../images/dropdown_item_selected_focused@2x.png 2x" />

## Item Layout Template

The Dropdown Item supports flexible icon and label templating. In Sketch, to show the icon you have to set its override to Icon/Medium and the smart layout rules will adjust the item layout automatically. In Adobe XD, the same is possible by making the icon layer visible and leaving it to the Stack to adjust the layout automatically, however, if you don't need items with icons in the content, simply delete the icon layer. In Figma, we offer prefix and suffix icons, and to show them you have to select one or all items in your Dropdown and switch on the `Prefix Icon` and/or `Suffix Icon` property.

<img class="responsive-img" src="../images/dropdown_item_label.png" srcset="../images/dropdown_item_label@2x.png 2x" />
<img class="responsive-img" src="../images/dropdown_item_icon.png" srcset="../images/dropdown_item_icon@2x.png 2x" /> 
<img class="responsive-img" src="../images/dropdown_item_two_icons.png" srcset="../images/dropdown_item_two_icons@2x.png 2x" /> 

## Styling

The Dropdown comes with styling flexibility for its background color, as well as various options related to the elements it contains such as item and header background and text colors.

<img class="responsive-img" src="../images/dropdown_styling.png" srcset="../images/dropdown_styling@2x.png 2x" />

## Usage

When using the Dropdown you should always show it on top of the content that follows the item which triggers its display. Dropdowns don't push content like an expansion panel would.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/dropdown_do1.png" srcset="../images/dropdown_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/dropdown_dont1.png" srcset="../images/dropdown_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Combo](combo.md)
- [Select](select.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
