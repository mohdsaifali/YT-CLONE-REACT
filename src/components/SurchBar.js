import React from "react"
import {Card, Col, Form} from 'react-bootstrap'

class SurchBar extends React.Component{

state={
    SurchTerm:""
}
handleChange=(event)=>this.setState({SurchTerm:event.target.value})
handleSubmit=(event)=>{
    event.preventDefault();
    const {onFormSubmit} = this.props
    onFormSubmit(this.state.SurchTerm)
}

render(){
    return(
        <Col>
         <Card>
              <Card.Body>
                  <Form onSubmit={this.handleSubmit}>
              <Form.Control
        type="text"
        id="input password"
        aria-describedby="passwordHelpBlock"
        placeholder="Search..."
        onChange={this.handleChange}
        />
         </Form>
        </Card.Body>
          </Card>
        </Col>
         
    )
}

}

export default SurchBar