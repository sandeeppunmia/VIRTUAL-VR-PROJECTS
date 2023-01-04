AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"},
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
        this.handleClickEvents();
    },
    handlePlacesListState:function(){
        const id=this.el.getAttribute("id")
        const placesId = ["taj-mahal","budapest","new-york-city","eiffel-tower"]
        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"#d76b30",
                opacity:1
            })
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState();
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == selectedItemId){
                    el.setAttribute("material",{
                        color:"#0077cc",
                        opacity:1
                    })
                }
            }
        })
    },
    handleClickEvents:function(){
        this.el.addEventListener("click",e=>{
            const placeContainer = document.querySelector("#places-container")
            const {state} = placeContainer.getAttribute("tour")
            if(state=="places-list"){
                const id = this.el.getAttribute("id")
                const placeId = [
                    "budapest",
                    "eiffel-tower",
                    "taj-mahal",
                    "new-york-city"
                ]
                if(placeId.includes(id)){   
                    placeContainer.setAttribute("tour",{
                        state:"view",
                        selectedCard:id
                    })
                }
            }
            if(state==="view"){
                this.handleViewState();
            }
            if(state==="change-view"){
                this.handleViewState();
            }
        })
    },
    handleViewState:function(){
        const el = this.el;
        const id = el.getAttribute("id")
        const placeContainer = document.querySelector("#places-container")
        const {selectedItemId} = placeContainer.getAttribute("cursor-listener")
        const sideViewPlacesId = ["place-1","place-2","place-3","place-4"]
        if(sideViewPlacesId.includes(id)){
            placeContainer.setAttribute("tour",{
                state:"change-view"
            })  
            const skyEl = document.querySelector("#main-container")
            skyEl.setAttribute("material",{
                src:`./assets/360_images/${selectedItemId}/${id}.jpg`,
                color:"#fff"
            })
        }
    }
})