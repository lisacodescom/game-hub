import { FaWindows, FaPlaystation, FaApple, FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
interface PlatformIconListProps{
    platforms: Platform[],
    
}
const PlatformIconList = ({platforms}:PlatformIconListProps) => {
    const iconMap:{[key: string]:IconType}={
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaWindows,
        ios: MdPhoneIphone,
        android: FaAndroid,
        apple: FaApple,
        linux: FaLinux,
        nintendo: SiNintendo,
        web: BsGlobe,
    }
  return (
    <HStack marginY={'10px'}>
        {platforms.map(item => <Icon as={iconMap[item.slug]} color={'gray.500'}/>)}
    </HStack>
  )
}

export default PlatformIconList