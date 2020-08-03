
const mainReducer = (state,action) => {

    switch(action.type){
        case 'red_change1':
            return {...state,color1:[action.red,state.color1[1],state.color1[2],state.color1[3]]};
        case 'red_change2':
            return {...state,color2:[action.red,state.color2[1],state.color2[2],state.color2[3]]};
        case 'green_change1':
            return {...state,color1:[state.color1[0],action.green,state.color1[2],state.color1[3]]};
        case 'green_change2':
            return {...state,color2:[state.color2[0],action.green,state.color2[2],state.color2[3]]};
        case 'blue_change1':
            return {...state,color1:[state.color1[0],state.color1[1],action.blue,state.color1[3]]};
        case 'blue_change2':
            return {...state,color2:[state.color2[0],state.color2[1],action.blue,state.color2[3]]};
        case 'percent_change1':
            return {...state,percent1:action.percent}
        case 'percent_change2':
            return {...state,percent2:action.percent}
        case 'alpha_change1':
            return {...state,color1:[state.color1[0],state.color1[1],state.color1[2],action.alpha]}
        case 'alpha_change2':
            return {...state,color2:[state.color2[0],state.color2[1],state.color2[2],action.alpha]}
        case 'change_type':
            if (state.type === 'linear'){
                return {...state,type:'radial'};
            }
            else{
                return {...state,type:'linear'};
            }
        case 'change_deg':
            return {...state,deg:action.deg}
        default:
            return state;
        
    }

}

export default mainReducer;