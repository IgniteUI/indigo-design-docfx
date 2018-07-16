---
title: Indigo.Design Code Generator for VS Code
_description: Quick overview on how the extension works and how to use it.
_keywords: Design System, Code Generation, Ignite UI for Angular, Component, UI Library, Widgets, Routing, VS Code, Extension
---

## Indigo.Design Code Generator for VS Code

This topic describes the Visual Studio Code extension that we have built to make code generation as easy as possible for developers.  With this extension developers can generate actual, runnable code for Angular projects directly from within Visual Studio Code.  Designers can take their Sketch files and publish them to the cloud with [Indigo.Design](https://next.indigo.design) and then provide developers with a share link.  Developers can take this share link, provide it directly to this extension and generate code off the design saving them tons of time that would otherwise be spent manually building modules and writing HTML, CSS and Typescript for components.

### Requirements

This extension has the following dependencies.  Please install them before using.
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Angular CLI](https://cli.angular.io/) (installed globally)

This extension also requires an Angular project to currently be opened in the workspace and at the root of the workspace.  This means that the `angular.json` or `.angular-cli.json` (depending on what version of Angular you are using) must be at the root of the workspace.

The code generator produces [SCSS](https://sass-lang.com/) so it is recommended that your Angular project is setup to use it.  If you are creating a new Angular project you can set this up with the following:

```
ng new my-app --style=scss
```

If you are working with an existing Angular project then you can update the default style extension attribute in the Angular json file.

**angular.json**
```json
"@schematics/angular:component": {
    "styleext": "scss"
}
```
**.angular-cli.json**
```json
"defaults": {
    "styleExt": "scss",
}
```

This will tell the Angular CLI to generate SCSS instead of CSS when generating components which this extension will use.

If you are working with an existing Angular project and it is already using the [Ignite UI for Angular](https://www.npmjs.com/package/igniteui-angular) package then you will need to update to at least version 6.1.0.  This extension may not update your project correctly if you have an older version.

## How it works

It all starts with a sketch.  Once a designer has completed their sketch they can upload it to the [Indigo.Design](https://next.indigo.design) website.  From there the designer can publish their work and create usability studies or open it up for commenting.  When the work is published Indigo.Design will provide a link to allow others to view your work.  That link can also be used by this extension.

![](https://dl.infragistics.com/tools/extensions/codegen/step1.gif)

With the share link the developer can see the various screens that make up the intended application.  From here the developer can select pieces of the screen that they want to generate code for.  Normally you would not generate the entire screen because the design will have duplicated elements on each screen.  We will refer to this as the application 'chrome'. Chrome refers to the parts of an application that do not change from screen to screen, such as navigation menus at the top of the page or even navigation drawers that would slide in from the side.

![](https://dl.infragistics.com/tools/extensions/codegen/chrome.png)

These elements should not be generated as they will be consistent elements across all screens of the application.  They only need to be written once to surround areas of the application that will be changing frequently through `<router-outlet>`.  Developers can use `<router-outlet>` in Angular to specify where content will be changing on the page.  This changing content is what you would generate code for.  Here's what that selection might look like:

![](https://dl.infragistics.com/tools/extensions/codegen/step2.gif)

Once things have been configured the way you like it is time to generate some code!  Click on the "Generate Code Assets" button and this will begin the process.

Here is how the extension will update your project:

* Install required NPM packages such as [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular).
* Create Angular components from selected sketch components.
    * These will have the generated code.
* Create modules around these components.
* Create basic routes in the modules for each component to make them navigatable. (if configured, see Settings section)
* Updates project to use default theme for [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular).

## After Code Generation

Once the code has been generated into your project you are almost ready to run it.  We recommend reading through this [topic](after-codegen.md) to get familiar with what to do after code generation.

## Settings

These settings are available from the `User Settings` window.

| Name                                       | Description                                                                                                                                                                                | Default |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `infragistics.codegen.sharedModule`        | Controls whether a shared module will be generated for Ignite UI for Angular modules.                                                                                                      | `true`  |
| `infragistics.codegen.routingModules`      | Specifies whether to generate routing modules or not. This will only be applied if 'inferRoutingModules' is false.                                                                         | `false` |
| `infragistics.codegen.inferRoutingModules` | Should the extension determine whether or not to generate routing modules based on if the current project uses them. If true, routing modules will be generated if your AppModule has one. | `true`  |
| `infragistics.codegen.basicRoutes`         | If true, simple routes will be added to the application. Useful if you are starting a new project. Disable if in an existing project where routing may already be setup.                   | `false` |

## Troubleshooting

#### The extension is frozen on first time setup.

We use Electron in order to display a nice UI for selecting Sketch artboards in order to support the platforms that VS Code runs on.  However we don't package the Electron binaries for each possible platform.  Instead we use [npm](https://www.npmjs.com/) to install the correct version for the host platform into the extension directory.  This allows us to keep the extension file size down.  When the first time setup notification is displayed we run the `npm install` command with `electron` as the argument.  It may take a while to install depending on your internet but if you see that it is not finishing you can close VS Code which will cancel the install subprocess.  At this point you should try running the `npm install` command manually to make sure it is working properly.  Open terminal in an empty folder and run:

```
npm install electron
```

Take note of the output and make sure there are no errors.  This is essentially all the extension is doing so if that works the extension should work.  If that worked, reopen VS Code and try running the extension again.

#### Code is not generating into my project

Angular apps come with an `e2e` folder used for end to end testing.  Under normal circumstances this isn't an issue.  However if the `e2e` project has a `sourceFolder` specified in the `angular.json` then this can break the Angular CLI which in turn can cause this extension to fail to generate code into your project, or generate code directly into the `e2e` folder.  This extension is expecting that your `angular.json` only has one project with a `sourceFolder` property specified.  Take a look at this example:

```json
{
    ...
    "projects": {
        "my-app": {
            "root": "",
            "sourceRoot": "src",
            ...
        },
        "my-app-e2e": {
            "root": "",
            "sourceRoot": "e2e",
            ...
        }
    }
}
```

In this `angular.json` example there are two projects listed, my-app and my-app-e2e.  If your `angular.json` looks like this then the extension will fail to update the project.  This is because it sees multiple projects with a `sourceRoot` specified and it doesn't know which one to add the code to.

To resolve this move the `sourceRoot` value to the `root` property and then delete the `sourceRoot` property all together.  This property is normally not provided to you when creating a fresh Angular project using the CLI.  It should look like this now:

```json
{
    ...
    "projects": {
        "my-app": {
            "root": "",
            "sourceRoot": "src",
            ...
        },
        "my-app-e2e": {
            "root": "e2e",
            ...
        }
    }
}
```

## Additional Resources

Related topics:

- [What to do after code generation](after-codegen.md)
  <div class="divider--half"></div>

External Links:
- [Ignite UI for Angular](https://www.infragistics.com/products/ignite-ui-angular)
- [Angular Modules](https://angular.io/guide/ngmodules)
- [Angular Components](https://angular.io/guide/architecture-components)
- [Angular Routing & Navigation](https://angular.io/guide/router)

Our community is active and always welcoming to new ideas.

- [Indigo Design **GitHub**](https://github.com/IgniteUI/design-system-docfx)