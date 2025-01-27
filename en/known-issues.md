---
title: Known Issues - Design System
_description: The issues and limitations that we are aware of with the guidance how to avoid or recover in case you run into them.
_keywords: Design Systems, Design Systems UX, UI kit, Figma, Ignite UI for Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---

# Known Issues

This topic describes the issues and limitations we have run into or observed when using the Indigo Design Libraries in Figma. Where applicable we will be providing the necessary guidance to avoid the occurrence of issues or recover from them once they occur.

### General

#### Detached Component Instances

As you may have already seen in the other topics detaching or ungrouping components usually results in the loss of capability for code generation. However, a few components like the List and the Grid are basically repeaters of items and cells and come in a more generic form that is supposed to be detached to allow you to create the number of items, rows and columns that you would need. As we enhance individual items with functionality in the upcoming versions of the libraries, such updates should propagate easily, however enhancements made to the collection of items i.e. `List/One-line Item List` or `Grid/Data Grid`, for example, will not propagate to the detached instances of these components.

> [!Note]
> When detaching component, that component won't receive updates, if the UI Kit is updated or when a library is swapped.

#### User input in components

User input values of components which change per scenario are not generated. Some examples of these components would be Checkbox (On state), Radio Group (Checked state), Switch, etc.


#### Not supported Stroke styles
Currently not supported stroke styles are:
- Corner radius
- Stroke per side
- Dashed style settings
  - Dash
  - Gap
  - Cap type
- Join type
- Mitter angle

##### Not supported Effects styles
Currently not supported effects styles are:
- Inner shadow
- Layer blur
- Background blur

#### Non-resizable components
Some components apply limitation on what size they or their direct children can take.
As such resizing them in the design will have no affect on the generated result as they are considered non-resizable.

Components that are non-resizable include:

- Avatar - has only 3 preset sizes in the design library. Resizing it to a custom size is not supported.
- Dialog - takes the size of its content. Cannot be individually resized.
- Radio - takes the size of its content. Cannot be individually resized.
- Snackbar - takes the size of the container. Cannot be individually resized.
- Button children (Icon and Text) - They are determined by the typography and do not allow resizing.
- Repeatable child elements which are inside a parent component are determined by the parent size and cannot be individually resized. These include:
  - List Items
  - NavDrawer Items
  - Buttons in Button group
  - etc.

### Figma
#### Main Components
Currently Main Components are skipped by the parser, you can copy a Main Component in the page to make it an instance and now it will be read by the parsers. Using Main Components in your design might occur if you copy directly components from the UI Kit and not load the library and take them from the assets panel.

#### Colors
The UI Kit provides `surface-light` and `surface-dark` colors, and importing these colors in AppBuilder will result in single `Surface` color, which might be light or dark depending on the chosen theme.

#### Crop image size in Figma
As you already know images are retrieved from the design application as assets. The size of the image is determined in the Figma design. At the moment `CROP` size is not supported.

#### Not supported elements
The following Figma components are not implemented for code generation yet:

  - Shapes
    - Line
    - Arrow
    - Polygon
    - Star
  - Pen
  - Pencil

> [!Note]
> Future releases will include these components.


Our community is active and always welcoming to new ideas.