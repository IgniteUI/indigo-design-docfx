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
> Artboards in Sketch do not have fixed height or fixed width settings so this section on Component Sizing only applies to a Component withing a Group that has been selected for code generation.

When a Group is selected for component code generation and the Components inside have a fixed height and or a fixed width, those fixed size values will be added to the generated component CSS.
Normally Angular components are sized or resized by their parent at runtime. However, there are design scenarios where the designer wants the component to be a fixed size element when added to the Angular application. Code generation supports this design scenario.

### After Component Code Generation – Before Rendering in The Browser

Developers need to perform the following edits of generated components before rendering in the browser:

- If the HTML has formControlName elements, the formGroup comment under the `<form>` tag must be uncommented: `<!-- [formGroup]="customerForm" -->`
- In the TypeScript, check for `<!-- // TODO – uncomment-->` and uncomment the FormGroup comment if you have one.
- In the TypeScript, check the `ngOnInit` method and uncomment the form code.

## Sketch Element Names

Code generation requires each element in the Sketch Layer List to have a name. Any element without a name will be skipped and not processed. This includes all of the skipped element's children as well.

## Layouts

Layouts are rendered with absolute position and sizes. Each component has its own position (left, top) and size (width, height) that determine how it will be rendered on the page.


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


