import { defineCustomElements } from 'component-library/loader';
export * from './proxies';

// TODO: defineCustomElements() is asyncronous
// We need to use the promise
defineCustomElements(window);
