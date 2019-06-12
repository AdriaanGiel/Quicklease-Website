<template>
    <section class="animated fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <quicklease_nav ></quicklease_nav>
                </div>
            </div>
        </div>
        <quicklease_header textName="Ophalen" iconName="bicycle"></quicklease_header>
        <div class="container">
            <div class="row">
                <div class="col-sm-5 col-md-5 col-lg-5">
                    <location-button class="location-overview-grid" :location="location" v-for="location in locations" :key="location.id"></location-button>
                </div>
                <div class="col-sm-7 col-md-7 col-lg-7">

                    <unlockBike v-for="bike in bikes" :key="bike.id" :bike="bike"></unlockBike>
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                    <!--<unlockBike></unlockBike>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import quicklease_nav from "../components/quicklease-nav";
    import quicklease_header from "../components/quicklease_header";
    import unlockBike from "../components/buttons/unlockBike";
    import LocationButton from "../components/buttons/locationButton";
    import Logout from "../components/buttons/logout";
    import School from '../models/School';
    import Bike from '../models/Bike';

    export default {
        name: "collect",
        components:{
            quicklease_nav,
            quicklease_header,
            unlockBike,
            LocationButton,
            Logout
        },
        data: function () {
            return {
                newarray: [],
                locations: [{
                    id: "1",
                    name: "Wijnhaven",
                    type: "Hogeschool locatie",
                    amount: "15 fietsen ophalen"
                }],
                bikes:[]
            }
        },
        created(){
            this.getData().then((results) => {
                this.locations = results.schools.data.schools;
                this.bikes = results.bikes.data.bikes;
            });
        },
        methods:{
            async getData(){
                let data = {};

                try{
                    data.schools = await School.all();
                    data.bikes = await Bike.all();

                    return data;
                    
                }catch (e) {
                    console.log("Error:", e.message);
                }
            }
        }
    }
</script>

<style scoped>
    .unlockBike-holder{
        width: 41%;
    }
    .location{
        padding: 15% 8%;
    }
</style>