
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, loading } = useGames();
  const skeleton = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 3, lg: 5 }} padding="10px" spacing={10}>
        {loading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game1={game} />
          
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
