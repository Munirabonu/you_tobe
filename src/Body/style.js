import styled from "styled-components";


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
    padding: 25px;
`
const Card = styled.div`
    color: white;
    width: 300px;
    min-height: 200px;
`

Card.Img = styled.img`
    width: 100%;
    height: 186px;
`
Card.title = styled.p`
    font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
`
export { Card, Container }