import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import React from 'react'

interface SearchInputProps {
    onSearch:(searchText:string)=>void
}
const SearchInput = ({onSearch}:SearchInputProps) => {
    const ref = React.useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        if(ref.current){
            const searchText = ref.current.value
            onSearch(searchText)
        }}}>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
   <Input ref= {ref} borderRadius={20} variant={'filled'} placeholder="Search games" /> 
   </InputGroup>
   </form>
  )
}

export default SearchInput