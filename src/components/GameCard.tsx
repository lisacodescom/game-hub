import React from 'react'
import  { Game } from '../hooks/useGames'
import { Badge, Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../services/image-url'
import Emoji from './Emoji'

interface GameCardProps{
    game1:Game
}
const GameCard = ({game1}: GameCardProps) => {
  return (
    <Card >
        <Image src={getCroppedImageURL(game1.background_image)}/>
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList platforms={game1.parent_platforms.map(item=>item.platform)}/> 
            <CriticScore score={game1.metacritic}/>
          </HStack>
          <Heading fontSize='2xl'>{game1.name}<Emoji rating={game1.rating_top}/></Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard