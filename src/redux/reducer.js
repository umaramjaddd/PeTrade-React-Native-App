import questions from '../questions';

const initialState = {
    answers: Array(questions.length).fill(0),
};

export const reducer = (state = initialState, action) => {
    const clone = require('rfdc')();

    switch(action.type) {
    case 'set-answer':
        const payload = action.payload;
        const index = payload.index;
        const option = payload.option;
        
        const newState = clone(state);
        newState.answers[index] = option;

        return newState;

    default: return initialState;
    }
}
