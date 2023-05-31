<template>
    <div class="v-popup">
        <div class="v-popup-header">
            <button class="v-popup-close-btn" @click="closePopup"><i class="material-icons">close</i></button>
        </div>
        <div class="v-popup-content">
            <slot></slot>
        </div>
        <div class="v-popup-footer">
            <button class="v-popup-add-to-cart-btn" @click="addToCart">Add to cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            closePopup() {
                this.$emit("closePopup");
            },
            addToCart() {
                this.$emit("addToCart");
            }
        }
    }
</script>

<style>
    .v-popup {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50px;
        left: 652px;
        width: 600px;
        box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        background-color: #EDF5E1;
    }

    .v-popup-header {
        display: flex;
        justify-content: right;
        align-items: right;
    }

    .v-popup-close-btn {
        border: none;
        background-color: transparent;
    }

    .v-popup-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .v-popup-footer {
        display: inline-block;
        justify-content: space-between;
        align-items: center;
    }

    .v-popup-add-to-cart-btn {
        width: 140px;
        height: 45px;
        font-size: large;
        border: none;
        border-radius: 5px;
        background-color: #8EE4AF;
        color: #05386B;
        margin-bottom: 30px;
    }

    .v-popup-add-to-cart-btn:hover {
        color: aliceblue;
        background-color: #05386B;
    }
</style>