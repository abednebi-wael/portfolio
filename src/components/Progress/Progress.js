import React, { useState, useEffect, useRef } from 'react';
import './progress.css';

const Progress = () => {
  const [run, setRun] = useState(false)
  const progressRef = useRef();
  const valueRef = useRef();

  window.onscroll = () => setRun(prev => !prev);
  window.onload = () => setRun(prev => !prev);

  useEffect(() => {
    const scrollProgress = progressRef.current;
    const progressValue = valueRef.current;
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    
    scrollProgress.style.background = `conic-gradient(#689af8 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
    progressValue.innerText = `${scrollValue}%`
  }, [run])


  return (
    <div id="progress" ref={progressRef} onClick={() => window.scrollTo(0, 0)}>
      <div ref={valueRef}>50%</div>
    </div>
  )
}

export default Progress