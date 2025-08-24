#include <Arduino.h>

/*
  Climate Forecast Irrigation - ESP32 firmware (starter)
  - Plan: connect sensors, read climate data, send to backend (HTTP/MQTT)
  - TODOs:
    1) Add Wi-Fi credentials and connect.
    2) Initialize sensors (soil moisture, DHT/HTU/etc).
    3) Send sensor data to backend periodically.
    4) Receive irrigation commands and control relay/valve.
*/

void setup() {
  Serial.begin(115200);
  // TODO: Wi-Fi + sensor init
}

void loop() {
  // TODO: read sensors, publish data, sleep
  delay(1000);
}
