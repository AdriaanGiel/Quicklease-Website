<template>
    <header class="header">
        <div class="container">
            <leaseplanButtonOrange class="leaseplanButton" :custom-width="customWidth" :custom-view-box="customViewBox" :textName="textName" :iconName="iconName"></leaseplanButtonOrange>
        </div>
    </header>
</template>

<script>
    import IconBase from "../components/IconBase";
    import leaseplanButtonOrange from '../components/buttons/leaseplanButtonOrange';

    export default {
        name: "header",
        props:['textName', 'iconName', 'customViewBox', 'customWidth'],
        components: {IconBase, leaseplanButtonOrange},
    }
</script>

<style lang="scss" scoped>
    .header{
        padding: 5%;
        width: 100%;
        height: 270px;
        background: linear-gradient(
                rgba(211,211,211, 0.45),
                rgba(211,211,211, 0.45)
        ),
        url("../../../docs/images/map.png");
    }
    .leaseplanButton{
        width: 26%;
        height: 200px;
    }

</style>