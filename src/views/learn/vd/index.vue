<template>
  <FormStructure>
    <template v-slot:header>
      <HeadTitle title="策略模式表单校验" left-text="返回" left-arrow />
    </template>
    <template v-slot:main>
      <FormDate placeholder="请选择时间" v-model="formData.date" label="申请日期" :required="true" />
      <FormInputCol placeholder="请输入" v-model="formData.username" label="用户名" :required="true" />
      <FormInputCol
        placeholder="请输入"
        v-model="formData.phone"
        type="email"
        label="手机号"
        :required="true"
      />
      <FormSelect
        label="性别"
        placeholder="请选择"
        :required="true"
        :columns="sexList"
        v-model="formData.sex"
      />
    </template>
    <template v-slot:footer>
      <FormButtom @click="submit_click" />
    </template>
  </FormStructure>
</template>
<script>
import { Validator } from "@/libs/validate.js";
export default {
  data() {
    return {
      formData: {
        date: "",
        phone: "",
        sex: "",
        username: ""
      },
      sexList: [
        {
          text: "男",
          value: "M"
        },
        {
          text: "女",
          value: "F"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() { },
  methods: {
    submit_click() {
      let errorMsg = this.validateFunc();
      if (errorMsg) {
        this.$toast(errorMsg);
        return false;
      }
      alert("成功");
    },
    validateFunc() {
      let validator = new Validator();
      validator.add(this.formData.date, "isNotEmpty", "请选择申请日期");
      validator.add(this.formData.username, "minLength:3", "3位汉字中文");
      validator.add(this.formData.phone, "mobileFormat", "手机号码格式不正确");
      validator.add(this.formData.sex, "isNotEmpty", "请选择性别");

      var errorMsg = validator.start(); // 获得效验结果
      return errorMsg; // 返回效验结果
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  background-color: var(--color);
}
</style>
