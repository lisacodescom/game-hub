import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/GameHub Resources/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface SearchInputProps {
  onSearch:(searchText:string)=>void
}

const NavBar = ({onSearch}:SearchInputProps) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar