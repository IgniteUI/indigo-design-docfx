---
title: Grid Group By - Grid Feature
_description: The Grid Group By allows a hierarchical organization of the Grid records according to common values for a selected column.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Figma to Angular, Export code from Figma, Figma to HTML, Figma UI kits, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Adobe XD, Adobe XD to Angular, Export code from Adobe XD, Adobe XD to HTML, Adobe XD UI kits
---

# Grid Group By

Use Grid Group By to organize data records in a hierarchical collection of groups defined by the matching values within a given column. The order of Group By conditions is represented in a special area above the Grid Header and special rows are inserted between Grid records to mark the beginning of a new group. The Grid Group By is visually identical to the [Ignite UI for Angular Grid Group By Feature](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/groupby.html)

## Grid Group By Demo

<img class="responsive-img" src="../images/grid_group_by_demo.png" srcset="../images/grid_group_by_demo@2x.png 2x" />

## Group Area

The Grid has a `Group Area` symbol under `Grid Features` in Sketch that specifies the columns that are used to establish the hierarchical grouping of records and the order in which these groups will be nested. Once you insert it in Sketch, you may perform `Detach from Symbol`, and inside you will find a [Chips Area](chips.md) that can be configured in a way that defines how Group By is applied on the Grid. In Figma the `Group Area` component can be found under `Grid Features`and inserted from the assets panel inside the Grid Component, once the Grid Component is detached. You can directly modify the [Chips Area](chips.md) inside the `Group Area`, without the need for detachment. In Adobe XD, there is a matching component, that upon insertion can be edited directly without the need to be broken down.

## GroupBy Row

The Grid has a `GroupBy Row` symbol/component under `Grid Features` that represents a special row in the Grid that is like a heading preceding the grouped records with some summary information about their amount within the group. Adding this symbol/component has only a visual effect on your design to make it more realistic. To switch the GroupBy feature on in Sketch, insert and configure a `Group Area`. In Figma and Adobe Xd you can simply insert the `GroupBy Row` component.

## Additional Resources

Related topics:

- [Grid](grid.md)
- [Chips](chips.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
