import React from 'react'
import  { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
interface GameCardProps{
    game1:Game
}
const GameCard = ({game1}: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game1.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game1.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard