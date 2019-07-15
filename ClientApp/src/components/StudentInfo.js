import React from 'react'

export default function StudentInfo(props) {
    return (
        <div>
            <h3 style={{ fontWeight: "900" }}>{props.title}</h3>
            <p>{props.valueOne}</p>
            <p>{props.valueTwo}</p>
            <p>{props.valueThree}</p>
            <p>{props.valueFour}</p>
        </div>
    )
}