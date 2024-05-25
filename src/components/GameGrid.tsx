
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres"; 

interface GameGridProps {
  selectedGenre: Genre | null;
}
const GameGrid = ({selectedGenre}: GameGridProps) => {
  const { data, error, loading } = useGames(selectedGenre);
  const skeleton = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding="10px" spacing={10}>
        {loading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard game1={game} key={game.id}/>
          
          
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
