import React from 'react';
import './Bubble.scss';

type BubblePropsType = {
    top: number,
    left: number,
    opacity: number,
    size: number,
}

type styleType = {
    width: string,
    hight: string,
    top: number,
    left: number,
    opacity: number,
}
export class Bubble extends React.Component<BubblePropsType> {
    private style: styleType;

    constructor(props: BubblePropsType) {
        super(props);
        this.style = {
            width: `${props.size}px`,
            hight: `${props.size}px`,
            top: props.top,
            left: props.left,
            opacity: props.opacity,
        }
    }

    render(): React.ReactNode {
        return (
            <div
                className="bubble-wrap"
                style={this.style}>
                <img
                    className='bubble-wrap__bubble'
                    src="./img/bubble.png"
                    alt="bubble" />
            </div>
        );
    }
}