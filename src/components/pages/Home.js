import React from 'react';
import { useState } from 'react';
import '../../App.css'
import BackgroundControl from '../BackgroundControl'
import BackgroundControlA from '../BackgroundControlA'
// function debounce(e,t=300){let u;return(...i)=>{clearTimeout(u),u=setTimeout(()=>{e.apply(this,i)},t)}}
// var count=1;
// document.addEventListener('scroll', debounce(() => {
//     if(document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight) {
//       alert("cool")
//     }
//     return 
//   }, 500))

function Home(){
    const[state , setState] = useState(0)
    function debounce(e,t=300){let u;return(...i)=>{clearTimeout(u),u=setTimeout(()=>{e.apply(this,i)},t)}}
    var count=1;
    document.addEventListener('scroll', debounce(() => {
        if(document.documentElement.scrollHeight === window.pageYOffset + window.innerHeight) {
        setState(1)
        }
    }, 500))
    console.log(state);
    return(
        <>
           {/* state == 0 ?  <BackgroundControl/> : <BackgroundControlA/> */}
           <BackgroundControl/>
        </>

    );
}

export default Home;