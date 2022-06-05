import React from "react";
import { Card, Col } from "react-bootstrap";
const VedioItem=(props)=>{
const{vedio}= props


    return(
       <Col>
       <Card>
           <Card.Body>
               <img src={vedio.snippet.thumbnails.medium.url} alt="thumbnail"/>
           </Card.Body>
       </Card>
       </Col>
    )

}
export default VedioItem