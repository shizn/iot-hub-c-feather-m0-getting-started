---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---

# Send device-to-cloud messages
This sample repo accompanies [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson4-send-cloud-to-device-messages) lesson. It shows how to send messages from an Azure IoT hub to an Adafruit Feather M0 WiFi board.

## Prerequisites
See [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson4-send-cloud-to-device-messages) for more information.

## Repository information
- `app` sub-folder contains the sample Arduino application that receives cloud-2-device messages.
- `config.json` contains required configuration settings.

## Running this sample
Please follow the [Lesson 4: Send cloud-to-device messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson4-send-cloud-to-device-messages) for detailed walkthrough of the steps below.

### Deploy and run

Install required npm packages on the host:

```bash
npm install
```

Create a JSON configuration file in the `.iot-hub-getting-started` sub-folder of the current user's home directory:

```bash
gulp init
```

Install required tools/packages on the Adafruit Feather M0 WiFi board, deploy sample application, and run it on the device:


```bash
gulp install-tools

gulp run
# You can monitor the serial port by running listen task:
gulp listen

# Or you can combine above two gulp tasks into one:
gulp run --listen
```
