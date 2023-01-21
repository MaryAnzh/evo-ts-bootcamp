import React, { RefObject, useLayoutEffect } from 'react';
import { transform } from 'typescript';
import './Bubble.scss';

type BubblePropsType = {
    top: number,
    left: number,
    opacity: number,
    size: number,
}

type BubbleSTateType = {
    animation: string,
    duration: number,
    size: number,
    top: number,
    left: number,
    opacity: number,
}

type styleType = {
    width: string,
    hight: string,
    top: number,
    left: number,
    opacity: number,
    animation: string,
}

export class Bubble extends React.Component<BubblePropsType, BubbleSTateType> {
    private style: styleType;

    constructor(props: BubblePropsType) {
        super(props);
        this.state = {
            animation: '',
            duration: 0,
            size: this.props.size,
            top: this.props.top,
            left: this.props.left,
            opacity: this.props.opacity,
        }

        this.style = {
            width: `${this.state.size}px`,
            hight: `${this.state.size}px`,
            top: this.state.top,
            left: this.state.left,
            opacity: this.state.opacity,
            animation: `up2 ${1}s forwards`,
        }
    }

    bubbleUPAnimation() {
        return `
        @keyframes up2 {
            0% {
                top: ${this.props.top};
            }                
            100% {
                top: 0;
            }                
        }`
    }

    animationEnd = () => {
        console.log('to upp');
    }

    render(): React.ReactNode {
        return (
            <div>
                <style>
                    {this.bubbleUPAnimation()}
                </style>
                <div
                    className="bubble-wrap"
                    style={this.style}
                    onAnimationEnd={this.animationEnd}>
                    <img
                        className='bubble-wrap__bubble'
                        src="./img/bubble.png"
                        alt="bubble" />
                </div>
            </div>
        );
    }
}