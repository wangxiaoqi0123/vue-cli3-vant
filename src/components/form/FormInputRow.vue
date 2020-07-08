<template>
  <div class="inp" @click="onClick">
    <p :class="{'required':required}">{{ label }}</p>
    <div class="inp-box">
      <van-field
        ref="inp"
        v-model="value"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :maxlength="maxlength"
      />
    </div>
  </div>
</template>
<script>
export default {
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
  mounted() {
    this.value = this.$attrs.value;
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClick() {
      this.$refs.inp.focus();
      this.$emit("click");
    }
  },
  watch: {
    "$attrs.value": {
      deep: true,
      handler(newV, oldV) {
        this.value = newV;
      }
    },
    value(newV, oldV) {
      this.$emit("input", newV);
    }
  }
};
</script>
<style lang="less" scoped>
.inp {
  height: 104px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-size: 30px;
  border-bottom: 1px dashed rgba(235, 235, 235, 1); /* px */
  & > p {
    height: 42px;
    font-weight: 400;
    line-height: 42px;
    min-width: 160px;
    margin-right: 25px;
    font-size: @form-input-size;
    color: @form-label-color;
    flex-shrink: 0;
    font-family: PingFang SC;
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

  .inp-box {
    flex: 1;
    display: flex;
    align-items: center;
    height: 102px;
    box-sizing: border-box;
    /deep/ .van-cell {
      flex: 1;
      padding: 0;
      input {
        display: block;
        margin: 0;
        outline: none;
        border: none;
        padding: 0;
        height: 64px;
        line-height: 64px;
        text-align: right;
        font-size: @form-input-size;
        color: @form-input-color;
      }
    }
  }
}
</style>
