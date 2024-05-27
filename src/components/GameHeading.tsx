import { Heading } from '@chakra-ui/react'
import{ GameQuery } from '../App'

interface GameHeadingProps {
    gameQuery:GameQuery
}

const GameHeading = ({gameQuery}:GameHeadingProps) => {
    const heading = `${gameQuery.platform?.name || ''}${gameQuery.genre?.name || ''} All Games`
  return (
    <Heading as={'h1'} marginY={5} >{heading}</Heading>
  )
}

export default GameHeading