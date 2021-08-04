---
title: Custom List Item in Sketch - Design System Component
_description: The List Items collection contains this special type of List Item that allows the creation of Custom layouts exactly how you would like them to be.
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

> [!NOTE]
> This topic is only relevant for users of the <b>Sketch Library</b>.

# Custom List Item in Sketch

Use the Custom List Item Component in Sketch to display the same type of information that you would in a normal List Item but with the complete freedom to arrange your layout exactly as you would like. The Custom List Item in Sketch is achievable by writing the necessary customizations to the layout of the items of the [Ignite UI for Angular List Component](https://www.infragistics.com/products/ignite-ui-angular/angular/components/list.html)

## Custom List Item in Sketch Demo

<img class="responsive-img" src="../images/list_item_custom_demo.png" srcset="../images/list_item_custom_demo@2x.png 2x" />

## State

The Custom List Item in Sketch supports the following interactive states: **inactive** for the normal state and active for the selected state.

<img class="responsive-img" src="../images/list_item_custom_inactive.png" srcset="../images/list_item_custom_inactive@2x.png 2x" />
<img class="responsive-img" src="../images/list_item_custom_active.png" srcset="../images/list_item_custom_active@2x.png 2x" />

## Using the Custom List Item in Sketch

In order to customize List Item layouts, start by dragging a `List/Custom/Item` to your artboard, right-clicking on top of it, and selecting the `Detach from Symbol` option near the bottom of the contextual menu. In your layers panel under the newly appeared _List/Custom/Item_ group, you should see the following:

| Layer                    | Use                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🚫 metadata  | A special locked layer starting with a prohibited icon. This layer is required by the code generation and you should avoid deleting or modifying it. |
| 💡Primary Action Group   | Groups together the Primary Action layout elements                                                                                                   |
| 💡Secondary Action Group | Groups together the Secondary Action layout elements                                                                                                 |
| 💡State                  | Contains the item Background and defines whether the List Item is in an active or inactive state                                                     |

### Styling

The Custom List Item in Sketch has high-level styling flexibility similar to the normal List Item with a few overrides for the Secondary Actions and control over their text, icons, and buttons colors. Just like every List Item, it is possible to specify the Item background color through the overrides, as well.

<img class="responsive-img" src="../images/list_item_custom_styling.png" srcset="../images/list_item_custom_styling@2x.png 2x" />

### Layout

So, let's see how we can create an intricate layout for the product List Item above in three simple steps. Once we have dragged in a Custom List Item in an empty Artboard, selected the `Detach from Symbol`, and applied the basic styling available by changing the background color inside the state, we should have something like this for a starting point.

<img class="responsive-img" src="../images/list_item_custom_layout0.png" srcset="../images/list_item_custom_layout0@2x.png 2x" />

1.  First, we have to remove the paragraph and footer. Then we will reuse the Header from the Primary Action Group but resize it to fit in the right half only and update the strings for the Title and Subtitle Text. In the Secondary Action Group, we will add a Raised Button, position it near the bottom right corner, updating its text and resize it accordingly to fit the new value. Lastly, let's remove the default Secondary Action, as we will not be needing Icons for our target custom layout.

    <img class="responsive-img" src="../images/list_item_custom_layout1.png" srcset="../images/list_item_custom_layout1@2x.png 2x" />

2.  Next, we will insert a List/Custom/Blocks/Image Content in the Primary Action Group and add a Badge on top of it within the same group. Now, we have to size the image according to the Item size and select content for it. After modifying the Badge, updating its Value Text, and setting its Elevation to None, we should have something similar to this.

    <img class="responsive-img" src="../images/list_item_custom_layout2.png" srcset="../images/list_item_custom_layout2@2x.png 2x" />

3.  In the last step, we will add a couple of Text/Title elements to the Primary Action Group: a larger H3 to display the price of the product and a smaller Body 1 to its right for complimentary text. After positioning them in the empty space between the Header and the Raised Button, we can make a final alignment adjustment to the Raised Button with which our target layout is complete.

    <img class="responsive-img" src="../images/list_item_custom_layout3.png" srcset="../images/list_item_custom_layout3@2x.png 2x" />

### Additional Styling

With this Custom List Item layout, a lot of additional styling is possible based on the elements that have been inserted in it. For example, we can set a color for the text of the pricing to emphasize it and change the Badge background and Raised Button background colors.

<img class="responsive-img" src="../images/list_item_custom_layout_styled.png" srcset="../images/list_item_custom_layout_styled@2x.png 2x" />

## Additional Resources

Related topics:

- [Badge](badge.md)
- [Button](button.md)
- [List](list.md)
- [List Item](list-item.md)
- [Lists Pattern](../patterns/lists.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
