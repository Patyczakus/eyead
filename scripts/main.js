window.onload = () => {
    header()
}

function header() {
    setTimeout(() => {
        document.getElementById("header").style.marginTop = `${document.getElementsByTagName("html")[0].scrollTop - document.getElementsByTagName("html")[0].scrollHeight}px`
        header()
    }, 5)
}