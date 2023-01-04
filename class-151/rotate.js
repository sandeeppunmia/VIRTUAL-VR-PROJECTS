AFRAME.registerComponent("rotate-box",{
    schema:{
        moveX:{type:"number",default:1}
    },
    tick:function(){
        this.data.moveX = this.data.moveX + 5;
        var rotate = this.el.getAttribute("rotation")
        rotate.x = this.data.moveX
        rotate.y = this.data.moveX
        this.el.setAttribute("rotation",{x:rotate.x,y:rotate.y,z:rotate.z})
    }
})