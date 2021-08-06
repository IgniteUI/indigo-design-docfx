# Indigo Design Documentation

This project uses Node.js, DocFX and Gulp to generate a documentation for Indigo Design.

## Prerequisites

1. [DocFX](https://dotnet.github.io/docfx)
2. [Node.js](https://nodejs.org)

## Getting Started

### Installing DocFX

In macOS You can use _brew_ to install the latest version of DocFX:

```
brew install docfx
```

If _brew_ is missing on your environment, go ahead and install it with:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

For Windows based platforms use [_chocolatey_](https://chocolatey.org/):

```
choco install docfx
```

### Installing the Node.js dependencies:

If you are using npm, run:

```
npm install
```

If you are using yarn, run:

```
yarn install
```

## Command-Line Shell Permissions

Start your command-line shell (CMD, PowerShell, Bash, etc.) with elevated permissions ("Run As Administrator" in Windows). This is required by Chocolatey, for further information read point 1 from [here](https://chocolatey.org/security#overall).

## Starting the Development Server

The build process depends on the environment variable `NODE_ENV` to be able to set the correct URL for the Angular Samples. Assign either `development`, `staging`, or `production` to `NODE_ENV`.

You can create a `.env` file under the root of the project and set `NODE_ENV`, for instance, by assigning environment.

```
NODE_ENV=development
```

Additionally, you can configure the URLs for all three environments `development`, `staging`, and `production` by editing the 'node_modules/igniteui-docfx-template/post-processors/PostProcessors/EnvironmentVariables/preconfig.json' file and setting the respective URLs in the variables object.

To start the server, run:

for English:

```
npm start -- --lang en
```

for Japansese:

```
npm start -- --lang jp
```

The command takes an adittional argument --lang [ en | jp ] to serve either the English or Japanese version.

Note: if you get an error when starting the server, it could be related to this [bug](https://github.com/IgniteUI/igniteui-docfx/issues/735). Please run `choco install docfx --version 2.26.4.0 --force` for a working project.

## Building the Static Site

For instance, for English:

```
npm run build -- --lang en
```

For the Japanese version:

```
npm run build -- --lang jp
```

The build script produces a folder called \_site at the root of the respective project.
For instance, for English, the static site lives under `en/_site`;

## Building for Staging and Production

The build command is very similar to the beforementioned step. To build the site for staging, run:

```
npm run build-staging --lang en
```

The build command for staging is:

```
npm run build-production --lang jp
```
