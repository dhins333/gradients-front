import React from 'react';
import { useSelector } from 'react-redux';

const Details = (props) => {


    const showcase = useSelector((state) => {
        return state.showcase;
    })
    
    let color1 = `rgba(${showcase[props.position].color1[0]},${showcase[props.position].color1[1]},${showcase[props.position].color1[2]},${showcase[props.position].color1[3]})`;
    let color2 = `rgba(${showcase[props.position].color2[0]},${showcase[props.position].color2[1]},${showcase[props.position].color2[2]},${showcase[props.position].color2[3]})`;
    
    return(
        <div className='details-container'>
            <div className = 'details'>
                <div className='details-item1'>
                    <p className='details-color1 details-text'>{color1}</p>
                    <p className='details-arrow details-text'>{'-> '}</p>
                    <p className='details-color2 details-text'>{color2}</p>
                </div>
                <div className = 'details-item2'>
                    <p className = 'details-css' title='Get CSS'>{'</>'}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;