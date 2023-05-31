<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog-link-to-cart">Back</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!CART.length">There are no products in cart...</p>
        <div class="v-cart-total">
            <p>Total: <b>{{ cartTotalCost }}$</b></p>
        </div>
        <div class="v-cart-list-items">
            <vCartItem
                v-for="(item, index) in CART"
                :key="item.id"
                :cart_item_data="item" 
                @deleteFromCart="deleteFromCart(index)"
            />
        </div>
    </div>
</template>

<script>
    import vCartItem from "./v-cart-item.vue"
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "v-cart",
        components: {
            vCartItem
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                "CART"
            ]),
            cartTotalCost() {
                let result = [];

                for (let item of this.CART) {
                    result.push(item.price * item.amount);
                }

                if (result.length) {
                    result = result.reduce((sum, el) => {
                        return sum + el;
                    })
                } else {
                    result = 0;
                }

                return result.toFixed(2);
            }
        },
        methods: {
            // ...mapActions([
            //     "DELETE_FROM_CART"
            // ]),
            // deleteFromCart(index) {
            //     this.DELETE_FROM_CART(index);
            // }
        },
        watch: {}
    }
</script>

<style>
    .v-cart-total {
        height: 20px;
        position: absolute;
        top: 10px;
        right: 30%;
        padding: 16px;
        border-radius: 5px;
        border: solid 1px #aeaeae;
        background-color: #379683; 
        color: #ffffff;
    }

    .v-cart-total p {
        margin: 0;
    }
</style>