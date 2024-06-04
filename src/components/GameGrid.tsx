
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres"; 
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";
interface GameGridProps {
  gameQuery:GameQuery

}
const GameGrid = ({gameQuery}: GameGridProps) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeleton = Array.from({ length: 10 }, (_, i) => i);
  if(error) return <Text>Something went wrong</Text>
  return (
    <div>
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
