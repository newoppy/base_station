import React, { Component } from "react";
import Temperature from "./components/Temperature";
import GPS from "./components/GPS";
import EnableSensor from "./components/EnableSensor";
import ArmVisualization from "./components/ArmVisualization";
import Pose from "./components/Pose";
import ScreenForDataVis from "./components/ScreenForDataVis";
import RpiCam from "./components/RpiCam";
import RealSense from "./components/RealSense";
import Keyboard from "./components/Keyboard";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home__col">
          <div className="home__row">
            <Temperature />
            <GPS />
          </div>

          <div className="home__row">
            <EnableSensor />
            <EnableSensor />
            <EnableSensor />
            <EnableSensor />
          </div>

          <div className="home__row">
            <ArmVisualization />
            <Pose />
          </div>

          <div className="home__row">
            <ScreenForDataVis />
          </div>
        </div>

        <div className="home__col">
          <div className="home__row">
            <RpiCam />
            <RpiCam />
            <RpiCam />
          </div>

          <div className="home__row">
            <RpiCam />
            <RpiCam />
            <RpiCam />
          </div>

          <div className="home__row">
            <RealSense />
            <Keyboard />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
