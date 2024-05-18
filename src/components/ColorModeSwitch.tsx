import { Box, HStack, Switch, Text, useColorMode,useColorModeValue} from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
        <Box w='100px' h='20px' bg={bg} color={color}>COLOR WILL CHANGE</Box>
    </HStack>
  )
}

export default ColorModeSwitch