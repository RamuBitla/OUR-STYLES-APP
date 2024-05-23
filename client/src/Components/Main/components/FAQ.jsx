import React, { useState } from 'react'
import style from '../style.module.css';

import { FaAngleDown } from "react-icons/fa6";


const FAQ = () => {

    const data = [
        {
            question : "What types of t-shirts do you offer?",
        answers: "Currently we only offer a White Unisex fit T-shirt, but we're working towards give you more options as soon as possible. We have a range of sizes available, from small to 3XL."
        },
        {
            question : "How do I choose the right size t-shirt?",
        answers: "We provide a size chart on our website to help you find the best fit for your body. You can also refer to the size chart included on the product page for each t-shirt style."
        },
        {
            question : "Can I see a preview of the t-shirt design before I place my order?",
        answers: "Yes, we provide a preview of the design on the product page for each t-shirt."
        },
        {
            question : "How long will it take for my t-shirt to be shipped?",
        answers: "The shipping time for your t-shirt will depend on your location. Standard shipping typically takes 3-7 business days, while expedited shipping options may be available for an additional fee."
        },
      
    ];

    const[selected, setSelected] = useState(null);


    const handleSelect = (i)=>{
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i);
    }
  return (
    <div className={style.faqContainer} >
        <h1 className={style.heading}>FAQs</h1>

        <section className={style.faq}>
            <div className={style.item}>
            {
                data.map((item, i)=>{
                    return(
                        <div className={style.wrapper} key={i} onClick={()=>{
                            handleSelect(i)
                        }}>
                            <div className={style.question} >
                                <h3>{item.question}</h3>
                                {/* <img src={require('../../../assets/down-arrow.png')} alt="" className={selected === i ? `${style.reverse}`:""}/> */}
                                <FaAngleDown className={selected === i ? `${style.reverse}`:""}/>

                            </div>

                            <div className={selected ===i ? `${style.answers} ${style.show}` : `${style.answers}`}>
                                <p>{item.answers}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    </div>
  )
}

export default FAQ