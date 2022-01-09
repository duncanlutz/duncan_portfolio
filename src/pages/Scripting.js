import React, { useEffect } from 'react';
import lottie from "lottie-web";
import { useElementOnScreen } from '../hooks/DuncansHooks';
import mogrtAnim from '../images/mogrt_demo.json';
import '../css/Scripting.css';

function Scripting() {

    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            autoplay: false,
            animationData: mogrtAnim
        })
    }, [])

    const playAnim = (e) => {
        const entry = e[0];
        if (entry.isIntersecting == true) {
            console.log('test')
            lottie.play();
        }
        else
        {
            return;
        }
    }

    const [contRef, isVisible] = useElementOnScreen(playAnim, {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
      });

    return (
        <div className='scripting-wrapper'>
            <div className='video-title' ref={contRef}>mogrts & extensions</div>
            <div className='script-cont'>
                <div className='mogrt-anim' ref={animationContainer} />
            </div>
        </div>
    );
}

export default Scripting;