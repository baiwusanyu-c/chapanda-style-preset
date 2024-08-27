import { genToken } from "./token";
export  { genToken } from './token'
export function genVantTheme(){
  return {
    ...genToken(),
  }
}
