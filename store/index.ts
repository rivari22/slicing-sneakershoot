import { IListShoes, listShoes } from '@/assets/mocks/ListShoes';

export const state = () => ({
  shoes: listShoes
});

export const getters = {
  getProductDetail: (state: { shoes: Array<IListShoes> }) => (id: string) => {
    return state.shoes.find((item: { id: number }) => item.id === +id);
  }
};

export const mutations = {
  setFavorite: (state: { shoes: Array<IListShoes> }, payload :{index: number, isFavorite: boolean}) => {
    state.shoes[payload.index].isFavorite = payload.isFavorite
  }
};
