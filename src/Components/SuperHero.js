import React from "react";

const SuperHero = (props) => {

    return (
        <div style={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center', justifyContent: 'space-between'
        }}>
            <h3 style={{ color: props.color }}>{props.name}</h3>
            <a href="#" onClick={props.hapus(props.name)}>Hapus</a>
        </div>
    );
}

export default SuperHero;