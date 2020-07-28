<template>
  <div class="from_select">
    <div class="select" @click.stop="open">
      <p :class="{'required':required}">{{ label }}</p>
      <div class="select_box">
        <van-field v-model="showName" :placeholder="placeholder" readonly />
        <div class="icon" v-if="!result">
          <i class="icon-arrows"></i>
        </div>
        <div class="icon" v-else @click.stop="onClear">
          <i class="icon iconfont icon-qingchuanniu"></i>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" get-container="#app" @close="$emit('close')">
      <van-picker
        :columns="selectColumns"
        show-toolbar
        @change="onChange"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>
<script>
// 此插件使用注意
// 传入的 columns 的数组对象中不要有 text 字段且text不是展示信息
export default {
  name: "vanSelect",
  model: {
    prop: "sValue"
  },
  props: {
    // 获取列表需要显示的数组
    columns: {
      type: Array,
      default: () => []
    },
    // 下拉选页面显示的字段
    showText: {
      type: String,
      default: () => "text"
    },
    // 数组对象中需要得到的字段
    modelValue: {
      type: String,
      default: () => "value"
    },
    // disabled
    disabled: {
      type: Boolean,
      default: () => false
    },
    // label
    label: {
      type: String,
      default: () => ""
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    required: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      show: false,
      result: this.$attrs.sValue,
      selectColumns: [],
      showName: ""
    };
  },
  created() {
    if (this.showText) {
      this.selectColumns = this.columns.map(item => {
        item.text = item[this.showText];
        return item;
      });
    } else {
      this.selectColumns = this.columns;
    }
    this.getShowName();
  },
  methods: {
    onConfirm(value) {
      this.$emit("confirm", value);
      this.show = !this.show;
      if (value.disabled) {
        return;
      }
      // 如果 有要得到 数组中显示的字段
      if (this.modelValue) {
        // 数组对象中的需要拿到的目标字段
        this.result = value[this.modelValue];
        // 页面中需要显示的字段
        this.showName = value[this.showText];
      } else {
        this.result = value;
        this.showName = value;
      }
    },
    onCancel() {
      this.show = false;
      this.$emit("cancel");
    },
    onClear() {
      this.result = "";
    },
    onChange(picker, value, index) {
      this.$emit("change", { picker, value, index });
    },
    open() {
      if (!this.disabled) {
        this.show = true;
        this.$emit("open");
      } else {
        this.$emit("notOpen");
      }
    },

    // 根据 根据value 和数组 显示值
    getShowName() {
      if (
        (this.result || this.result === 0 || this.result === false) &&
        this.selectColumns.length > 0 &&
        this.modelValue &&
        this.showText
      ) {
        // 与组件的 model 双向绑定
        let tempObj = this.selectColumns.find(
          item => item[this.modelValue] === this.result
        );
        // 如果找到对象 取对象里面的值
        if (tempObj) {
          this.showName = tempObj[this.showText];
        } else {
          this.showName = "";
        }
      } else {
        this.showName = "";
      }
    }
  },

  watch: {
    // model数据传出
    result(newV) {
      this.$emit("input", newV);
    },
    // model 数据传入
    "$attrs.sValue": {
      deep: true,
      handler(newV, oldV) {
        this.result = newV;
        this.getShowName();
      }
    },

    // 监听数组发生变化columns
    // 解决数据异步
    columns: {
      deep: true,
      handler(newV, oldV) {
        if (this.showText) {
          this.selectColumns = newV.map(item => {
            item.text = item[this.showText];
            return item;
          });
        } else {
          this.selectColumns = newV;
        }
        this.getShowName();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.from_select {
  background-color: #fff;
  width: 100%;
  height: 106px;
}
.select {
  width: 100%;
  display: flex;
  height: 104px;
  border-bottom: 1px dashed rgba(235, 235, 235, 1); /* px */
  justify-content: space-between;
  align-items: center;
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
  .select_box {
    flex: 1;
    height: 102px;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .icon {
      display: flex;
      align-items: center;
      height: 64px;
      width: 34px;
      margin-left: 10px;
      .icon-arrows {
        width: 34px; /* px */
        height: 40px; /* px */
        background: url("data:image/png;base64,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")
          center no-repeat;
        background-size: 14px 40px; /* px */
      }
      .icon-qingchuanniu {
        font-size: 24px;
        color: #d9d9d9;
        line-height: 64px;
        padding-bottom: 4px;
        text-indent: -4px;
      }
      .top {
        margin-top: -4px;
      }
    }
    /deep/ .van-cell {
      height: 64px;
      margin: 0;
      padding: 0;
      .van-field__body {
        height: 64px;
        input {
          vertical-align: middle;
          padding: 0;
          // height: 64px;
          // line-height: 64px;
          text-align: right;
          font-size: @form-input-size;
          color: @form-input-color;
        }
      }
    }

    /deep/ .van-cell:not(:last-child)::after {
      border-width: 0;
    }
  }
}
</style>
