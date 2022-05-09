<template>
<div>
  <h1 style="margin: 30px 40px;">
    录入商品信息：
  </h1>
  <div style="margin:50px 80px; font-size: 18px">
    <div style="margin: 10px">商品名称：
    <input v-model="proArr.name" type="text" placeholder="请输入商品名称"><br>
    </div>
    <div style="margin: 10px">商品编号：
    <input v-model="proArr.number" type="text" placeholder="请输入商品编号"><br>
    </div>
    <div style="margin: 10px">商品图片：
    <input v-model="proArr.img" type="text" placeholder="请输入商品图片"><br>
    </div>
    <div style="margin: 10px">商品标题：
    <input v-model="proArr.title" type="text" placeholder="请输入商品标题"><br>
    </div>
    <div style="margin: 10px">商品价格：
    <input v-model="proArr.price" type="text" placeholder="请输入商品价格"><br>
    </div>
    <div style="margin: 10px">商品套餐：
    <input v-model="proArr.style" type="text" placeholder="请输入商品标题"><br>
    </div>
    <div style="margin: 10px">库存数量：
    <input v-model="proArr.many" type="text" placeholder="请输入库存数量"><br>
    </div>
  </div>
  <div style="margin: 60px 150px">
      <Button type="primary" size="large" @click="submit">确定提交</Button>
      <Button type="ghost" size="large" @click="clear">清空信息</Button>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { eventBus } from '../../utils/eventbus';

export default {
  name: 'myAds',
  data () {
    return {
      proArr: {
        name: '',
        number: '',
        img: '',
        title: '',
        price: '',
        style: '',
        many: '',
        delete: '下架'
      }
    };
  },
  methods: {
    submit () {
      eventBus.$emit('sendPro', this.proArr);
      this.$Message.success('提交成功');
      this.proArr = {
        name: '',
        number: '',
        img: '',
        title: '',
        price: '',
        style: '',
        many: ''
      };
    },
    clear () {
      this.proArr = {
        name: '',
        number: '',
        img: '',
        title: '',
        price: '',
        style: '',
        many: ''
      };
    }
  },
  store
};
</script>

<style scoped>

</style>
