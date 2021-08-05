---
title: Calendar - Design System Component
_description: The Calendar Component Symbol is used as a visual representation of a date providing the necessary mechanisms to navigate day, month and year part of it.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Calendar

Use the Calendar Component to visually represent a date and provide consistent means for navigating its parts through views for days, months and years. The Calendar is meant to be inlined in a view to allow browsing dates and selecting one or more of them e.g. a range of dates. The Calendar is visually identical to the [Ignite UI for Angular Calendar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html) and is used within the [Ignite UI for Angular Date Picker Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)

## Calendar Demo

<img class="responsive-img" src="../images/calendar_demo.png" srcset="../images/calendar_demo@2x.png 2x" />

## Layout

The Calendar comes in Horizontal or Vertical layout suited to display one month at a time, but also supports a Multiview option for showing two months side by side.

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_multi.png" srcset="../images/calendar_multi@2x.png 2x" />

## Content

The Calendar can be inserted in day, month or year view to facilitate display of each of the major date portions.

<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_months.png" srcset="../images/calendar_months@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_years.png" srcset="../images/calendar_years@2x.png 2x" />

## Week Start

The start of the week can also be chosen as an option at the time of inserting a Calendar between the two most common scenarios for first day of the week: Sunday and Monday.

<img class="responsive-img" src="../images/calendar_sun.png" srcset="../images/calendar_sun@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />

## Header

The Calendar has a built-in Header that can be omitted. In Sketch, the use of a smart layout allows you to set the Header to ~No Symbol to achieve this, resulting in a base Calendar that you can embed more seamlessly in your forms. In Adobe XD you can achieve the same by deleting the Header layer, and the rest of the layout will adjust itself.

<img class="responsive-img" src="../images/calendar_base.png" srcset="../images/calendar_base@2x.png 2x" />

## Week Numbers

The Calendar also has built-in support for Week Numbers, but if you prefer not to show this part of the UI, simply set the Week Numbers to ~No Symbol in Sketch while in Adobe XD you have to delete the unused layer instead.

<img class="responsive-img" src="../images/calendar_weeknum.png" srcset="../images/calendar_weeknum@2x.png 2x" />

## Selection

The Calendar lets you pick between three selection modes: **Single Day** limiting the user to be able to select only one date, Multiple Days allowing selection of random dates, and Range providing means to select all dates between a start and end date.

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_selection.png" srcset="../images/calendar_selection@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_range.png" srcset="../images/calendar_range@2x.png 2x" />

## Styling

The Calendar comes with styling flexibility through the various overrides controlling the background, header background, title colors, and content month and year picker items, as well as text and background colors for the selected day, month, or year. These are applicable according to the rest of your configurations.

<img class="responsive-img" src="../images/calendar_styling.png" srcset="../images/calendar_styling@2x.png 2x" />

## Usage

Use the Calendar as an inline element with the rest of the UI, without additional visual effects. If you need to show modals, dialogs, or dropdowns, consider using the Date Picker instead.

| Do                                                                                 | Don't                                                                                  |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/calendar_do1.png" srcset="../images/calendar_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/calendar_dont1.png" srcset="../images/calendar_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Date Picker](date-picker.md)
- [Time Picker](time-picker.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
