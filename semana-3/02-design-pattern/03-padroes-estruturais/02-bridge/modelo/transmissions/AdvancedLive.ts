import type IPlatform from "../platforms/IPlatform.js";
import Live from "./Live.js";

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log("Legendas ativadas na transmissão.");
  }

  comments(): void {
    console.log("Comentários liberados na live.");
  }
}
