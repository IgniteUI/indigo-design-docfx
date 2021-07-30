---
title: Input - Design System Component
_description: The Input Component Symbol allows the collection of user data such as strings, numbers and dates.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Input

Use the Input component to collect user data such as strings, numbers fitting various contexts, dates, and other values, such as emails and passwords. Multiple inputs can be combined to craft easy-to-use and aesthetic forms. The Input is visually identical to the [Ignite UI for Angular Input Group Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html)

## Input Demo

<img class="responsive-img" src="../images/input_demo.png" srcset="../images/input_demo@2x.png 2x" />

## Types

The Input lets you choose a preset from three options: simple, hint which comes with a helper text, and searchbar.

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
<img class="responsive-img" src="../images/input_hint.png" srcset="../images/input_hint@2x.png 2x" />
<img class="responsive-img" src="../images/input_searchbar.png" srcset="../images/input_searchbar@2x.png 2x" />

The hint and simple presets offer choice between three distinct types: line style for a more airy look, border style for a more structured perception on solid color backgrounds, and boxed style which is most appropriate when the Input is placed on top of a vivid image to improve the readability of its content.

<img class="responsive-img" src="../images/input_simple.png" srcset="../images/input_simple@2x.png 2x" />
<img class="responsive-img" src="../images/input_border.png" srcset="../images/input_border@2x.png 2x" />
<img class="responsive-img" src="../images/input_box.png" srcset="../images/input_box@2x.png 2x" />

## Interaction State

Each of these presets can be inserted in an enabled or disabled state.

<img class="responsive-img" src="../images/input_enabled.png" srcset="../images/input_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/input_disabled.png" srcset="../images/input_disabled@2x.png 2x" />

## Variant

The Input can be styled in **dark** and light variants to assure good readability and contrast for both lighter and darker backgrounds.

<img class="responsive-img" src="../images/input_dark.png" srcset="../images/input_dark@2x.png 2x" />
<img class="responsive-img" src="../images/input_light.png" srcset="../images/input_light@2x.png 2x" />

## State

When the user interacts with the Input, it goes through various states: **idle** with a placeholder in the place of the content, focused while the user is typing in it, and filled once the user has finished adding content and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping.

<img class="responsive-img" src="../images/input_idle.png" srcset="../images/input_idle@2x.png 2x" />
`idle`

<img class="responsive-img" src="../images/input_focused.png" srcset="../images/input_focused@2x.png 2x" />
`focused`

<img class="responsive-img" src="../images/input_filled.png" srcset="../images/input_filled@2x.png 2x" />
`filled`

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hence the availability of validation styles. Through the available validation styles, the Input is equipped for sophisticated designs that display success, warning, and error visuals. In Sketch, the states and visuals are achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them.

<img class="responsive-img" src="../images/input_success.png" srcset="../images/input_success@2x.png 2x" />
<img class="responsive-img" src="../images/input_warning.png" srcset="../images/input_warning@2x.png 2x" />
<img class="responsive-img" src="../images/input_error.png" srcset="../images/input_error@2x.png 2x" />

In Sketch, the states and validation states are achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between them.

## Layout

The Input has rich support for prefix and suffix through a combination of text and icons that can, in certain cases, reduce the input effort for the user: e.g. an @email.com suffix means both fewer keystrokes and more clarity of expected content. You can remove the prefix or suffix by setting the respective container to ~No Symbol from the overrides.

<img class="responsive-img" src="../images/input_prefix.png" srcset="../images/input_prefix@2x.png 2x" />
<img class="responsive-img" src="../images/input_suffix.png" srcset="../images/input_suffix@2x.png 2x" />

## Styling

The Input comes with styling flexibility through the colors of its background and bottom line, as well as icon color and text styles of its prefix, suffix, and main areas of content. To change the validation styles, it is recommended to update the respective color variables in the Indigo.Design library. 

<img class="responsive-img" src="../images/input_styling.png" srcset="../images/input_styling@2x.png 2x" />

## Usage

Use the box type of Input when placing forms on top of an image to improve readability. When using an Input in warning or error state in your designs, choose a preset with helper text and use the opportunity to provide guidance to the user.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/input_do1.png" srcset="../images/input_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont1.png" srcset="../images/input_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/input_do2.png" srcset="../images/input_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/input_dont2.png" srcset="../images/input_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Form Pattern](../patterns/form.md)
- [User Profile Pattern](../patterns/user-profile.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
