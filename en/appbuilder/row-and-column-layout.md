## Row and column layout 

Flex-layout containers have settings that allow us to modify the position of the nested UI elements. It's shown here as h.align and v.align properties. The canvas defaults to row layout, horizontally aligned to the left and stretched vertically. You can always switch between row and column layout irrespective of what you started with.  

  

In this example, we want the sign in dialog to be centered on the canvas. To make that happen, I can use the alignment settings to center the nested container vertically and horizontally on the canvas. For the dialog itself, I've used a column layout so that everything stacks vertically inside it. The layout container is sized based on the content, but you can always specify a height and width. I'll can also add the padding property to container, and margins to space out the child UI elements. 

  

While we are at it, you can always select the parent UI element by clicking on the label for the child element. This is helpful when you have nested layout containers. As you can see, there is nested row layout to show the text component and switch side-by side. And this lives inside a column layout. So, clicking on the row-layout label will select its parent column layout.