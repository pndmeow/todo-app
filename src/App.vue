<template>
    <div class="night" id="app">
        <img
            v-if="theme"
            class="background-image"
            src="./assets/images/bg-desktop-dark.jpg"
            alt="dark-background">
        <img
            v-if="!theme"
            class="background-image"
            src="./assets/images/bg-desktop-light.jpg"
            alt="light-background">
        <Header />
        <Tasks/>
    </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {mapGetters} from 'vuex'

export default {
    components: {Header, Tasks},
    computed: {
        ...mapGetters(['getTheme']),
        theme() {
            return this.$store.state.theme
        },
    },

    watch: {
        getTheme: {
            deep: true,
            handler(newValue) {
                if (newValue) {
                    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
                } else {
                    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
                }
            }
        }
    }
}

</script>

<style lang="scss">
@import "assets/styles";
</style>
