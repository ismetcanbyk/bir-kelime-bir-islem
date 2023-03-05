import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const Schema = mongoose.Schema;

const testSchema = new Schema({

    anlam_gor: String,
    anlam_say: String,
    anlamlarListe: Array,
    anlam: String,
    anlam_id: String,
    anlam_sira: String,
    fiil: String,
    gos: String,
    madde_id: String,
    orneklerListe: Array,
    ozelliklerListe: Array,
    tipkes: String,
    atasozu: Array,
    birlesikler: String,
    cesit: String,
    cesit_say: String,
    cogul_mu: String,
    font: String,
    gosterim_tarihi: String,
    kac: String,
    kelime_no: String,
    lisan: String,
    lisan_kodu: String,
    madde: String,
    madde_duz: String,
    madde_id: String,
    on_taki: String,
    ozel_mi: String,
    taki: String,
    talaffuz: String
});

const Kelime = mongoose.model('test-db', testSchema);

export default Kelime;