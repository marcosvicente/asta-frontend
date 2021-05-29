import React, { Component } from 'react'
import { 
  SideNav,
  SideNavItem,
  Collapsible,
  CollapsibleItem,
  Icon,
  Button
} from 'react-materialize';

export default class MenuLeft extends Component {
  render() {
    return (
      <div>
        <SideNav
          options={{
            draggable: true,
            edge:'left'
          }}
          trigger={<Button node="button" flat ><Icon>menu</Icon></Button>}
        >
          <SideNavItem
            user={{
              background: 'https://placeimg.com/640/480/tech',
              username: 'username',
              image: 'static/media/react-materialize-logo.824c6ea3.svg',
              name: 'name'
            }}
            userView
          />
          <SideNavItem>
            <Collapsible accordion>
              <CollapsibleItem
                header="Minhas Bases"
                icon={<Icon>code</Icon>}
                node="div"
              >
                <p>base 1</p>
                <p>base 2</p>
                <p>base 3</p>
                <p>base 4</p>
                <p>base 5</p>
                <p>base 6</p>
                <p>base 7</p>
                <p>base 8</p>
              </CollapsibleItem>
            </Collapsible>
          </SideNavItem>
        </SideNav>
      </div>
    )
  }
}
