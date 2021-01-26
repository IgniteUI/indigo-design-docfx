---
title: Skeleton Grid - デザイン システム コンポーネント
_description: The Skeleton Grid is a representation of a Grid component that is shown while data is being loaded in the background to provide content for its cells.
_keywords: デザイン システム, デザイン システム UX, UI キット, Sketch, Ignite UI for Angular, Sketch to Angular, Angular, Angular デザイン システム, Sketch からコードをエクスポート, Angular 用のデザイン キット, Sketch HTML, Sketch to HTML, Sketch UI キット
_language: ja
---

# Skeleton Grid

Use the Skeleton Grid to layout the same type of information that you would in the standard one, but to also indicate an application state when no data is present at the moment e.g. when data is loaded from a remote data source and there is either lack of connectivity, or it takes some time. The Skeleton Grid is just a visual representation of a [Grid](grid.md) with a known layout, but without any data to show.

## Grid Demo

<img class="responsive-img" src="../images/grid_skeleton_demo.png" srcset="../images/grid_skeleton_demo@2x.png 2x" />

## Cell Types

The Skeleton Grid supports the same three types of cells as the standard [Grid](grid.md): header, body, and summary.

<img class="responsive-img" src="../images/grid_skeleton_cell_header.png" srcset="../images/grid_skeleton_cell_header@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body.png" srcset="../images/grid_skeleton_cell_body@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_summary.png" srcset="../images/grid_skeleton_cell_summary@2x.png 2x" />

## Cell Display Density

The Skeleton Header, Body, and Summary Cells support the same three display density variants as the standard [Grid](grid.md): comfortable, cosy, and compact.

<img class="responsive-img" src="../images/grid_skeleton_cell_header_comfortable.png" srcset="../images/grid_skeleton_cell_header_comfortable@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_cosy.png" srcset="../images/grid_skeleton_cell_header_cosy@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_compact.png" srcset="../images/grid_skeleton_cell_header_compact@2x.png 2x" />

## Items and Features (Header Cell)

The Skeleton Grid supports the same feature configurations via the `Feature Left` and `Feature Right` overrides as the standard [Grid](grid.md).

<img class="responsive-img" src="../images/grid_skeleton_cell_header_no-icon.png" srcset="../images/grid_skeleton_cell_header_no-icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_icon.png" srcset="../images/grid_skeleton_cell_header_icon@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_icons.png" srcset="../images/grid_skeleton_cell_header_icons@2x.png 2x" />

## Cell Type

The Skeleton Grid Header Cell provides presets for the Number and Text,Date,Bool types of data as the standard [Grid](grid.md).

<img class="responsive-img" src="../images/grid_skeleton_cell_header_number.png" srcset="../images/grid_skeleton_cell_header_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_header_text.png" srcset="../images/grid_skeleton_cell_header_text@2x.png 2x" />

The Skeleton Grid Body Cell provides presets for the same types of data like the Skeleton Grid Header Cell with an additional icon type to visualize simple graphics.

<img class="responsive-img" src="../images/grid_skeleton_cell_body_number.png" srcset="../images/grid_skeleton_cell_body_number@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_text.png" srcset="../images/grid_skeleton_cell_body_text@2x.png 2x" />
<img class="responsive-img" src="../images/grid_skeleton_cell_body_icon.png" srcset="../images/grid_skeleton_cell_body_icon@2x.png 2x" />

## Usage

When creating grids, avoid combining standard and skeleton cells. Data is either present for all cells, or for none of them, thus the two types should not be used within the same grid layout.

| Do                                                                                                | Don't                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img class="responsive-img" src="../images/grid_skeleton_do1.png" srcset="../images/grid_skeleton_do1@2x.png 2x" /> | <img class="responsive-img" src="../images/grid_skeleton_dont1.png" srcset="../images/grid_skeleton_dont1@2x.png 2x" /> |

## Additional Resources

Related topics:

- [Grid](grid.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
