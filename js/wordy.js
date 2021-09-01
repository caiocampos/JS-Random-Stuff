const REGEX = /(-?\d+) ([^0-9-]+) (-?\d+)(st|nd|rd|th)? ?(power)?/;
const ORDINALS = ['st', 'nd', 'rd', 'th'];

export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        if (!this.question.startsWith('What is ')) {
            throw new ArgumentError('Non-math question')
        }
        let problem = this.question.replace('What is ', '');
        let answer = 0;
        while (problem) {
            let [, n1, op1, n2, op2, op3, rem] = problem.split(REGEX);
            n1 |= 0;
            n2 |= 0;
            switch (true) {
                case op1 === 'plus':
                    answer = n1 + n2;
                    break;
                case op1 === 'minus':
                    answer = n1 - n2;
                    break;
                case op1 === 'multiplied by':
                    answer = n1 * n2;
                    break;
                case op1 === 'divided by':
                    answer = n1 / n2;
                    break;
                case op1 === 'raised to the' && op3 === 'power' && ORDINALS.contains(op2):
                    answer = Math.pow(n1, n2);
                    break;
                default: throw new ArgumentError('Unsupported operation');
            }
            if (rem === '?') {
                break;
            } else {
                problem = answer + ' ' + rem;
            }
        }
        return answer;
    }
}

export function ArgumentError(message) {
    this.message = message;
    this.name = 'ArgumentError';
}