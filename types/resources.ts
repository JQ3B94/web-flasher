import type { FirmwareResource } from './api';

export const OfflineHardwareList = [
  {
    hwModel: 1,
    hwModelSlug: "TLORA_V2",
    platformioTarget: "tlora-v2",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V2",
    tags: ["LilyGo"],
  },
  {
    hwModel: 2,
    hwModelSlug: "TLORA_V1",
    platformioTarget: "tlora-v1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V1",
    tags: ["LilyGo"],
  },
  {
    hwModel: 3,
    hwModelSlug: "TLORA_V2_1_1P6",
    platformioTarget: "tlora-v2-1-1_6",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-LoRa V2.1-1.6",
    tags: ["LilyGo"],
    images: ["tlora-v2-1-1_6.svg"],
  },
  {
    hwModel: 4,
    hwModelSlug: "TBEAM",
    platformioTarget: "tbeam",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-Beam",
    tags: ["LilyGo"],
    images: ["tbeam.svg"],
  },
  {
    hwModel: 5,
    hwModelSlug: "HELTEC_V2_0",
    platformioTarget: "heltec-v2_0",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V2.0",
    tags: ["Heltec"],
  },
  {
    hwModel: 6,
    hwModelSlug: "TBEAM_V0P7",
    platformioTarget: "tbeam0_7",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-Beam V0.7",
    tags: ["LilyGo"],
  },
  {
    hwModel: 7,
    hwModelSlug: "T_ECHO",
    platformioTarget: "t-echo",
    architecture: "nrf52840",
    supportLevel: 1,
    activelySupported: true,
    displayName: "LILYGO T-Echo",
    tags: ["LilyGo"],
    images: ["t-echo.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 8,
    hwModelSlug: "TLORA_V1_1P3",
    platformioTarget: "tlora-v1_3",
    architecture: "esp32",
    activelySupported: false,
    displayName: "LILYGO T-LoRa V1.1-1.3",
    tags: ["LilyGo"],
  },
  {
    hwModel: 9,
    hwModelSlug: "RAK4631",
    platformioTarget: "rak4631",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 1,
    displayName: "RAK WisBlock 4631",
    tags: ["RAK"],
    images: ["rak4631.svg", "rak4631_case.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 10,
    hwModelSlug: "HELTEC_V2_1",
    platformioTarget: "heltec-v2_1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V2.1",
    tags: ["Heltec"],
  },
  {
    hwModel: 11,
    hwModelSlug: "HELTEC_V1",
    platformioTarget: "heltec-v1",
    architecture: "esp32",
    activelySupported: false,
    displayName: "Heltec V1",
    tags: ["Heltec"],
  },
  {
    hwModel: 12,
    hwModelSlug: "TBEAM_S3_CORE",
    platformioTarget: "tbeam-s3-core",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-Beam Supreme",
    tags: ["LilyGo"],
    images: ["tbeam-s3-core.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 13,
    hwModelSlug: "RAK11200",
    platformioTarget: "rak11200",
    architecture: "esp32",
    activelySupported: false,
    displayName: "RAK WisBlock 11200",
    tags: ["RAK"],
  },
  {
    hwModel: 14,
    hwModelSlug: "NANO_G1",
    platformioTarget: "nano-g1",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Nano G1",
    tags: ["B&Q"],
  },
  {
    hwModel: 15,
    hwModelSlug: "TLORA_V2_1_1P8",
    platformioTarget: "tlora-v2-1-1_8",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 2,
    displayName: "LILYGO T-LoRa V2.1-1.8",
    tags: ["LilyGo", "2.4G LoRA"],
    images: ["tlora-v2-1-1_8.svg"],
  },
  {
    hwModel: 16,
    hwModelSlug: "TLORA_T3_S3",
    platformioTarget: "tlora-t3s3-v1",
    architecture: "esp32-s3",
    activelySupported: true,
    displayName: "LILYGO T-LoRa T3-S3",
    supportLevel: 1,
    tags: ["LilyGo"],
    images: ["tlora-t3s3-v1.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 16,
    hwModelSlug: "TLORA_T3_S3",
    platformioTarget: "tlora-t3s3-epaper",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-LoRa T3-S3 E-Ink",
    tags: ["LilyGo"],
    images: ["tlora-t3s3-epaper.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 17,
    hwModelSlug: "NANO_G1_EXPLORER",
    platformioTarget: "nano-g1-explorer",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Nano G1 Explorer",
    tags: ["B&Q"],
  },
  {
    hwModel: 18,
    hwModelSlug: "NANO_G2_ULTRA",
    platformioTarget: "nano-g2-ultra",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 2,
    displayName: "Nano G2 Ultra",
    tags: ["B&Q"],
    requiresDfu: true,
    images: ["nano-g2-ultra.svg"],
  },
  {
    hwModel: 21,
    hwModelSlug: "WIO_WM1110",
    platformioTarget: "wio-tracker-wm1110",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Seeed Wio WM1110 Tracker",
    tags: ["Seeed"],
    images: ["wio-tracker-wm1110.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 25,
    hwModelSlug: "STATION_G1",
    platformioTarget: "station-g1",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Station G1",
    tags: ["B&Q"],
  },
  {
    hwModel: 26,
    hwModelSlug: "RAK11310",
    platformioTarget: "rak11310",
    architecture: "rp2040",
    activelySupported: true,
    supportLevel: 2,
    displayName: "RAK WisBlock 11310",
    tags: ["RAK"],
    images: ["rak11310.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 29,
    hwModelSlug: "CANARYONE",
    platformioTarget: "canaryone",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Canary One",
    tags: ["Canary"],
    requiresDfu: true,
  },
  {
    hwModel: 30,
    hwModelSlug: "RP2040_LORA",
    platformioTarget: "rp2040-lora",
    architecture: "rp2040",
    activelySupported: true,
    supportLevel: 2,
    displayName: "RP2040 LoRa",
    tags: ["Waveshare"],
    requiresDfu: true,
  },
  {
    hwModel: 31,
    hwModelSlug: "STATION_G2",
    platformioTarget: "station-g2",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 2,
    displayName: "Station G2",
    tags: ["B&Q"],
    requiresDfu: true,
    images: ["station-g2.svg"],
  },
  {
    hwModel: 39,
    hwModelSlug: "DIY_V1",
    platformioTarget: "meshtastic-diy-v1",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "DIY V1",
    tags: ["DIY"],
    images: ["diy.svg"],
  },
  {
    hwModel: 39,
    hwModelSlug: "HYDRA",
    platformioTarget: "hydra",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Hydra",
    tags: ["DIY"],
  },
  {
    hwModel: 41,
    hwModelSlug: "DR_DEV",
    platformioTarget: "meshtastic-dr-dev",
    architecture: "esp32",
    activelySupported: false,
    displayName: "DR-DEV",
    tags: ["DIY"],
  },
  {
    hwModel: 42,
    hwModelSlug: "M5STACK",
    platformioTarget: "m5stack-core",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 3,
    displayName: "M5 Stack",
    tags: ["M5Stack"],
  },
  {
    hwModel: 43,
    hwModelSlug: "HELTEC_V3",
    platformioTarget: "heltec-v3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec V3",
    tags: ["Heltec"],
    images: ["heltec-v3.svg", "heltec-v3-case.svg"],
  },
  {
    hwModel: 44,
    hwModelSlug: "HELTEC_WSL_V3",
    platformioTarget: "heltec-wsl-v3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Wireless Stick Lite V3",
    tags: ["Heltec"],
    images: ["heltec-wsl-v3.svg"],
  },
  {
    hwModel: 47,
    hwModelSlug: "RPI_PICO",
    platformioTarget: "pico",
    architecture: "rp2040",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Raspberry Pi Pico",
    tags: ["Raspberry Pi", "DIY"],
    requiresDfu: true,
    images: ["pico.svg"],
  },
  {
    hwModel: 47,
    hwModelSlug: "RPI_PICO",
    platformioTarget: "picow",
    architecture: "rp2040",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Raspberry Pi Pico W",
    tags: ["Raspberry Pi", "DIY"],
    requiresDfu: true,
    images: ["rpipicow.svg"],
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "heltec-wireless-tracker",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Wireless Tracker V1.1",
    tags: ["Heltec"],
    images: ["heltec-wireless-tracker.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 58,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER_V1_0",
    platformioTarget: "heltec-wireless-tracker-V1-0",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Heltec Wireless Tracker V1.0",
    images: ["heltec-wireless-tracker.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 49,
    hwModelSlug: "HELTEC_WIRELESS_PAPER",
    platformioTarget: "heltec-wireless-paper",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Wireless Paper",
    tags: ["Heltec"],
    images: ["heltec-wireless-paper.svg"],
  },
  {
    hwModel: 50,
    hwModelSlug: "T_DECK",
    platformioTarget: "t-deck",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-Deck",
    tags: ["LilyGo"],
    images: ["t-deck.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 51,
    hwModelSlug: "T_WATCH_S3",
    platformioTarget: "t-watch-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "LILYGO T-Watch S3",
    tags: ["LilyGo"],
    images: ["t-watch-s3.svg"],
  },
  {
    hwModel: 52,
    hwModelSlug: "PICOMPUTER_S3",
    platformioTarget: "picomputer-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "Pi Computer S3",
  },
  {
    hwModel: 53,
    hwModelSlug: "HELTEC_HT62",
    platformioTarget: "heltec-ht62-esp32c3-sx1262",
    architecture: "esp32-c3",
    supportLevel: 1,
    activelySupported: true,
    displayName: "Heltec HT62",
    tags: ["Heltec"],
    images: ["heltec-ht62-esp32c3-sx1262.svg"],
  },
  {
    hwModel: 57,
    hwModelSlug: "HELTEC_WIRELESS_PAPER_V1_0",
    platformioTarget: "heltec-wireless-paper-v1_0",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    tags: ["Heltec"],
    displayName: "Heltec Wireless Paper V1.0",
    images: ["heltec-wireless-paper-v1_0.svg"],
  },
  {
    hwModel: 59,
    hwModelSlug: "UNPHONE",
    platformioTarget: "unphone",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "unPhone",
    requiresDfu: true,
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "TrackSenger (small TFT)",
    requiresDfu: true,
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger-lcd",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "TrackSenger (big TFT)",
    requiresDfu: true,
  },
  {
    hwModel: 48,
    hwModelSlug: "HELTEC_WIRELESS_TRACKER",
    platformioTarget: "tracksenger-oled",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "TrackSenger (big OLED)",
  },
  {
    hwModel: 61,
    hwModelSlug: "CDEBYTE_EORA_S3",
    platformioTarget: "CDEBYTE_EoRa-S3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 3,
    displayName: "EBYTE EoRa-S3",
    tags: ["EByte"],
    requiresDfu: true,
  },
  {
    hwModel: 64,
    hwModelSlug: "RADIOMASTER_900_BANDIT_NANO",
    platformioTarget: "radiomaster_900_bandit_nano",
    architecture: "esp32",
    activelySupported: true,
    supportLevel: 2,
    displayName: "RadioMaster 900 Bandit Nano",
    tags: ["RadioMaster"],
  },
  {
    hwModel: 66,
    hwModelSlug: "HELTEC_VISION_MASTER_T190",
    platformioTarget: "heltec-vision-master-t190",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Vision Master T190",
    tags: ["Heltec"],
    images: ["heltec-vision-master-t190.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 67,
    hwModelSlug: "HELTEC_VISION_MASTER_E213",
    platformioTarget: "heltec-vision-master-e213",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Vision Master E213",
    tags: ["Heltec"],
    images: ["heltec-vision-master-e213.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 68,
    hwModelSlug: "HELTEC_VISION_MASTER_E290",
    platformioTarget: "heltec-vision-master-e290",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Vision Master E290",
    tags: ["Heltec"],
    images: ["heltec-vision-master-e290.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 69,
    hwModelSlug: "HELTEC_MESH_NODE_T114",
    platformioTarget: "heltec-mesh-node-t114",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Heltec Mesh Node T114",
    tags: ["Heltec"],
    images: ["heltec-mesh-node-t114.svg", "heltec-mesh-node-t114-case.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 70,
    hwModelSlug: "SENSECAP_INDICATOR",
    platformioTarget: "seeed-sensecap-indicator",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Seeed SenseCAP Indicator",
    tags: ["Seeed"],
    images: ["seeed-sensecap-indicator.svg"],
  },
  {
    hwModel: 71,
    hwModelSlug: "TRACKER_T1000_E",
    platformioTarget: "tracker-t1000-e",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Seeed Card Tracker T1000-E",
    tags: ["Seeed"],
    images: ["tracker-t1000-e.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 72,
    hwModelSlug: "Seeed_XIAO_S3",
    platformioTarget: "seeed-xiao-s3",
    architecture: "esp32-s3",
    activelySupported: true,
    supportLevel: 1,
    displayName: "Seeed Xiao ESP32-S3",
    tags: ["Seeed"],
    images: ["seeed-xiao-s3.svg"],
    requiresDfu: true,
  },
  {
    hwModel: 84,
    hwModelSlug: "WISMESH_TAP",
    platformioTarget: "rak_wismeshtap",
    architecture: "nrf52840",
    activelySupported: true,
    supportLevel: 1,
    displayName: "RAK WisMesh Tap",
    tags: ["RAK"],
    images: ["rak-wismeshtap.svg"],
    requiresDfu: true,
  },
];

const markdownContent = `
## Enhancements
* Coerce minimum telemetry interval of 30 minutes on defaults and make new default interval one hour by @thebentern in https://github.com/meshtastic/firmware/pull/5086
* Add buzzer feedback on GPS toggle by @Technologyman00 in https://github.com/meshtastic/firmware/pull/5090
* Add \`-p\` flag by @madeofstown in https://github.com/meshtastic/firmware/pull/5093
* Initial NODENUM_BROADCAST_NO_LORA implementation with NeighborInfo module by @thebentern in https://github.com/meshtastic/firmware/pull/5087
* Move 115200 baud GNSS probe earlier by @thebentern in https://github.com/meshtastic/firmware/pull/5101
* MPR121 Touch IC Based Keypad Input Module by @aussieklutz in https://github.com/meshtastic/firmware/pull/5103
* Add RFC 3927 IP address space to private IP checks by @rbrtio in https://github.com/meshtastic/firmware/pull/5115
* Update meshtasticd.service by @yNosGR in https://github.com/meshtastic/firmware/pull/5118
* Add Configurable UPLINK_ENABLED and DOWNLINK_ENABLED in userPrefs.h by @panaceya in https://github.com/meshtastic/firmware/pull/5120
* Add device unique id by @thebentern in https://github.com/meshtastic/firmware/pull/5092
* Account for port number in MQTT server by @JohnathonMohr in https://github.com/meshtastic/firmware/pull/5084

## Bug fixes
* Revert "Permanently engage !CTRL" by @caveman99 in https://github.com/meshtastic/firmware/pull/5095
* Fix GPS_DEBUG output by @fifieldt in https://github.com/meshtastic/firmware/pull/5100
* Wide_Lora uses 12 symbols to be compatible with SX1280 by @caveman99 in https://github.com/meshtastic/firmware/pull/5112
* Fix rebroadcasting encrypted packets when \`KNOWN_ONLY\`/\`LOCAL_ONLY\` is used by @GUVWAF in https://github.com/meshtastic/firmware/pull/5109

## New Contributors
* @Technologyman00 made their first contribution in https://github.com/meshtastic/firmware/pull/5090
* @madeofstown made their first contribution in https://github.com/meshtastic/firmware/pull/5093
* @aussieklutz made their first contribution in https://github.com/meshtastic/firmware/pull/5103
* @rbrtio made their first contribution in https://github.com/meshtastic/firmware/pull/5115
* @yNosGR made their first contribution in https://github.com/meshtastic/firmware/pull/5118

**Full Changelog**: https://github.com/meshtastic/firmware/compare/v2.5.7.f77c87d...v2.5.8.6485f03
`;

const currentPrereleaseId = "2.5.8.6485f03";

export const showPrerelease = false;

export const currentPrerelease = <FirmwareResource>{
  id: `v${currentPrereleaseId}`,
  title: `Meshtastic Firmware ${currentPrereleaseId} Alpha`,
  zip_url: `https://github.com/meshtastic/firmware/releases/download/v${currentPrereleaseId}/firmware-${currentPrereleaseId}.zip`,
  release_notes: markdownContent,
};

export const vendorCobrandingTag = "";
export const supportedVendorDeviceTags = ["RAK", "B&Q", "LilyGo", "Seeed"];