import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  codeUrl: "/Build/init-build-sizeTest.wasm",
  frameworkUrl: "/Build/init-build-sizeTest.framework.js",
  dataUrl: "/Build/init-build-sizeTest.data",
  loaderUrl: "/Build/init-build-sizeTest.loader.js",
});

function setTime() {
  let curTime =  new Date().toLocaleString();
  unityContext.send("sun", "SetTime", curTime);
}



const showUnity = true;

const App = () => {
  unityContext.on("loaded", () => {
     console.log("LOADED");
   });

  return (
    <div className="App">
      <h1>React UnityWebGL</h1>
      <div className = 'test'>
        {showUnity === true ? (
          <Unity
            width={"100%"}
            unityContext={unityContext}
            devicePixelRatio={2}
            />
          ) : (
        <div />
        )}
      </div>
    </div>
  );
}

export default App;
