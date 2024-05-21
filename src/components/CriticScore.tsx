import { Badge } from '@chakra-ui/react'
import React from 'react'

interface CriticScoreProps{
    score: number
}
const CriticScore = ({score}:CriticScoreProps) => {
    let scoreColor = score >75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <Badge colorScheme={scoreColor} fontSize='14px' borderRadius={'5px'} paddingX={'10px'}>{score}</Badge>
  )
}

export default CriticScore