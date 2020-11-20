import markdownit from "markdown-it";
import embedsPlugin from "./embeds";
import breakPlugin from "./breaks";
import markPlugin from "./mark";

export default function rules({ embeds }) {
  return markdownit("zero", {
    breaks: false,
    html: false,
    linkify: true,
  })
    .use(embedsPlugin(embeds))
    .use(breakPlugin)
    .use(markPlugin({ delim: "==", mark: "spoiler" }))
    .enable(["escape", "emphasis", "blockquote", "link", "autolink", "list"]);
}
