import getCroppedImageUrl  from '../services/image-url'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import  useGenres,{ Genre }from '../hooks/useGenres'

interface GenreProps{
  onSelectedGenre: (genre:Genre)=>void
}
const GenreList = ({onSelectedGenre}:GenreProps) => {
    const {data, loading,error}=useGenres()

    if(loading) return <Spinner/>
    if(error) return null
    console.log(data)
  return (
    <List>
        {data.map((genre)=><ListItem key={genre.id} paddingY= '5px'>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8}/>
            <Button onClick={()=>onSelectedGenre(genre)} variant={'link'}>{genre.name}</Button>
          </HStack>
          </ListItem>)}
    </List>
  )
}

export default GenreList