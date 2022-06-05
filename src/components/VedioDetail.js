import React  from "react";
import {Card,Container} from 'react-bootstrap'
const VedioDetail = (props)=>{
    const {vedio} = props
    if(!vedio) return <Card><h1>Loading...</h1></Card>
    const vedioSrc = `https://www.youtube.com/embed/${vedio.id.vedioId}`
    return(
        <Card>
            <Container>
            <Card.Body>
                <iframe frameBorder={0} height={"300%"} width={"100%"} title="vedioTitle" src={vedioSrc}></iframe>
            </Card.Body>
            <Card.Body style={{marginTop:"45%"}}> 
            <h4>{vedio.snippet.title}</h4>
            <h5>{vedio.snippet.discription}</h5>
            </Card.Body>
            </Container>
        </Card>
    )
}
export default VedioDetail