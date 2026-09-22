import FacebookLive from "./platforms/FacebookLive.js";
import type IPlatform from "./platforms/IPlatform.js";
import Twitch from "./platforms/Twitch.js";
import YouTube from "./platforms/YouTube.js";
import AdvancedLive from "./transmissions/AdvancedLive.js";
import Live from "./transmissions/Live.js";

function startLive(platform: IPlatform) {
  console.log("Aguarde...");

  const live = new Live(platform);

  live.broadcasting();
  live.result();
}

function startAdvancedLive(platform: IPlatform) {
  console.log("Aguarde...");

  const live = new AdvancedLive(platform);

  live.broadcasting();
  live.result();
  live.comments();
  live.subtitles();
}

// startLive(new YouTube());
// startLive(new Twitch());
startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new FacebookLive());
