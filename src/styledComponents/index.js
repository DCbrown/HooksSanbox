import React from 'react';
import Header from './Header';
import { Container } from './styles/Container.styled';
import HookUseCallBack from '../hooks/HookUseCallBack';
import HookUseReducer from '../hooks/HookUseReducer';
import { HookUseRef } from '../hooks/HookUseRef';
import FetchDataComponent from '../components/FetchDataComponent';

const StyleComponent = () => {
  return (
    <>
    <Header />
    <Container>
      <h1>Body Content</h1>
      <HookUseCallBack />
      <HookUseReducer /> 
      <HookUseRef />
      <FetchDataComponent />
    </Container>
    </>
  )
}

export default StyleComponent
