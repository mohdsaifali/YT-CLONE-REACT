import React from "react";
import VedioItem from "./VedioItem";
import { Container } from "react-bootstrap";
const VedioList = (props)=>{

    const {vedios}=props
    const listofvedios = vedios?.map((vedio,idx)=><VedioItem key={idx} vedio={vedio}/>)

 return(
     <> 
    <Container>
        {listofvedios}
    </Container>
     </>
 )   
}
export default VedioList