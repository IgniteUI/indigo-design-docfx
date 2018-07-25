---
title: Calendar - Design System Component
_description: The Calendar Component Symbol is used as a visual representation of a date providing the necessary mechanisms for date picking. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Calendar

Use the Calendar Component to visually represent a date and provide consistent means for its selection (date picking) through a combination of views for months and years. The Calendar is also appropriate for picking and setting a date in fields of this type used in various forms. The Calendar is visually identical to the [Ignite UI for Angular Calendar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html) & [Ignite UI for Angular Date Picker Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)

### Calendar Demo

<img src="../images/calendar_demo.png" srcset="../images/calendar_demo@2x.png 2x" />

### Layout

The Calendar supports horizontal and vertical date picking modes, as well as a base calendar rendering for a simplified display and browsing. The former two are mostly used as dialogs, while the latter is preferably inline with other content.

<img src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img src="../images/calendar_base.png" srcset="../images/calendar_base@2x.png 2x" />

### Buttons

The Calendar comes with two buttons: one for canceling the selection, which would discard any changes made to original date, and one for navigating to today's date. Upon setting both to none through the overrides, a button-less layout can be achieved.

<img src="../images/calendar_buttons.png" srcset="../images/calendar_buttons@2x.png 2x" />
<img src="../images/calendar_nobuttons.png" srcset="../images/calendar_nobuttons@2x.png 2x" />

### Content

The Calendar supports picking for all three major date portions: the year, the month, and the day. Three content modes are provided, each responsible for the picking of its respective date portion.

<img src="../images/calendar_days.png" srcset="../images/calendar_days@2x.png 2x" />
<img src="../images/calendar_months.png" srcset="../images/calendar_months@2x.png 2x" />
<img src="../images/calendar_years.png" srcset="../images/calendar_years@2x.png 2x" />

### Week Start

The start of the week is configurable by selecting between the two most common scenarios for the first day: Sunday or Monday.

<img src="../images/calendar_sun.png" srcset="../images/calendar_sun@2x.png 2x" />
<img src="../images/calendar_mon.png" srcset="../images/calendar_mon@2x.png 2x" />

### Styling

The Calendar comes with styling flexibility through the various overrides controlling header background, title colors, and content month and year picker items, as well as text and background colors for the selected day, month, or year. These are applicable according to the configurations. The Cancel and Today buttons are [Flat Buttons](button.md) and can be styled accordingly.

<img src="../images/calendar_styling.png" srcset="../images/calendar_styling@2x.png 2x" />

## Usage

Show the horizontal and vertical Calendars as a dialog that dims the rest of the UI. Inline the base Calendar with the rest of the UI without any special additional visual effects.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img src="../images/calendar_do1.png" srcset="../images/calendar_do1@2x.png 2x" /> | <img src="../images/calendar_dont1.png" srcset="../images/calendar_dont1@2x.png 2x" /> |
| <img src="../images/calendar_do2.png" srcset="../images/calendar_do2@2x.png 2x" /> | <img src="../images/calendar_dont2.png" srcset="../images/calendar_dont2@2x.png 2x" /> |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Calendar in your design is very likely to result in loss of code generation capability for the Calendar.

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

- [Time Picker](time-picker.md)
- [Form Pattern](../patterns/form.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
