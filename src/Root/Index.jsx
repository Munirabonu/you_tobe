import React from 'react'
import Body from '../Body/Index'
import Navbar from '../Navbar/Index'
import Sidebar from '../Sidebar/Index'
import { Container, Wrap } from './style'

export default function Root() {
  return (
    <Container>
      <Sidebar />
      <Wrap>
        <Navbar />
        <Body />
      </Wrap>
    </Container>
  )
}
