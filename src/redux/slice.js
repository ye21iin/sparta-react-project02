import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pokemons: [],
  selected: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // 상태 업데이트 함수
    setPokemons: (state, action) => {
      state.pokemons = action.payload.map((mon) => ({
        ...mon,
        isSelected: false,
      }));
    },

    // 포켓몬 추가하기
    handleAdd: (state, action) => {
      const id = action.payload;
      const { pokemons, selected } = state;
      // 실행 순간 selected 개체 수가 6개 이상이면 early-return
      if (selected.length >= 6) {
        toast.warning("포켓몬 수는 6마리를 초과할 수 없습니다.");
        return;
      }
      // 이미 선택된 포켓몬이 아니면 추가하기
      if (!selected.some((mon) => mon.id === id)) {
        const updatedPokemons = pokemons.map((mon) =>
          mon.id === id ? { ...mon, isSelected: true } : mon
        );
        const selectedPokemon = updatedPokemons.find((mon) => mon.id === id);
        if (selectedPokemon) {
          state.selected = [...selected, selectedPokemon];
          state.pokemons = updatedPokemons.filter((mon) => mon.id !== id);
        }
      }
    },

    // 포켓몬 삭제하기
    handleDelete: (state, action) => {
      const id = action.payload;
      const { pokemons, selected } = state;

      // selected에서 해당 포켓몬을 삭제
      const targetPokemon = selected.find((mon) => mon.id === id);
      if (targetPokemon) {
        // 삭제된 포켓몬을 pokemons 배열에 추가 (isSelected: false로)
        state.selected = selected.filter((mon) => mon.id !== id);
        state.pokemons = [
          ...pokemons,
          { ...targetPokemon, isSelected: false },
        ].sort((a, b) => a.id - b.id); // 정렬 추가
      }
    },
  },
});

export const { setPokemons, handleAdd, handleDelete } = pokemonSlice.actions;
export default pokemonSlice.reducer;
