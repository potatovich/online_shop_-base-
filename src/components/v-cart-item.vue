<template>
    <div class="v-cart-item">
        <img class="v-cart-item-image" :src="cart_item_data.image">
        <p class="v-cart-item-title">{{ cart_item_data.title }}</p>
        <p class="v-cart-item-price">Price: <b>{{ cart_item_data.price }}$</b></p>
        <button class="v-cart-plus-btn" @click="incrementItem">+</button>
        <div class="v-cart-item-amount">Amount: <b>{{ cart_item_data.amount }}</b></div>
        <button class="v-cart-minus-btn" @click="decrementItem">-</button>
        <button class="v-cart-delete-btn" @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        name: "v-cart-item",
        components: {},
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            ...mapActions([
                "DELETE_FROM_CART"
            ]),
            deleteFromCart() {
                this.DELETE_FROM_CART(this.cart_item_data.id)
            },
            decrementItem() {
                if(this.cart_item_data.amount > 1) {
                    this.cart_item_data.amount--;
                }
            },
            incrementItem() {
                this.cart_item_data.amount++;
            }
        },
        watch: {}
    }
</script>

<style>
    .v-cart-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
        background-color: #EDF5E1;
        margin-bottom: 20px;
        padding: 20px 0 20px 0;
    }
    
    .v-cart-item-image {
        width: 100px;
        height: 100px;
        object-fit: contain;
        border: 6px solid #b0f0c9;
        border-radius: 5px;        
        background-color: white;
        margin-left: 30px;
    }

    .v-cart-item-title {
        display: grid;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 120px;
        margin: 0 20px 0 20px;
    }

    .v-cart-item-price{
        width: 150px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .v-cart-plus-btn{
        margin-right: 5px;
    }

    .v-cart-item-amount {
        width: 100px;
    }

    .v-cart-minus-btn {
        margin-left: 20px;
        margin-right: 40px;
    }

    .v-cart-plus-btn,
    .v-cart-minus-btn {
        width: 45px;
        height: 45px;
        font-size: xx-large;
    }

    .v-cart-plus-btn,
    .v-cart-minus-btn,
    .v-cart-delete-btn {
        border: none;
        border-radius: 5px;
        background-color: #8EE4AF;
        color: #05386B;
    }

    .v-cart-delete-btn {
        width: 140px;
        height: 45px;
        font-size: large;
        margin-right: 20px;
    }

    .v-cart-delete-btn:hover,
    .v-cart-plus-btn:hover,
    .v-cart-minus-btn:hover {
        color: aliceblue;
        background-color: #05386B;
    }
</style>