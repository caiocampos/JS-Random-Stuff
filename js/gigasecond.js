// 1 gigasecond -> 1_000_000_000 seconds -> 1_000_000_000_000 milliseconds
const gigasecond_ms = 1000000000000; // milliseconds

export const gigasecond = (date) => {
  return new Date(date.getTime() + gigasecond_ms);
};
