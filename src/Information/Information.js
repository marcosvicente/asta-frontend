import React, { Component } from 'react'
import { 
  Collapsible,
  CollapsibleItem,
  Icon
} from 'react-materialize';

export default class Information extends Component {
  render() {
    return (
        <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="Informações"
          icon={<Icon>code</Icon>}
          node="div"
        >
          
        </CollapsibleItem>
      </Collapsible>
    )
  }
}
