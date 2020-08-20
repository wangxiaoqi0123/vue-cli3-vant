<template>
  <div class="date">
    <div class="date_time">
      <p :class="{'required':required}">{{ label }}</p>
      <div class="date_box" @click="show = !show">
        <div class="icon">
          <i class="icon-date"></i>
        </div>
        <van-field v-model="result" :placeholder="placeholder" readonly />
        <div class="clear" v-if="result" @click.stop="onClear">
          <i class="icon iconfont icon-qingchuanniu"></i>
        </div>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" get-container="#app">
      <!-- 希望时间 -->
      <van-datetime-picker
        v-model="enterDate"
        show-toolbar
        :clearable="true"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        :min-hour="minHour"
        :max-hour="maxHour"
        :min-minute="minMinute"
        :max-minute="maxMinute"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "vanDate",
  model: {
    prop: "dValue"
  },
  filters: {
    timer(timer) {
      return "hello";
    }
  },
  props: {
    // 选择的值
    selectValue: {
      type: String
    },
    // 组件的类型
    type: {
      type: String,
      default: "date"
      // time year-month data datetime
      // 一共有四中方式
    },
    // 初始时间
    defaultDate: {
      default: ""
    },

    // // 最小限制日期
    minDate: {
      // default: undefined
      default: () => new Date("1960/01/01 00:00")
    },
    // 最大限制日期
    maxDate: {
      default: undefined
      // default: new Date("2500/12/31 23:59")
    },
    // 针对 time 最小限制小时
    minHour: {
      default: undefined
    },
    // 针对 time 最大限制小时
    maxHour: {
      default: undefined
    },
    // 针对 time 最小限制分钟
    minMinute: {
      default: undefined
    },
    // 针对 time 最大限制分钟
    maxMinute: {
      default: undefined
    },
    // lable
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
      // result: this.$attrs.dValue || "",
      result: "",
      enterDate: "" // 时间选择器的数据双向绑定
    };
  },

  mounted() {
    // 1. 初始化时间
    if (this.defaultDate) {
      this.enterDate = this.defaultDate;
    } else if (this.type !== "time") {
      this.enterDate = new Date();
    } else {
      let hour = new Date().getHours();
      let minu = new Date().getMinutes();
      this.enterDate = hour + ":" + minu;
    }

    if (!this.$attrs.dValue) {
      this.$attrs.dValue = "";
    } else {
      let tempVal;
      // 不是数字赋值 非时间戳
      if (isNaN(this.$attrs.dValue * 1)) {
        // 处理iphone 上兼容
        tempVal = this.$attrs.dValue.replace(/-/g, "/");
      } else {
        tempVal = this.$attrs.dValue * 1;
      }
      this.enterDate = new Date(tempVal);
    }
    this.timeFormat(this.$attrs.dValue);
  },

  methods: {
    onConfirm(value) {
      this.timeFormat(value);
      this.show = !this.show;
      this.$emit("confirm", value);
    },
    onCancel(value) {
      this.$emit("cancel");
      this.show = !this.show;
    },
    onClear() {
      this.result = "";
    },
    timeFormat(val) {
      if (val) {
        let tempVal;
        // 不是数字赋值 非时间戳
        if (isNaN(val * 1)) {
          // 处理iphone 上兼容
          tempVal = val.replace(/-/g, "/");
        } else {
          tempVal = val * 1;
        }

        let date = new Date(tempVal);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let f = date.getMinutes();
        if (m >= 1 && m <= 9) {
          m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
          d = "0" + d;
        }
        if (h >= 0 && h <= 9) {
          h = "0" + h;
        }
        if (f >= 0 && f <= 9) {
          f = "0" + f;
        }

        let yymmdd = y + "-" + m + "-" + d;
        let yymm = y + "-" + m;
        let yymmddhhff = y + "-" + m + "-" + d + " " + h + ":" + f;

        // 2. 根据不同类型格式化不同时间
        switch (this.type) {
          case "time":
            // 要传出去的时间
            this.result = value;
            break;

          case "year-month":
            this.result = yymm;
            break;

          case "date":
            this.result = yymmdd;
            break;

          case "datetime":
            this.result = yymmddhhff;
            break;

          default:
            break;
        }
      } else {
        this.result = "";
      }
    }
  },
  watch: {
    // model 数据传入
    "$attrs.dValue": {
      deep: true,
      handler(newV, oldV) {
        this.timeFormat(newV);
      }
    },
    // model 数据传出
    result(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>

<style scoped lang="less">
.date {
  width: 100%;
  & > .date_time {
    & > p {
      height: 42px;
      font-size: @form-label-size;
      font-weight: 400;
      line-height: 42px;
      color: @form-label-color;
      padding: 30px 0 20px;
      margin: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      -khtml-user-elect: none;
      user-select: none;
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

    .date_box {
      flex: 1;
      display: flex;
      height: 84px;
      background: @form-label-bgcolor;
      border-radius: 10px;
      align-items: center;

      .icon {
        display: flex;
        align-items: center;
        height: 64px; /* px */
        // width: 36px; /* px */
        padding: 0 20px 0 30px;
        .icon-date {
          width: 36px; /* px */
          height: 36px; /* px */
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADJ0lEQVRYR+2YT0hUURTGv3Of4zgwJgViRQQVGLSrBqF07vOBFk5Ri6CFm3ZBUJsKqTauQoKoRUG2iIoIYaCIIKVE38x9LlqImxaRixAikijoj6aT4ztxZSaeOs48ZkZw8e7u8b5zzo/v3Jl37yFs8EUbnA8BYKUd8u1gKpWyhBAPAOwCMAegPx6PXyIiLgYxNja23XXdASJqY2Yw84jrut2WZX3zA+8LMJlMGk1NTZ+JqMmblJlPmab5vFghx3GeMnP3Ck2/lPJc2YDj4+Oh2dnZQ0S0RSdh5gYiegRgZm5ubmskEukDcAHAAIBkiUK3cq53CCEaXNd9BuA9gGv5OCHE97q6urexWGxhZa5VDg4PD+8Oh8NDAJoLFF6QUtYqpW4A6PHjgEdzHMBmAE/WiJvMZDJdnZ2dH73vVwEqpV4DOALgC4APOXEtgMPaQSllveM4fcx8hZmniGiqBGgMQJSI4hqQmV8C+AVgwhO3F8A2AG+klEdLAf4FEGLmnaZpftJi27ajhmH80JuciB7mYPcBuCilvF0MUCnlAGgD8IqIapm5k5mHTNNM5ONs295hGIautdShUoBLv8rFxcWIZVnzeXE6nb5PRGfzz8w8HYlE9re0tEwXA0yn06eJSO9VkdNlmfmkaZqDHsA6wzD0PwOklMu6WqjFBQF7e3tFR0fHMWbe47run1Ao9KK1tfWrn304Ojp6UAjRKoRgZk6ZpvnOG2fbduWAfkDK1QSA5TpX1T1YKUSx+KDFlbobOLihHFRK6WOS/laXs/S39t7KwKq2WCmlDxCFTjp+gCellPpgsGxVFdBxnGZmPuCHZqWGiCbi8fjkugKWA1YqpqoOlipWzvsAsBzXguNWpa4FDgYO5hwodGn6CWATEZ3IZrPDHqeylmVl88/JZLK2sbExf1OryNCamhp9FV26L0spG7zJCgHeAXC+QEU9luiSUo4opa4CuA5UfXx3V0qpRyr/1yrAwcHBcDQavQngDIB6j3bedd1Ee3u7nUqlegzD0NOFqjgI4DeAxzMzM5cTiUSmKGBFvVqHYF/jt3Wo6ztlAOjbqjWEG97Bf5gCAUeZ/VFtAAAAAElFTkSuQmCC")
            center no-repeat;
          background-size: 36px 36px; /* px */
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
        padding-top: 2px;
        .van-field__body {
          input {
            padding: 0;
            font-size: @form-input-size;
            color: @form-input-color;
          }
        }
      }

      /deep/.van-cell:not(:last-child)::after {
        border-width: 0;
      }
    }
  }
}
.top {
  /deep/ .van-cell {
    padding-top: 2px;
  }
}
</style>
