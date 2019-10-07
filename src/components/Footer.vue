<template>
    <footer class="c-footer">
        <container>
            <row>
                <p>Nicolas Maas &copy; {{ year }}</p>
            </row>
        </container>
    </footer>
</template>

<script>
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";

export default {
    data() {
        return {
            year: ""
        };
    },

    components: {
        Container,
        Row
    },

    created() {
        this.getTheYear();
    },

    methods: {
        getTheYear() {
            let date = new Date();

            this.year = date.getFullYear();
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/footer.scss";
</style>