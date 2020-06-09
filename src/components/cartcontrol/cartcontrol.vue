<template>
    <div class="cartcontrol">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click.stop.prevent="decreaseCart"></div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
     food: {
         type: Object
     }
    },
    created () {
        // console.log(this.food)
    },
    methods: {
        addCart () {
           // console.log('click')
          if (!this.food.count) {
              // this.food.count = 1 当需要给一个对象添加一个新的属性时，在dom中是不能实时监测到数据的改变的，需要使用下面的Vue.set方法
             Vue.set(this.food, 'count', 1)
          } else {
              this.food.count++
          }
         // this.$dispath('cart.add')
        },
        decreaseCart () {
        if (this.food.count) {
            this.food.count--
        }
        }
    }
}
</script>
<style lang="stylus" scoped>
.cartcontrol
    font-size:0
    .cart-decrease, .cart-add
     display :inline-block
     padding :6px
     line-height :24px
     font-size: 24px
     color: rgb(0,160,220)
    .cart-count
         display :inline-block
         font-size :10px
         vertical-align :top
         width :12px
         padding-top:6px
         line-height :24px
         text-align :center
         color :rgb(147,153,159)
    .cart-add
        display :inline-block
</style>
