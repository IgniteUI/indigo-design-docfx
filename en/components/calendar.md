---
title: Calendar - Design System Component
_description: The Calendar Component is used as a visual representation of a date providing the necessary mechanisms to navigate day, month and year part of it.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Calendar

Use the Calendar Component to visually represent a date and provide consistent means for navigating its parts through views for days, months and years. The Calendar is meant to be inlined in a view to allow browsing dates and selecting one or more of them e.g. a range of dates. The Calendar is visually identical to the [Ignite UI for Angular Calendar Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/calendar.html) and is used within the [Ignite UI for Angular Date Picker Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/date_picker.html)

## Calendar Demo

<img class="responsive-img" src="../images/calendar_demo.png" srcset="../images/calendar_demo@2x.png 2x" />

## Size

The Calendar is available in three sizes:
- Large
- Medium
- Small

Horizontal layout:
<img class="responsive-img" src="../images/calendar_horizontal_sizes.png" srcset="../images/calendar_horizontal_sizes@2x.png 2x" />

Vertical layout:
<img class="responsive-img" src="../images/calendar_vertical_sizes.png" srcset="../images/calendar_vertical_sizes@2x.png 2x" />

## Layout

The Calendar supports Horizontal or Vertical layout. In Figma you can switch them using the `Orientation` property.

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />

## Multiview Variants

The Calendar includes also a Multiview option to display two months side by side. In Figma, you can enable this with the `Multiview` boolean property and select either Horizontal or Vertical orientation using the `Orientation` property.

<img class="responsive-img" src="../images/calendar_multi_horiz.png" srcset="../images/calendar_multi_horiz@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_multi_vert.png" srcset="../images/calendar_multi_vert@2x.png 2x" />

## Content

To facilitate the display of each of the major date portions, there's a `View` property in Figma, which lets you choose between Day, Month, or Year view.

<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_months.png" srcset="../images/calendar_months@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_years.png" srcset="../images/calendar_years@2x.png 2x" />

## Week Start

In Figma the start of the week can be chosen from the `Week Start` property, which supports the two most common scenarios for first day of the week: Sunday and Monday.

<img class="responsive-img" src="../images/calendar_sun.png" srcset="../images/calendar_sun@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_vertical.png" srcset="../images/calendar_vertical@2x.png 2x" />

## Header

The Calendar has a built-in Header that can be omitted, resulting in a base Calendar that you can embed more seamlessly in your forms. In Figma, this can be achieved using the `Header` boolean property.

<img class="responsive-img" src="../images/calendar_base.png" srcset="../images/calendar_base@2x.png 2x" />

## Week Numbers

The Calendar also has built-in support for Week Numbers, but if you prefer not to show this part of the UI, simply switch off the `Week Numbers` boolean property from the properties panel in Figma.

<img class="responsive-img" src="../images/calendar_weeknum.png" srcset="../images/calendar_weeknum@2x.png 2x" />

## Selection

The Calendar lets you pick between three selection modes: **Single Day** limiting the user to be able to select only one date, **Range** providing means to select all dates between a start and end date and **Multiple Days** allowing selection of random dates.

<img class="responsive-img" src="../images/calendar_horizontal.png" srcset="../images/calendar_horizontal@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_range.png" srcset="../images/calendar_range@2x.png 2x" />
<img class="responsive-img" src="../images/calendar_selection.png" srcset="../images/calendar_selection@2x.png 2x" />

## Styling

The Calendar comes with styling flexibility through the various options for the background, header background, title colors, and content month and year picker items, as well as text and background colors for the selected day, month, or year. These are applied according to the rest of your configurations.

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
