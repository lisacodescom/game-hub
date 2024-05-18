import React from 'react'
import  useGames  from '../hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from '../components/GameCard';




const GameGrid = () => {
    const {games, error} = useGames()
  return (
    <div>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1, md:3, lg:5}} padding='10px' spacing={10}>
            {games.map(game=>(<GameCard key={game.id} game1={game}/>))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid