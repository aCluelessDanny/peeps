// TODO: Remove unnecessary helpers
// Custom compare function for sorting lists
export const listSortCompare = (a, b) => {
  const a_name = a.name.toLowerCase();
  const b_name = b.name.toLowerCase();
  if (a_name < b_name) { return -1 }
  if (a_name > b_name) { return 1 }
  return 0;
}

// Custom compare function for sorting users
export const userSortCompare = (a, b) => {
  const a_name = a.screen_name.toLowerCase();
  const b_name = b.screen_name.toLowerCase();
  if (a_name < b_name) { return -1 }
  if (a_name > b_name) { return 1 }
  return 0;
}

// Sort lists by their name in alphabetical order
export const sortLists = (lists) => lists.sort(listSortCompare);

// Sort users by their Twitter handle in alphabetical order
export const sortUsers = (users) => users.sort(userSortCompare);

// Constructor for an object to be stored in the `add` or `del` state
export const changeObj = (id, name) => ({ id, name, users: [] });

// Helper to output a string of a number & a quantifiable noun
export const numberNoun = (num, noun, plural = `${noun}s`) => `${num} ${num === 1 ? noun : plural}`;
