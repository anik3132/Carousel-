/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react'
import sliderData from './slider'

const Corrent = ({slides}) => {
    const [count, setCount]=useState(0)
    const lenth = slides.length
    const pre=()=>{
        setCount(count===lenth - 1 ? 0 :count + 1)
    }
    const nex=()=>{
        setCount(count===0 ? lenth-1 :count - 1)
    }
    if(!Array.isArray(slides) || slides.length<=0){
        return null
    }
    return (
        <>
        <button className="btn btn-outline-danger" onClick={pre}>pre</button>
        <div className="p-5 m-3">{
            sliderData.map((val,index)=>{
                return(
                    <div className={index===count ? 'val active':'val'} key={index}>
                    {index===count &&(<img src={val.img} alt="photo"/>
                    )}
                 </div>
                )
            })
        }
        </div>
        <button className="btn btn-outline-danger" onClick={nex}>next</button>
        </>
    )
}

export default Corrent
