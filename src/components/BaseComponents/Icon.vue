<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#icon-'+name"></use>
    </svg>
</template>


<script lang="js">
    export default {
        name: "Icon",
        props:['name']
    };
</script>

<style lang="scss" scoped>
    .icon {
        width: 1.5em;
        height: 1.5em;
        vertical-align: -0.15em;
        overflow: hidden;
        fill: currentColor;
        color: #858585;
    }
</style>