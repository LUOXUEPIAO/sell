<template>
    <div class="goods">
      <div class="menu-wrapper">
          <li v-for="(item, index) in goods" :key="index" class="menu-item">
              <span class="text border-1px" >
                  <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
              </span>
          </li>
      </div>
      <div class="foods-wrapper"></div>
    </div>
</template>
<script>
const ERR_OK = 0
export default {
    props: {
        seller: Object
    },
    data () {
        return {
          goods: []
        }
    },
    created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        this.$http.get('/api/goods').then((res) => {
            res = res.body
            if (res.errno === ERR_OK) {
                  this.goods = res.data
            }
        })
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/mixin'
.goods
    position :absolute
    top:174px
    width:100%
    bottom :46px
    display :flex
    overflow :hidden
    .menu-wrapper
        flex :0 0 80px
        width :80px
        background-color :#f3f5f7
        .menu-item
            display :table
            height :54px
            width:56px
            line-height :14px
            padding :0 12px
            .icon
                vertical-align :top
                display :inline-block
                width :12px
                height :12px
                margin-right :2px
                background-size :12px 12px
                background-repeat :no-repeat
                &.decrease
                    background-image :url(../assets/img/decrease_3@2x.png)
                &.discount
                    background-image :url(../assets/img/discount_3@2x.png)
                &.guarantee
                    background-image :url(../assets/img/guarantee_3@2x.png)
                &.invoice
                    background-image :url(../assets/img/invoice_3@2x.png)
                &.special
                    background-image :url(../assets/img/special_3@2x.png)
            .text
                font-size :12px
                display :table-cell
                width :56px
                vertical-align :middle
                border-1px(rgba(7,17,27,0.1))
    .foods-wrapper
        flex :1
</style>
