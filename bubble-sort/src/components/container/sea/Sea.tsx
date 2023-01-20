import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Sea.scss';
import { Bubble } from '../../simple/bubble/Bubble';

export class Sea extends React.Component {
    private width = 500;
    private hight = 300;
    private opacity = 1;
    private minBubbleCount = 40;

    private bubbleSet = [...Array(this.minBubbleCount).keys()].map(el => {
        const top: number = Math.floor(Math.random() * this.hight);
        const left: number = Math.floor(Math.random() * this.width);
        const opacity: number = el % 3 === 0 ? this.opacity : (Math.floor(Math.random() * 6)) / 10 + 0.4;
        const size = Math.floor(Math.random() * 40) + 15;

        return <Bubble
            key={el + top + left}
            top={top}
            left={left}
            opacity={opacity}
            size={size} />
    });


    render(): React.ReactNode {
        return (
            <div className='sea'>
                {this.bubbleSet}
            </div>)
    }
}