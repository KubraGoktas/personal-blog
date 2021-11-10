import React, { useEffect, useState } from 'react'
import foto1 from '../assets/images/indir.jpg'
import me from '../assets/images/me.jpg'

const MyWork = () => {
    const [opacity, setopacity] = useState(1)
    const [ScrollPosition, setScrollPosition] = useState()
    const position = window.pageYOffset;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (ScrollPosition > 520) {
            setopacity(opacity - 0.01)
        } 
    }, [ScrollPosition])
    console.log(ScrollPosition, opacity)
    return (
        <div id='MyWork' >
            {/* <img src={foto1} width='50%' style={{ position: 'absolute' }} />
            <img src={me} width='50%' style={{ position: 'relative', opacity: opacity }} /> */}

        </div>
    )
}

export default MyWork
