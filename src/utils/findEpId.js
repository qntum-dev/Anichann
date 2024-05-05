export function findEpisodeIdByNumber(episodes,numberToFind) {
    // console.log(numberToFind);
  for (let i = 0; i < episodes.length; i++) {
    // console.log(episodes[i].number);
    if (episodes[i].number == numberToFind) {
        // console.log(numberToFind);
      return episodes[i].id; // Return the id if number matches
    }
  }
  return null; // Return null if no matching episode is found
}

