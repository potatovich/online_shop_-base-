<template>
    <div class="v-catalog-item">

        <div class="v-catalog-item-popup-background" v-if="isPopupVisible">
            <vPopup v-if="isPopupVisible" @closePopup="closePopup" @addToCart="addProductToCart">
                <img class="v-catalog-item-popup-image" :src="product_data.image" alt="img">
                <p class="v-catalog-item-popup-title"><b>{{ product_data.title }}</b></p>
                <p class="v-catalog-item-popup-description"><b>Description:</b> {{ product_data.description }}</p>
                <p class="v-catalog-item-popup-price"> Rating: <b>{{ product_data.rating.rate }}</b> Price: <b>{{ product_data.price }}$</b></p>
            </vPopup>
        </div>

        <img class="v-catalog-item-image" :src="product_data.image" alt="img">
        <p class="v-catalog-item-title">{{ product_data.title }}</p>
        <p class="v-catalog-item-price">Price: <b>{{ product_data.price }}$</b></p>
        <p class="v-catalog-item-rate">Rating: <b>{{ product_data.rating.rate }}</b> Reviews: <b>{{ product_data.rating.count }}</b></p>
        <div class="v-catalog-item-buttons">
            <button class="v-catalog-item-show-info-btn" @click="showPopup">···</button>
            <button class="v-catalog-item-add-to-cart-btn" @click="addProductToCart">Add to cart</button>
        </div>
    </div>
</template>

<script>
    import vPopup from "./v-popup.vue"

    export default {
        name: "v-catalog-item",
        components: {
            vPopup
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isPopupVisible: false
            };
        },
        computed: {},
        methods: {
            showPopup() {
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            },
            addProductToCart() {
                const prodData = this.product_data;
                prodData.amount = 1;
                this.$emit("addProductToCart", this.product_data)
            }
        },
        watch: {},
    }
</script>

<style>
    .v-catalog-item-image,
    .v-catalog-item-popup-image {
        width: 150px;
        height: 150px;
        object-fit: contain;
        border: 6px solid #b0f0c9;
        border-radius: 5px;
        background-color: white;
        margin-bottom: 10px;
    }

    .v-catalog-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 240px;
        height: 380px;
        border-radius: 8px;
        box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
        background-color: #EDF5E1;
        margin-bottom: 20px;
        padding: 20px 0 20px 0;
    }

    .v-catalog-item-title {
        width: 225px;
        height: 72px;
        margin: auto;
    }

    .v-catalog-item-price {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .v-catalog-item-rate {
        margin-bottom: 30px;
    }

    .v-catalog-item-buttons {
        display: inline-flex;
    }

    .v-catalog-item-show-info-btn,
    .v-catalog-item-add-to-cart-btn {
        border: none;
        border-radius: 5px;
    }

    .v-catalog-item-show-info-btn {
        margin-right: 20px;
        font-size: xx-large;
        background-color: #46bb7b;
    }

    .v-catalog-item-add-to-cart-btn {
        width: 140px;
        height: 45px;
        font-size: large;
        background-color: #8EE4AF;
        color: #05386B;
    }

    .v-catalog-item-add-to-cart-btn:hover,
    .v-catalog-item-show-info-btn:hover {
        color: aliceblue;
        background-color: #05386B;
    }

    .v-catalog-item-popup-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }

    .v-catalog-item-popup-title {
        width: 400px;
        height: 50px;
    }

    .v-catalog-item-popup-description {
        width: 550px;
    }
</style>