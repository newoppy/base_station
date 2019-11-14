import React, { Component, lazy, Suspense } from 'react';
import { AppSwitch } from '@coreui/react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import { inheritInnerComments } from '@babel/types';
import { inherits } from 'util';


//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}


class Teleop extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                RealSense
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
                </CardHeader>
                <CardBody>
                  <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
                </CardBody>
              </Card>
            </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Camera 1
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
                <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Control
              </CardHeader>
              <CardBody>
                JOYSTICK
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Camera 2
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
                <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Camera 3
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
                <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Camera 4
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
              <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Camera 5
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
                <img src={"https://i.ytimg.com/vi/1Ll-VHYxWXU/maxresdefault.jpg"} height={200}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Teleop;
