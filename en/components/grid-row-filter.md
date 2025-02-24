---
title: Grid Row Filter - Grid Feature
_description: The Grid Row Filter allows the definition of filtering criteria on a Grid column.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Grid Row Filter

Use the Grid Row Filter to specify filtering criteria on a Grid column via a special type of Header Cell that contains Chips with the filtering conditions. The Grid Row Filter is visually identical to [Ignite UI for Angular Grid Filtering Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/filtering.html)

## Grid Row Filter Demo

<img class="responsive-img" src="../images/grid_row_filter_demo.png" srcset="../images/grid_row_filter_demo@2x.png 2x" />

## Row Filter Header

In order to indicate that a Grid is filterable via a Row Filter, add a second Header row with Row Filter Header Cells for each of the columns of the Grid within the `Header` group.

## Filter State

In Figma the Row Filtering is one of the Grid Header Cell types, that can be switched from the properties panel. It lets you configure whether a filtering condition has been applied on a given column. There are two distinct types of filtering state: **Row Filter Empty** and **Row Filter Filtered**. You can easily switch between them by adjusting the `Type` property. When set to **Filtered** you may also specify conditions via the [Chip](chips.md) it contains.

## Additional Resources

Related topics:

- [Grid](grid.md)
- [Grid Excel Style Filter](grid-excel-style-filter.md)
- [Grid Advanced Filter](grid-advanced-filter.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
