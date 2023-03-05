import express from 'express';
import mongoose from 'mongoose';
import Kelime from './models/Kelime.js';
import Test from './models/Test.js';

const app = express();
const port = 3000;

let maske = "abcçdefgğhıijklmnoöprsştuüvyz";
const dupSonuc = [];
let sonuc = '';
let dupStringSonuc = '';
let puan = 0;

function random() {
    for (let i = 0; i < 5; i++) {

        let a = maske[Math.floor(Math.random() * maske.length)];
        sonuc += a;
        dupStringSonuc += a;

        dupSonuc[i] = dupStringSonuc;
        dupStringSonuc = '';

    };
};



//Connect DB
mongoose.connect('mongodb://localhost/yp-test-db')
    .then(() => {
        console.log("DB Connect Successfuly");
    })
    .catch((err) => {
        console.log(err);
    });



//Middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Template Engine 
app.set("view engine", "ejs");

app.get('/start', (req, res) => {
    random();
    res.redirect('/');
})

app.get('/', async (req, res) => {
    const test = (await Test.find({}));

    res.render('index', {
        kelime: test,
        sonuc
    });
});



app.get('/kelime/:madde', async (req, res) => {

    const kelime = await Kelime.findOne({ madde: req.params.madde });
    try {
        let kelimee = kelime.madde;
        let counter = 0;

        //Kelime Kontrol

        for (let i = 0; i < kelimee.length; i++) {
            const element = kelimee[i];

            if (sonuc.search(element) == -1) {
                counter++;
            };
        }
        puan += kelimee.length;
        console.log("MADDE ->" + kelime.madde)
        if (kelime.madde == null) {
            console.log("null döndüyor");
            res.redirect('/lost');
        } if (counter >= 2) {
            res.redirect('/lost');
        } else {
            res.redirect('/');
        }


    } catch (error) {
        res.redirect('/lost');
    }
});



app.post('/kelime', async (req, res) => {

    const test = await Test.create(req.body);

    res.redirect(`/kelime/${req.body.testKelime}`);

});


app.get('/lost', async (req, res) => {

    const testAll = await Test.find();
    const test = await Test.deleteMany();
    sonuc = '';
    random();


    res.render('lostPage', {
        puan
    });
    puan = 0;
});




app.listen(port, () => {
    console.log(`App started on port ${port}.`);
});

