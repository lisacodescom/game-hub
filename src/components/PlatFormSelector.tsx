import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import { BsChevronBarDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'

interface PlatformProps{
    onSelectedPlatform:(platform:Platform)=>void
    selectedPlatform: Platform | null
}
const PlatFormSelector = ({onSelectedPlatform,selectedPlatform}:PlatformProps) => {
    const {data, error} = usePlatforms()
    if(error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
        <MenuList>
           {data.map((platform)=><MenuItem onClick={()=>onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
            
            
    </Menu>
  )
}

export default PlatFormSelector