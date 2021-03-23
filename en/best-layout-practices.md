---
title: Layout Best Practices - Design System
_description: Best practices regarding layout creation in Sketch and resizing configurations that result in the desired responsive behavior both in Sketch and Angular apps after code generation. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Layout Best Practices

This topic provides design guidance regarding the positioning of Components in your app layouts and the setting of proper resizing rules to assure proper responsive app design. By sticking to the recommendations below, you will be able effortlessly to generate an Angular app with the responsive behavior specified in Sketch.

> [!Note]
> Inputs, Radio Buttons, Sliders, Checkboxes, Hyperlinks, Switches, Progress Bars, Toasts, Snackbars, Avatars, Dialogs, Icons, and Title and Paragraph Texts have a preset height that is controlled by the layout of the component or its font size in the case of text-based components. It is recommended to use the default height of each of these components and fix it in Sketch since it will work fine for the vast majority of scenarios.

<img class="responsive-img" src="images/one_fix_height.png" srcset="images/one_fix_height@2x.png 2x" />

## Vertical Layouts

This section provides design guidance for the vertical layout of Components and Patterns affecting how they will respond to changes of the height of a group or artboard in Sketch that they belong to.

### Vertical Centering

In order for a layout always to be in the vertical center of the group or artboard it belongs to, it is Components and Patterns have to be grouped together in a new group with fixed height, which is positioned at equal distances from the top and bottom borders of the original group or artboard mentioned above. In addition, make sure that the new group is neither top, nor bottom pinned.

**As the group scales horizontally, so will the Inputs it contains. The containing group is vertically centered.**

<img class="responsive-img" src="images/group_vertical_center_do.png" srcset="images/group_vertical_center_do@2x.png 2x" />

**Despite that in Sketch this scenario will behave as the one above, the lack of group around the two Inputs may not generate the expected results in Angular.**

<img class="responsive-img" src="images/nogroup_vertical_center_dont.png" srcset="images/nogroup_vertical_center_dont@2x.png 2x" />

If the width of the new group is also fixed and it happens to be positioned at equal distances from the left and right borders of the original group or artboard, the new group will also be centered horizontally.

**The group always preserves its dimensions and is centered vertically and horizontally.**

<img class="responsive-img" src="images/group_center_do.png" srcset="images/group_center_do@2x.png 2x" />

## Horizontal Layout

This section provides design guidance for the horizontal layout of Components and Patterns affecting how they will respond to changes of the width of a group or artboard in Sketch that they belong to.

### Flexible Width

In order for a Component or Pattern to scale to the full width of the group or artboard it belongs to, make sure that its left and right side match with the group or artboard left and right side.

**The Input will scale with the change of width in its parent. Since the left and right sides match with those of the group or artboard it belongs to, pinning both left and right will result in the same responsive behavior as when none of the sides is pinned.**

<img class="responsive-img" src="images/one_horizontal_nofix_do1.png" srcset="images/one_horizontal_nofix_do1@2x.png 2x" />

**The Input will keep a left and right margin and scale correctly when its parent width changes. However, it will be better to put the Input in a group, so that it has proper flexible width behavior and set the left and right margins on the group instead.**

<img class="responsive-img" src="images/one_horizontal_nofix_caution.png" srcset="images/one_horizontal_nofix_caution@2x.png 2x" />

**The Input will keep a left margin and proportionally scale when its parent width changes, allowing responsive behavior.**

<img class="responsive-img" src="images/one_horizontal_nofix_dont1.png" srcset="images/one_horizontal_nofix_dont1@2x.png 2x" />

**The Input will proportionally scale and move left and right when its parent width changes, allowing responsive behavior.**

<img class="responsive-img" src="images/one_horizontal_nofix_dont2.png" srcset="images/one_horizontal_nofix_dont2@2x.png 2x" />

### Fixed Width

In order for a Component or Pattern to keep its width, make sure that it has a fixed width in Sketch. In most scenarios though, our advice is to use the flexible widths explained above for elements that appear alone on a layout row, unless these elements come with a fixed width by default as a component e.g. Avatar, Circular Progress Bar, Icon and Toast.

**The Input will always preserve its right margin and have fixed width that will not change in responsive scenarios.**

<img class="responsive-img" src="images/one_horizontal_fixed_caution2.png" srcset="images/one_horizontal_fixed_caution2@2x.png 2x" />

**The Input will always preserve its width, but the lack of pinning either left or allows the Code generation to decide on how to align the content.**

<img class="responsive-img" src="images/one_horizontal_fixed_dont.png" srcset="images/one_horizontal_fixed_dont@2x.png 2x" />

### Horizontal Layouts With More Elements

In order to assure the proper behavior of a layout with more elements in responsive scenarios group its elements as necessary and apply the rules defined so far on the elements and groups that constitute the layout.

**The left Input has a fixed height and is pinned left, while the right one has a fixed height and is pinned right. Both are placed in a group. The Button and Hyperlink are both with their widths and heights fixed and put in a separate group.**

<img class="responsive-img" src="images/many_horizontal_nofix_do1.png" srcset="images/many_horizontal_nofix_do1@2x.png 2x" />

**The Inputs group has a fixed height and is pinned left and right, while the other group has both the width and height fixed and is pinned right. These two groups are put in another group that brings the whole layout together, which is pinned left and right and has a fixed height. Thus, when the form needs to change width, the Inputs Group and the Input elements inside will resize correctly to account for more or less available space, while the Button and Link Group will always keep its size and size of its elements, making sure they always occupy the same space on the right end of the form.**

<img class="responsive-img" src="images/many_horizontal_nofix_do2.png" srcset="images/many_horizontal_nofix_do2@2x.png 2x" />

Alternatively, one may want to have a form with fixed width that is always centered in relation to the group or artboard it belongs to.

**Both Inputs, as well as the Button and the Hyperlink, have fixed widths and heights and are put in a common group that has a fixed width and height and is positioned equally far from the sides of its parent both vertically and horizontally. All elements will preserve their dimensions under a responsive scenario and the form as a whole will be centered both ways.**

<img class="responsive-img" src="images/many_horizontal_fix_do.png" srcset="images/many_horizontal_fix_do@2x.png 2x" />

## All Margins

In order for a layout to keep its margins on all sides related to the group or artboard it belongs to, its Components and Patterns have to be grouped together in a new group pinned on all four possible sides.

**The group will always preserve its left, right, top and bottom margins of 16px each and change its size accordingly. The content inside the group will adapt according to the rules specified for each element, in this case, the Inputs will preserve their height, top margin of 0px and margins in between along the vertical axis.**

<img class="responsive-img" src="images/all_margins.png" srcset="images/all_margins@2x.png 2x" />

> [!Note]
> Specific components, usually navigation elements such as Bottom Navigation, Navbar, Navigation Drawer and others, have three of their sides pinned and a width or height fixed along the direction of the unpinned side, according to the Components desired location in the app layout.

<img class="responsive-img" src="images/all_margins_nav.png" srcset="images/all_margins_nav@2x.png 2x" />

## Additional Resources

Related topics:

- [Input](components/input.md)
- [Bottom Navigation](components/bottom-nav.md)
- [Navbar](components/navbar.md)
- [Navigation Drawer](components/nav-drawer.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.


