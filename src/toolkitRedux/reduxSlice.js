import { createSlice } from '@reduxjs/toolkit';

export const vocabSlice = createSlice({
  name: 'vocab',
  initialState: {
    vocab: [
      { id: 1, eng: 'whim', translate: 'прихоть' },
      { id: 2, eng: 'i consider that the', translate: 'я считаю, что' },
      { id: 3, eng: 'expressed', translate: 'выразил' },
      { id: 4, eng: 'goofball', translate: 'тупица' },
    ],
  },
  reducers: {
    addWord(state, action) {
      state.vocab.push({
        id: state.vocab.length + 1,
        eng: action.payload.eng,
        translate: action.payload.translate,
      });
    },
    removeWord(state, action) {
      state.vocab = state.vocab.filter((state) => state.id !== action.payload);
    },
    setWords(state, actions) {
      state.vocab = actions.payload;
    },
  },
});

export default vocabSlice.reducer;
export const { addWord, removeWord, setWords } = vocabSlice.actions;
