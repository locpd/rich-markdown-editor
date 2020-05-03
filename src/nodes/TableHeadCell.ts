import { DecorationSet, Decoration } from "prosemirror-view";
import { Plugin } from "prosemirror-state";
import { isColumnSelected, getCellsInRow } from "prosemirror-utils";
import TableNodes from "./TableNodes";
import Node from "./Node";

export default class TableHeadCell extends Node {
  get name() {
    return "th";
  }

  get schema() {
    return TableNodes.table_header;
  }

  toMarkdown(state, node) {
    state.renderContent(node);
  }

  parseMarkdown() {
    return {
      block: "th",
      getAttrs: tok => ({ alignment: tok.info }),
    };
  }

  get plugins() {
    return [
      new Plugin({
        props: {
          decorations: state => {
            const { doc, selection } = state;
            const decorations: Decoration[] = [];
            const cells = getCellsInRow(0)(selection);

            if (cells) {
              cells.forEach(({ pos }, index) => {
                decorations.push(
                  Decoration.widget(pos + 1, () => {
                    const colSelected = isColumnSelected(index)(selection);
                    let className = "grip-column";
                    if (colSelected) {
                      className += " selected";
                    }
                    if (index === 0) {
                      className += " first";
                    } else if (index === cells.length - 1) {
                      className += " last";
                    }
                    const grip = document.createElement("a");
                    grip.className = className;
                    grip.addEventListener("click", event => {
                      event.preventDefault();
                      this.options.onSelectColumn(index, state);
                    });
                    return grip;
                  })
                );
              });
            }

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  }
}