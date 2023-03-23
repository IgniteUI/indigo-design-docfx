---
title: Indigo.Design Figma Plugin
_description: The Indigo.Design Figma Plugin allows users to publish their app to the Indigo.Design App Builder.
_keywords: Design Systems, Design Systems UX, UI kit, Figma , Ignite UI for Angular, Figma to Angular, Figma to Angular, Angular, Angular Design System, Export code from Figma, Design Kits for Angular, Figma HTML, Figma to HTML, Figma UI kits
---
# Indigo.Design Figma Plugin

The Indigo.Design Figma Plugin allows users to quickly create and publish apps in the Indigo.Cloud App Builder from their design.

Once you have created your design using the Indigo.Design UI kit library component, which can be downloaded from [here](https://www.figma.com/@infragistics) you can then export your design using the plugin.

It allows you to quickly create an app in Indigo.Design AppBuilder. This app follows the structure of the Figma design, mapping any symbol from the Indigo.Design UI kit to the corresponding component from Ignite UI. The plugin also takes the images used in Figma and uploads them in the Assets library under AppBuilder, benefiting from [`Assets` support](https://www.infragistics.com/community/blogs/b/jason_beres/posts/indigo-design-app-builder-october-release-with-assets-support).  

## 1. Installing the Indigo.Design Figma plugin

The Indigo.Design Figma Plugin is available from Figma's community Plugin's list. 

<img class="responsive-img" src="../images/figma-plugin.gif"/>

 You can also find it [here](https://www.figma.com/community/plugin/1170035114372031474).


## 2. Create an application in AppBuilder

Once you're ready with the design you can create an app from it using the plugin:

<img class="responsive-img" src="../images/create-from-figma.gif" />


## Assets

Any images or illustrations used in a design are send as assets to the App Builder and will appear in the related Assets tab of the generated application.

There are 2 type of images, either simple flat image or a more complex vector based illustration.

### Image

A simple flat image in Figma is typically added as a rectangle shape with image fill:

<img class="responsive-img" src="../images/figma_image_asset.png" />


This will either be interpreted as an `<img>` element with reference to the related image asset, or a group (`div`) with `background-image`, in case it was used as a background for other elements in the design.

### Illustration

Designers often use custom vector and shapes to build an illustration image with the intention of providing it as an image asset.

These can have a complex structure consisting of many groups and vectors:

<img class="responsive-img" src="../images/figma_illustration_asset.png" />

The designer can specify the exported image type of the illustration via the Export tab in Figma:

<img class="responsive-img" src="../images/figma_export_asset.png" />

It can be PNG, JPG or SVG.

In case the layer's export option is not specified the plugin will export the illustration as SVGs in the App Builder.

## Additional Resources

Related topics:

- [Colors](../style/colors.md)
- [Typography](../style/typography.md)

Our community is active and always welcoming to new ideas.