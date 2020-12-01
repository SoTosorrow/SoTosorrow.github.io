#ifndef BODY_H
#define BODY_H

#include"Vector2.h"

// The Basic Describe of Object 
class Body{
    public:
        Vector2 position;
        float rotation;

        Vector2 velocity;
        float angularVelocity;
        Vector2 acceleration;

        Vector2 force;
        float mass;
        float invMass;
        //对于一个质点，I = mr²，其中 m 是其质量，r 是质点和转轴的垂直距离
        float inertia; //转动惯量
        float invInertia; //转动惯量倒数
        Vector2 shape;//形状大小（外接矩形？）
        //冲量，扭矩
        //摩擦？
    public:
        //Body()=default;
        Body():position(Vector2(0.0f,0.0f)),
            velocity(Vector2(0.0f,0.0f)),
            acceleration(Vector2(0.0f,0.0f)),
            force(Vector2(0.0f,0.0f)),
            mass(0.0f),//WHY FLT_MAX?
            invMass(0.0f),//may be FLT_MIN?
            inertia(0.0f),//WHY FLT_MAX?
            invInertia(0.0f),
            rotation(0.0f),
            angularVelocity(0.0f),
            shape(Vector2(1.0f,1.0f))
            {}
        ~Body()=default;

        // 禁止拷贝构造函数  delete 禁用标识函数
        //Body& operator=(const Body& in) = delete;

        void Set(Vector2 s,float m);
        void AddForce(const Vector2& force){
            this->force += force;
        }

};


#endif