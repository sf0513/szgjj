<template>
    <div class="extract">
        <div class="extract_head">
            <top-bar></top-bar>
        </div>
        <div class="tabs">
            <ul>
                <li @click="show_first" id="select_1" class="active"> 立即提取</li>
                <li @click="show_second" id="select_2">更多提取</li>
            </ul>
            <div class="hr30"></div>
        </div>
        <!-- 立即提前-->
        <div v-if="show_item === 'index_first'">
            <div class="immediate_extraction_item">
                <div class="type">
                    <img class="img " src="../../assets/u27.png">
                    <div class="title">
                        <span>租房</span>
                    </div>
                </div>
                <div class="content">
                    <img src="../../assets/card_rent_house@2x.png">
                </div>
                <button>申请</button>
            </div>
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
                    select_1.style.color = "#f7ab00";
                    select_1.style.borderBottom = "0.06rem solid #f7ab00";
                    select_1.style.height = "0.54rem";

                    select_2.style.color = "black";
                    select_2.style.borderBottom = "none";

                } else if (this.show_item === "index_second") {
                    select_2.style.color = "#f7ab00";
                    select_2.style.borderBottom = "0.06rem solid #f7ab00";
                    select_2.style.height = "0.54rem";

                    select_1.style.color = "black";
                    select_1.style.borderBottom = "none";

                }
            }
        }
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

    .hr30 {
        height: 0.3rem;
        background: #EFEFEF;
    }

    .extract .tabs {
        height: 0.9rem;
        background: #EFEFEF;
        font-size: 0.28rem;
    }

    .extract .tabs ul {
        height: 0.6rem;
        line-height: 0.6rem;
    }

    .extract .tabs li {
        float: left;
        width: 3.35rem;
        margin: 0 0.2rem;
    }

    .extract .tabs .active {
        border-bottom: 0.06rem solid #f7ab00;
        height: 0.54rem;
        color: #f7ab00;
    }

    /*立即提取每一块*/
    .immediate_extraction_item {
        position: relative;
        height: 2.5rem;
        background: white;
    }

    .immediate_extraction_item .type {
        text-align: center;
    }

    .immediate_extraction_item .type .img {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 3.5rem;
        height: 30px;
    }

    .immediate_extraction_item .type .title {
        position: absolute;
        left: 2px;
        top: 8px;
        word-wrap: break-word;
    }

    .immediate_extraction_item .type span {
        color: white;
    }
</style>