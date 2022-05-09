<template>
  <div>
    <Table border :columns="columns" :data="order" size="large" no-data-text="你还有订单"></Table>
    <div class="page-size">
      <Page :total="100" show-sizer></Page>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myOdr',
  data () {
    return {
      order: [{
        order_id: 1529931938150,
        goods_id: 1529931938150,
        user_id: '李翠花',
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '5.6英寸',
        price: 5288.0,
        title: '苹果12 手机正品Phone12 Plus',
        createAt: '2022-04-06 20:06:08'
      },
      {
        order_id: 1529931938150,
        goods_id: 1529931938150,
        user_id: '王布',
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '5.6英寸',
        price: 5288.0,
        title: '苹果12 手机正品Phone12 Plus',
        createAt: '2022-04-06 20:06:08'
      },
      {
        order_id: 1529931938150,
        goods_id: 1529931938150,
        user_id: '树洞的秘密',
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '6.3英寸',
        price: 6388.0,
        title: '苹果12 手机正品Phone12 Plus',
        createAt: '2022-04-06 20:06:08'
      },
      {
        order_id: 1529931938150,
        goods_id: 1529931938150,
        user_id: '李小妹',
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '5.6英寸',
        price: 5288.0,
        title: '苹果12 手机正品Phone12 Plus',
        createAt: '2022-04-06 20:06:08'
      },
      {
        order_id: 1529931938150,
        goods_id: 1529931938150,
        user_id: '胡啊',
        count: 1,
        img: 'static/img/goodsDetail/pack/1.jpg',
        package: '6.3英寸',
        price: 5588.0,
        title: '苹果12 手机正品Phone12 Plus',
        createAt: '2022-04-06 20:06:08'
      }],
      columns: [
        {
          title: '订单号',
          key: 'order_id',
          width: 160,
          align: 'center'
        },
        {
          title: '消费者昵称',
          key: 'user_id',
          width: 140,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
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
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '套餐',
          width: 158,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 78,
          key: 'price',
          align: 'center'
        },
        {
          title: '购买时间',
          width: 120,
          key: 'createAt',
          align: 'center'
        }
      ]
    };
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
