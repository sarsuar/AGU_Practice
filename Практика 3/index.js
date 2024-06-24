const btn = document.querySelector("#btn")

btn.addEventListener('click',changeImage)

const images = [
    'https://www.gov.kz/uploads/2023/3/29/dc755dcbd5ddba98c4de97982f9be40c_original.75384.JPG',
    'https://f.azh.kz/news/101/639/44686636776f463f9.jpg',
    'https://weproject.media/media/userfiles/images/atyrau.jpg'
]

let curInd = 0;

function changeImage(){
    const imgEl = document.querySelector("#myImage")
    if(imgEl){
        curInd = (curInd + 1) % images.length;
        imgEl.src = images[curInd]
    }else{
        console.log("Элемент не найден")
    }
}