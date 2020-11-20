import {
  BlockQuoteIcon,
  BulletedListIcon,
  OrderedListIcon,
  LinkIcon,
} from "outline-icons";
import { MenuItem } from "../types";
import baseDictionary from "../dictionary";

const SSR = typeof window === "undefined";
const isMac = !SSR && window.navigator.platform === "MacIntel";
const mod = isMac ? "⌘" : "ctrl";

export default function blockMenuItems(
  dictionary: typeof baseDictionary
): MenuItem[] {
  return [
    {
      name: "bullet_list",
      title: dictionary.bulletList,
      icon: BulletedListIcon,
      shortcut: "^ ⇧ 8",
    },
    {
      name: "ordered_list",
      title: dictionary.orderedList,
      icon: OrderedListIcon,
      shortcut: "^ ⇧ 9",
    },
    {
      name: "separator",
    },
    {
      name: "blockquote",
      title: dictionary.quote,
      icon: BlockQuoteIcon,
      shortcut: `${mod} ]`,
    },
    {
      name: "link",
      title: dictionary.link,
      icon: LinkIcon,
      shortcut: `${mod} k`,
      keywords: "link url uri href",
    },
  ];
}
