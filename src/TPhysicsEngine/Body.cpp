#include"Body.h"
void Body::Set(Vector2 s,float m){
    this->mass = m;
    this->shape = s;
    //防止除以0
    if(this->mass!=0){
        this->invMass= 1/this->mass;
    }else{
        this->invMass=0;
    }

    //inertia?
    //invInertia?

    /*
    if(mass>FLT_MAX)
    if(mass<FLT_MIN)
    */
}

