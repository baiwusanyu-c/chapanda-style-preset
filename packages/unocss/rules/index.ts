import { chaPandaLayoutRules } from '../layout'
import type { Rule } from "unocss";
import type { Theme } from "@unocss/preset-uno";
import { chaPandaBorderRules } from "../border";
import {chaPandaFontRules} from "../font";

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
  customShortcut: Rule<Theme>[],
  themeColors: Record<string, string>
){
  return normalizeRules(chaPandaLayoutRules)
    .concat(normalizeRules(chaPandaBorderRules(themeColors)))
    .concat(chaPandaFontRules())
    .concat(customShortcut) as Rule<Theme>[]
}
