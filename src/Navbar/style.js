import styled from "styled-components";
import { ReactComponent as search } from "../assets/icons/search.svg";

const Container = styled.div`
    width: 100%;
`
const Wrap = styled.div`
    width: 100%;
    height: 56px;
    background-color: #212121;
    border-bottom:  1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
`
const InputWrap = styled.div`
    display: flex;
`
InputWrap.Input = styled.input`
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2px 0px 0px 2px;
    color: rgba(255, 255, 255, 0.2);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    width: 550px;
    padding-left:10px ;
`
InputWrap.Icon = styled(search)`
   background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 2px 2px 0px;
    padding: 8px 20px;

`
const Button = styled.button`
    background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 30px;
`

export { Container, Wrap, InputWrap,Button }