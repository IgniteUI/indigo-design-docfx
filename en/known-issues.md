---
title: Known Issues - Design System
_description: The issues and limitations that we are aware of with the guidance how to avoid or recover in case you run into them. 
_keywords: Design System, Sketch, Ignite UI for Angular, UI Library, Colors, Palettes
---

## Known Issues

This topic describes the issues and limitations we have run into or observed when using the Indigo Design Sketch Libraries. Where applicable we will be providing the necessary guidance to avoid the occurence of issues or recover from them once they occur.

### Detached Symbols

As you may have already seen in the other topics `Detach from Symbol` usually results in the loss of capability for code generation. However, a few components like the List and the Grid are basically repeaters of items and cells and come as a Generic~ that is supposed to be detached to allow you to create the number of items, rows and columns that you would need. As we enhance individual items with functionality in the upcoming versions of the libraries, such updates should propagate easily, however enhancements made to the collection of items named Generic~ will not propagate for detached instances of these components.

### Nested Libraries

We have witnessed a strange behavior of Sketch when using nested libraries. In our case this is the way Components "consumes" the Styling library, and how Patterns does the same for the Components and Styling libraries. In the overrides section you may sometimes encounter something like Indigo-Components/Colors/white, which makes no sense for the white color living in the Styling library. The described situtation should not impact your design or prevent the code generation engine from producing predictable results, but we have escalated this problem to the Sketch team, and they have assured us that a solution should be available in one of the upcoming releases.

### Getting Invalid Overrides

When using nested overrides to customize the look and feel of a Component, we have discovered that sometimes after tweaking overrides deep in the nesting hierarchy and then changing an override above with a different underlying structure, Sketch gets confused and assigns values to this structure that are by no means appropriate for or matching it.

If you run in such a situation, just make sure that you pick the correct value for each on the underlying overrides and leave the Component in a valid state. Otherwise, it will not only reflect an impossible configuration, but will be impossible to read for our code generation engine.

## Additional Resources

Related topics:

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
