import React, { Component } from 'react';

import MenuBar from './components/MenuBar/index';
import SideBar from './components/SideBar/index';
import BackDrop from './components/BackDrop/index';

class Navbar extends Component {
  state = {
    sideDrawer: false
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscButton, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscButton, false);
  }

  toggleMenu = () => {
    this.setState(prevState => ({ sideDrawer: !prevState.sideDrawer }));
  };

  onEscButton = e => {
    if (e.keyCode === 27) {
      this.setState({
        sideDrawer: false
      });
    }
  };

  backDropClickHandler = () => {
    this.setState({
      sideDrawer: false
    });
  };

  render() {
    const { sideDrawer } = this.state;

    return (
      <>
        {sideDrawer && <BackDrop click={this.backDropClickHandler} />}
        <MenuBar toggleMenu={this.toggleMenu} />
        <SideBar show={sideDrawer} onEscButton={this.onEscButton} toggleMenu={this.toggleMenu} />
      </>
    );
  }
}

export default Navbar;
