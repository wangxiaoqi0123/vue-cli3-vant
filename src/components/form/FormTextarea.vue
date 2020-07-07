<template>
  <div
    class="textarea"
    @click="onClick"
  >
    <p :class="{'required':required}">{{ label }}</p>
    <van-field
      ref="textarea"
      type="textarea"
      v-model="value"
      :placeholder="placeholder"
      :readonly="readonly"
      :rows="rows"
      :autosize="autosize"
      :maxlength="maxlength"
      :show-word-limit="showWordLimit"
    />
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
    rows: {
      type: Number,
      default: () => undefined
    },
    autosize: {
      type: Boolean,
      default: () => false
    },
    maxlength: {
      type: Number | String,
      default: () => 225
    },
    showWordLimit: {
      type: Boolean,
      default: () => false
    },
    required: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      value: this.$attrs.modelValue
    };
  },
  methods: {
    onClick () {
      this.$refs.textarea.focus();
      this.$emit("click");
    }
  },
  watch: {
    "$attrs.modelValue": {
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
.textarea {
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
/deep/ .van-cell {
  padding: 20px 40px;
  height: 234px;
  box-sizing: border-box;
  border-radius: 10px;
  background: @form-label-bgcolor;
  .van-cell__value {
    display: flex;
    flex-direction: column;
    .van-field__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      .van-field__control {
        flex: 1;
        font-size: @form-input-size;
        color: @form-input-color;
      }
    }
  }
}
</style>
