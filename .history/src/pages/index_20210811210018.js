import React from 'react';
import styled from 'styled-components'
import {AlurakutMenu} from '../components/AlurakutCommons'
const Title = styled.h1`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};`

export default function Home() {
  return
  (
  <>
    <AlurakutMenu />
    <Title>My page</Title>
  </>
  )
}
