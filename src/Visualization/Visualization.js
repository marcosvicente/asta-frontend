import React, { Component } from 'react'
import { 
  Collapsible,
  CollapsibleItem,
  Icon,
  Button
} from 'react-materialize';

export default class MenuLeft extends Component {
  render() {
    return (
        <Collapsible accordion>
          <CollapsibleItem
            header="Visualização"
            icon={<Icon>code</Icon>}
            node="div"
          >
            <h2>Visualização</h2>
          </CollapsibleItem>
        </Collapsible>
    )
  }
}
