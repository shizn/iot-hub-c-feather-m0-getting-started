---
services: iot-hub, iot-suite
platforms: arduino
author: yaozheng
---

## Repository information
- `app` sub-folder contains the sample Arduino application that blinks the LED attached to the Adafruit Feather M0 WiFi.
- `config.json` contains required configuration settings.

### Install required tools

```bash
npm install -g device-discovery-cli gulp
```

### Deploy and run

```bash
npm install
```

```bash
gulp install-tools
gulp deploy
```
