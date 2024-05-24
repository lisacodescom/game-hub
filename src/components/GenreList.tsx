import getCroppedImageUrl  from '../services/image-url'
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import  useGenres from '../hooks/useGenres'


const GenreList = () => {
    const {data, loading,error}=useGenres()

    if(loading) return <Spinner/>
    if(error) return null
    console.log(data)
  return (
    <List>
        {data.map((genre)=><ListItem key={genre.id} paddingY= '5px'>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8}/>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
          </ListItem>)}
    </List>
  )
}

export default GenreList