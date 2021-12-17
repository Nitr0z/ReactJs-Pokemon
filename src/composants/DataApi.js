import React from 'react'

const DataApi = ({id, image, name, type}) => {
    const style = type + " pokemon";
    return (
        <div className={style}>
            <div>#{id}</div>
            <img src={image} alt=" " />
            <div className="detail">
                <a className='name'>{name}</a>
                <div>Type : {type}</div>
            </div>
        </div>
    )
}

export default DataApi
