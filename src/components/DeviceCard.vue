<template>
    <div>
        <input
            type="checkbox"
            name="toggle"
            :id="`toggle${uniqueId}`"
            class="o-hide-accessible c-device__input"
            v-model="state"
        />

        <label :for="`toggle${uniqueId}`" class="c-device">
            <img :src="`./icons/icon_${icon}_${state}.svg`" class="c-device__icon" />
            <h3 class="c-device__name">{{ name }}</h3>
            <p class="c-device__location">{{ location }}</p>
        </label>
    </div>
</template>

<script>
export default {
    name: "DeviceCard",

    data() {
        return {
            uniqueId: 0,
            state: false
        };
    },

    props: {
        name: String,
        icon: String,
        location: String
    },

    created() {
        this.uniqueId = this.createUniqueId();
    },

    methods: {
        createUniqueId() {
            const randomId = Math.floor(Math.random() * 100000);
            console.log(randomId);
            return randomId;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/device.scss";
</style>