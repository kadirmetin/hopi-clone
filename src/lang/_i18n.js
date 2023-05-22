import { I18nManager } from "react-native";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import tr from "./tr.json";
import en from "./en.json";

const i18n = new I18n({
  en: en,
  tr: tr,
});

i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;
I18nManager.allowRTL(true);
I18nManager.forceRTL(getLocales()[0].textDirection === "rtl");

export default i18n;
