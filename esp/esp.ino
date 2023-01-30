#include <WiFi.h>
#include <PubSubClient.h>
#define RXD2 16
#define TXD2 17
String incomingString;
String subString;

const char *ssid = "FABLAB";
const char *password = "FAB@2022";
const char *device_id = "ai";
const char *mqtt_server = "192.168.10.19";
const int mqtt_port = 1883;

unsigned long previousMillis = 0,previousMillis1=0;
const long interval = 30000,interval1 = 30000;
unsigned long currentMillis=0;
WiFiClient espClient;
PubSubClient client(espClient);


void setup() {
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, RXD2, TXD2);
  connectTo();
}

void loop() {

     /*** While Connection not established ***/
    currentMillis = millis();
    sensorData();
    if (currentMillis - previousMillis1 >= interval1) {
    // save the last time you blinked the LED
    previousMillis1 = currentMillis;
    if (!client.connected())
    {
      reconnect();
    }
   }
    /*** Reading Loop ***/
    client.loop();
    /***/
}
void connectTo(){
    /*** WIFI Connection and Subscribe***/
    Serial.print("Connecting to ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
  {
       delay(500);
       Serial.print(".");
   }

    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);
    /***/
    client.publish("distance_s", device_id, true);
}
void reconnect()
{
      if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
 Serial.print("Attempting MQTT connection...");
        if (client.connect(device_id))
        {
            Serial.println("Connected to MQTT");
            client.subscribe("Distance_Sensor");
            client.publish("distance_s", device_id, true);
        }
        else
        {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(10);
       }
  }
}
void callback(char *topic, byte *payload, unsigned int length)
{
        String msg ="" ;
        for (int i = 0; i < length; i++)
        {
            msg += (char)payload[i];
        }
}
void sensorData(){
     if(Serial2.available()>0){
    char buff[15];
     incomingString = Serial2.readStringUntil('\n');
     subString = incomingString.substring(0,14);
     subString.toCharArray(buff,15);
     Serial.println(buff);
     client.publish("distance_s",buff,true);
     incomingString="";
}
}
