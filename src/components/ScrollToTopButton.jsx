import { useEffect, useState } from 'react';
import styled from 'styled-components';
import "../Styles.scss";
import arrow from "../assets/collapsible/arrow_back.svg"

const ScrollStyled = styled.span`
.topButton {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}

    .topButton:hover {
    background-color: #ff6060;
    }
`

export default function ScrollTopTopButton() {
    const [ backToTop, setBackToTop ] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setBackToTop(true)
            } else { 
                setBackToTop(false)
            }
        })
    }, [])

    const buttonTop = () => {
        window.scrollTo({
            top: 0, 
            behaviour: "auto"
        })
    }

    return(
        <>
            <ScrollStyled>
                {backToTop && (
                <button className='topButton' onClick={buttonTop}>
                    <img src={arrow} alt="Scroll back to the top of the page" />
                </button>)}
            </ScrollStyled>
        </>
  )
}