<template>
  <div class="from_select">
    <div class="select">
      <p :class="{'required':required}">{{ label }}</p>
      <div class="select_box" @click.stop="open">
        <van-field v-model="showName" :placeholder="placeholder" readonly />
        <div class="icon" v-if="!result || reset">
          <i class="icon-arrows"></i>
        </div>
        <div class="clear" v-else-if="!disabled" @click.stop="onClear">
          <i class="icon iconfont icon-qingchuanniu"></i>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" get-container="#app">
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
    },
    reset: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      show: false,
      result: "",
      selectColumns: [],
      showName: ""
    };
  },
  created() {
    this.result = this.$attrs.sValue;
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
}
.select {
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

  .select_box {
    flex: 1;
    display: flex;
    height: 84px;
    background: @form-label-bgcolor;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      height: 64px;
      padding: 0 20px 0 36px;
      .icon-arrows {
        width: 40px;
        height: 40px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACbElEQVRYR+2Vv4sTURDHv5MlURQxghbmH1CxERvBQvD8BSksLGwt4jIvQaPGg6iFIVh4AQ+5cOT25TCBdDaCIIfiiQg2NmKjxWFhIQZBkCCJiSEZWdmABMIl+yJE2Nfufmc++3mzDGHGD804HwJA0xsKDAYGTQ2Y5oMZDAyaGjDN/78z6DjOBoAP9Xr9fD6f/2VqYjify+UisVjsIYD9zHxgVP2RBrXWqwAuEtFau90+l06nO9OCLBaLWyKRyCMiigMoMzNPDAiAHMdZJaIEgPVms3k2k8n8NIWsVqtbO53OYyI6LSIPlFI2APED+CfjOM4KESkArwDEmbnlF1JrvQ3AEwDHRaSslBppbtBjrJ9Ea70EIC0irxuNRjybzf6YFLJWq21vtVprRHQMwDIzXx6nxliAbiGt9T0A10XkDRGdYebGOA3cdwqFwo5oNPoUwFERWVJKXR03OzagB3kXwA0Ab3u93slUKvV9s0Za650i8oyIjgBYZOb5zTJ/P58I0JvJPBHdBvAOwClm/jaqYalU2mVZ1jqAwwAWmPnmJHDuuxMDepBZIloA8D4UCp2wbfvrcGOt9W4AzwEcAnCHmd2Pmvj4AvSu+5p7ZSKyEQ6H5xKJxJdB90qlsqfb7b4EcFBEbiml3NHwdXwDepCXABRF5KNlWXO2bX/WWu8F8AKAux3mmXnRF5kXMgL0IJMASgA+icgFdzMQ0b5+v59JJpP3TeB8z+BwU8dxEkRUBhDytkKamZdN4aYG6Jl07bn7+wozr0wDbqqA0wIarmM8g/8KbFA3ADQ1HBgMDJoaMM0HMxgYNDVgmp/5GfwNK+DEKTv5yzsAAAAASUVORK5CYII=")
          center no-repeat;
        background-size: 40px 40px; /* px */
      }
    }
    .clear {
      .icon-qingchuanniu {
        width: 36px; /* px */
        height: 36px; /* px */
        flex-shrink: 0;
        font-size: 28px;
        color: #d9d9d9;
        line-height: 64px;
        padding-bottom: 4px;
        text-align: center;
      }
    }
    /deep/ .van-cell {
      background-color: @form-label-bgcolor;
      margin: 0;
      padding: 0;
      .van-field__body {
        padding-left: 40px;
        input {
          padding: 0;
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
