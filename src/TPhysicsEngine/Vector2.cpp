#include "Vector2.h"

void Vector2::Set(float x,float y){
    this->x = x;
    this->y = y;
}
Vector2 Vector2::Add(Vector2 add){
    this->x += add.x;
    this->y += add.y;
    return *this;
}
Vector2 Vector2::Sub(Vector2 sub){
    this->x -= sub.x;
    this->y -= sub.y;
    return *this;
}
float Vector2::Length(){
    return sqrt(this->Length());
}
float Vector2::SqrtLength(){
    return (this->x* this->x + this->y* this->y);
}
float Vector2::Dot(const Vector2& a, const Vector2& b){
    // ab = |a|*|b|*cos(a,b)
    return a.x * b.x + a.y * b.y;
}
float Vector2::Cross(const Vector2& a, const Vector2& b){
    // ab = |a|*|b|*cos(a,b)
    return a.x * b.y - a.y * b.x;
}