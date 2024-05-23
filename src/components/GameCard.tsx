import React from 'react'
import  { Game } from '../hooks/useGames'
import { Badge, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../services/image-url'
interface GameCardProps{
    game1:Game
}
const GameCard = ({game1}: GameCardProps) => {
  return (
    <Card >
        <Image src={getCroppedImageURL(game1.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game1.name}</Heading>
            <PlatformIconList platforms={game1.parent_platforms.map(item=>item.platform)}/> 
            <CriticScore score={game1.metacritic}/>
        </CardBody>
    </Card>
  )
}

export default GameCard