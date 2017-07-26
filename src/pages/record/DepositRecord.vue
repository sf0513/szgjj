<template>
    <div class="record-background-div">
        <ul>
            <li v-for="(title, index) in menuTitls" @click="menuClick(title, index)" :class="{active: isActive === index}">{{ title }}</li>
        </ul>
    </div>
</template>


<script type="application/javascript">
    export default {
        name: 'deposit-record',
        data() {
            return {
                isActive: {
                    type: Boolean,
                    default: true
                },
                clickIndex: Number,
                menuTitls: ['缴存','提取','全部'],
            }
        },
        methods: {
            menuClick: function (title, index) {
                this.isActive = index;
                this.clickIndex = index;
                console.log('title:' + title + 'index:' + index + '//////' + this.isActive)
            }
        }
    }
</script>


<style scoped>

    ul {
    }

    li {
        width: 1rem;
        height: 40px;
        font-size: 15px;
        display: inline-block;
    }

    .active {
        color: orange;
        border-bottom: 2px solid orange;
    }
    .default-color {
        color: orange;
        border-bottom: 2px solid orange;
    }
</style>