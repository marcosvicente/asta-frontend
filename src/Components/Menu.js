import React from "react";
import { 
  Navbar,
  NavItem
} from 'react-materialize';
import M from 'materialize-css';
import MenuLeft from "./MenuLeft";
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount(){
    M.AutoInit();
  }

  render() {
    return (
      <Navbar
        alignLinks="right"
        id="mobile-nav"
        centerLogo={true}
        className="menu-header z-depth-2"
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem className="left">
          <MenuLeft />
        </NavItem>
      </Navbar>
    );
  }
}
