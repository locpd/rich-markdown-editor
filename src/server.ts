import { Schema } from "prosemirror-model";
import ExtensionManager from "./lib/ExtensionManager";

// nodes
import Doc from "./nodes/Doc";
import Text from "./nodes/Text";
import Blockquote from "./nodes/Blockquote";
import BulletList from "./nodes/BulletList";
import Embed from "./nodes/Embed";
import HardBreak from "./nodes/HardBreak";
import ListItem from "./nodes/ListItem";
import OrderedList from "./nodes/OrderedList";
import Paragraph from "./nodes/Paragraph";

// marks
import Bold from "./marks/Bold";
import Spoiler from "./marks/Spoiler";
import Italic from "./marks/Italic";
import Link from "./marks/Link";
import Underline from "./marks/Underline";

const extensions = new ExtensionManager([
  new Doc(),
  new Text(),
  new HardBreak(),
  new Paragraph(),
  new Blockquote(),
  new BulletList(),
  new Embed(),
  new ListItem(),
  new Bold(),
  new Spoiler(),
  new Italic(),
  new Link(),
  new Underline(),
  new OrderedList(),
]);

export const schema = new Schema({
  nodes: extensions.nodes,
  marks: extensions.marks,
});

export const parser = extensions.parser({
  schema,
});

export const serializer = extensions.serializer();
