---
title: Grid Summaries - Grid Feature
_description: The Grid Summaries allow showing aggregated values calculated over all the data in the respective Grid column. 
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Grid Summaries

Use the Grid Summaries Component to show aggregated values calculated over all the data in the respective Grid column. This is achievable through the insertion of special cells called Summary at the bottom of the Grid to shape up a tabular area matching the Grid structure but containing a Label and Number containing information about the aggregate value. The Grid Summaries is visually identical to the [Ignite UI for Angular Grid Summary Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/summaries.html)

## Grid Summaries Demo

<img class="responsive-img" src="../images/grid_summaries_demo.png" srcset="../images/grid_summaries_demo@2x.png 2x" />

## State

The Grid Summary Cell supports the following interactive states: **available** which shows a summary Label and Number and **unavailable** which is used to fill the gaps when one column has fewer Summaries than another. In Sketch this is achieved with `Symbol Overrides`, while in Adobe XD we are using the `Component States` paradigm to let you easily switch between states. In Figma to switch the state you need to use the dedicated property, located inside the properties panel. 

<img class="responsive-img" src="../images/grid_cell_summary_active.png" srcset="../images/grid_cell_summary_active@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_unavailable.png" srcset="../images/grid_cell_summary_unavailable@2x.png 2x" />

## Type

The Grid Summary Cell provides presets for the two generic types of data aggregates that it needs to accommodate: **Number** for numeric values and **Text** for strings.

<img class="responsive-img" src="../images/grid_cell_summary_number.png" srcset="../images/grid_cell_summary_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_text.png" srcset="../images/grid_cell_summary_text@2x.png 2x" />

## Styling

The Grid Summary Cell comes with basic styling flexibility through the various options for its label and number text colors, as well as the cell background color.

<img class="responsive-img" src="../images/grid_summaries_styling.png" srcset="../images/grid_summaries_styling@2x.png 2x" />

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

