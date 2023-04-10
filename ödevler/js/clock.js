let userName = prompt("adınızı giriniz")    // adını prompttan almak almak için yazdık
let myName =document.querySelector("#myName") // ekrana yazdırmak için querySelector ile #myName id sini belirttim
myName.innerHTML =` ${userName}`    // prompt a yazılan adı sayfaya yazdırmayı sağladık

function showtime(){
    let myClock = document.getElementById("myClock") // Anasayfada göstermek için yeri değişkene atadık
    let now = new Date();  //now değişkenini Date olarak ayarladık
    let day = now.getDate();  // alt alta now değişkenini kullanarak gün ay yıl vs. gibi değişkenleri atadık
    let month = now.getMonth() +1;  // +1 ile tarihi doğru yaptık
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Tarih ve saat bilgilerini birleştirir
    let time = `${day}/${month}/${year} ${hour}:${minute}:${second}`

    myClock.innerHTML = time;  //Tarihin geleceği yerin HTML'sine tüm zamanı atatığımı time ı gönderdik

    setTimeout(showtime, 1000); // bu kod saniyeyi arttırıyor

}

showtime();