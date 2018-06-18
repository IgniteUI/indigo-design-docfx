---
title: Grid Summaries - Grid Feature
_description: The Grid Summaries allow showing aggregated values calculated over all the data in the respective Grid column. 
_keywords: Design System, Sketch, Ignite UI for Angular, Grid Feature, UI Library, Widgets
---

## Grid Summaries

Use the Grid Summaries Component to show aggregated values calculated over all the data in the respective Grid column. This is achievable through the insertion of special cells called Summary at the bottom of the Grid to shape up a tabular area matching the Grid structure but containing a Label and Number containing information about the aggregate value. The Grid Paging is visually identical to the [Ignite UI for Angular Grid Paging Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_paging.html)

### Grid Summaries Demo

![](../images/grid_summaries_demo.png)

### State

The Grid Summary Cell supports the following interactive states: **active** which shows a summary Label and Number, inactive which shows a grayed out Label and hides the Number, and unavailable
which is used to fill the gaps when one column has less Summaries than another.

![](../images/grid_cell_summary_active.png)
![](../images/grid_cell_summary_inactive.png)
![](../images/grid_cell_summary_unavailable.png)

### Type

The Grid Summary Cell provides presets for the two generic types of data aggregates that it needs to accommodate: **Number** for numeric values and Text for strings.

![](../images/grid_cell_summary_number.png)
![](../images/grid_cell_summary_text.png)

### Styling

The Grid Summary Cell comes with basic styling flexibility through the various overrides controlling its label and number text colors, as well as the cell background color.

![](../images/grid_summaries_styling.png)

## Additional Resources

Related topics:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
