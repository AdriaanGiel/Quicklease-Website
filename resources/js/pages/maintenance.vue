<template>
    <section class="animated fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <quicklease_nav></quicklease_nav>
                </div>
            </div>
        </div>
        <quicklease_header custom-width="100%" custom-view-box="0 40 500 380" textName="Onderhoud"
                           iconName="bicycle"></quicklease_header>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <unlockBike v-for="bike in bikes" :key="bike.id" :bike="bike"></unlockBike>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import quicklease_nav from "../components/quicklease-nav";
    import quicklease_header from "../components/quicklease_header";
    import unlockBike from "../components/buttons/unlockBike";
    import Logout from "../components/buttons/logout";
    import School from '../models/School';
    import Bike from '../models/Bike';

    export default {
        name: "maintenance",
        components: {
            quicklease_nav,
            quicklease_header,
            unlockBike,
            Logout
        },
        data: function () {
            return {
                newarray: [],
                locations: [],
                bikes: []
            }
        },
        created() {
            this.getData().then((results) => {
                this.locations = results.schools.data.schools;
                this.bikes = results.bikes.data.bikes;
            });
        },
        methods: {
            async getData() {
                let data = {};

                try {
                    data.schools = await School.all();
                    data.bikes = await Bike.all();

                    return data;

                } catch (e) {
                    console.log("Error:", e.message);
                }
            }
        }
    }
</script>

<style scoped>

</style>