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
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>
          </Box>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
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
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
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
