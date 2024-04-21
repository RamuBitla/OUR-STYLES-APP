import React, { useState } from 'react'
import style from '../style.module.css';

const FAQ = () => {

    const data = [
        {
            question : "Question 1?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 2?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 3?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
        },
        {
            question : "Question 4?",
        answers: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dolore, inventore fugiat tempora dignissimos expedita illo sequi eos libero minus, suscipit quia vero ipsa blanditiis! Dignissimos, sequi qui."
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
                                <img src={require('../../../assets/down-arrow.png')} alt="" className={selected === i ? `${style.reverse}`:""}/>
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