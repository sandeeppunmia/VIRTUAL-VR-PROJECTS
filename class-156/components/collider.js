AFRAME.registerComponent("flying-bird",{
    init:function(){
        for (var i=1;i<=20;i++){
            var id = `ring${i}`
            var posX = (Math.random()*3000 + (-1000))
            var posY = (Math.random()*2 + (-1))
            var posZ = (Math.random()*3000 + (-1000))
            var position = {x:posX,y:posY,z:posZ}
            this.flyingbirds(id,position)
        }
    },
    flyingbirds:function(id,position){
        var terrainEl = document.querySelector("#terrain")
        var birdEl = document.createElement("a-entity")
        birdEl.setAttribute("id",id)
        birdEl.setAttribute("scale",{x:500,y:500,z:500})
        birdEl.setAttribute("gltf-model","./models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer",{})
        birdEl.setAttribute("position",position)
        birdEl.setAttribute("static-body",{shape:"sphere", sphereRadius:5})
        birdEl.setAttribute("game-play",{
            elementId:`#${id}`
        })
        terrainEl.appendChild(birdEl)
    }
})