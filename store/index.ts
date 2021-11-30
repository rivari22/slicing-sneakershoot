import { IListShoes, listShoes } from '@/assets/mocks/ListShoes';

interface ICart {
  totalPrice: number;
  items: Array<IListShoes | null>;
}

interface IShoes {
  shoes: Array<IListShoes>;
}

export const state = () => ({
  shoes: listShoes,
  cart: {
    totalPrice: 0,
    items: []
  }
});

export const getters = {
  getProductDetail: (state: IShoes) => (id: string) => {
    return state.shoes.find((item: { id: number }) => item.id === +id);
  }
};

export const mutations = {
  setFavorite: (
    state: IShoes,
    payload: { id: number; isFavorite: boolean }
  ) => {
    state.shoes.find((item, index) => {
      if (item.id === payload.id) {
        state.shoes[index].isFavorite = payload.isFavorite;
        return true;
      }
      return false;
    });
  },
  addToCart: (
    state: { shoes: Array<IListShoes>; cart: ICart },
    payload: { product: IListShoes }
  ) => {
    state.cart.totalPrice += +payload.product.price;
    state.cart.items.push(payload.product);
    state.shoes.find((item, index) => {
      if (item.id === payload.product.id) {
        state.shoes[index].isInTheCart = true;
        return true;
      }
      return false;
    });
  }
};
