#include "NewPing.h"
//Trigger and echo pins
const int trigPins[6] = {2,4,6,8,10,12};
const int echoPins[6] = {3,5,7,9,11,13};
#define MAX_DISTANCE 200
//
String msg="";
float distance[6];
float duration[6];
//sensors numbers
const int n=6;

NewPing sonar[6]={
  NewPing(trigPins[0],echoPins[0],MAX_DISTANCE),
  NewPing(trigPins[1],echoPins[1],MAX_DISTANCE),
  NewPing(trigPins[2],echoPins[2],MAX_DISTANCE),
  NewPing(trigPins[3],echoPins[3],MAX_DISTANCE),
  NewPing(trigPins[4],echoPins[4],MAX_DISTANCE),
  NewPing(trigPins[5],echoPins[5],MAX_DISTANCE),
};
void setup(){
  Serial.begin(9600);
 }

void loop(){
  getDistance();
};
void getDistance(){
   for (uint8_t i=0;i<=n;i++){
    distance[i]=0;
    delay(150);
    distance[i]=(sonar[i].ping()/2)*0.0343;
    Serial.print("Sensor ");
    Serial.print(i+1);
    Serial.print(": ");
    Serial.print(distance[i]);
    Serial.println(" cm");
  }
}
