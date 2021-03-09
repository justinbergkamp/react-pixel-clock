import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.speed = 30;
    this.state = {
      degrees: 0,
      message: "-",
      showUnity: true,
    };
    this.unityContext = new UnityContext({
      codeUrl: "/Build/init-build.wasm",
      frameworkUrl: "/Build/init-build.framework.js",
      dataUrl: "/Build/init-build.data",
      loaderUrl: "/Build/init-build.loader.js",
    });
    // this.unityContext.on("RotationDidUpdate", (degrees) => {
    //   this.setState({ degrees: Math.round(degrees) });
    // });
    // this.unityContext.on("Say", (message) => {
    //   this.setState({ message });
    // });
  }
  render() {
    return (
      <Fragment>
        <h1>React UnityWebGL</h1>
        <div>
          {this.state.showUnity === true ? (
            <Unity
              width={"100%"}
              unityContext={this.unityContext}
              devicePixelRatio={1}
            />
          ) : (
            <div />
          )}
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
