# Indigo Design Documentation

This project uses Node.js, DocFX and Gulp to generate a documentation for Indigo.Design.

## Prerequisites

1. [DocFX](https://dotnet.github.io/docfx)
2. [Node.js](https://nodejs.org)

## Getting Started

### Installing DocFX

To install docfx restore it as a dotnet tool:

```bash
dotnet tool restore
```

### Installing the Node.js dependencies:

If you are using npm, run:

```bash
npm install
```

If you are using yarn, run:

```bash
yarn install
```

## Starting the Development Server

The build process depends on the environment variable `NODE_ENV` to be able to set the correct URL for the Angular Samples. Assign either `development`, `staging`, or `production` to `NODE_ENV`.

You can create a `.env` file under the root of the project and set `NODE_ENV`, for instance, by assigning environment.

```
NODE_ENV=development
```

To start the server, run:

for English:

```bash
npm start -- --lang en
```

for Japansese:

```bash
npm start -- --lang jp
```

The command takes an adittional argument --lang [ en | jp ] to serve either the English or Japanese version.

## Building the Static Site

For instance, for English:

```bash
npm run build -- --lang en
```

For the Japanese version:

```bash
npm run build -- --lang jp
```

The build script produces a folder called \_site at the root of the respective project.
For instance, for English, the static site lives under `en/_site`;

## Building for Staging and Production

The build command is very similar to the beforementioned step. To build the site for staging, run:

```bash
npm run build-staging --lang en
```

The build command for staging is:

```bash
npm run build-production --lang jp
```
