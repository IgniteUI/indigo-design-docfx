---
title: Layout Generation 
_description: Explanation of how the Sketch layout and resizing translates to generated code and behavior.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Layout Generation

## Selecting an Artboard or Group for Code Generation

For each selected Artboard or Group, a single Angular Component is created. Each created component uses [Angular Reactive Forms](https://angular.io/guide/reactive-forms).
Only Artboards or Groups may be selected for code generation. 99% of the time, the developer will select one or more groups from an Artboard to generate components for.
The reason a whole Artboard is rarely selected for code generation is that Sketch designs typically have chrome around a form, this same chrome is repeated for each Artboard. The application chrome is created once by the developer when architecting their application. The chrome has complex interactions that provide navigation and other essential application services.

The below two images are examples of what a developer will select for code generation.

In the below image the developer selects the Sketch Group `peopleEdit` for code generation. The other elements are chrome used by the designer to show the application and components in context.

<img class="responsive-img" src="../images/layout_codegen_people1.png" />

In the below image the developer will select the Sketch Groups `peopleList` and `peopleDetails` for code generation, ignoring the navigation chrome elements.

<img class="responsive-img" src="../images/layout_codegen_people2.png" />

### Component Sizing

> [!Note]
> Artboards in Sketch do not have fixed height or fixed width settings so this section on Component Sizing only applies to a Component within a Group that has been selected for code generation.

When a Group is selected for component code generation and the Components inside have a fixed height and or a fixed width, those fixed size values will be added to the generated component CSS.
Normally Angular components are sized or resized by their parent at runtime. However, there are design scenarios where the designer wants the component to be a fixed size element when added to the Angular application. Code generation supports this design scenario.

## Sketch Element Names

Code generation requires each element in the Sketch Layer List to have a name. Any element without a name will be skipped and not processed. This includes all of the skipped element's children as well.

## Layouts

Sketch arranges artboards of projects through absolute positioning, using properties such as Top, Left, Width and Height. Often these designs have to represent fluid and responsive applications. Most web applications built from such designs use modern paradigms such as flex and grid display containers. The job of the Code generation is to get as close as possible to the application, a developer will build from a given design. This requires the Code generation to go through a set of heuristics and based on them to produce fluid design from the absolute/static one that was created in Sketch.

Code generation reads Sketch files and uses the layout properties defined by native Sketch schema. Please be aware, if a 3rd party Sketch plugin is used to create and maintain the Sketch drawing layout, they typically have their own set of properties that code generation is not aware of and will not use when creating the HTML and CSS.
Code generation respects and uses Sketch groups when creating the layout. Code generation renders HTML CSS that uses [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Flexbox lays out elements in either a column or row.
Sketch container elements such as a group or an artboard are rendered as divs with flex CSS applied to them.

### How it works
Main idea of building responsive layout is to combine the components into groups. This creates a structure, thats expected from the developer. From Code generation point of view,and because of the Flexbox, these groups can contain either rows or columns. After the layout is created components are placed in a hierarchy of rows and columns depending on their positions relative to other components and their respective Sketch groups.

In short, the algorithm starts by creating a row for the first component and stores in it the components, considered to be part of that row (laying on the same X axis as the row). Once it exhausts the components in the artboard and creates all the rows for them, it uses the same principle, but for columns. For each of these rows creates columns, the components become part of the same column if they are are on the same Y axis.
It repeats rows and columns until there is no need to create more groups.

<img class="responsive-img" src="../images/layout_codegen_structure.png" />

The fluid layout is in a tree structure. The branches and the root are rows and columns, the leafs are components.

## Heuristics and rules
In order to be properly adjust the elements in HTML, the Code generation applies heuristics and rules to get responsive design from statically positioned elements.

<img class="responsive-img" src="../images/layout_codegen_responsive.gif" />

> [!Note]
> Conversion to fluid design can not guarantee pixel perfect outcome or HTML and CSS as a developer will write it. For some designs the components or generated groups(rows/columns) may appear displaced. The users should do a review of the generated code and apply changes if needed.

> [!Note]
> If the designer wants to ensure some components to be part of of one group(row or column), he should put them in a group in Sketch. Groups in Sketch will be respected.

### Navigation menu components
The Navbar, NavDrawer, Bottom Navigation require special handling. These elements typically represent root level menus. When building the layout these special case components are "moved" at the end of the group, this will make them appear on top of other elements(if there are overlaps).

### Overlaps
Code generation finds elements that overlap each other. Elements that are partially or fully on top of others are also removed from further heuristics and receive absolute positioning with an appropriate z-index. In addition, overlapping elements are grouped together to ensure the upper element overlaps the element bellow into the new fluid layout as it is in the design from Sketch. Typical example of this is an avatar with a badge.

<img class="responsive-img" src="../images/layout_codegen_overlap.png" />

### Backgrounds
Sketch shapes are often user to represent a background for groups or portions of the page. Code generation creates HTML container elements, usually DIVs, for them and puts all fully contained child elements inside that DIV. This applies to specific shapes only. There should be elements over them and completely into their boundaries. Currently only simple shapes(rectangles and ovals) without images are used for creating background containers.

<img class="responsive-img" src="../images/layout_codegen_background.png" />

### Pinned elements
Sketch allows pinning elements to their parents and Code generation handles pinned elements in a specific way.
  - Having right or bottom pin to an element applies absolute position and the according margin to that element.
  - Left or top pins are ignored and those elements are included to the layout groups as if they don't have pins.
  - Opposite pins(left and right/top and bottom) are discarded and not taken into account. The assumption behind the rule is that elements with opposite pins should be stretched instead of having margins applied from those sides. For example, left and right pins to an element will be handled the same way as if the element doesn't have pins. The idea here is to stretch the element not to apply margins from both opposite sides.

### Percentage-based size
Elements receive fluid (percentage-based) width and height. The proportion ratio in their group is maintained, unless they are explicitly set as fixed-sized in Sketch.

### Dialog, Toast, Tooltip
The Dialog, Toast, and Tooltip show on top of the content via overlay so they, by design, belong to a higher z-index level. The Code generation excludes them from the default mechanism of creating rows and columns. They receive a higher z-index and are not considered in justification or alignment rules for the group.

The Dialog, Toast, and Tooltip all have one thing in common, they are all appear in the UI dynamically using code.
Since these are not normally visible until programmatically shown in the UI, they are not normally shown in the Sketch drawing unless the designer is showing the Artboard in a state where one of these is displayed.
To solve the disconnect between designer’s requirements to show the Artboard in several states, and the developer only code generating the component once, the following guidance should be followed.
Add the required Dialog, Toast, and Tooltip to the drawing, configure them as you will any other element, then hide them as below. This form is the one the developer selects to generate code.
The hiding of element in the object panel has no effect on code generation, code generation generates all elements here, hidden or not.
Dialog, Toast, and Tooltip elements are placed at the bottom of the components HTML and not mixed in with other elements as they have dynamic runtime placement when brought into view.

<img class="responsive-img" src="../images/layout_codegen17.png" />

The below image is an example of a designer state drawing, this drawing should not be used for code generation as it has an extra color element to simulate the gray overlay that the Dialog will place at runtime.

<img class="responsive-img" src="../images/layout_codegen18.png" />

### Positioning Layouts
Layout position is relative to their parent. During layout building if a group has one child, then the group takes the dimensions of the child (position and size). The child assumes position (0,0) relative to its parent. When a new child needs to be included to a group it may affect the dimensions of the group, if this is the case then all other children in the group are going to be updated.

If a group remains with one child, the structure is optimized and the group is omitted.

### Group size
  - Columns - the width of a column represents the width of its children. For the height the column fully fills the vertical space determined by its parent.
  - Rows - the height of a row represents the height of its children. For the width the row fully fills the horizontal space determined by its parent.

> [!Note]
> Additional paddings/margins are applied after justification is resolved based on the justification type.

### Justification and alignment
Rows receive `row` value for `flex-direction` css property and columns receive `column`.

Code generation matches the most appropriate value for `justify-content` property in css. Using the position and size of the elements in a group, the whole group can justify its elements in the beginning, at the end, center them, etc.
The decision maker here is the space between the children and the edges of the parent.
Moreover, the code generation tries to determine the most suitable value for `align-items` css property on the counter axis.

Example would be if the items in a group are horizontally and vertically centered, then `justify-content` is `center` and `align-items` is `center`.
<img class="responsive-img" src="../images/layout_codegen_justification.png" />

### Padding and margin
Padding and margin is applied based on the resolved justification type as follows:

  - flex-start - Padding-left is applied to cover any space between the parent and first child. Margin is applied to cover any inner space between the sibling elements.
  - flex-end - Padding-right is applied to cover any space between the parent and last child. Margin is applied to cover any inner space between the sibling elements.
  - center - Margin is applied to cover any inner space between the sibling elements.
  - space-between - Padding-left and Padding-right is applied to cover any space between the parent and first/last child. Inner spaces is covered fully by the justification so no margin are needed.
  - space-around/space-evenly - All spaces are covered (both start/end and inner spaces) so no padding or margin are needed.

## Limitations

For this release of Code Generation, native Sketch objects such as vector, mask, pencil, complex shape, etc. are bypassed and not generated. This includes the new Text Styles feature of Sketch 5.1, these elements will be bypassed and not generated.
Only styles applied via the Indigo.Design plug-in are supported. All other custom styles applied on specific components are ignored.
Designers should use elements from the Indigo.Design library only.
Sketch Image is supported. The image will be rendered with a fixed height and width of the image in Sketch. 

## Additional Resources

External Links:

- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)

Our community is active and always welcoming to new ideas.


