# stencil-ds-react-template

This is an example repo of building plugins.

Here we've called the Stencil component library being wrapped `component-library` and the name of this React wrapper library `component-library-react`.

## Step 1.

- Update all occurrences of `component-library-react` with your chosen project name, say `my-library-react`.
- Update all occurrences of `component-library` with the name of the Stencil library you are wrapping, say `my-library`.
- Change the repository url in `package.json` to your own.

## Step 2.

- Update `src/component/proxies.ts` with your Stencil component definitions, using the corresponding Ionic source as reference: `https://github.com/ionic-team/ionic/blob/master/packages/react/src/components/proxies.ts`

> TODO: This should really be automatically generated.

## Step 3.

- Update the `package.json` version and `npm i`, `npm run build`, `npm publish`
- Update the dependecy version in the test app: `test/test-app` and run in the usual way


# End-to-end example

> The steps below depend on the following PR to be merged: https://github.com/ionic-team/stencil-component-starter/pull/83

1. Install verdaccio to create a quick local npm registry

- Install: `npm install --global verdaccio`
- Run in the terminal: `verdaccio`
- Set npm registry: `npm set registry http://localhost:4873/`
- Add a user: `npm adduser --registry http://localhost:4873`

2. Create and publich a new Stencil component library
   
- Create: `npm init stencil` (choose `component` and name it `component-library`)
- Change directory: `cd component-library`, install `npm i` and build `npm run build`
- Publish: `npm publish --registry http://localhost:4873`

3. Create and publish a React wrapper libary for the one above

- Clone: `git clone https://github.com/ionic-team/stencil-ds-react-template.git`
- Leave the defaults in place and cd `cd stencil-ds-react-template`, install `npm i` and build `npm run build`
- Publish: `npm publish --registry http://localhost:4873`

4. Run the React test app

- `cd test/test-app`, `npm i`, `npm start`
  
Presto!
