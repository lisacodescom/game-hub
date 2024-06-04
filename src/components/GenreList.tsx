import getCroppedImageUrl  from '../services/image-url'
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import  useGenres,{ Genre }from '../hooks/useGenres'


interface GenreProps{
  onSelectedGenre: (genre:Genre)=>void
  selectedGenre: Genre | null
}
const GenreList = ({onSelectedGenre,selectedGenre}:GenreProps) => {
    const {data, loading,error}=useGenres()
    if(loading) return <Spinner/>
    if(error) return null
    console.log(data)
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map((genre)=><ListItem key={genre.id} paddingY= '5px'>
          <HStack>
            <Image 
            src={getCroppedImageUrl(genre.image_background)} 
            alt={genre.name} 
            boxSize='32px' 
            borderRadius={8}
            objectFit='cover'
            />
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id? 'bold': 'normal'} onClick={()=>onSelectedGenre(genre)} variant={'link'}>{genre.name}</Button>
          </HStack>
          </ListItem>)}
    </List>
    </>
  )
}

export default GenreList