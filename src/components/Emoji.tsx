import React from 'react'
import bullsEye from '../assets/GameHub Resources/Emojis/bulls-eye.webp'
import thumbsUp from '../assets/GameHub Resources/Emojis/thumbs-up.webp'
import meh from '../assets/GameHub Resources/Emojis/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'
interface EmojiProps {
  rating:number
}
const Emoji = ({rating}:EmojiProps) => {
  if(rating < 3) return null
  const emojiMap: {[key: number]: ImageProps} ={
    3:{src:meh, alt:'meh', boxSize:'25px'},
    4:{src:thumbsUp, alt:'recommended', boxSize:'25px'},
    5:{src:bullsEye, alt:'exceptional' , boxSize:'35px'}
  }
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji