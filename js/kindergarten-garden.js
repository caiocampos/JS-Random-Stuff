export class Garden {
    constructor(diagram, students = kinder) {
        const lines = diagram.split('\n');
        const sorted = students.sort();
        for (let i = 0; i < sorted.length; i++) {
            const j = i * 2;
            this[sorted[i].toLowerCase()] = [
                plants[lines[0][j]],
                plants[lines[0][j + 1]],
                plants[lines[1][j]],
                plants[lines[1][j + 1]]
            ];
        }
    }
}

const plants = {
    'G': 'grass',
    'C': 'clover',
    'R': 'radishes',
    'V': 'violets'
};

const kinder = [
    'Alice', 'Bob', 'Charlie', 'David',
    'Eve', 'Fred', 'Ginny', 'Harriet',
    'Ileana', 'Joseph', 'Kincaid', 'Larry'
];