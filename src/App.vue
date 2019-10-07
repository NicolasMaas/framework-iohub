<template>
    <div id="app">
        <container>
            <row class="o-row--header">
                <h1>IO Hub</h1>

                <nav class="c-nav">
                    <router-link class="c-nav__link" to="/">Home</router-link>
                    <router-link class="c-nav__link" to="/settings">Settings</router-link>
                </nav>
            </row>
        </container>

        <router-view />

        <app-footer />
    </div>
</template>

<script>
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";
import AppFooter from "@/components/Footer";

export default {
    components: {
        Container,
        Row,
        AppFooter
    }
};
</script>

<style lang="scss">
@import "@/assets/style/screen.scss";
@import "@/assets/style/6-components/navigation.scss";
</style>
