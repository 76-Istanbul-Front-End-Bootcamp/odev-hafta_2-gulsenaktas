/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person)
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map(function(number, numberIndex){
        const result = number * this.numbers[1];
        console.log(result)
    }.bind(numbers))
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){

    if(typeof name=="string" ){
        let lastCondition;
        var a= name.trim();
        var b= a.split(" ");

        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            if(element.length>=2){
                lastCondition = true
                
            } else if (element.length<2){
                lastCondition = false
                break;
            }
        }
        
      
        return lastCondition
    } else {
        return false
      }    

}

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){

    let sonuc;
    const illegaller=[null, Infinity, "", true, false];

    if(illegaller.includes(dersSayisi) || illegaller.includes(dersSuresi)){
        sonuc = false
    } else {
        const number1= Number(dersSayisi);
        const number2= Number(dersSuresi);

        if(isNaN(number1) || isNaN(number2)) {
        sonuc= false
        } else {
        sonuc = dersSayisi*dersSuresi
        }
    }
     
    return sonuc
};


