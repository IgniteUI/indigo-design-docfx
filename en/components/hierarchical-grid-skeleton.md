---
title: Skeleton Hierarchical Grid - Design System Component
_description: The Skeleton Hierarchical Grid is a representation of a Hierarchical Grid component that is shown while data is being loaded in the background to provide content for its cells.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Skeleton Hierarchical Grid

Use the Skeleton Hierarchical Grid to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote data source and there is either lack of connectivity, or it takes some time. The Skeleton Hierarchical Grid is just a visual representation of a [Hierarchical Grid](hierarchical-grid.md) with a known layout, but without any data to show.

## Skeleton Hierarchical Grid Demo

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_demo.png" srcset="../images/hierarchical_grid_skeleton_demo@2x.png 2x" />

## Cell Types

The Skeleton Hierarchical Grid extends the three types of skeleton cells Header, Body, and Summary with two additional ones as the standard [Hierarchical Grid](hierarchical-grid.md): CollapseAll and Expand.

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header.png" srcset="../images/hierarchical_grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_body.png" srcset="../images/hierarchical_grid_skeleton_cell_body@2x.png 2x" />

## Cell Display Density

The Skeleton CollapseAll and Expand cells support the same three display density variants as the standard [Hierarchical Grid](hierarchical-grid.md): comfortable, cosy, and compact.

<img class="responsive-img" src="../images/hierarchical_grid__skeleton_cell_header_comfortable.png" srcset="../images/hierarchical_grid__skeleton_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_cosy.png" srcset="../images/hierarchical_grid_skeleton_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_compact.png" srcset="../images/hierarchical_grid_skeleton_cell_header_compact@2x.png 2x" />

## Grid Types

The Skeleton Hierarchical Grid supports the three skeleton display density grid types with two types per each of loading data in the background: Initial which is shown when the Hierarchical Grid is loading data and there is no expanded row with a nested grid, and Expand which is shown when a nested grid is loading data.

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_initial.png" srcset="../images/hierarchical_grid_skeleton_initial@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_expand.png" srcset="../images/hierarchical_grid_skeleton_expand@2x.png 2x" />

## Usage

When creating hierarchical grids, avoid combining standard and skeleton cells. Data is either present for all cells, or for none of them, thus the two types should not be used within the same grid layout.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/hierarchical_grid_skeleton_do1.png" srcset="../images/hierarchical_grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/hierarchical_grid_skeleton_dont1.png" srcset="../images/hierarchical_grid_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Hierarchical Grid](hierarchical-grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
