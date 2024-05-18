import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}>
        <GridItem gridArea="nav" ><NavBar/></GridItem>
        <Show above='lg'>
        <GridItem gridArea="aside" >Aside</GridItem>
        </Show>
        <GridItem gridArea="main">Main</GridItem>  
      </Grid>
    </div>
  )
}

export default App
