function ParticleDamping(){
    var particles = new Array();

    this.gravity = new Vector2(0,100)
    this.effectors = new Array();

    this.emit = function(particle){
        particles.push(particle);
    }
    this.damping = function(dt){

    }
    this.force = function(dt){
        for(var i in particles){
            particles[i].acceleration = this.gravity;
            particles[i].velocity.add(particles[i].acceleration.multilpy(dt));
            particles[i].position.add(particles[i].velocity.multilpy(dt));

        }
    }
    //这是因为apply（）可以将一个数组默认的转化为一个参数列表
    function applyEffectors() {
        for (var j in that.effectors) {
            var apply = that.effectors[j].apply;
            for (var i in particles)
                apply(particles[i]);    
        }
    }

    //在函数kill()里，用了一个技巧。因为粒子在数组里的次序并不重要，要删除中间一个粒子，只需要复制最末的粒子到那个元素，
    //并用pop()移除最末的粒子就可以。这通常比直接删除数组中间的元素快(在C++中使用数组或std::vector亦是)。

    function kill(index){
        if(particles.length>1)
            particles[index] = particles[particles.length -1];
        particles.pop();
    }
}