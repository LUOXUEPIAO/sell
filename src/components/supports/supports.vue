<template>
    <div>
          <div class="title">
                       <div class="line"></div>
                       <div class="text">优惠信息</div>
                       <div class="line"></div>
                   </div>
                   <ul v-if="seller.supports" class="supports_box">
                       <li class="support-item" v-for="(item, index) in seller.supports" :key="index">
                           <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                           <span class="text">{{seller.supports[index].description}}</span>
                       </li>
                   </ul>
    </div>
</template>
<script>
export default {
      props: {
        seller: Object
    },
     created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
}
</script>
<style scoped>
.supports_box:last-child{
    margin-bottom :0
}
.supports_box .support-item .decrease{
     background-image :url(../../assets/img/decrease_2@2x.png)
}
.supports_box .support-item .discount{
     background-image :url(../../assets/img/discount_2@2x.png)
}
.supports_box .support-item .guarantee{
     background-image :url(../../assets/img/guarantee_2@2x.png)
}
.supports_box .support-item .invoice{
     background-image :url(../../assets/img/invoice_2@2x.png)
}
.supports_box .support-item .special{
     background-image :url(../../assets/img/special_2@2x.png)
}
.supports_box .support-item{
               padding :0 16px;
               margin-bottom :12px;
               font-size :0;
}
.supports_box .support-item .icon{
                                    display :inline-block;
                                    width :15px;
                                    height :16px;
                                    vertical-align :top;
                                    margin-right :6px;
                                    background-size :16px 16px;
                                    background-repeat :no-repeat;
}
.supports_box .support-item .text{
                                line-height :16px;
                                font-size:12px;
}
</style>
