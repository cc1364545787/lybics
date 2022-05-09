<template>
  <div>
    <Table border :columns="columns" :data="order" size="large" no-data-text="你还有订单"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../utils/eventbus';
import { getItem, setItem } from '@/utils/localStorage';

export default {
  name: 'myOdr',
  data () {
    return {
      order: getItem('order'),
      columns: [
        {
          title: '商品名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '商品编号',
          key: 'number',
          width: 160,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 106,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '商品标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '价格',
          width: 88,
          key: 'price',
          align: 'center'
        },
        {
          title: '套餐',
          width: 128,
          key: 'style',
          align: 'center'
        },
        {
          title: '库存',
          width: 108,
          key: 'many',
          align: 'center'
        },
        {
          title: '操作',
          width: 118,
          key: 'delete',
          align: 'center'
        }
      ]
    };
  },
  created () {
    eventBus.$on('sendPro', (message) => {
      this.order.push(message);
      setItem('order', this.order);
    });
},
  methods: {
    delete (index) {
      this.order.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.page-size {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
