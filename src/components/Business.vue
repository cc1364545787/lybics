<template>
  <div class="container">
    <Layout class="layout">
      <Sider class="side-bar" :style="{height: 'calc(100vh - 35px)', background: '#fff', overflow: 'auto'}" ref="side" :collapsed-width="78">
        <Menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
          <div class="user-icon">
            <div class="user-img">
              <img src="static/img/head.png">
            </div>
            <p>李碧霞</p>
          </div>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cart"></Icon>
                <span>商品管理</span>
            </template>
            <MenuItem name="down">商品列表</MenuItem>
            <MenuItem name="upNew">上架新商品</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
                <Icon type="location"></Icon>
                <span>发货地址</span>
            </template>
            <MenuItem name="myAds">我的发货地址</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
                <Icon type="clipboard"></Icon>
                <span>商品订单</span>
            </template>
            <MenuItem name="myOdr">历史商品订单</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout class="layout">
        <Header :style="{background: '#fff'}">
          <h2>{{activeTitle}}</h2>
        </Header>
        <Content class="content">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
        <Footer class="layout-footer-center">2022 &copy; Libixia</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeTitle: '我的店铺',
      bar: {
        'upNew': '上架新商品',
        'down': '商品列表',
        'myAds': '我的发货地址',
        'myOdr': '历史商品订单'
      }
    };
  },
  methods: {
    onSelect (name) {
      this.activeTitle = this.bar[name];
      this.$router.push(`/business/${name}`);
    }
  }
};
</script>

<style scoped>
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin: 15px;
  background-color: #fff;
  padding: 15px;
}
.layout-footer-center {
  padding: 0px 15px;
  padding-bottom: 15px;
  text-align: center;
}
</style>
