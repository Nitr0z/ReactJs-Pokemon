import React from 'react'

const DataApi = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <a className='name'>{name}</a>
                <small>Type : {type}</small>
            </div>
        </div>
    )
}

export default DataApi
