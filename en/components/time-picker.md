---
title: Time Picker - Design System Component
_description: The Time Picker Component is used as a visual representation of time providing the necessary mechanisms for time picking.
_keywords: Design Systems, Design Systems UX, UI kit, Ignite UI for Angular, Angular, Angular Design System, Design Kits for Angular, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
---

# Time Picker

Use the Time Picker Component to represent a date's time portion (hour, minutes, and seconds) visually and provide appropriate means for its display in forms and selection from a dropdown or dialog. The Time Picker is visually identical to the [Ignite UI for Angular Time Picker Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/time_picker.html)

## Time Picker Demo

<img class="responsive-img" src="../images/timepicker_demo.png" srcset="../images/timepicker_demo@2x.png 2x" />

## Time Picker Input

You may insert a Time Picker Input in your forms to indicate fields for selecting just the time portion of the date. It supports Enabled and Disabled interactive states, as well as variant for Dialog and Dropdown that will be shown upon user interaction.

<img class="responsive-img" src="../images/timepicker_enabled.png" srcset="../images/timepicker_enabled@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_disabled.png" srcset="../images/timepicker_disabled@2x.png 2x" />

## Picker Layout

The Time Picker supports Dialog layout with Horizontal and Vertical orientation, as well as a Dropdown layout to facilitate different modes of picking time, casting different shadows to be more easily distinguished from each other. Notice that Dialog layouts come with a Header that you may hide in Figma by switching off the boolean `Header` property and the layout will adjust itself accordingly thanks to the added auto layout.

<img class="responsive-img" src="../images/timepicker_horizontal.png" srcset="../images/timepicker_horizontal@2x.png 2x" />         
<img class="responsive-img" src="../images/timepicker_vertical.png" srcset="../images/timepicker_vertical@2x.png 2x" />

<img class="responsive-img" src="../images/timepicker_dropdown.png" srcset="../images/timepicker_dropdown@2x.png 2x" />

## Content

The Time Picker supports 12 and 24-hour formats through two distinct content modes. Besides the hour, minutes, and the seconds portion, the 12-hour content mode provides a meridiem portion, where selection between AM and PM is possible. 

<img class="responsive-img" src="../images/timepicker_dropdown.png" srcset="../images/timepicker_dropdown@2x.png 2x" />
<img class="responsive-img" src="../images/timepicker_24mode.png" srcset="../images/timepicker_24mode@2x.png 2x" />

## Buttons

The Time Picker comes with two buttons: one for canceling the selection, which would revert the time to the original one, and one for confirming the selection, which would save the changes made. 

The Button area can be templated, making it easy to hide buttons as needed. In Figma, you can simply hide a button by hiding its instance from the layers panel or hide them altogether using the `Action Buttons` boolean property. To add additional buttons in Figma, you should first detach the component instance and then apply the desired changes.

<img class="responsive-img" src="../images/timepicker_buttons.png" srcset="../images/timepicker_buttons@2x.png 2x" />

## Styling

The Time Picker comes with styling flexibility through the various options for header background and title colors, as well as text colors for the selected hour, minutes, seconds, and meridiem (AM/PM). The Cancel and OK buttons are [Flat Buttons](button.md) and can be styled accordingly.

<img class="responsive-img" src="../images/timepicker_styling.png" srcset="../images/timepicker_styling@2x.png 2x" />

## Usage

When showing Time Picker as a Dialog add a layer that dims the rest of the UI, and when showing it as a Dropdown position it just below a Time Picker Input with Dropdown configuration.

| Do                                                                                     | Don't                                                                                      |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img class="responsive-img" src="../images/timepicker_do1.png" srcset="../images/timepicker_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/timepicker_dont1.png" srcset="../images/timepicker_dont1@2x.png 2x" /> |
| <img class="responsive-img" src="../images/timepicker_do2.png" srcset="../images/timepicker_do2@2x.png 2x" /> | <img class="responsive-img" src="../images/timepicker_dont2.png" srcset="../images/timepicker_dont2@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Calendar](calendar.md)
- [Date Picker](date-picker.md)
- [Input](input.md)
- [Form Pattern](../patterns/form.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
