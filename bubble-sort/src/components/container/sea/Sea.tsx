import React, { ReactElement, RefObject } from 'react';
import './Sea.scss';
import { Bubble } from '../../simple/bubble/Bubble';

type SraPropsType = {
    name: string,
}

export class Sea extends React.Component<SraPropsType> {
    private width = 500;
    private hight = 300;
    private opacity = 1;
    private minBubbleCount = 6;

    private bubblesSet = [...Array(this.minBubbleCount).keys()].map(el => {
        const top: number = Math.floor(Math.random() * this.hight);
        const left: number = Math.floor(Math.random() * this.width);
        const opacity: number = el % 3 === 0 ? this.opacity : (Math.floor(Math.random() * 6)) / 10 + 0.4;
        const size = Math.floor(Math.random() * 40) + 15;
        const ref: React.RefObject<Bubble> = React.createRef();

        return <Bubble
            ref={ref}
            key={el + top + left}
            top={top}
            left={left}
            opacity={opacity}
            size={size} />
    });

    constructor(props: SraPropsType) {
        super(props);
    }

    // componentDidMount() {
    //     this.showAnimation();
    // }

    render(): React.ReactNode {
        return (
            <div className='sea'>
                {this.bubblesSet}
            </div>)
    }
}