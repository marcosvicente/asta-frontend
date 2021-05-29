import React, { Component } from 'react'
import { 
  Row,
  Col,
  Collapsible,
  CollapsibleItem,
  Icon,
  Button
} from 'react-materialize';
export default class Comentary extends Component {
  render() {
    return (
      <div>
        <Collapsible accordion>
            <CollapsibleItem
              header="Comentario"
              icon={<Icon>code</Icon>}
              node="div"
            >
              <Row>
                <Col m={10}>
                  <div className="input-field">
                    <input type="text" name="text" />
                  </div>
                </Col>
                <Col m={2}>
                  <Button>
                    <Icon>send</Icon>
                  </Button>
                </Col>
              </Row>
            </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}
