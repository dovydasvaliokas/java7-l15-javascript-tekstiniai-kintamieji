window.onload = function() {
    // Susikuriu kintamuosius ir jiems priskiriu reikšmes.
    let zodis = "gandras";

    let zodis2 = "medis";


    // Išvedu tuos kintamuosius į konsolę:
    console.log(zodis);
    console.log(zodis2);
    

    // Susikūriau papildomą funkciją, kuri sudedu du žodžius į bendrą tekstą (kintamąjį) bet juos atskiria tarpu.
    // Taip pat susikuriu naują kintamąjį į kurį išsaugau tos funkcijos reikšmę grąžinamą.
    let sujungtiZodziai = SudetiZodziusSuTarpu(zodis, zodis2);
    console.log(sujungtiZodziai);

    // Tekstus galim sudėti, tačiau reikėtų atidumo, kai norime sudėti skaičius, jog nei vienas iš jų nebūtų tekstas, nes tada sudės abu kaip tekstą.
    let x = 5;
    let y = "10";
    let suma = x + y;
    console.log(suma);


    // Galima paimti žodžio ir VIENĄ raidę. Tarkim susikuriame žodį ir paimame jo 4-ą raidę (programavime pradeda skaičiuoti nuo nulio)
    let tekstas = "kamuolys!";

    // Norint pasiimti ketvirtą raidę, galiu ją išsaugoti į atskirą kintamąjį:
    let raide = tekstas[3];
    console.log(raide);

    // Galima tos raidės į kintamąjį ir nesaugoti - o ją naudoti iš karto.
    console.log(tekstas[8]);


    // Taip pat, galima naudoti viską ir kompliksuotiškiau, tačiau pagal tas pačias taisykles
    console.log(SudetiZodziusSuTarpu(tekstas[4], tekstas[5]));


    // Taip pat dar vieną tokį complex labiau, tai kur paimame raidžių intervalą ir iš kart išvedame naudodami slice:
    let sakinys = "Čia yra kažkoks tekstas";
    console.log(sakinys.slice(4, 15));

}


function SudetiZodziusSuTarpu(zodis1, zodis2)
{
    return zodis1 + " " + zodis2;
}