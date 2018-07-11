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

> [!WARNING]
> The Indigo.Design UI Kit currently does not support Text Styles and Layer Styles for code generation. Any elements using this functionality will not be generated.
> <img src="../images/library_styles.png" />

> [!INFO]
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

> [!INFO]
> The next release will feature an Image Component that will generate code for responsive images.

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
