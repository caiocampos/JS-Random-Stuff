export const hey = (message) => {
  message = !message ? '' : message.trimRight();
  const question = message.endsWith('?');
  const upper = message.search(/[A-Z]/) > -1 && message.search(/[a-z]/) === -1;
  const empty = !message;
  switch (true) {
    case question && upper: return "Calm down, I know what I'm doing!";
    case question: return 'Sure.';
    case upper && !empty: return 'Whoa, chill out!';
    case empty: return 'Fine. Be that way!';
    default: return 'Whatever.';
  }
};
