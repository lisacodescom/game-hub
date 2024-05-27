import { Box, HStack, Switch, Text, useColorMode,useColorModeValue} from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text whiteSpace={'nowrap'}>Dark Mode</Text>
       
    </HStack>
  )
}

export default ColorModeSwitch