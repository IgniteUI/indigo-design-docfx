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

The below two images are examples of what a developer would select for code generation.

In the below image the developer would select the Sketch Group `peopleEdit` for code generation. The other elements are chrome used by the designer to show the application and components in context.

<img class="responsive-img" src="../images/layout_codegen_people1.png" />

In the below image the developer would select the Sketch Groups `peopleList` and `peopleDetails` for code generation, ignoring the navigation chrome elements.

<img class="responsive-img" src="../images/layout_codegen_people2.png" />

### Component Sizing

> [!Note]
> Artboards in Sketch do not have fixed height or fixed width settings so this section on Component Sizing only applies to a Component within a Group that has been selected for code generation.

When a Group is selected for component code generation and the Components inside have a fixed height and or a fixed width, those fixed size values will be added to the generated component CSS.
Normally Angular components are sized or resized by their parent at runtime. However, there are design scenarios where the designer wants the component to be a fixed size element when added to the Angular application. Code generation supports this design scenario.

## Sketch Element Names

Code generation requires each element in the Sketch Layer List to have a name. Any element without a name will be skipped and not processed. This includes all of the skipped element's children as well.

## Layouts

Code generation reads Sketch files and uses the layout properties defined by native Sketch schema. Please be aware, if a 3rd party Sketch plugin is used to create and maintain the Sketch drawing layout, they typically have their own set of properties that code generation is not aware of and will not use when creating the HTML and CSS.
Code generation respects and uses Sketch groups when creating the layout. Code generation renders HTML CSS that uses [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Flexbox lays out elements in either a column or row.
Sketch container elements such as a group or an artboard are rendered as divs with flex CSS applied to them.

Sketch arranges artboards of projects through absolute positioning, using properties such as Top, Left, Width and Height. Often these designs have to represent fluid and responsive applications. In most of the cases web applications built from such designs use modern paradigms such as flex and grid display containers. This requires the Code generation to go through a set of heuristics and based on them to produce fluid design from the absolute/static one that was created in Sketch.

### Main Principle
Main idea of building the layout is to combine the components into groups. From Code generation point of view,and because of the Flexbox, these groups should be rows or columns. And after the layout is created, the components can end up into an hierarchy of rows and columns depending on their positions and Sketch groups.

In short, the algorithm starts by creating a row for the first component and stores in it the components, considered to be part of that row (laying on the same X axis as the row). Once it exhausts the components in the artboard and creates all the rows for them, it uses the same principle, but for columns. For each of these rows creates columns, the components become part of the same column if they are are on the same Y axis.
It repeats rows and columns until there is no need to create more groups.

The fluid layout is in a tree structure. The branches and the root are rows and column, the leafs are components.

### Heuristics and rules
In order to be properly adjust the elements in HTML, the Code generation applies heuristics and rules to get as close as possible to the expected design.
> [!Note]
> Conversion to fluid design can not guarantee pixel perfect outcome or HTML and CSS as a developer would write it. For some designs the components or generated groups(rows/columns) may appear displaced. It is expected from the user to review the generated code and apply changes if needed.
> [!Note]
> If the designer wants two components to be part of of one group(row or column), he should group them in Sketch.

1. Navigation menu components:
  - Navbar
  - NavDrawer
  - Bottom Navigation

These elements typically represent root level menus. When building the layout these special case components are "moved" at the end of the group, this will make them appear on top of other elements(if there are overlaps).

2. Overlay components:
  - Dialog
  - Snackbar
  - Toast
  - Tooltip

These elements show on top of the content via overlay so they, by design, belong to a higher z-index level. The Code generation excludes them from the default mechanism of creating rows and columns. They are going to be with a higher z-index and not considered in justification or alignment into the group.

3. Code generation finds elements that overlap each other. Elements coming partially or fully on top of others are also removed from further heuristics and are given absolute positioning with appropriate z-index.

4. Elements (e.g. shapes) that map to containers (e.g. div-s) that fully contain other elements become their parents. Additional rules are applied to ensure this rule covers only scenarios that have these shapes used as containers. Currently only simple shapes(rectangles and ovals) without images are used for this rule.

5. Sketch allows pinning elements to their parents and Code generation handles pinned elements in a specific way.
  - Having right or bottom pin to an element applies absolute position and the according margin to that element.
  - Left or top pins are ignored and those elements are included to the layout groups as if they don't have pins.
  - Opposite pins(left and right/top and bottom) are discarded and not taken into account. For example left and right pins to an element will be handled the same way as if the element doesn't have pins. The idea here is to stretch the element not to apply margins from both opposite sides.

6. Elements receive fluid (percent) based width and height based on the relative space they take in their group unless they are explicitly set as fixed-sized in Sketch.

## Dialog, Toast, Snackbar

The Dialog, Toast, and Snackbar all have one thing in common, they are all shown in the UI dynamically using some form of TypeScript.
Since these are not normally shown until programmatically shown in the UI, they would not normally be shown in the Sketch drawing unless the designer was showing the Artboard in a state where one of these would be displayed.
To solve the disconnect between designer’s requirements to show the Artboard in several states, and the developer only code generating the component once, the following guidance should be followed.
Add the required Dialog, Toast, and Snackbar to the drawing, configure them as you would any other element, then hide them as below. This form would be the one the developer would select to code generate.
The hiding of element in the object panel has no effect on code generation, code generation will generate all elements here, hidden or not.
Dialog, Toast, and Snackbar elements will be placed at the bottom of the components HTML and not mixed in with other elements as they have dynamic runtime placement when brought into view.

<img class="responsive-img" src="../images/layout_codegen17.png" />

The below image is an example of a designer state drawing, this drawing should not be used for code generation as it has an extra color element to simulate the gray overlay that the Dialog would place at runtime.

<img class="responsive-img" src="../images/layout_codegen18.png" />

## Limitations

For this release of Code Generation, native Sketch objects such as vector, mask, pencil, complex shape, etc. are bypassed and not generated. This includes the new Text Styles feature of Sketch 5.1, these elements will be bypassed and not generated.
Only styles applied via the Indigo.Design plug-in are supported. All other custom styles applied on specific components are ignored.
Designers should use elements from the Indigo.Design library only.
Sketch Image is supported. The image will be rendered with a fixed height and width of the image in Sketch. 

## Additional Resources

External Links:

- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)

Our community is active and always welcoming to new ideas.


