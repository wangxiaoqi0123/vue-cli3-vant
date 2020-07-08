<template>
  <div class="inp">
    <p v-if="label" :class="{'required':required}">{{ label }}</p>
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
  model: {
    prop: "modelValue"
  },
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
    this.value = this.$attrs.modelValue;
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    "$attrs.modelValue": {
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
  width: 100%;
  & > p {
    height: 42px;
    font-size: @form-label-size;
    font-weight: 400;
    line-height: 42px;
    color: @form-label-color;
    padding: 30px 0 20px;
    margin: 0;
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
  display: flex;
  height: 84px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: @form-label-bgcolor;
  /deep/ .van-cell {
    background-color: @form-label-bgcolor;
    margin: 0;
    padding: 0;
    .van-field__body {
      padding: 0 40px;
      input {
        padding: 0;
        line-height: 64px;
        font-size: @form-input-size;
        color: @form-input-color;
      }
    }
  }

  /deep/.van-cell:not(:last-child)::after {
    border-width: 0;
  }
}
</style>
