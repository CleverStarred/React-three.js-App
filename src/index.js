/**
 * @fileOverview Main entry point for build. WebPack will crawl the dependencies used from here on to bundle.
 */
// npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// src dependencies
// use custom global shim rather than importing THREE directly
// import './components/App/three';
import App from "./components/App/App";
import GraphicsEngine from "./components/App/graphics-engine";
import './assets/styles.css';

// create main jsx component and render into #main element
let app = ReactDOM.render(<App />, document.getElementById('root'));
window['app'] = app; // debugging only

// create graphics engine
let canvas = document.getElementById('gfx-canvas'); // created in App.jsx
let gfx = new GraphicsEngine({canvas:canvas});
window['gfx'] = gfx; // debugging only
gfx.start();
