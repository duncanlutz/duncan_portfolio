import React, { useEffect } from "react";
import lottie from "lottie-web";
import assembly from '../images/Assembly.json';
import '../css/Landing.css';

function Landing(props) {
    let animationContainer = React.createRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: assembly
        })
    }, [])
  var animOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: assembly
  }

  return <div>
      <div className='anim-cont' ref={animationContainer} />
  </div>;
}

export default Landing;
