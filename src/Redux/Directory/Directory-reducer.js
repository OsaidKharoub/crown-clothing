const INITIAL_STATE = {
    sections : [

        {title : "hats" ,
         image : "https://i.ibb.co/cvpntL1/hats.png",
         link : "hats",
         id : 1},

         {title : "jackets" ,
         image : "https://i.ibb.co/px2tCc3/jackets.png",
         link : "jackets",
         id : 2},

         {title : "sneakers" ,
         image : "https://i.ibb.co/0jqHpnp/sneakers.png",
         link : "sneakers",
         id : 3},

         {title : "woman" ,
         image : "https://i.ibb.co/GCCdy8t/woman.png",
         size:"larg",
         link : "woman",
         id : 4},

         {title : "men" ,
         image : "https://i.ibb.co/R70vBrQ/men.png",
         size:"larg",
         link : "men",
         id : 5}

    ]
}

export const directoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){

        default : 
        return state ;
    }
}