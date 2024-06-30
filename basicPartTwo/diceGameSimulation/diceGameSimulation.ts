enum Result {
  Win = "win",
  Lose = "lose",
  Again = "roll again",
}

interface SimulationResult {
  dice1: number;
  dice2: number;
  sum: number;
  result: Result;
}

export const diceGameSimulation = (
  numSimulations: number
): SimulationResult[] => {
  const simResults: SimulationResult[] = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    simResults.push({
      dice1,
      dice2,
      sum,
      result:
        sum === 7 || sum === 11
          ? Result.Win
          : sum === 2 || sum === 3 || sum === 12
          ? Result.Lose
          : Result.Again,
    });
  }

  return simResults;
};
