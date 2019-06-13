<template>
    <div class="logout_btn">
        <div @click="logOut"><span>Uitloggen</span></div>
    </div>
</template>

<script>
    export default {
        name: "logout",
        methods:{
            logOut(){
                this.$store.commit('DESTROY_TOKEN',() => {
                    this.$router.push({name: 'login'});
                });
            }
        }
    }
</script>

<style scoped>
    .logout_btn{
        float: right;
        padding: 1%;
        background: lightgray;
        margin: 20px 20px;
        color: white;
        font-weight: bold;
    }
</style>