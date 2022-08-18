// Dummy implementation, så den rigtige text-manager implementation kan bruges når applikationen afvikles igennem VG
import { VueConstructor } from 'vue/types/umd';

type ParamType = (string | number)[];

export default {
  install(vue: VueConstructor) {
    vue.prototype.$t = (textkey: string, params?: ParamType) => textkey;
  }
};
