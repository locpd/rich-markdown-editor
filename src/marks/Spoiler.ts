import { toggleMark } from "prosemirror-commands";
import markInputRule from "../lib/markInputRule";
import Mark from "./Mark";

/**
 * Look at examples from 'rich-markdown-editor/tree/develop/src/marks'
 */
export default class Spoiler extends Mark {
  get name() {
    return "spoiler";
  }

  get schema() {
    return {
      parseDOM: [{ tag: "spoiler" }],
      toDOM: () => ["spoiler"],
    };
  }

  keys({ type }) {
    return {
      "Mod-s": toggleMark(type),
    };
  }

  inputRules({ type }) {
    return [markInputRule(/(?:==)([^*]+)(?:==)$/, type)];
  }

  get toMarkdown() {
    return {
      open: "==",
      close: "==",
      mixable: true,
      expelEnclosingWhitespace: true,
    };
  }

  parseMarkdown() {
    return { mark: "spoiler" };
  }
}
