import type { TemplateResult } from "lit";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./ha-config-network";
import "./ha-config-url-form";
import "./supervisor-hostname";
import "./supervisor-network";
import "../../../components/ha-circular-progress";

@customElement("ha-config-section-network")
class HaConfigSectionNetwork extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public route!: Route;

  @property({ type: Boolean }) public narrow = false;

  protected render(): TemplateResult {
    return html`
      <hass-subpage
        back-path="/config/system"
        .hass=${this.hass}
        .narrow=${this.narrow}
        .header=${this.hass.localize("ui.panel.config.network.caption")}
      >
        <div class="content">
          <ha-card
            class="no-padding"
            outlined
            .header=${this.hass.localize(
              "ui.panel.config.network.supervisor.hostname.title"
            )}
          >
            <div class="card-content">
              <h3>Not available.</h3>
            </div>
            <div class="card-actions">
              <mwc-button .disabled=${true}>
                ${this.hass.localize("ui.common.save")}
              </mwc-button>
            </div>
          </ha-card>
        </div>
      </hass-subpage>
    `;
  }

  static styles = css`
    .content {
      padding: 28px 20px 0;
      max-width: 1040px;
      margin: 0 auto;
    }
    supervisor-hostname,
    supervisor-network,
    ha-config-url-form,
    ha-config-network {
      display: block;
      margin: 0 auto;
      margin-bottom: 24px;
      max-width: 600px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-config-section-network": HaConfigSectionNetwork;
  }
}
