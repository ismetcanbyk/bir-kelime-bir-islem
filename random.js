const harf = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"];


let maske = "abcçdefgğhıijklmnoöprsştuüvyz";
const dupSonuc = [];

function random() {
    for (let i = 0; i < 5; i++) {
        let sonuc = '';

        sonuc += maske[Math.floor(Math.random() * maske.length)];
        dupSonuc[i] = sonuc;

    }


}
random();
dupSonuc.forEach(element => {
    console.log(element);
});

//Random harf için yazmış olduğum deneme kodum.