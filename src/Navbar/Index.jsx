import React, { useContext } from 'react'
import { g11Context } from '../context';
import { movies } from '../mock/movies';
import { Button, Container, InputWrap, Wrap } from './style';

export default function Navbar() {

  const {setMoviesData,typeData}=useContext(g11Context)

  const onChange=(e)=>{
    const newArr= movies.filter((value)=>value.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setMoviesData(newArr)
    console.log(e.target.value);
  }

  console.log(typeData);


  return (
    <Container>
      <Wrap>
      <InputWrap>
        <InputWrap.Input type='text' placeholder='name' onChange={onChange}/>
        <InputWrap.Icon></InputWrap.Icon>
      </InputWrap>
      </Wrap>
      <Wrap>
        {
          typeData.map((item)=>{
            return <Button>{item.name}</Button>
          })
        }
      </Wrap>
    </Container>
  )
}
