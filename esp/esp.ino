#include <WiFi.h>
#include <PubSubClient.h>

/***Connection WIFI & MQTT***/
const char *ssid = "AI-LAB";
const char *password = "2020@Smarty";
const char *device_id = "DistanceSensor";
const char *mqtt_server = /*"192.168.0.11"*/ "";
const int mqtt_port = 1884;
/***/


WiFiClient espClient;
PubSubClient client(espClient);
  
void setup() {
    // put your setup code here, to run once:
    Serial.begin(9600);

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
    client.subscribe("Distance_CMD");
    /***/
    
    client.publish("SmartHome/Distance", device_id, true);
}

void loop() {

    /*** While Connection not established ***/
    if (!client.connected())
    {
        reconnect();
    }

    /*** Reading Loop ***/
    client.loop();
    /***/

}

void reconnect()
{
    while (!client.connected())
    {
        Serial.print("Attempting MQTT connection...");
        if (client.connect(device_id))
        {
            Serial.println("Connected to MQTT");
            client.subscribe("Distance_CMD");
            client.publish("SmartHome/Distance", device_id, true);
        }
        else
        {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(1000);  
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
        
        Serial.println(msg);
        char message[50];
        msg.toCharArray(message,50);
        Serial.println(msg);
        client.publish("SmartHome/Distance",message,true);

}
