// Thay đổi nội dung búc thư ở đây
var letterContent = "Happy Valentine nhaaa 💖
Mình chỉ muốn nói là cảm ơn bạn vì đã luôn xuất hiện đúng lúc.
Đặc biệt là cảm ơn bạn vì đã tặng cho mình món quà sinh nhật của mình.
Món quà đó làm mình vui cực kỳ luôn á, vì mình cảm nhận được sự quan tâm của bạn.
Valentine này mình chúc bạn luôn hạnh phúc, luôn cười thật nhiều.
Và mong rằng chúng ta sẽ luôn có thật nhiều kỷ niệm đẹp cùng nhau 🥰
From Nhutcoder 💌"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
