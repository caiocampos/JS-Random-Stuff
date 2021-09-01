const FIRST_GIFT = 'a Partridge in a Pear Tree';

const DAYS = [
  { n: 0, th: 'first', gift: 'twelve Drummers Drumming' },
  { n: 1, th: 'second', gift: 'eleven Pipers Piping' },
  { n: 2, th: 'third', gift: 'ten Lords-a-Leaping' },
  { n: 3, th: 'fourth', gift: 'nine Ladies Dancing' },
  { n: 4, th: 'fifth', gift: 'eight Maids-a-Milking' },
  { n: 5, th: 'sixth', gift: 'seven Swans-a-Swimming' },
  { n: 6, th: 'seventh', gift: 'six Geese-a-Laying' },
  { n: 7, th: 'eighth', gift: 'five Gold Rings' },
  { n: 8, th: 'ninth', gift: 'four Calling Birds' },
  { n: 9, th: 'tenth', gift: 'three French Hens' },
  { n: 10, th: 'eleventh', gift: 'two Turtle Doves' },
  { n: 11, th: 'twelfth', gift: 'and ' + FIRST_GIFT }
];

export const recite = (first, last) => {
  if (!last) {
    return reciteDay(first - 1);
  }
  return DAYS.slice(first - 1, last).map(day => reciteDay(day.n)).join('\n');
};

function reciteDay(day) {
  return `On the ${DAYS[day].th} day of Christmas my true love gave to me: ${!day ? FIRST_GIFT : DAYS.slice(11 - day, 12).map(d => d.gift).join(', ')}.\n`;
}