#ifndef VECTOR2_H
#define VECTOR2_H

#include<iostream>
#include<cmath>
#include "Utils.h"
using namespace std;

//#define Vector2 V2

class Vector2{
    
        friend ostream &operator <<(ostream& output,const Vector2& v){
            return output<<v.x<<" "<<v.y;
        }
    public:
        float x;
        float y;

    public:
        //Vector2()=default;
        Vector2():x(0.0f),y(0.0f){}
        Vector2(float x,float y):x(x),y(y){}
        Vector2(const Vector2& v):x(v.x),y(v.y){}
        ~Vector2()=default;
        //Vector2(Vector2 v);

        Vector2 Add(Vector2 add);
        Vector2 Sub(Vector2 sub);
        void Set(float x,float y);
        float Length();
        float SqrtLength();

        Vector2 operator + (const Vector2& v){
            return Vector2(this->x+v.x,this->y+v.y);
        }
        Vector2 operator - (const Vector2& v){
            return Vector2(this->x-v.x,this->y-v.y);
        }
        void operator += (const Vector2& v){
            this->x += v.x;
            this->y += v.y;
        }
        void operator -= (const Vector2& v){
            this->x -= v.x;
            this->y -= v.y;
        }
        void operator *= (const float n){
            this->x *= n;
            this->y *= n;
        }
        bool operator==(const Vector2& v)
        {
            if (this->x == v.x && this->y == v.y)
            {
                return true;
            }
            return false;
        }

        float Dot(const Vector2& v1, const Vector2& v2);
        float Cross(const Vector2& v1, const Vector2& v2);
        



};
//Vector3(x,y,z)->Vector2(x,y)
//x,y->x,y;z->x*z,y*z  x,y为方向,z为大小
class Matrix{

};


#endif