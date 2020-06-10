// import "@babel/polyfill";
// import chai from "chai";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import "jest-localstorage-mock";
// var MutationObserver = require('mutation-observer');

// configure({ adapter: new Adapter() });

// const jsdom = require("jsdom");

// const { JSDOM } = jsdom;
// // const dom = new JSDOM();
// const dom = new JSDOM('<!doctype html><html><body></body></html>')

// // global.window.location = dom.window.document;
// // global.chaiExpect = chai.expect;
// // global.window.scrollTo = jest.fn();
// // global.window.location.assign = jest.fn();

// // const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')

// global.window = dom.window
// global.document = dom.window.document
// global.navigator = dom.window.navigator

// // new lines
// global.Node = dom.window.Node
// require('mutationobserver-shim')
// global.MutationObserver = MutationObserver;//global.window.MutationObserve

// const originalConsoleError = console.error;

// console.error = (message) => {
//   if (/(Failed prop type)/.test(message)) throw new Error(message);

//   originalConsoleError(message);
// };

// import '@testing-library/jest-dom/extend-expect';
// import jsdom from 'jsdom';
// const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
// global.window = dom.window;
// global.document = dom.window.document;
// global.navigator = dom.window.navigator;
// global.Node = dom.window.Node;
// require('mutationobserver-shim');
// global.MutationObserver = global.window.MutationObserver;
