---
title: Skeleton Hierarchical Grid - Design System Component
_description: The Skeleton Hierarchical Grid is a representation of a Hierarchical Grid component that is shown while data is being loaded in the background to provide content for its cells.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits, Figma, Figma to Angular, Export code from Figma, Figma HTML, Figma to HTML, Figma UI kits
---

# Skeleton Hierarchical Grid

Use the Skeleton Hierarchical Grid to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote data source and there is either lack of connectivity, or it takes some time. The Skeleton Hierarchical Grid is just a visual representation of a [Hierarchical Grid](hierarchical-grid.md) with a known layout, but without any data to show.

## Skeleton Hierarchical Grid Demo

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_demo.png" srcset="../images/hierarchical_grid_skeleton_demo@2x.png 2x" />

## Cell Types

The Skeleton Hierarchical Grid extends the three types of skeleton cells Header, Body, and Summary with two additional ones as the standard [Hierarchical Grid](hierarchical-grid.md): CollapseAll and Expand.

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header.png" srcset="../images/hierarchical_grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_body.png" srcset="../images/hierarchical_grid_skeleton_cell_body@2x.png 2x" />

## Cell Size

The Skeleton CollapseAll and Expand cells support the same three size variants as the standard [Hierarchical Grid](hierarchical-grid.md): Large, Medium and Small.

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_large.png" srcset="../images/hierarchical_grid_skeleton_cell_headerlargee@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_medium.png" srcset="../images/hierarchical_grid_skeleton_cell_header_medium@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_cell_header_small.png" srcset="../images/hierarchical_grid_skeleton_cell_header_small@2x.png 2x" />

## Grid Types

The Skeleton Hierarchical Grid supports the three display densities and offers variants for each of them with regard to the state of loading data: Initial which is shown when the Hierarchical Grid is loading data and there is no expanded row with a nested grid, and Expand which is shown when only the nested grid is loading data.

<img class="responsive-img" src="../images/hierarchical_grid_skeleton_initial.png" srcset="../images/hierarchical_grid_skeleton_initial@2x.png 2x" />
<img class="responsive-img" src="../images/hierarchical_grid_skeleton_expand.png" srcset="../images/hierarchical_grid_skeleton_expand@2x.png 2x" />

## Usage

When creating hierarchical grids, avoid combining standard and skeleton cells within the same hierarchy level. Data is either present for all cells and grids on a given level, or for none of them. Combining standard and skeleton cells is appropriate only in a very limited set of use cases such as the presets explained above.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/hierarchical_grid_skeleton_do1.png" srcset="../images/hierarchical_grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/hierarchical_grid_skeleton_dont1.png" srcset="../images/hierarchical_grid_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Hierarchical Grid](hierarchical-grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
