<template>
    <main>
        <container>
            <row>
                <h1>Home</h1>

                <h2>Device status</h2>
                <div class="c-devices">
                    <device-card
                        v-for="device in devices"
                        :key="device.id"
                        :name="device.name"
                        :icon="device.icon"
                        :location="device.location"
                    />
                </div>

                <h2>Wetter</h2>
                <div class="c-datas">
                    <data-card
                        v-for="w in weather"
                        :key="w.id"
                        :temperature="temperature"
                        :location="w.location"
                        :windspeed="w.windspeed"
                    />
                </div>
            </row>
        </container>
    </main>
</template>

<script>
import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";

import DeviceCard from "@/components/DeviceCard";
import DataCard from "@/components/DataCard";

export default {
    name: "Home",

    data() {
        return {
            devices: [
                {
                    id: 1,
                    name: "Lightbulb",
                    icon: "lampe",
                    location: "Kitchen"
                },
                {
                    id: 2,
                    name: "TV",
                    icon: "tv",
                    location: "Living Room"
                },
                {
                    id: 3,
                    name: "Window",
                    icon: "fenster",
                    location: "Bedroom"
                },
                {
                    id: 4,
                    name: "Lightbulb",
                    icon: "lampe",
                    location: "Toilet"
                }
            ],
            weather: [
                {
                    id: 1,
                    temperature: 22,
                    location: "Frankfurt",
                    windspeed: 23
                }
            ],
            temperature: 100
        };
    },

    components: {
        Container,
        Row,
        DeviceCard,
        DataCard
    },

    beforeMount() {
        this.getWeather();
    },

    sockets: {
        temperature(data) {
            console.log("Temperature is " + data.temperature);
            this.temperature = data.temperature;
        }
    },

    methods: {
        getWeather() {}
    }
};
</script>

<style lang="scss" scoped>
.c-devices,
.c-datas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
}
</style>
