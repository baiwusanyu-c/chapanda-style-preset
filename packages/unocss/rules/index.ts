import { chaPandaLayoutRules } from '../layout'
import { chaPandaBorderRules } from "../border";
import { chaPandaFontRules } from "../font";

function normalizeRules(staticRules: Record<string, any>) {
  const res: Array<Array<Record<string, any>>> = [];
  // transform staticRules
  Object.keys(staticRules).forEach((name) => {
    const rule = [name, staticRules[name]];
    res.push(rule);
  });
  return res;
}

export function chaPandaPresetUnoRules(
  themeColors: Record<string, string>
){
  return normalizeRules(chaPandaLayoutRules)
    .concat(normalizeRules(chaPandaBorderRules(themeColors)))
    .concat(chaPandaFontRules())
}
