<template>
    <div class="c-data">
        <h3 class="c-data__temperature">{{ temperature }}°</h3>
        <p class="c-data__windspeed">{{ windspeed }} km/h</p>
        <p class="c-data__location">{{ location }}</p>
    </div>
</template>

<script>
export default {
    name: "DataCard",

    props: {
        temperature: Number,
        location: String,
        windspeed: Number
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/data.scss";
</style>