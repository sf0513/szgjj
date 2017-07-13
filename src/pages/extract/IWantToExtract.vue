<template>
    <div class="extract">
        <top-bar></top-bar>
        <router-link to="/pages/extract/ImmediateExtraction">
            <span>立即提取</span></router-link>
        <router-link to="/pages/extract/MoreExtraction">
            <span>更多提取</span>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import topBar from '../../components/top-bar.vue';

    export default {
        data () {
            return {}
        },
        components: {
            topBar
        },

//        beforeRouteUpdate (to, from, next) {
//            this.$router.push("/pages/extract/ImmediateExtraction");
//            // 在当前路由改变，但是该组件被复用时调用
//            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//            // 可以访问组件实例 `this`
//        }
//        beforeRouteLeave (to, from, next) {
//            this.$router.push('/pages/extract/ImmediateExtraction');
//
//            // 导航离开该组件的对应路由时调用
//            // 可以访问组件实例 `this`
//        }
    }
</script>

<style scoped>
    span {
        font-size: 16px;
    }
</style>