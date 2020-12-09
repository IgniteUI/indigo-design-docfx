---
title: Grid Group By - Grid Feature
_description: The Grid Group By allows hierarchical organization of the Grid records according to common values for a selected column.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Grid Group By

Use Grid Group By to organize data records in a hierarchical collection of groups defined by the matching values within a given column. The order of Group By conditions is represented in a special area above the Grid Header and special rows are inserted between Grid records to mark the beginnig of a new group. The Grid Group By is visually identical to the [Ignite UI for Angular Grid Group By Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/groupby.html)

## Grid Group By Demo

<img class="responsive-img" src="../images/grid_group_by_demo.png" srcset="../images/grid_group_by_demo@2x.png 2x" />

## Group Area

The Grid has a `Group Area` symbol under `Features` that specifies the columns that are used to establish the hierarchical grouping of records and the order in which these groups will be nested. Once you insert it, you may perform `Detach from Symbol` and inside you will find a [Chips Area](chips.md) that can be configured in a way that define how Group By is applied on the Grid.

## GroupBy Row

The Grid has a `GroupBy Row` symbol under `Features` that represents a special row in the Grid that is like a heading preceding the grouped records with some summary information about their amount within the group. Adding this symbol has only a visual effect on your design to make it more realistic, if you want to switch the GroupBy feature, insert and configure accordingly a `Group Area`.

## Code generation

If the `GrouBy Row` symbol is added make sure to place it within the group defining the Grid as a sibling to the Header and Body groups and to detach it in order to customize how grouping is applied.

## Additional Resources

Related topics:

- [Grid](grid.md)
- [Chips](chips.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
