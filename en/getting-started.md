---
title: Getting Started - Design System
_description: How to set up the Indigo Design Libraries and craft beautiful digital experiences with Sketch. 
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

## Getting Started

This topic describes the process of downloading and adding the Indigo Design Libraries into Sketch and how to craft your first design using and customizing the Components necessary for building a registration screen.

### Downloading and Adding the Libraries in Sketch

First, you will need to [Download the Indigo Design Sketch Libraries](TODO-add the link) to yours drive. You will get three Sketch files:

- Indigo-Styling - the library with all the styling assets such as [Colors](colors.md), [Elevation](elevation.md), [Material Icons](material-icons.md), and [Typography](typography.md). These will allow you to create your own custom themes and brand your designs in the most pleasing and aesthetic way possible.
- Indigo-Components - the library containing a vast set of Components to layout your intricate design ideas and eventaully, after a few design iterations, generate code assets from. Through the overrides section you can choose from numerous presets compatible with [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular) and our code generation engine.
- Indigo-Patterns - the library where components shape up meaningful patterns for productive application design. All you need to do, is cherry pick a few layouts and focus on designing a logical user journey and customizing the design to make it more appealing for your audience.

> [!Note]
> If you are part of a larger organization and collaborate with other designers or need to follow a certain compnay-wide guideline, we would advise you to put the libraries on a shared folder in the cloud, but one that also exists on your local drive and is synced via the could provided application. This will mean that any changes made to the libraries e.g. when you implement your custom company branding that needs to be used consistently across all your digital products, will propagate to everyone, who has access to this folder and has been using the libraries to create amazing experiences.

In order to add the Libraries in Sketch follow these

1.  Open up the Sketch app on your Mac, click on the `Sketch` item from the Apple Menu and select `Preferences`.
2.  In the dialog that appears, select the `Libraries` tab and press the `Add Library...` button at the bottom.
3.  Another dialog will show up, allowing you to navigate to the folder on your local drive, where you have placed the Libraries.
4.  Select all three of them and click `Open`, which will close this second dialog window.
5.  Now that they all show up in the list in the Preferences dialog, make sure that they all are checked and close it .
6.  If the Libraries have been added successfully, they will all show up in the `Symbols` section of the `Insert` menu in Sketch.

### Creating your First Indigo Design Artboard

Now that you have added the Indigo Design Libraries, you are all set to start crafting amazing experiences. Our first design will libraries will be for a simple registration screen with a Navbar, and a beautiful image for background on top of which we will design a simple form consisting of a little bit of Text, a few Inputs and a Button to submit the user details. So, let's find out what a productivity boost the Indigo Design system brings to the table.

1.  Open up the Sketch app on your Mac and create a new file. Press the `A` key and from the right panel select an artboard size from the panel on the right. In this example we will be using an `iPhone 8` in portrait orientation, which will give us a 375 by 667 artboard to design for. If you don't see this preset artboard, choose `Apple Devices` from the dropdown at the top of the panel.

2.  From the insert menu, select `Indigo-Components`, then `Navigation` and `Navbar` positioning the Navbar at the top of the artboard and stretching it to take up the full witdth available. With the Navbar selected, fix its height and fix it to the left, top, and right from the resizing section in the right panel. Looking at the overrides section below we will change the `Type` to `~Title` and type "Sign Up" for the `Text` override below. Now let's drag to the artboard an image, which we will use as a background and make sure that it is positioned below the Navbar in the layers panel on the left, which should look like this:
    | Layer | Description |
    | ------------------------------ | -------------------------------------------- |
    | iPhone 8 | The artboard |
    | &nbsp;&nbsp; Navigation/Navbar | The Navbar that we have inserted |
    | &nbsp;&nbsp; Image | The image, which we will use as a background |

  <div class="divider--half"></div>
  ![](images/getting-started1.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

3.  From the insert menu, select `Indigo-Styling`, then `Shadows/Rect` and `Elevate 18` positioning it above the background, but below the Navbar. Do the same to insert a `Colors/white` rectangle and resize and position it so that its borders are aligned with all the borders of the elevation. Now select both layers and size them to 280 by 400, putting them in the exact center of the artboard to serve as a surface on top of which our form will be laid out.

  <div class="divider--half"></div>
  ![](images/getting-started2.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

4.  From the insert menu, select `Indigo-Components`, then `Text` and `Title` positioning it at the top of this surface with a 16px spacing on the left, top, and right. The newly inserted layer should appear above the surface, but below the Navbar. Set the Size override to H4 and the Style to ~34/left/Primary and for the Text type in "Start Budgeting". The last thing to do with this layer is to set its height to 56px.

  <div class="divider--half"></div>
  ![](images/getting-started3.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

5.  From the insert menu, select `Indigo-Components`, then `Inputs/Input` and `Line` positioning it below the title both in the canvas and in the layers panel. Leave 16px on the left, 0px from the Title at the top and set its width to 116px. Now duplicate this input, positioning the second one to the right of the first one, which will provide a 16px spacing between the two and on the right of the second one. Select both Inputs and change the State override to ~Dark/Filled. Then, with the left Input selected provide "First Name" for its label and "Eliza" for the Input Text. Do the same for the right one with "Last Name" and "Morales" and you should get something similar to this:

  <div class="divider--half"></div>
  ![](images/getting-started4.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

6.  Now, insert two more `Line` Inputs, positioning them one under the other, directly below the ones from the previous step. Change their State override to ~Dark/Filled as well and make them stretch across the full width with 16px spacing on both sides. Update the Labels to "Username" and "Password" and Input Texts to "Leaellynasaura" and "\*\*\*\*\*\*\*\*\*\*\*\*" accordingly.

  <div class="divider--half"></div>
  ![](images/getting-started5.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

7.  From the insert menu, select `Indigo-Components`, then `Buttons` and `Raised` positioning it below the form we have created. Leave 16px on the left, 0px from the Inputs at the top and 16px on the right. Update the Text to "SIGN UP" and set the Background to Colors/info.

  <div class="divider--half"></div>
  ![](images/getting-started6.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

8.  From the insert menu, select `Indigo-Components`, then `Text` and `Paragraph` positioning it below the button and changing its size so that there is a 16px spacing on all sides. Set the Size override to Body 2 and the Style to ~14/left/grays.700 and for the Text type in "By clicking on the "SIGN UP" button above, you accept our Terms of Use".

  <div class="divider--half"></div>
  ![](images/getting-started7.png)
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>
  <div class="divider--half"></div>

The last thing would be to select all layers for the form, including the white background and the shadow and group them together. With the newly formed Group selected fix both its width and height and fix it to the top from the Resizing panel on the right. This will not change the final look of our design, but will make it act responsive if the artboard is resized.

## Additional Resources

Related topics:

- [Button](button.md)
- [Input](input.md)
- [Navbar](navbar.md)
- [Text](text.md)
- [Styling](styling-overview.md)
  <div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)
