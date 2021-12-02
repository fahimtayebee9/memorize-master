const Preloader = () => {
    const runPreLoader = () => {
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 3000);
    }
    
    runPreLoader();

    return (
        <div id="preloader" class="light"> 
            <div class="outer">
                <div class="infinityChrome">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="infinity">
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;