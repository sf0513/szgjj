<template>
    <div class="extract">
        <top-bar></top-bar>
        <div class="item_select">
            <span @click="show_first" id="select_1">
                   立即提取
                </span>
            <span @click="show_second" id="select_2">
                    更多提取
                </span>
        </div>

        <!-- 立即提前-->
        <div v-if="show_item === 'index_first'">
            <p>立即提前</p>
        </div>

        <!--更多提取-->
        <div v-else-if="show_item === 'index_second'">
            <p>更多提前</p>
        </div>
    </div>
</template>

<script>
    import topBar from '../../components/top-bar.vue';

    export default {
        data () {
            return {
                show_item: "index_first"
            }
        },
        components: {
            topBar
        }, methods: {
            show_first(){
                this.show_item = "index_first";
                this.showSelect();
            },
            show_second(){
                this.show_item = "index_second";
                this.showSelect();
            },
            showSelect(){
                var select_1 = document.getElementById("select_1");
                var select_2 = document.getElementById("select_2");
                var select_3 = document.getElementById("select_3");
                if (this.show_item === "index_first") {
                    select_1.style.color = "orange";
                    select_1.style.borderBottom = "3px solid orange";
                    select_1.style.height = "0.4rem";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";


                } else if (this.show_item === "index_second") {
                    select_2.style.color = "orange";
                    select_2.style.borderBottom = "3px solid orange";
                    select_2.style.height = "0.4rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";

                }
            }
        }

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
    .extract {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #EFEFEF;
    }

    div {
        font-size: 16px;
    }

    .item_select {
        display: flex;
        vertical-align: middle;
        height: 30px;
    }

    .item_select span {
        flex: 1;
        margin-left: 4px;
        margin-right: 5px;
    }

    #select_1 {
        color: orange;
        border-bottom: 3px solid orange;
        height: 0.4rem;
    }
</style>