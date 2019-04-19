import React from 'react';

const Card = (props) => {
    const { active, created_on, description, modified_on, name, type, users, editable } = props.data;

    // render img thumbnails on cards
    const getUserImgs = () => {
        return users.map((item, i) => {
            return <img src={item.photo_url} alt={item.first_name + " " + item.last_name} className="card__user__photo" key={i} />
        })
    }

    return (
        <div className="card">
            <div className="card__group">
                <div className={"card__inactive-label"} style={active ? { visibility: "hidden" } : { visibility: "visible" }}>
                    <p>Inactive</p>
                </div>
                <h2 className="card__name">{name}</h2>
                <p className="card__type">{type.toUpperCase()}</p>
                <p className="card__description">{description}</p>
                <div className="card__user">
                    {getUserImgs()}
                </div>
            </div>
            <footer className="card__footer">
                <p className="card__date-stamp">{editable ? "Last update: " + new Date(modified_on).toString().substring(3, 15) : "Date created: " + new Date(created_on).toString().substring(3, 15)}</p>
                {editable ? (<div>
                    <button className="card__footer-edit-delete-btn">Edit</button>
                    <button className="card__footer-edit-delete-btn">Delete</button>
                </div>)
                    : <i className="fas fa-lock"></i>
                }
            </footer>
        </div>
    );
};

export default Card;