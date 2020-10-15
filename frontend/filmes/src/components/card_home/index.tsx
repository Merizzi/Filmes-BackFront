import React from 'react'
import '../card_home/style.css'

interface Props{
    image: string
    altImage: string
    title: string
    text: string
}

export default function CardHome(props: Props){
    const { image, title, text, altImage } = props
    return (
        <div className={"root"}>
            <img src={image} alt={altImage} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}