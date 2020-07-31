
const mainReducer = (state,action) => {

    switch(action.type){
        case 'changecolor1' :
            return {...state,color1:'rgba(1,0,0,1)'}
        default:
            return state;
    }

}

export default mainReducer;