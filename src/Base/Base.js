import React, { Component } from 'react'
import { 
  Icon,
  Button,
  Modal
} from 'react-materialize';
import './Base.css';

export default class Base extends Component {
  constructor(props){
    super(props);
    this.state = {
      openModal: false
    }
  }
  modalNewFile(){
    <Modal
      bottomSheet={false}
      fixedFooter={false}
      header="Modal Header"
      open={this.state.openModal}
      actions={[
        <div>
          <Button flat  modal="close" node="button" waves="green" className="right"
            onClick={() => this.setState({openModal: false})}>
              <Icon>close</Icon>
          </Button>
        </div>
      ]}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd:  () => { this.setState({openModal: false})},
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%'
      }}
    >
      
    </Modal>
  }
  openModalNewFile(){
    this.setState({
      openModal: true
    })
    console.log(this.state.openModal);
  }
  render() {
    return (
      <div>
        <Button
        className="add-new"
          floating
          onClick={() => {this.openModalNewFile()}}
          icon={<Icon>add</Icon>}
          large
          node="button"
          waves="light"
        />
        {this.modalNewFile()}
      </div>
    )
  }
}