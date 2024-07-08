import "./Loading.scss";

export default function Loading() {
  document.title = "Kasa - Loading...";
    return(
        <div className="loading-container">
            <div class="mainCss">
                <div class="dotsCss">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </div>
    )
}

//Loading Element from CodePen : Running Dots Loader
//https://codepen.io/Meet-the-reactor/pen/abrpgQr 