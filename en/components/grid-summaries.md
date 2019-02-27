---
title: Grid Summaries - Grid Feature
_description: The Grid Summaries allow showing aggregated values calculated over all the data in the respective Grid column. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Grid Summaries

Use the Grid Summaries Component to show aggregated values calculated over all the data in the respective Grid column. This is achievable through the insertion of special cells called Summary at the bottom of the Grid to shape up a tabular area matching the Grid structure but containing a Label and Number containing information about the aggregate value. The Grid Paging is visually identical to the [Ignite UI for Angular Grid Paging Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_paging.html)

### Grid Summaries Demo

<img class="responsive-img" src="../images/grid_summaries_demo.png" srcset="../images/grid_summaries_demo@2x.png 2x" />

### State

The Grid Summary Cell supports the following interactive states: **active** which shows a summary Label and Number, inactive which shows a grayed out Label and hides the Number, and unavailable
which is used to fill the gaps when one column has less Summaries than another.

<img class="responsive-img" src="../images/grid_cell_summary_active.png" srcset="../images/grid_cell_summary_active@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_inactive.png" srcset="../images/grid_cell_summary_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_unavailable.png" srcset="../images/grid_cell_summary_unavailable@2x.png 2x" />

### Type

The Grid Summary Cell provides presets for the two generic types of data aggregates that it needs to accommodate: **Number** for numeric values and Text for strings.

<img class="responsive-img" src="../images/grid_cell_summary_number.png" srcset="../images/grid_cell_summary_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_cell_summary_text.png" srcset="../images/grid_cell_summary_text@2x.png 2x" />

### Styling

The Grid Summary Cell comes with basic styling flexibility through the various overrides controlling its label and number text colors, as well as the cell background color.

<img class="responsive-img" src="../images/grid_summaries_styling.png" srcset="../images/grid_summaries_styling@2x.png 2x" />

## Code generation

When one or more Summary objects is added to the Sketch diagram, those summaries will be generated for each associated column. The developer is responsible for setting up a class for custom summary calculations, which is explained in more detail in this [Ignite UI for Angular help topic](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_summaries.html). Code generation applies the Sketch Summary styles to the SCSS. If summary classes have not yet been set up, when the project runs in the browser, the default column summaries are rendered based on the column type as shown in the below image.

<img class="responsive-img" src="../images/grid_summaries_codegen.png" />

> [!Note]
> There is an issue with the Ignite UI Summary Theme rendering, the background color function does not render the color, instead the Header color gets rendered. When this is corrected the correct color from the Sketch drawing will be rendered properly.

## Additional Resources

Related topic:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


