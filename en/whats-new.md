---
title: What's new - Design System
_description: Find out what new features and bug fixes are added in each version of Design System
_keywords: Design Systems, Design Systems UX, UI kit, Sketch, Ignite UI for Angular, Sketch to Angular, Sketch to Angular, Angular, Angular Design System, Export code from Sketch, Design Kits for Angular, Sketch HTML, Sketch to HTML, Sketch UI kits
---

# April 2022 Release
## Features
- **Copy application** to a different workspace, and include all linked resources (theme, image assets and data)
- Select new **app templates** when creating a new app
- Select **preset layouts** when creating a new view in your app

## Improvements
- Related to Swagger UI and bug fixes

## Maintenance Updates & Bug Fixes
**Including, but not limited to:**
- Hide Swagger table context menu
- Add progress indicator for done button when adding URL
- Fix missing `requestInfo` on DS table
- Hide dropdown when there isn't baseUrl to show
- Add authorization methods required functionality
- Swagger empty file proper handling
- Prevent using empty json
- Improve performance when too many endpoints
- Select data dialog is listing the data sources instead of fields

# March 2022 Release
## Features
- **OpenAPI (Swagger) Support** as part of our data-binding RestAPI story.
- **On-Premise Version of App Builder** that you can install on your own server and behind your own server firewall. This instance is runnable on any infrastructure and accessible only by internal personnel

## Improvements
- Set image round radius using px, % or rems
- Persist zoom level of the design surface when switching between views or preview
- Improvements when generating **Blazor** apps
  - Added support for **custom themes** (color palette and typography)
  - Apply **global font** and **color/background** from the app's theme
  - Allow **custom headers** when adding REST API URL source
  - Improved code generation for **Date Picker**, **Grid** (columns), **List** and **Nav-Drawer** items
  - Added support for **nested arrays** in objects as data source

## Maintenance Updates & Bug Fixes
**Including, but not limited to:**
- Fix the error that is thrown on "Get Assets For Sketch"
- Select component popup is cut at the top in preview mode
- On app duplication the custom viewport is lost
- Breadcrumb in data panel doesn't match the latest visual enhancements
- Icons overflow input when set fluent theme and rounding
- Detaching a tab when dragging breaks the app
- Button is resized after editing its text
- Outline sections don't collapse when component is de-selected on canvas
- ComboBox Items are affected by preview and there's no clear button
- Select is shown in the "pick component" list when adding open/close action
- Checkbox and Switch generate label position even if set to none
- Setting dark fluent theme with roundness 1 ends up light
- Grid: Cell editing doesn't work in preview mode
- Sign out from Sketch plugin is not actually signing out
- The disabled state of buttons in the App bar doesn't work
- Assets with % or # in the name don't show in generated application
- Improve handling of Data Sources with non-ASCII Unicode names in Angular's service methods and Blazor view model
- Curly braces are not escaped in the generated text content - _Angular specific_
- Ensure app root container stretches to full height - _Blazor specific_
- Multiple iterators bound the same data should no longer create multiple data properties in the same view - _Blazor specific_

# January 2022 Release

## Improvements
- **Sketch UI Kit Improved Theming Support** - The light/dark mode toggle that changes the surface color now affects how gray colors are set up - as a derivative of black or white.
- **UI Kits Version Check updates** - Now matching `<major>.<minor>` for consistency between parser dll and symbol. `<patch>` will be ignored and wont throw an error if the symbol version is higher than the parser version (#13942)

## Maintenance Updates & Bug Fixes
**Including, but not limited to:**
- Workspace title not updated
- Create new workspace cancel shows invalid state
- About dialog/Header/Account dialog improvements
- Add template for data source search empty state
- Move "View All" workspaces link out of the scrollable area
- Consider a property as bound when type is Bound and data field is set(#14296)
- Avoid data section for components with IsOverlay = true (#14305)
- Fix custom list item content #14322
- Notify visuals updates to update bounds and overlays (#14306)
- Hide parent adorner while moving or resizing (#1388)
- Limit zoom in/out actions (#14268)
- Refresh main menu on new apps notified by realtime sync (#14295)
- To work with the new way color variations are described in case a layer has fills, instead of setting style, the opacity modifies the color alpha to achieve the same color shade (#14552)
- Parsing deeply nested groups and backgrounds throws an error (#13954)
- People app parsing fix (#13905)
- Dialog window navigation did not work ([GitHub issue](https://github.com/IgniteUI/app-builder/issues/7))

# December 2021 Release

## Features
- Design and generate your app for Blazor (beta)
- Install App Builder as a desktop app on Windows, macOS, and Linux
- Added Indigo.Design UI kit for Adobe XD
- Create an app from designs using our new Adobe XD plugin

## Improvements
- Updated the App Builder menu to manage your apps and group workspaces
- Added support for Nested collection inside a response object
- Added Export to Excel feature to Data-Grid component
- Added automatic compression when uploading large images as assets
- Sketch Plugin Updates - improved theming and "Create new app from Sketch" story

# October 2021 Release
## Features
 - **Upload your images** to Assets library and share it across all apps in the same Workspace
 - **Download uploaded images** used in the app when you publish or download app source code
 - **Create app** directly from Sketch plugin

## Improvements
 - **Include REST endpoint URL** in the generated app instead of hard-coded JSON data
 - **Extract images** available in your Sketch file and add it to Workspace assets library
 - Added context menu for **Document outline** elements
 - Show outermost container (View) as the root-level element in the **Document outline**
 - Added tooltip explanations for **Image fit** and **Layout position** options

## Maintenance Updates & Bug Fixes
 - General bug fixes and maintenance updates

# September 2021 Release

## Features

 - Configure features for the **Grid** component in App Builder (e.g., Sorting, Filtering, Editing).
 - Added **Snackbar** to the component toolbox.
 - **Publish to Github** now adds a workflow to automatically build and test the project across different versions of node.
 - Added **Quick-Tips** to learn about Flexbox layouts, and App Builder features.

## Improvements

 - Generate App button is now **Publish to GitHub**.
 - Improved performance when publishing to Github or downloading generated app as a ZIP.
 - Updated **Create new app** dialog to import Sketch documents and easy access to Indigo.Design system assets.

## Maintenance Updates & Bug Fixes

 - Fixed errors with data repeated elements.
 - Fixed Data source picker to automatically update when new Data sources is added.
 - Improved load times for apps and general performance tweaks when using the app builder.
 - General bug fixes.

# July 2021 Release

## Features

 - **GitHub Integration**: Publish your generated app to an existing or new repository
 - Added “Slider” to the component toolbox
 - Added “Banner” to the component toolbox
 - Added Korean language translation for cloud.indigo.design
 
## Improvements

 - Ability to reorder components in the document outline or design surface using drag and drop
 - Ability to reorder “master” and “child views” in the views tab of the toolbox
 - When previewing the app, switch between master and child views using a dropdown in the preview toolbar
 - Updated “Radio” component to “Radio Group”
 - Updated “Tab Layout” to allow custom content inside “Tab Header”
 - Updated icons to represent content wrapping scenarios when using flex row and column layouts
 - Added two new sample apps in “Create new app” dialog 
 - Apps are generated using Ignite UI Angular v12.0.0 instead of v11.1.15
 
## Maintenance Updates & Bug Fixes

 - Improved load times for apps and general performance tweaks when using the app builder
 - General bug fixes

[LEARN MORE](https://www.infragistics.com/community/blogs/b/infragistics/posts/indigo-design-app-builder-july-release---what-s-new)

# Official Release

## General
* Cloud integration and team collaboration - Accessing the App Builder can be done through the App tab in Indigo.Design cloud, where users will find their active application projects. From there, users are enabled to start a new app or to preview, rename, archive or duplicate an existing one
* Using Sketch file as a starting point for a new application in the App Builder - Now, users are enabled to start a new application from an existing Sketch file by uploading it in the App Builder. 

## UI components
* Dialog
* Combo
* Tabs layout
* Expansion Panel
* Date Time Editor (as an Input type)
* Button Group
* Text Area
* Hyperlink

## Interactions
* Open/Close - The "Open/Close" interaction lets users create interactions using overlay components, such as Dialog.
* Show/Hide - "Show/Hide" is an interaction that can be applied to a component to show and hide another component visibility in the same view.

## Using Data in the App Builder
* Rest API -  enables users to upload a JSON file or provide a URL with the Data Source. The added data source can be used also in the repeaters to connect components to actual data source fields.

## Code Generation
* General improvements and bug fixes

# Public Release

## General
* Option to set Min and Max Width and Height for Layouts
* More components and layouts size units - The newly added units are auto min, auto max, px, rem, vh, vw, %.
* New Layout Position options - The newly added positioning options are Relative, Absolute, Fixed, Sticky and Overflow, which can be applied to components and layouts.
* Quick Add shortcut for components through Ctrl/Cmd + E​
* Error handling service​ improvements
* Quick app preview on various devices​ - When previewing an app project, users can quickly preview it on various viewports through the device icons in the top bar.
* Appearance and border options for components​
* Initial concurrency version is implemented​
* Sample Apps Library extended - the components in this release were used to enrich the existing Sample Apps

## UI components
* Dropdown
* Select
* Chip
* Navigation drawer
* Navigation bar​

## Using Data in the App Builder
* Repeaters feature - enables users to connect a component to a data source field
* Binding to a mock data -  enables users to try the Data Binding and Repeaters with data features using a mockup Northwind data.

## Code Generation
* General improvements and bug fixes

# Private Release

## General
* Interactive flows - The interactive flows feature has been extended with master and child views routing
* Preset layouts - 4 predefined layouts for quick start of a new design have been added
* Library of Sample Apps - 3 predefined sample apps have been added which users can use as a starting point to speed up the design process or quickly learn how App Builder works
* General improvements and bug fixes
* Visual improvements and user experience enhancement

## Themeing Service
* Theme presets - 6 predefined themes have been added for Dark and Light versions of Material, Bootstrap and Fluent.
* Adding new custom themes feature - users are enabled to create custom themes aligned with the brand assets and design system of their company.


## UI components
* Absolute Layout 
* Row Layout 
* Column Layout 
* Card
* Views Container
* Avatar
* Calendar
* Icon
* Image
* Text
* Title
* Button
* Checkbox
* Date picker
* Floating Action Button 
* Icon Button
* Input Group
* Radio
* Switch
* Grid
* Badge

## Code Generation
* General improvements and bug fixes
