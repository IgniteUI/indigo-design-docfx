---
title: Creating Your First Frame in Figma
_description: How to create a frame with Figma UI Tool.
_keywords: Design Systems, UI Kits, Figma
---

# Creating Your First Frame in Figma

At the end of this topic, you'll have a Figma Frame for a registration screen using the Indigo.Design System. If you use Adobe XD for design, then jump to [this topic](creating-artboard-adobexd.md). If you use Sketch for design, then jump to [this topic](creating-artboard-sketch.md).

<img class="box-shadow" src="images/figma-frame/getting-started-figma1.png" />

## What you need
If the [Titillium Web Font](https://fonts.google.com/specimen/Titillium+Web) isn't installed on your computer, please do it before starting. All texts in the Indigo.Design System use it.

## Step by step

### 1. Use the Indigo.Design System in Figma.

- Get the Indigo.Design UI kit from the Figma Community by using the search and click on the Open in Figma blue button to duplicate the file.

The Indigo.Design UI kit comprises pages organized into four sections:

<img class="box-shadow" src="images/figma-frame/getting-started-figma2.png" />

**Intro section:** This section includes the cover of the Indigo.Design UI kit, a "Getting Started" page that provides a deeper understanding of how the components function and are constructed, and a "What's New" page that serves as a changelog for all releases of the Indigo.Design UI kit.

**Foundation section:** This section contains all the essential styling assets, including Material Icons, Colors, Typography, Elevation, and Illustrations, organized across five dedicated pages.

**Components section:** This section features an extensive collection of components for laying out your design ideas. They can be conveniently accessed through the Assets panel (see 2. below) or can be copied directly from this section. Each component comes with various properties that can be customized to fit specific use case scenarios. By utilizing these components and the Indigo.Design Figma Plugin, you can create designs that can be quickly converted into production-ready code for Angular, Blazor, or Web Components using the Indigo.Design App Builder.

**Patterns section:** This section features couple of hundred patterns laid out from the components to streamline your app design process.

- Move the Indigo.Design UI kit from “Drafts” to your project. Click on the arrow next to the file’s name and select “Publish library” from the options. In the dialog click the “Publish” button to share the library with your team members within the specific team project space.
getting-started-figma3@2x, getting-started-figma3.png

<img class="box-shadow" src="images/figma-frame/getting-started-figma4.png" />

### 2. Create a Frame
In Figma go to your project and create a new file. Select the Frame size by pressing the F key and select an iPhone 14 from the panel on the right. This will give you a Frame in the middle in portrait orientation (390x844).

<img class="box-shadow" src="images/figma-frame/getting-started-figma5.png" />

### 3. Add and customize components 
To incorporate components from the Indigo Design Library and customize them, use the Assets panel on the left and the Properties panel on the right. First, click on the Assets tab, followed by the Team Library button icon. In the newly opened dialog under "Your teams," toggle the Indigo.Design UI kit on.

<img class="box-shadow" src="images/figma-frame/getting-started-figma6.png" />

These are the steps to recreate the screen in this example.

#### 1. Add the Navbar
1. Press Shift + I to open Resources in the Toolbar and search for the Navbar.
2. Drag and drop the Navbar to the top of the frame, stretching it to occupy the entire available width.
3. In the Layers panel on the left side, locate the “Left Group” and hide the "Left Action" frame that’s inside it. Next, hide "1|Icon", "2|Icon", and "3|Icon" within the "Right Group" frame. Finally, change the title to "Sign Up."

<img class="box-shadow" src="images/figma-frame/getting-started-figma7.png" />

#### 2. Add the Background.
1. The best way to create a background in Figma is to directly apply it to the Fill of the frame. To do this, select the iPhone 14 frame and go to Fill on the right panel. Click on “Style” button icon and choose Primary/primary.100.
2. Create another frame, which covers all the space below the Navbar and call it Content.

<img class="box-shadow" src="images/figma-frame/getting-started-figma8.png" />

#### 3. Add the background for the form.
1. Press the F key and drag a frame with size 280x370 inside the content frame we just created.
2. Choose Special/white for the Fill of the frame.
3. Position it in the center of the iPhone 14 frame.

<img class="box-shadow" src="images/figma-frame/getting-started-figma9.png" />

#### 4. Add the title of the form.
1. Press the T key to insert a text element within the white frame and type "Start Budgeting."
2. Apply the "Heading/H4 Headline" typography style from the Text section in the right panel. Set the alignment to "center" and position the text at the top of the frame with 16px spacing from the top and equal spacing on the left and right sides. For the text Fill color, select the Grays/Light/grays.900 style.

<img class="box-shadow" src="images/figma-frame/getting-started-figma10.png" />

#### 5. Add the inputs for first and last name.
1. Press Shift + I to open Resources in the Toolbar and search for "Input." Drag it below the form title we just created.
2. In the Properties section in the right panel, under the component's name, select "Filled" for State.
3. Disable the Prefix Container and Suffix Container options.
4. Set the Label to "First Name" and the Placeholder to "Eliza."
5. Place it below the title. Leave 16px spacing on the left and top. 
6. Set its width to 116px.
7. Duplicate this input.
8. Place the new input to the right of the first one, with 16px spacing between the two.
9. Set its Label to “Last Name”, and Placeholder to “Morales”.

<img class="box-shadow" src="images/figma-frame/getting-started-figma11.png" />

#### 6. Add the inputs for username and password.
1. Duplicate one of the Name inputs twice to create two more inputs for Username and Password.
2. Place them one under the other with a vertical spacing of 16px between each other and to the ones from the previous step.
3. Stretch them across the full width with 16px spacing on both sides.
4. Set their labels to "Username" and "Password" and their Placeholders to "Leaellynasaura" and "************".
5. From the Layers panel select the Content Type component instance of the password input we’ve just created, then go to the component properties in the right panel. From the “Type” property select “Password”.


<img class="box-shadow" src="images/figma-frame/getting-started-figma12.png" />

#### 7. Add the sign up button.
1. Press Shift + I to open Resources in the Toolbar and search for “Button”.
2. Drag it below the inputs, choose “Contained” from the Type property in the right panel and stretch it across the full width leaving 16px on the left, right, and from the inputs above.
3. Disable the Left Icon and Right Icon from the button’s properties.
4. Set the Label to “SIGN UP” and change the text fill to Special/white style.
5. Set the background to Special/Info/info.500 style.

<img class="box-shadow" src="images/figma-frame/getting-started-figma13.png" />

#### 8. Add the terms acceptance text. 
1. Press the T key to add another text element below the button and type “By clicking on the “SIGN UP” button above, you accept our Terms of Use” in it.
2. Assign the “Other/Caption” style and set the color style to Grays/Light/grays.700
3. Change the text element’s width so that there is a 16px spacing on the left, right and above.

<img class="box-shadow" src="images/figma-frame/getting-started-figma14.png" />

#### 9. Make the frame responsive.
1. Select the "First Name" and "Last Name" input fields and press Shift + A. In the right panel, a new section called "Auto Layout" will appear. Set the Horizontal space between items to 16px if it's not already set. Then, select the two input fields again and change their Horizontal resizing to "Fill container."
2. To make the form responsive, click on the frame containing all form elements and press Shift + A again. If the previous steps were done correctly, the spacing and paddings in the Auto Layout panel should already be set to 16px. Align the items to the center and change the horizontal and vertical resizing of the form frame to "Fixed." Also, change the horizontal resizing of all elements inside to "Fill container."
3. Select the iPhone 14 frame and press Shift + A again. Choose Fixed width and height for it.
4. Select the Content frame again and choose "Fill container" for both horizontal and vertical resizing. In the Auto Layout section, set the alignment of the elements to the center.
5. Select the form frame again and change its horizontal resizing to "Fill container."
6. Select the Navbar and change its horizontal resizing to “Fill container” as well.


