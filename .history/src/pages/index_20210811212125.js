import React from 'react';
import styled from 'styled-components'
import {AlurakutMenu} from '../components/AlurakutCommons'
import MainGrid from '../styles/mainGrid'
import Box from '../styles/box'

export default function Home() {
  return (
  <>
    <AlurakutMenu />
    <MainGrid>
        <div className="firstArea" style={{ gridArea: 'firstArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

        </div>
        <div className="secondArea" style={{ gridArea: 'secondArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>
        </div>
        <div className="thirdArea" style={{ gridArea: 'thirdArea' }}>
        <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>

        </div>
      </MainGrid>
  </>
  )
}
