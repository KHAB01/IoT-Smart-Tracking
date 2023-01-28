#include "NewPing.h"
//Trigger and echo pins

#define SONAR1 2
#define SONAR2 3
#define SONAR3 4
#define SONAR4 5
#define SONAR5 6
#define SONAR6 7

#define MAX_DISTANCE 200


float distance[6];
float duration[6];
//sensors numbers
const int n=6;

NewPing sonar[6]={
  NewPing(SONAR1,SONAR1,MAX_DISTANCE),
  NewPing(SONAR2,SONAR2,MAX_DISTANCE),
  NewPing(SONAR3,SONAR3,MAX_DISTANCE),
  NewPing(SONAR4,SONAR4,MAX_DISTANCE),
  NewPing(SONAR5,SONAR5,MAX_DISTANCE),
  NewPing(SONAR6,SONAR6,MAX_DISTANCE),
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
    distance[i]=sonar[i].ping_cm();
    Serial.print(distance[i]);
    Serial.println(" cm");
  }
}
