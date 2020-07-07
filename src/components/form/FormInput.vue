<template>
  <div
    class="inp"
    @click="onClick"
  >
    <p :class="{'required':required}">{{ label }}</p>
    <div class="inp-box">
      <van-field
        ref="inp"
        v-model="value"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :maxlength='maxlength'
      />
    </div>
  </div>
</template>
<script>
export default {
  // model: {
  //   prop: "modelValue"
  // },
  props: {
    label: {
      type: String,
      default: () => ""
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    readonly: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => "text"
    },
    maxlength: {
      type: String | Number | undefined,
      default: () => 225
    },
    required: {
      type: Boolean,
      default: () => false
    }
  },
  mounted () {
    this.value = this.$attrs.value;
  },
  data () {
    return {
      value: ""
    };
  },
  methods: {
    onClick () {
      this.$refs.inp.focus();
      this.$emit("click");
    }
  },
  watch: {
    "$attrs.value": {
      deep: true,
      handler (newV, oldV) {
        this.value = newV;
      }
    },
    value (newV, oldV) {
      this.$emit("input", newV);
    }
  }
};
</script>
<style lang="less" scoped>
.inp {
  width: 100%;
  & > p {
    height: 40px;
    font-size: @form-label-size;
    color: @form-label-color;
    font-weight: 400;
    width: 100%;
    margin: 0;
    line-height: 40px;
    padding: 50px 0 8px;
  }
  .required::before {
    content: "*";
    display: inline-block;
    width: 24px;
    text-align: left;
    height: 42px;
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    color: #e25e5c;
  }
}
.inp-box {
  flex: 1;
  height: 66px;
  display: flex;
  align-items: center;
  /deep/ .van-cell {
    padding: 0;
    margin: 0;
    .van-field__body {
      padding: 0;
      margin: 0;
      input {
        padding: 0;
        margin: 0;
        font-size: @form-input-size;
        color: @form-input-color;
      }
    }
  }
}
</style>
