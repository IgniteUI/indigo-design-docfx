---
title: Input - Design System Component
_description: The Input Component Symbol allows the collection of user data such as strings, numbers and dates.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Input

Use the Input component to collect user data such as strings, numbers fitting various contexts, dates, and other values, such as emails and passwords. Multiple inputs can be combined to craft easy-to-use and aesthetic forms. The Input is visually identical to the [Ignite UI for Angular Input Group Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)

## Input Demo

<img class="responsive-img" src="../images/input_demo.png" srcset="../images/input_demo@2x.png 2x" />

## Types

In Sketch and Adobe XD the Input lets you choose a preset from three options: simple, hint which comes with a helper text, and searchbar. In Figma we offer a choice between a simple input with or without a hint (boolean property), and a searchbar.

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
`simple`
<img class="responsive-img" src="../images/input_hint.png" srcset="../images/input_hint@2x.png 2x" />
`hint`
<img class="responsive-img" src="../images/input_searchbar.png" srcset="../images/input_searchbar@2x.png 2x" />
`searchbar`

The hint and simple presets in Sketch and Adobe XD offer choice between three distinct types: line style for a more airy look, border style for a more structured perception on solid color backgrounds, and boxed style which is most appropriate when the Input is placed on top of a vivid image to improve the readability of its content. Since we are deprecating the line style, in Figma we have only the border and box types available.

<img class="responsive-img" src="../images/input_border.png" srcset="../images/input_border@2x.png 2x" />
`border`
<img class="responsive-img" src="../images/input_box.png" srcset="../images/input_box@2x.png 2x" />
`box`

## Interaction State

In Sketch and Adobe XD, each of these presets can be inserted in an Enabled or a Disabled state. In Figma, the Input is in an Enabled state by default and can be switched to a Disabled state from the properties panel on the right.

<img class="responsive-img" src="../images/input_enabled.png" srcset="../images/input_enabled@2x.png 2x" />
`enabled`
<img class="responsive-img" src="../images/input_disabled.png" srcset="../images/input_disabled@2x.png 2x" />
`disabled`

## States

When the user interacts with the Input, it goes through various states: **Idle** with a placeholder in the place of the content, **Hover** which indicates the input is enabled, once the user places their cursor over it, **Filled** that shows once the user has finished adding content and moved on, **Focused** with a visual indication that the user is currently inserting a value. 


<img class="responsive-img" src="../images/input_idle.png" srcset="../images/input_idle@2x.png 2x" />
`idle`
<img class="responsive-img" src="../images/input_hover.png" srcset="../images/input_hover@2x.png 2x" />
`hover`
<img class="responsive-img" src="../images/input_filled.png" srcset="../images/input_filled@2x.png 2x" />
`filled`
<img class="responsive-img" src="../images/input_focused.png" srcset="../images/input_focused@2x.png 2x" />
`focused`

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Input is equipped for sophisticated designs that display Success, Warn, and Error visuals.

<img class="responsive-img" src="../images/input_success.png" srcset="../images/input_success@2x.png 2x" />
`success`
<img class="responsive-img" src="../images/input_warning.png" srcset="../images/input_warning@2x.png 2x" />
`warn`
<img class="responsive-img" src="../images/input_error.png" srcset="../images/input_error@2x.png 2x" />
`error`

In Sketch, the states and validation states are achieved with `Symbol Overrides`, while in Figma you can switch between states using the "State" property from the properties panel. In Adobe XD we are using the `Component States` paradigm to let you easily switch between them.

## Layout

The Input has rich support for prefix and suffix through a combination of text and icons that can, in certain cases, reduce the input effort for the user: e.g. an @email.com suffix means both fewer keystrokes and more clarity of expected content. In Figma, removing the prefix or the suffix can be achieved from the properties panel by switching them on and off. In Sketch, to remove the prefix or suffix simply set their override to ~No Symbol, and the smart layout rules will adjust the input accordingly. In Adobe XD, the same can be achieved by deleting the unnecessary prefix or suffix layer and the Stack will take care to adjust the layout accordingly.

<img class="responsive-img" src="../images/input_prefix.png" srcset="../images/input_prefix@2x.png 2x" />
<img class="responsive-img" src="../images/input_suffix.png" srcset="../images/input_suffix@2x.png 2x" />

## Content Type

Within each Input component lies a `Content Type` layer that specifies the nature of the information being inserted. This `Content Type` can be anything from text, email, password, phone number, to date. After entering the data into the input field, it's crucial to set the `Content Type` appropriately to ensure that your design is transferable to the `App Builder` and the information is accurately parsed.

## Styling

The Input comes with styling flexibility through the colors of its background and border/bottom line, as well as icon color and text styles of its prefix, suffix, and main areas of content. To change the validation styles, it is recommended to update the respective color variables in the Indigo.Design library. 

<img class="responsive-img" src="../images/input_styling.png" srcset="../images/input_styling@2x.png 2x" />

## Usage

Use the box type of Input when placing forms on top of an image to improve readability. When using an Input in warn or error state in your designs, choose a preset with helper text and use the opportunity to provide guidance to the user.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/input_do1.png" srcset="../images/input_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont1.png" srcset="../images/input_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/input_do2.png" srcset="../images/input_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont2.png" srcset="../images/input_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Combo](combo.md)
- [Select](select.md)
- [Form Pattern](../patterns/form.md)
- [User Profile Pattern](../patterns/user-profile.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
