
import { useState } from 'react';
// import dog1 from './dog1.jpg';
import Modal from './Modal';
import Background from './Background';
// import Dog1 from './assets/dog1.jpg';
const frank = 'This is Frank the puppy. He is a happy puppy!'
const clara = 'Clara has a beautiful (and big!) dog.'
const tim = 'Tim is a sleepy cat!'
const fran = 'Fran is vey curious today!'
const textList = [frank]
let text = 'I am some text';

function Bar(props) {

    const [ modalIsOpen, setModalIsOpen ] =useState(false);
    // const textList = [frank, clara, tim, fran]
    

    

    // function selectText() {
    //     const textList = ['frank']
    //     textList.forEach(item => {
    //         return text = item;
            
    //     })
    // }

    function openHandler() {
        setModalIsOpen(true)
        // selectText()
        // return text;
    }

    function closeHandler() {
        setModalIsOpen(false)
        
    }

    return (
        <div className='container--flex container__middle--small'>
            <div className="container--flex container__middle--img">
                <img src={props.name} alt="" />
            </div>
            <button className="btn--img" onClick={openHandler}>Click</button>
            { modalIsOpen ? <Modal text={text}/> : null}
            { modalIsOpen ? <Background onClick={closeHandler}/> : null}
        </div>
    )
}

export default Bar;