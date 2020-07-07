import FormDate from "./FormDate.vue";
import FormDateRow from "./FormDateRow.vue";
import FormInput from "./FormInput.vue";
import FormInputRow from "./FormInputRow.vue";
import FormInputCol from "./FormInputCol.vue";
import FormSelect from "./FormSelect.vue";
import FormSelectRow from "./FormSelectRow.vue";
import FormTextarea from "./FormTextarea.vue";
import FormStructure from "./FormStructure.vue";
import FormButtom from "./FormButtom.vue";
import FromDialog from "./FromDialog.vue";
import HeadTitle from "./HeadTitle.vue";

const From = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install: function (Vue) {
    Vue.component("FormDate", FormDate);
    Vue.component("FormDateRow", FormDateRow);
    Vue.component("FormInput", FormInput);
    Vue.component("FormInputRow", FormInputRow);
    Vue.component("FormInputCol", FormInputCol);
    Vue.component("FormSelect", FormSelect);
    Vue.component("FormSelectRow", FormSelectRow);
    Vue.component("FormTextarea", FormTextarea);
    Vue.component("FormStructure", FormStructure);
    Vue.component("FormButtom", FormButtom);
    Vue.component("FromDialog", FromDialog);
    Vue.component("HeadTitle", HeadTitle);
  }
};
// 导出
export default From;
