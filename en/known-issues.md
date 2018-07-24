---
title: Known Issues - Design System
_description: The issues and limitations that we are aware of with the guidance how to avoid or recover in case you run into them. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Known Issues

This topic describes the issues and limitations we have run into or observed when using the Indigo Design Sketch Libraries. Where applicable we will be providing the necessary guidance to avoid the occurence of issues or recover from them once they occur.

### Detached Symbols

As you may have already seen in the other topics `Detach from Symbol` usually results in the loss of capability for code generation. However, a few components like the List and the Grid are basically repeaters of items and cells and come as a Generic~ that is supposed to be detached to allow you to create the number of items, rows and columns that you would need. As we enhance individual items with functionality in the upcoming versions of the libraries, such updates should propagate easily, however enhancements made to the collection of items named Generic~ will not propagate for detached instances of these components.

### Library Styles in Sketch 51

With [Sketch 51](https://www.sketchapp.com/updates/#version-51) a new concept for Library Styles has been introduced that will boost your productivity with Styling and Typography.

> [!Note]
> The next release will feature improvements to the Typography along the lines of recent updates to the Material Guidelines and full support for Text Styles and Layer Styles in the UI Kit and for code generation.

### Getting Invalid Overrides

When using nested overrides to customize the look and feel of a Component, we have discovered that sometimes after tweaking overrides deep in the nesting hierarchy and then changing an override above with a different underlying structure, Sketch gets confused and assigns values to this structure that are by no means appropriate for or matching it.

If you run in such a situation, just make sure that you pick the correct value for each on the underlying overrides and leave the Component in a valid state. Otherwise, it will not only reflect an impossible configuration, but will be impossible to read for our code generation engine.

### Nested Libraries

We have witnessed a strange behavior of Sketch when using nested libraries. In our case this is the way Components "consumes" the Styling library, and how Patterns does the same for the Components and Styling libraries. In the overrides section you may sometimes encounter something like Indigo-Components/Colors/white, which makes no sense for the white color living in the Styling library. The described situtation should not impact your design or prevent the code generation engine from producing predictable results, but we have escalated this problem to the Sketch team, and they have assured us that a solution should be available in one of the upcoming releases.

### Images and Code Generation

In Sketch, there are two ways to insert images:

1.  Drag & drop an image onto an artboard
2.  Draw a Rectangle and set its Fill to be an image

Since code generation does not currently render Sketch shapes, use only the first method with Indigo.Design. The image will be generated with the dimensions defined in the Sketch file, and will not be responsive.

Also in this version, images that are used as backgrounds for content will not be code generated as a background but as a normal image element.  Image elements in HTML are inline-block elements so they will not render behind the content but instead beside the content.  For now developers will have to adjust the generated code to convert the image to a background but we will address this in future versions.

> [!Note]
> The next release will feature an Image Component that will generate code for responsive images.

### Currently Not Supported

The following Indigo.Design components are not implemented for code generation yet:

* Button Group
* Bottom Navigation
* Cards
* Navigation -> NavBar
* Navigation -> NavDrawer
* Calendar

The following Sketch components are not implemented for code generation yet:

* Shape
* Vector
* Pencil
* Text
* Mask
* Elevation

> [!Note]
> Future releases will include these components.

### Form Patterns and Code Generation

If you use a Form from the Indigo.Design Patterns library and have detached the symbols all the way down to the base level Indigo.Design components we will be able to code generate these however Button text will not display the same as they appear in the Sketch.  We are working to resolve this but for now developers will need to adjust the text after the code is generated.

### Proportional widths not completed

As this is not completed we give each element 100% width instead of calculating a specific percent based on thier width realtive to other row elements:
[Proportional Width Sizing](https://github.com/IgniteUI/indigo-design-docfx/blob/master/en/codegen/layout-codegen.md#proportional-width-sizing)

### Overlapping sketch elemnts currently not supported

For this release we are not support elements whose boundaries overlap other elements. With reguards to the following topic we will position the elements next to each other instead.
[Pinning Overlapping Objects](https://github.com/IgniteUI/indigo-design-docfx/blob/master/en/codegen/layout-codegen.md#pinning-overlapping-objects)

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
