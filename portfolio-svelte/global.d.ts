export {};

declare global {
  interface Window {
    jq:any;
  }
}

declare module 'jquery';