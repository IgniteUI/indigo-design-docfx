---
title: Text Area - Design System Component
_description: The Text Area Component allows collecting long text user data and displaying it in multiple lines.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Text Area

Use the Text Area Component to let the user input long text data displayed in multiple lines and edit it. The Text Area allows the user to resize the area horizontally and vertically by a drag indicator. Users can achieve the Text Area Component by making an [Ignite UI for Angular Input Group Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html) decorated as a text area.

## Text Area Demo

<img class="responsive-img" src="../images/textarea_demo.png" srcset="../images/textarea_demo@2x.png 2x" />

## Size

The Text Area comes in three different sizes:

- Large
- Medium
- Small

| Large | Medium | Small |
| ------- | ------- | ------- |
| <img class="responsive-img" src="../images/textarea_large.png" srcset="../images/textarea_large@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_medium.png" srcset="../images/textarea_medium@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_small.png" srcset="../images/textarea_small@2x.png 2x" /> |


## Types
In Figma we offer a choice between text area with or without a hint, which can be switched on/off through the `Hint` boolean property.

| With a hint | Without a hint |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_hint.png" srcset="../images/textarea_hint@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_nohint.png" srcset="../images/textarea_nohint@2x.png 2x" /> |

## Interaction State

The Text Area can be switched from an enabled to disabled state from the `Disabled` boolean property.

| Enabled | Disabled |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_enabled.png" srcset="../images/textarea_enabled@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_disabled.png" srcset="../images/textarea_disabled@2x.png 2x" /> |

## State

When the user interacts with the Text Area, it goes through various states: Idle with a placeholder in the place of the content, Focused while the user is typing in it, and Filled once the user has finished adding content and moved on. These flexibility enhancements afford a more dynamic interaction design that can seamlessly flow into high-fidelity prototyping. In Figma, you can toggle between states using the `State` property in the right properties panel.

| Idle | Idle & Hover | Idle & Disabled |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_idle.png" srcset="../images/textarea_idle@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_idle&hover.png" srcset="../images/textarea_idle&hover@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_idle&disabled.png" srcset="../images/textarea_idle&disabled@2x.png 2x" /> |

| Filled | Filled & Hover | Filled & Disabled |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_filled.png" srcset="../images/textarea_filled@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_filled&hover.png" srcset="../images/textarea_filled&hover@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_filled&disabled.png" srcset="../images/textarea_filled&disabled@2x.png 2x" /> |

| Focused |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_focused.png" srcset="../images/textarea_focused@2x.png 2x" />|

Every experienced designer uses constraints wisely to limit the user input and avoid invalid states, hen ce the availability of validation styles. Through the available validation styles, the Text Area is equipped for sophisticated designs that display Success, Warning, and Error visuals.

| Success | Warn | Error |
| ------- | ------- |
| <img class="responsive-img" src="../images/textarea_success.png" srcset="../images/textarea_success@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_warning.png" srcset="../images/textarea_warning@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_error.png" srcset="../images/textarea_error@2x.png 2x" /> |

In Figma, states can be easily switched from the `State` property on the right properties panel.

## Resizing

The Text Area lets the user resize the area horizontally and vertically by a drag indicator located in the bottom right corner while adjusting text automatically to fit the new constraints.

<img class="responsive-img" src="../images/textarea_resizing.png" srcset="../images/textarea_resizing@2x.png 2x" />

## Styling

The Text Area comes with styling flexibility through the colors of its Background, Drag Indicator, Border, and Text. To change the validation styles, it is recommended to update the respective color styles in the Indigo.Design library. 

<img class="responsive-img" src="../images/textarea_styling.png" srcset="../images/textarea_styling@2x.png 2x" />

## Usage

When using the Text Area, you should always have a label. A text area without a label appears unclear.

| Do                                                                           | Don't                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/textarea_do1.png" srcset="../images/textarea_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/textarea_dont1.png" srcset="../images/textarea_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Input](input.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
