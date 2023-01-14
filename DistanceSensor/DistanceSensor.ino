//Trigger and echo pins
const int trigPins[6] = {2,4,6,8,10,12};
const int echoPins[6] = {3,5,7,9,11,13};
//

int distance[6];
//sensors numbers
const int n=6;
void setup(){
  Serial.begin(9600);
  for(int i=0; i<=n;i++){
    pinMode(trigPins[i],OUTPUT);
    pinMode(echoPins[i],INPUT); 
  }
 }

void loop(){
  readingDistance();
}

void readingDistance(){
  for (int i=0;i<=n;i++){
    distance[i]=0;
    for (int j=0;j<1;j++){
      //Sending Pulse 10 Microseconds
      digitalWrite(trigPins[i],LOW);
      delayMicroseconds(5);
      digitalWrite(trigPins[i],HIGH);
      delayMicroseconds(10);
      digitalWrite(trigPins[i],LOW);
      //
      pinMode(echoPins[i],INPUT);
      //    
      distance[i] =  pulseIn(echoPins[i], HIGH,50000);
      delay(50);
    }
    distance[i] = (distance[i]/2)/29.1;
    Serial.println(distance[i]);
    Serial.println(" cm");
  }
  delay(1000);
}
