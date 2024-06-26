import styled from "styled-components";

const LoadingStyle = styled.div`
.mainCss {
  width: 100%;
  height: 100vh;
}

.dotsCss {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.dot {
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  border-radius: 20px;
  transform: translate(0px, -40px);
  animation: bounce 1s infinite;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0% {
    transform: translate(0px, -10px);
  }
  40% {
    width: 0px;
    height: 2px;
    transform: translate(0px, 40px) scale(1.7);
  }
  100% {
    height: 20px;
    transform: translate(0px, -20px);
  }
}
`

export default function LoadingPage() {
    return(
        <LoadingStyle>
            <div className="loading-container">
                <div class="mainCss">
                    <div class="dotsCss">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
        </LoadingStyle>  
    )
}

//Loading Element from CodePen : Running Dots Loader
//https://codepen.io/Meet-the-reactor/pen/abrpgQr 