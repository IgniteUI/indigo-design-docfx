---
title: Layout Generation 
_description: Explanation of how the layout and resizing translates to generated code and behavior.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Figma, XD, Ignite UI for Angular, Sketch to Angular, Figma to Angular, XD to Angular, Angular, Angular Design System, Export code from Sketch, Export code from Figma, Export code from XD, Design Kits for Angular, Sketch HTML, Figma to HTML, XD to HTML, Sketch UI kits, Figma UI kits, XD UI kits
---

# Layout Generation

This topic provides information on how layout and resizing translates from one of the supported tool(Figma, Sketch, XD) designs to generated code.

Each design tool provides a unique way of configuring the positions and sizes of elements in the view. Each layout can have either a Absolute Layout or a Responsive Layout and configuration is specific to the tool.

For more information on the design layout type refer to the [Layouts Best Practices](../best-layout-practices.md) topic.

## Responsive Layout Generation Rules

Making a responsive layout design is specific to each tool and you can find more information in their related topics:

  - [Responsive layouts in Figma](../best-layout-practices-figma.md)
  - [Responsive layouts in Sketch](../best-layout-practices-sketch.md)
  - [Responsive layouts in XD](../best-layout-practices-xd.md)
  
As with this approach there's more available information from the design on how things should react to resize it would always give generation results closer to the original design.

## Absolute Layout Generation Rules

In many cases designs position elements with static/absolute positioning, using fixed values such as Top, Left, Width and Height. Often these designs have to represent fluid and responsive applications. Most web applications built from such designs use modern paradigms such as flex and grid display containers. The job of the Code Generation is to get as close as possible to the application, a developer will build from a given design. The Code Generator applies a set of heuristics to produce fluid design from the absolute/static one in Sketch.

Code Generator reads design files and uses the layout properties defined by native tool's schema. Please, note that 3rd party plugins, used to create or maintain the drawing layout typically have their own set of properties. The Code Generator is not aware of these properties and would not be used when creating the HTML and CSS.

Code Generator respects and uses groups when creating the layout. Code Generator renders HTML and CSS that uses [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Flexbox lays out elements in either columns or rows.

Elements such as groups or frames/artboards are rendered as divs with flex CSS applied to them.

### How it works
The idea behind building a responsive layout is to combine the components into groups. This creates a structure that is closer to what the developer expects. These groups use Flexbox rules and are made of either rows or columns thus the layout is represented by a hierarchy of rows and columns containing all elements based on their positions relative to each other and their respective groups.

The algorithm starts by creating a row for the first component and stores in that row all the components positioned on the same X-axis. Once all the components on the frame/artboard are orginized in rows, then the same principle is used, to arrange them in columns. Components become part of the same column if they are positioned on the same Y-axis. The process alternates between rows and columns until no further grouping is needed.


<img class="responsive-img" src="../images/layout_codegen_structure.png" />

The fluid layout is in a tree structure. The branches and the root are rows and columns, the leaves are components.

## Heuristics and rules
In order to transform the elements in HTML properly, the Code Generator applies heuristics and rules to produce responsive web design from statically positioned elements.

<img class="responsive-img" src="../images/layout_codegen_responsive.gif" />

> [!Note]
> The conversion to fluid application design cannot guarantee pixel perfect outcome. For some designs, the components or generated groups (rows/columns) may appear displaced. Users should review the generated code and apply changes as needed.

> [!Note]
> If the designer wants to ensure some components are part of the same group (row or column), he should group them. The Code Generator respects these groups.

### Navigation menu components
Navbar, NavDrawer and Bottom Navigation require special handling. These elements typically represent root level menus. When building the layout these special-case components are "moved" at the end of the group. This makes them appear on top of other elements (if there are overlaps).

### Overlaps
The Code Generator identifies elements that overlap each other. Elements that are partially or fully on top of others are removed from further heuristics and receive absolute positioning with an appropriate z-index. In addition, overlapping elements are grouped together to ensure the upper element stays on top in the new fluid layout. In that way if applications responsiveness is applied, the design is not be changed, regardless of the viewport size. Typical example of this is an avatar with a badge.

<img class="responsive-img" src="../images/layout_codegen_overlap.png" />

### Backgrounds
Shapes are often used to represent a background for groups or portions of the page. The Code Generator creates HTML container elements, usually DIVs, for them and stores all fully contained child elements inside these containers. This applies to specific shapes only. There should be elements over them and completely into their boundaries. Currently only simple shapes (rectangles and ovals) without images are used for creating background containers.

<img class="responsive-img" src="../images/layout_codegen_background.png" />

### Pinned elements
Pinning elements to their parents and the Code Generator handles these using the following rules:

- Having right or bottom pin to an element applies absolute position and the corresponding margin to that element.
- Left or top pins are ignored and these elements are included to the layout groups as if they did not have pins.
- Opposite pins (left and right/top and bottom) are discarded and not taken into account. The assumption behind the rule is that elements with opposite pins should be stretched instead of having margins applied. For example, left and right pins to an element are handled the same way as if the element did not have pins.

### Percentage-based size
Elements receive fluid (percentage-based) width and height. The proportion ratio in their group is maintained, unless they are explicitly set as fixed-sized.

### Dialog, Toast, Tooltip
Dialog, Toast, and Tooltip show on top of the content via overlay so they, by design, belong to a higher z-index level. The Code Generator excludes them from the default mechanism of creating rows and columns. They receive a higher z-index and are not considered in justification or alignment rules for the group.

The Dialog, Toast, and Tooltip components have another thing in common. They all appear in the UI dynamically using code. Since these are not normally visible until programmatically shown, they are usually not shown in the design unless the designer is creating an frame/artboard for their open state. To solve the disconnect between the designer’s requirements to show the view in several states, and the developer only code generating the component once, the following guidance should be followed. Add the required Dialog, Toast, and Tooltip to the drawing, configure them, as you will any other element, then hide them as below. This form is the one the developer selects to generate code. Hiding elements in the object panel has no effect on Code Generator, it generates all elements here, hidden or not. Dialog, Toast, and Tooltip elements are placed at the bottom of the components HTML and not mixed in with other elements as they have dynamic runtime placement when brought into view.


<img class="responsive-img" src="../images/layout_codegen17.png" />

The below image is an example of a designer state drawing, this drawing should not be used for code generation as it has an extra color element to simulate the gray overlay that the Dialog will place at runtime.

<img class="responsive-img" src="../images/layout_codegen18.png" />

### Positioning Layouts
Layout position is relative to their parent. During layout building if a group has one child, then the group takes the dimensions of the child (position and size). The child assumes position (0, 0) relative to its parent. When a new child needs to be included in group it may affect the dimensions of the group, if this is the case then all other children in the group are going to be updated.

If a group remains with one child, the structure is optimized and the group is omitted.

### Group size
  - Columns - the width of a column represents the width of its children. For the height, the column fully fills the vertical space determined by its parent.
  - Rows - the height of a row represents the height of its children. For the width, the row fully fills the horizontal space determined by its parent.

> [!Note]
> Additional paddings/margins are applied after justification is resolved based on the justification type.

### Justification and alignment
Rows receive `row` value for `flex-direction` css property and columns receive `column`.

Code generation identifies the most appropriate value for `justify-content` property in css. Using the position and size of the elements in a group the whole group can justify its elements in the beginning, at the end, center them, etc. The decision maker here is the space between the children and the edges of the parent. The code generator also tries to determine the most suitable value for `align-items` css property on the counter axis.

Example would be if the items in a group are horizontally and vertically centered, then `justify-content` is `center` and `align-items` is `center`.
<img class="responsive-img" src="../images/layout_codegen_justification.png" />

### Padding and margin
Padding and margin are applied based on the resolved justification type as follows:

  - flex-start - Padding-left is applied to cover any space between the parent and first child. Margin is applied to cover any inner space between the sibling elements.
  - flex-end - Padding-right is applied to cover any space between the parent and last child. Margin is applied to cover any inner space between the sibling elements.
  - center - Margin is applied to cover any inner space between the sibling elements.
  - space-between - Padding-left and Padding-right is applied to cover any space between the parent and first/last child. Inner spaces are covered fully by the justification so no margin is needed.
  - space-around/space-evenly - All spaces are covered (both start/end and inner spaces) so no padding or margin are needed.


### Component Sizing

When elements have fixed height and or a fixed width, those fixed size values will be added to the generated component CSS.
Normally the parent of Angular components is responsible for their sizing or resizing at runtime. However, there are design scenarios where the designer wants the component to be a fixed size element when added to the Angular application. Code Generation supports this design scenario.

### Feature components
In some cases the related component may be outside of the current layer (not necessarily a sibling) and needs to intersects the current layer.
For example `Grid Features/Column Moving` can be placed on top of a grid to column moving for that grid, as shown bellow:

<img class="responsive-img" src="../images/layout_codegen_ext_comps.png" />

Note that all of these grid features cannot be used separately and require a grid to have effect. The same applies to the TimePicker/DatePicker, it needs TimePicker/DatePicker Input in order for it to add features to the related component.(If you'd like to have only DatePicker or TimePicker as a separate component, you may want to use the Calendar)


## Limitations

### Sketch

- For the current release of Code Generator, native Sketch objects such as vector, mask, pencil, complex shape, etc. are bypassed and not generated. This includes the new Text Styles feature of Sketch 5.1, these elements will be bypassed and not generated.
- Only styles applied via the Indigo.Design plug-in are supported. All other custom styles applied on specific components are ignored.
- Designers should use elements from the Indigo.Design library only.
- Sketch Image is supported. The image will be rendered with a fixed height and width of the image in Sketch. 

## Additional Resources

External Links:

- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)

Our community is active and always welcoming to new ideas.


