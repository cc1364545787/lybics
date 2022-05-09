
<template>
  <div style="height: 200px; margin: 100px 600px">
    <h1>切换身份</h1>
    <select v-model="value" size="medium" width="100px" placeholder="请选择角色">
    <option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </option>
  </select>
  <div style="margin-top: 30px">
  <Button type="error" size="large" @click="checkout(value)">确定切换</Button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeRole',
  data () {
    return {
      options: [{
        value: '1',
        label: '普通用户'
      }, {
        value: '2',
        label: '商家用户'
      }, {
        value: '3',
        label: '管理员'
      }],
      value: '1'
    };
  },
  methods: {
    checkout (value) {
      if (value === '1') {
        this.$router.push('/');
      }
      if (value === '2') {
        this.$router.push('/business');
      }
      if (value === '3') {
        this.$router.push('/administrator');
      }
    }
  }
};
</script>

<style scoped>

</style>
