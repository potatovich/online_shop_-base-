<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart'}">
            <div class="v-catalog-link-to-cart">Cart: {{ CART.length }}</div>
        </router-link>
        <h1 class="title">AПYП'ов Store</h1>
        <div class="v-catalog-list-items">
            <vCatalogItem
                v-for="product in filteredProducts"
                :key="product.id"
                :product_data="product"
                @addProductToCart="addProductToCart"
            />
        </div>
        <div class="v-search">
            <input class="v-search-input" type="text" v-model="searchValue">
            <button class="v-search-btn" @click="sortProductsBySearchedValue">Search</button>
        </div>
        <div class="v-categories">
            <h1>Categories:</h1>
            <button @click="getProductsOfAllCategories">All categories</button>
            <button v-for="category in CATEGORIES" :value="category" @click="getValueFromCategoryButton">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</button>
        </div>
        <div class="v-sorting">
            <h1>Sorting:</h1>
            <button @click="getProductsNoSorting">No sorting</button>
            <button @click="sortByLowPrice">Sort by low price</button>
            <button @click="sortByHighPrice">Sort by high price</button>
            <button @click="sortByAlphabet">A-Z</button>
            <button @click="sortByAlphabetReversed">Z-A</button>
        </div>
    </div>
</template>

<script>
    import vCatalogItem from "./v-catalog-item.vue"
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {
                sortedProducts: [],
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
                "PRODUCTS",
                "CART",
                "CATEGORIES"
            ]),
            filteredProducts() {
                if (!this.sortedProducts.length) {
                    this.sortedProducts = this.PRODUCTS.slice();
                }
                return this.sortedProducts;
            }
        },
        methods: {
            ...mapActions([
                "GET_PRODUCTS_FROM_API",
                "GET_PRODUCTS_CATEGORIES_FROM_API",
                "ADD_PRODUCT_TO_CART"
            ]),
            addProductToCart(data) {
                if (this.CART.includes(data)) {
                    alert("This product has already been added to the cart!");
                } else {
                    this.ADD_PRODUCT_TO_CART(data);
                    alert("The product has been added to the cart!");
                }
            },
            getValueFromCategoryButton(e) {
                const categoryFromButton =  e.target.value;
                this.sortedProducts = this.PRODUCTS.filter((prod) => {
                    return prod.category == categoryFromButton;
                })
            },
            getProductsOfAllCategories() {
                this.sortedProducts = this.PRODUCTS.slice();
            },
            getProductsNoSorting() {
                this.sortedProducts = this.PRODUCTS.slice();
            },
            sortByLowPrice() {
                this.sortedProducts = this.sortedProducts.slice().sort((x, y) => {
                    return x.price - y.price;
                })
            },
            sortByHighPrice() {
                this.sortedProducts = this.sortedProducts.slice().sort((x, y) => {
                    return y.price - x.price;
                })
            },
            sortByAlphabet() {
                this.sortedProducts = this.sortedProducts.slice().sort((x, y) => {
                    if (x.title < y.title) {
                        return -1;
                    } else if (x.title > y.title) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
            },
            sortByAlphabetReversed() {
                this.sortedProducts = this.sortedProducts.slice().sort((x, y) => {
                    if (x.title > y.title) {
                        return -1;
                    } else if (x.title < y.title) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
            },
            sortProductsBySearchedValue() {
                const value = this.searchValue;
                this.searchValue = '';
                if (value) {
                    this.sortedProducts = this.sortedProducts.filter((item) => {
                        return item.title.toLowerCase().includes(value.toLowerCase())
                    })
                } else {
                    this.sortedProducts = this.PRODUCTS.slice();
                }
            }
        },
        watch: {},
        mounted() {
            this.GET_PRODUCTS_FROM_API(),
            this.GET_PRODUCTS_CATEGORIES_FROM_API()
        }
    }
</script>

<style>
    .title, .v-catalog {
        width: 1000px;
    }

    .v-catalog-link-to-cart,
    .v-categories button,
    .v-sorting button,
    .v-search-btn {
        border-radius: 5px;
        border: solid 1px #aeaeae;
        background-color: #379683; 
        color: #ffffff;
    }

    .v-search-input {
        width: 270px;
        border-radius: 5px;
        border: solid 1px #aeaeae;
        color: #05386B;
    }

    .v-catalog-link-to-cart {
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 16px;
    }

    .v-catalog-list-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .v-search {
        width: 400px;
        position: fixed;
    }

    .v-categories,
    .v-sorting {
        width: 320px;
        position: fixed;
    }

    .v-search {
        top: 3%;
        left: 20px;
        display: inline-block;
    }

    .v-categories {
        top: 10%;
        left: 20px;
    }

    .v-sorting {
        top: 50%;
        left: 20px;
    }

    .v-search-input,
    .v-search-btn {
        height: 60px;
        font-size: xx-large;
    }

    .v-categories button,
    .v-sorting button {
        width: 320px;
        height: 60px;
        font-size: xx-large;
    }

    .v-categories button:hover,
    .v-sorting button:hover,
    .v-search-btn:hover {
        color: aliceblue;
        background-color: #05386B;
    }
</style>