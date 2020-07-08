<template>
  <van-dialog
    v-model="show"
    :title="title"
    show-cancel-button
    :before-close="onBeforeClose"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <div class="tarea-box">
      <van-field
        v-model="message"
        type="textarea"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :show-word-limit="textlimit"
      />
    </div>
  </van-dialog>
</template>
<script>
export default {
  model: {
    prop: "modelValue"
  },
  props: {
    beforeClose: {
      type: Boolean,
      default: () => false
    },
    textlimit: {
      type: Boolean,
      default: () => false
    },
    maxlength: {
      type: String | Number,
      default: () => 150
    },
    title: {
      type: String,
      default: () => "提示"
    },
    placeholder: {
      type: String,
      default: () => ""
    },
    toast: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      show: false,
      message: ""
    };
  },
  computed: {},
  watch: {
    // 监听v-model传过来的值
    "$attrs.modelValue": {
      deep: true,
      handler(newV, oldV) {
        this.show = !!newV;
      }
    }
  },
  mounted() {},
  methods: {
    onBeforeClose(action, done) {
      if (this.beforeClose) {
        if (!this.message) {
          done(false);
          this.$toast(this.toast);
          this.$emit("beforeClose", this.message);
        }
      } else {
        done();
      }
    },
    onConfirm() {
      if (this.beforeClose && !this.message) {
        return;
      }
      this.$emit("input", false);
      this.$emit("confirm", this.message);
    },
    onCancel() {
      this.$nextTick(() => {
        this.$toast.clear();
      });
      this.$emit("input", false);
    }
  }
};
</script>
<style lang='less' scoped>
.tarea-box {
  width: 100%;
  height: 218px;
  display: flex;
  flex-direction: column;
  padding: 20px 36px 30px;
  box-sizing: border-box;
  /deep/ .van-cell {
    margin: 0;
    padding: 22px;
    flex: 1;
    border-radius: 10px; /* px*/
    background-color: #f6f6f6;
  }
}
</style>
