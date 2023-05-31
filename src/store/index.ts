interface NormalizingInt {
  products: Object[],
  cart: any[],
  categories: any[],
}

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore<NormalizingInt>({
  state: {
    products: [],
    cart: [],
    categories: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CATEGORIES(state) {
      return state.categories;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
      state.categories = categories;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        // state.cart.map(function (item) {
        //   if (item.id === product.id) {
        //     isProductExists = true;
        //     item.amount++;
        //   }
        // })
        for (let item of state.cart) {
          if (item.id === product.id) {
            isProductExists = true;
            // item.amount++;
          }
        }
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, id) => {
      state.cart = state.cart.filter((el) => {return el.id !== id});
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('https://fakestoreapi.com/products', {
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_PRODUCTS_CATEGORIES_FROM_API({commit}) {
      return axios('https://fakestoreapi.com/products/categories', {
        method: "GET"
      })
        .then((categories) => {
          commit('SET_CATEGORIES_TO_STATE', categories.data);
          return categories;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    ADD_PRODUCT_TO_CART({commit}, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({commit}, id) {
      commit("REMOVE_FROM_CART", id);
    }
  },
  modules: {
  }
})
