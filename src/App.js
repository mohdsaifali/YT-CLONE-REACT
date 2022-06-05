import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row,Col} from 'react-bootstrap'
import SurchBar from './components/SurchBar';
import VedioDetail from './components/VedioDetail';
import VedioList from './components/VedioList';
import Youtube from './api/Youtube';

class App extends React.Component{

state={
  vedios:[],
  selectedVedio:null
}

onVedioSelect = (vedio)=>{
  this.setState({selectedVedio:vedio})
}


handleSubmit = async(SurchTerm)=>{
  const responce = await Youtube.get("search",{
    params:{
      part:"snippet",
      maxResult:5,
      key:"AIzaSyBNYcJMwEJ0vJmwthC7VsvjxZsDjIK4Uys",
      q:SurchTerm
    }
  })
//  console.log(responce)

this.setState({
  vedios:responce.data.items,
  selectedVedio:responce.data.items[0]
})
}
render(){
  const {selectedVedio,vedios}=this.state;
  return (
  
<Container>
<SurchBar onFormSubmit={this.handleSubmit}/>

<Row>
  <Col sm={8}><VedioDetail vedios={this.state.selectedVedio}/></Col>
  <Col sm={4}><VedioList vedios={this.state.vedios}/></Col>
</Row>

</Container>

);
}
}

export default App;
