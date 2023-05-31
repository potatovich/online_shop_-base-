<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "v-main-wrapper",
        components: {},
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style>
    .v-main-wrapper {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>