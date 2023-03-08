import { createStore } from  'vuex';

const store = createStore({
    state: {
        count: 0,
        products: [],
        // buy: {},
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload;
            console.log(state.products);
        },
        // setBuy(state, payload){
        //     state.buy[payload.id] = payload
        // }
    },
    actions: {
        async fetchData({commit}) {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                const d = await res.json()
                const data = d.results
                commit('setProducts', data)
            } catch (error) {
                console.log(error);
            }
        },
        // addBuy({commit, state}, products) {
        //     state.buy.hasOwnProperty(products.id)
        //     ? products.cantidad = state.buy[products.id].cantidad + 1
        //     : products.cantidad - 1;
        //     commit('setBuy', products)
        // },
        // increment({commit}) {
        //     this.count++
        //     commit('icrement', count)
        // }
    },
    modules: {},
})

export default store;