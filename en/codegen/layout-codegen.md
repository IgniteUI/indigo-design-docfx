---
title: Layout Generation 
_description: Explanation of how the Sketch layout and resizing translates to generated code and behavior.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# Layout Generation

## CSS CLass Names

When code generation is creating CSS class names, it uses the name of the Sketch element that the CSS is being applied to as CSS name. _Having meaningful names in the Sketch drawing for elements will make it much easier for the developer to understand and modify the HTML and CSS that is generated._ If names are left as the default name provided by Sketch, the CSS will be very difficult for the developer to work with.
If duplicate names are used, and CSS class names are required for those elements, a number will be added to the name to generate a unique CSS name. For example, if the drawing has three groups named “row” and those groups required CSS to be generated, the name of the first group’s CSS would be “row”, the second would be “row-1”, the third “row-2” and so forth.
The case of the name is used to split the name into words separated by a dash. See the below examples of the generated CSS class names.

| Element Name | Generated CSS Class Name |
| ------------ | ------------------------ |
| Save         | save                     |
| SAVE         | save                     |
| FirstName    | first-name               |
| firstname    | firstname                |
| First Name   | first-name               |

## Ignite UI Theme Created Div’s

In Angular, when a component has nested child components, the local CSS values in the parent component cannot be directly applied to a child component. To get around this, Angular provides a solution which requires that child components be wrapped in their own div and the CSS be applied to that wrapper div.
Code generation will wrap Ignite UI components in a div when theme colors or fonts are being specified. This allows code generation to leverage the default palette set up by the developer for the project. [Ignite UI Theming](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/index.html) makes it very easy for the project to take on new branding simply by changing the color palette.

## Layout Grouping

Code generation reads Sketch files and uses the layout properties defined by native Sketch schema. Please be aware, if a 3rd party Sketch plugin is used to create and maintain the Sketch drawing layout, they typically have their own set of properties that code generation is not aware of and will not use when creating the HTML and CSS.
Code generation respects and uses Sketch groups when creating the layout. Code generation renders HTML CSS that uses [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Flexbox lays out elements in either a column or row.
Sketch container elements such as a group or an artboard are rendered as div’s with flex CSS applied to them.

Please see the [Best Layout Practices](best-layout-practices.md) for getting _predictable layout_ from code generation. This guidance explains many layout scenarios Sketch designers create every day. The guidance helps to reduce the friction between Sketch layout requirements and HTML CSS layout. The purpose of this guidance is to explain how code generation processes the Sketch file layout.
Sketch designers can group elements to get the Sketch and code generation behavior they require.
For each container element (Artboard or Group) code generation sorts all child elements by their Y axis value and then their X axis value. For each Group that is a child of an Artboard or a Group, the same processing will occur for that Group.
Sorting by the Y axis allows code generation to group elements with the same or similar Y axis value into Flexbox rows. “Same or similar Y axis value” means elements that intersect each other on the horizontally axis.
In the below drawing, the two “Row A” buttons demonstrate this. The two “Row B” buttons are another example. The below drawing will yield HTML with three div’s. One parent div, one child div for “Row A”, and one child div for “Row B.” No div will be created for “Row C” because there is only one child in the row, so there is no reason to create an additional div.

<img src="../images/layout_codegen1.png" />

In the below image, two groups (div’s) will be dynamically generated, one for the city, state, and zip, and one of the two buttons. Since name is the only child on the row, it no div will be created.
Since their parent is the artboard (a parent could also be in a single group as well), when creating the CSS class names for the generated div’s, the parent name will be used to derive the CSS class names. Given the below example, the city, state, and zip group CSS name will be “form” and the buttons group will be named “form-1”.

<img src="../images/layout_codegen2.png" />

If elements are grouped in a Sketch drawing as below, code generation will apply the same layout group process to each group. In the below image, each element within each group has the same or similar Y axis value and will rendered in the save div, one div for Address and one div for Buttons.

<img src="../images/layout_codegen3.png" />

In the below image, the Buttons group has three buttons, two have the same or similar Y axis values and one that is positioned below them. Code generation will create a Buttons div, will create a div for the CANCEL and SAVE buttons, and will render the DELETE button as a child of the Buttons div.

<img src="../images/layout_codegen4.png" />

## Generated HTML

Every attempt is made to generate CSS that can be understood and modified.
Code generation creates HTML div’s for two independent reasons:

- To group elements in either a column or row for Flexbox layout
- To apply theme CSS to a nested child component

This is the source Sketch drawing that was used to generate the HTML and CSS in the image below this one.

<img src="../images/layout_codegen5.png" />

In the below image, the first two div’s are layout div’s, and the ones wrapping the buttons are the Ignite UI Theming div’s

| Div Class Name | Purpose                                                                                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actions        | Is the first created div. This nested div was dynamically created to layout the Cancel and Save button in a flex row.                                                                                                                               |
| cancel         | Provides Theme CSS for the Cancel button.                                                                                                                                                                                                           |
| save           | Provides Theme CSS for the Save button.                                                                                                                                                                                                             |
| delete         | Provides Theme CSS for the Delete button.                                                                                                                                                                                                           |
| actions-1      | This is the last CSS class name created, hence the “-1” after the name. This div was created because of the Sketch “Actions” group element. This group becomes a parent div for its children and renders then according the above layout procedure. |

```html
<div class="actions-1">
    <div class="actions">
        <div class="cancel">
            <button igxRipple igxButton="raised">CANCEL</button>
        </div>
        <div class="save">
            <button igxRipple igxButton="raised">SAVE</button>
        </div>
    </div
    <div class="delete">
            <button igxRipple igxButton="raised">DELETE</button>
        </div>
</div>
```

## Height

## Additional Resources

Related topics:

External Links:

- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
