---
services: iot-hub, iot-suite
platforms: Arduino
author: yaozheng
---


# Send device-to-cloud messages
This sample repo accompanies [Lesson 3: Send device-to-cloud messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson3-deploy-resource-manager-template) lesson. It shows how to send messages from an Adafruit Feather M0 WiFi board to Azure IoT hub. It also demonstrates how to use an Azure function app to receive incoming IoT hub messages and persist them to Azure table storage.

## Prerequisites
See [Lesson 3: Send device-to-cloud messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson3-deploy-resource-manager-template) for more information.

## Repository information
- `app` sub-folder contains the sample app.ino application that sends device-2-cloud messages.
- `config.json` contains required configuration settings.
- `arm-template.json` is the ARM template containing an Azure function app and a storage account.
- `arm-template-param.json` file is the configuration file used by the ARM template.
- `ReceiveDeviceMessages` sub-folder contains Node.js code for the Azure function.

## Running this sample
Please follow the [Lesson 3: Send device-to-cloud messages](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-adafruit-feather-m0-wifi-kit-arduino-lesson3-deploy-resource-manager-template) for detailed walkthrough of the steps below.

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

Run the sample application on the device and read messages persisted in the Azure storage:

```bash
gulp run --read-storage
```
