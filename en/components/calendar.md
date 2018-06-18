---
title: Calendar - Design System Component
_description: The Calendar Component Symbol is used as a visual representation of a date providing the necessary mechanisms for date picking. 
_keywords: Design System, Sketch, Ignite UI for Angular, Component, UI Library, Widgets
---

## Calendar

Use the Calendar Component to visually represent a date and provide consistent means for its selection (date picking) through a combination of views for months and years. The Calendar is also appropriate for picking and setting a date in fields of this type used in various forms. The Calendar is visually identical to the [Ignite UI for Angular Calendar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html) & [Ignite UI for Angular Date Picker Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)

### Calendar Demo

![](../images/calendar_demo.png)

### Layout

The Calendar supports horizontal and vertical date picking modes, as well as a base calendar rendering for a simplified display and browsing. The former two are mostly used as dialogs, while the latter is preferably inline with other content.

![](../images/calendar_horizontal.png)
![](../images/calendar_vertical.png)
![](../images/calendar_base.png)

### Buttons

The Calendar comes with two buttons: one for canceling the selection, which would discard any changes made to original date, and one for navigating to today's date. Upon setting both to none through the overrides, a button-less layout can be achieved.

![](../images/calendar_buttons.png)
![](../images/calendar_nobuttons.png)

### Content

The Calendar supports picking for all three major date portions: the year, the month, and the day. Three content modes are provided, each responsible for the picking of its respective date portion.

![](../images/calendar_days.png)
![](../images/calendar_months.png)
![](../images/calendar_years.png)

### Week Start

The start of the week is configurable by selecting between the two most common scenarios for the first day: Sunday or Monday.

![](../images/calendar_sun.png)
![](../images/calendar_mon.png)

### Styling

The Calendar comes with styling flexibility through the various overrides controlling header background, title colors, and content month and year picker items, as well as text and background colors for the selected day, month, or year. These are applicable according to the configurations. The Cancel and Today buttons are [Flat Buttons](button.md) and can be styled accordingly.

![](../images/calendar_styling.png)

## Usage

Show the horizontal and vertical Calendars as a dialog that dims the rest of the UI. Inline the base Calendar with the rest of the UI without any special additional visual effects.

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| ![](../images/calendar_do1.png) | ![](../images/calendar_dont1.png) |
| ![](../images/calendar_do2.png) | ![](../images/calendar_dont2.png) |

## Code generation

> [!WARNING]
> Triggering `Detach from Symbol` on an instance of the Calendar in your design is very likely to result in loss of code generation capability for the Calendar.

`🕹️DataSource`
`🕹️Event`

## Additional Resources

Related topics:

- [Time Picker](time-picker.md)
- [Form Pattern](forms.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
