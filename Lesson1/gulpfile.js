/*
 * IoT Hub Adafruit Feather M0 WiFi - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
 */

require('gulp-common')(require('gulp'), 'arduino-adafruit-samd-feather-m0', {
  appName: 'lesson-1',
  configTemplate: {},
  configPostfix: "m0wifi",
  app: ['app.ino']
});
