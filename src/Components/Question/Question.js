import React from 'react';
import './Question.css'
const Question = () => {
    return (
       <div className="question_area">
            <div className='question'>
            <h2 style={{
                textAlign : 'center',
            }}>Frequently ask question : </h2>
            <div className="question">
                <h3>1. How react works ? </h3>
                <p>
                    <span>Answer : </span>
                    React is a very popular JavaScript library and user interface.But not a lot of React developers know how React works behind the hood.
                    its very core concept, Finally react create a tree for us. This tree is able to do capable diff computations on the nodes.
                    There's nothing like JSX - neither to JavaScript, nor to the browser. JSX is simply syntactic sugar for creating very specific JavaScript objects.
                </p>
            </div>
            <div className="question">
                <h3>1. What is the different between props vs state ?</h3>
                <p>
                    <span>Answer : </span>
                    Through React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.
                    In this case there’s nothing useful going on, but imagine doing something different based on the prop value, probably setting a state value is best.Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state.
                 
                </p>
            </div>
            <div className="question">
                <h3>1. How useState works?</h3>
                <p>
                    <span>Answer : </span>
                    The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. 
                </p>
            </div>
        </div>
       </div>
    );
};
export default Question;