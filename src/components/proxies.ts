import { JSX } from 'component-library';
import { createReactComponent } from './createComponent';
// import { HrefProps } from "./hrefprops";

// component-library
export const MyComponent = /*@__PURE__*/ createReactComponent<
  JSX.MyComponent,
  HTMLMyComponentElement
>('my-component');
