import React, { useContext } from 'react'
import { Card, Container } from './style'
import { g11Context } from '../context'
export default function Body() {

  const {moviesData}=useContext(g11Context)

  console.log(moviesData,'movies');
  return (
    <Container>
      {
        moviesData.map((value) => {
          return (
            <Card>
              <Card.Img src={value.url}/>
              <Card.Title>{value.name}</Card.Title>
             </Card>
          )
        }
        )
      }
    </Container>
  )
}
