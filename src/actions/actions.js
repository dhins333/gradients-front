import axios from 'axios';


const fillShowcase = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/get');
        dispatch({type:'addToShowcase',data:response.data});
    }
}

export {fillShowcase};