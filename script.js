const bar = document.querySelector(".bar")
let isOpened = false
bar.addEventListener("click", () => {
    if (isOpened == false) {
        document.querySelector(".sidebar").classList.remove("translate-x-[-260px]");
        isOpened = true;
    }
    else {
        document.querySelector(".sidebar").classList.add("translate-x-[-260px]");
        isOpened = false
    }
})
document.querySelector(".sidebar").addEventListener("mouseleave",()=>{
    document.querySelector(".sidebar").classList.add("translate-x-[-260px]");
    isOpened=false;
})
