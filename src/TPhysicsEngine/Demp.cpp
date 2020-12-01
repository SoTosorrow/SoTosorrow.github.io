#include"Body.h"
//reference https://box2d.org/publications/
//Body 细分、多继承
//Vector2 改写为模板类
//增加顶级域名
//World vector<*>重写、用智能指针
//抖动处理
//World Add 写成模板函数，增加各种物体
int main(){
    Body body;
    cout<<body.position.x<<" ";
    cout<<body.position.y<<endl;
    cout<<body.mass<<endl;
    cout<<"Vector"<<endl;
    Vector2 v(2,1);
    Vector2 v2(v);
    cout<<v<<endl;
    v2 += v;
    cout<<v2<<endl;
    v2 *= 3;
    cout<<v2<<endl;
    v2 -= v;
    cout<<v2<<endl;
    Vector2 v3 = v +v2;
    cout<<v3<<endl;
    cout<<(v3==Vector2(12,6))<<endl;
    cout<<(v3==v2);
    cout<<"makeSure"<<(0==0.0f);
    return 0;
}