import { LitElement, html, property } from 'lit-element';
import { render } from 'lit-html';
import '@vaadin/vaadin-notification/vaadin-notification.js';

class NotificationRendererDemo extends LitElement {
  @property({ type: Boolean }) opened = false;

  private _boundNotificationRenderer = this._notificationRenderer.bind(this);

  render() {
    return html`
      <button @click=${this._toggle}>Toggle</button>
      <vaadin-notification
        .opened=${this.opened}
        .renderer=${this._boundNotificationRenderer}
        position="top-start"
        duration="-1"
        @opened-changed="${this._onOpenedChanged}"
      ></vaadin-notification>
    `;
  }

  _notificationRenderer(root: HTMLElement) {
    render(html`<b>Hello world!</b>`, root);
  }

  _onOpenedChanged(e: CustomEvent) {
    // upward property binding
    this.opened = e.detail.value;
  }

  _toggle() {
    this.opened = !this.opened;
  }
}

customElements.define('notification-renderer-demo', NotificationRendererDemo);