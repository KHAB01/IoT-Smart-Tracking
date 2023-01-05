const int trigPin1 = 8;
const int echoPin1 = 9;
const int trigPin2 = 5;
const int echoPin2 = 4;
const int trigPin3 = 6;
const int echoPin3 = 7;


long measureDistance(int trigPin, int echoPin) {
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
  if (distance >= 400 || distance <= 0){
    return -1;
  }
  else {
    return distance;
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(trigPin1, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(trigPin2, OUTPUT);
  pinMode(echoPin2, INPUT);
  pinMode(trigPin3, OUTPUT);
  pinMode(echoPin3, INPUT);
}

void loop() {
  long distance1 = measureDistance(trigPin1, echoPin1);
  if (distance1 == -1) {
    Serial.println("Out of range");
  }
  else {
    Serial.print(distance1);
    Serial.println(" cm");
  }

  long distance2 = measureDistance(trigPin2, echoPin2);
  if (distance2 == -1) {
    Serial.println("Out of range");
  }
  else {
    Serial.print(distance2);
    Serial.println(" cm");
  }

  long distance3 = measureDistance(trigPin3, echoPin3);
  if (distance3 == -1) {
    Serial.println("Out of range");
  }
  else {
    Serial.print(distance3);
    Serial.println(" cm");
  }

  delay(500);
}
