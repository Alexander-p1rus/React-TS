import React, {FC, PropsWithChildren, useState} from 'react';

export enum CardVariant {
    OUTLINED = 'outlined',
    PRIMARY = 'primary'
}

interface CardProps extends PropsWithChildren {
    width: string,
    height: string,
    variant:CardVariant
    background?: string,
    onClick:(count:number)=>void
}

const Card: FC<CardProps> = (
    {
        width,
        height,
        variant,
        onClick,
        children
    }) => {

    const [count,setCount]=useState<number>(0)

    return (
        <div style={
            {
                width,
                height,
                background:variant===CardVariant.PRIMARY?'yellow':'gray',
                border: variant===CardVariant.OUTLINED?"4px solid red":undefined
            }}
             onClick={()=>{
                 setCount((c)=>c+=1)
                 onClick(count)
             }}
        >
            {children}
        </div>
    );
};

export default Card;