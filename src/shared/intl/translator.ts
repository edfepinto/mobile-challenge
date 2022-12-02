import { DEFAULT_LANGUAGE } from "../constants/language.const";
import ptBr from "./locales/pt-br.json";

const locales = {
  ["pt-br"]: ptBr
}

export function t(text: string) {
  return locales[DEFAULT_LANGUAGE][text];
}

