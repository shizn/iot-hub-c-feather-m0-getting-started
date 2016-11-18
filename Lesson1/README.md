---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---

# Configure an Adafruit Feather M0 WiFi and run a sample app on it
This sample repo accompanies [Lesson 1: Configure your device] lesson. It shows how to setup an Adafruit Feather M0 WiFi board, deploy and run a sample application.

## Repository information
- `app` sub-folder contains the sample `app.ino` application that blinks the GPIO #13 on-barod LED.
- `config.json` contains required configuration settings.

## Running this sample
Please follow the [Lesson 1: Configure your device] for detailed walkthrough of the steps below.

### Install required tools

```bash
npm install -g gulp device-discovery-cli
```

### Deploy and run

Install required npm packages on the host:

```bash
npm install
```

Install required tools/packages for the  Adafruit Feather M0 WiFi board, deploy sample application, and run it on the device:

```bash
gulp install-tools
gulp run
```
