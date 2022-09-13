import { CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./box.styles";

/**
 * A dynamic flex-box component
 */
@customElement("litty-box")
export class BoxElement extends LitElement {
  render() {
    return html`
      <div class="root">
        <slot></slot>
      </div>
    `;
  }

  static styles: CSSResultGroup = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    "litty-box": BoxElement;
  }
}
