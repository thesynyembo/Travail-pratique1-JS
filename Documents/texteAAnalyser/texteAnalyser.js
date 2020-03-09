let texte= "Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";
texte= texte.split(/[ ,]/)
const supprimerLesPointsALaFin = (tableau)=>{
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i].endsWith('.')){
            tableau[i]=tableau[i].slice(0,tableau[i].length -1)
        }
    }
}

// Trouver le nombre des adresses mail et les lister

const tousLesAdressesMails = texte.filter((mails)=>{
    return mails.includes('@');
});

supprimerLesPointsALaFin(tousLesAdressesMails);
console.log(`les adresses sont égales à: ${tousLesAdressesMails.length}`);
console.log(tousLesAdressesMails);


// Trouver le nombre des numbers de téléphones et les lister

const tousLesNumbersTelephones= texte.filter((number)=>{
    return number.includes('+243');
})
supprimerLesPointsALaFin(tousLesNumbersTelephones);
console.log(`les number telephones sont égals à: ${tousLesNumbersTelephones.length}`);
console.log(tousLesNumbersTelephones);


// collecter tous les numéros de téléphones Vodacoms

const lesNumerosVodacom = tousLesNumbersTelephones.filter((numeVoda)=>{
    return numeVoda.startsWith('+24381')
})
if(lesNumerosVodacom.length===0){
    console.log('Pas de numéro Voda')
}else{
    console.log(lesNumerosVodacom)
}

// collecter tous les numéros de téléphones Tigo(#de Orange)
const lesNumerosTigo = tousLesNumbersTelephones.filter((numeTigo)=>{
    return numeTigo.startsWith('+24389')
})
if(lesNumerosTigo.length===0){
    console.log('Pas de numéro Tigo')
}else{
    console.log(`les numéros de téléphones Tigo:${lesNumerosTigo} `)
}

// collecter tous les numéros de téléphones Orange(#Tigo)

const lesNumerosOrange = tousLesNumbersTelephones.filter((numeOrange)=>{
    return numeOrange.startsWith('+24384')
})
if(lesNumerosOrange.length===0){
    console.log('Pas de numéro Orange')
}else{
    console.log(`les numerosde téléphone Orange :${lesNumerosOrange}`)
}


// Lister toutes les adresses de messageries professionnelles

const adressesMailsProfessionnelles = tousLesAdressesMails.filter((mailsPro)=>{
    return !mailsPro.includes('@gmail')
})
    console.log(`l'adresse mail privée est: ${adressesMailsProfessionnelles}`)


// Lister toutes les adresses de messageries privées

const adressesMailsPrivées = tousLesAdressesMails.filter((mailsPri)=>{
    return mailsPri.includes('@gmail')
})
    console.log(adressesMailsPrivées)


// Trouver le nombre des mots(Ici les numéros de téléphones,les adresses email,les articles,pronoms personnels,pronoms relatifs(qui),prépositions(à) ne sont pas des mots)

let listeMotsRestreints = ['le', 'la', 'les', 'des', 'du', 'un', 'une', '+243', '@', 'je', 'tu', 'il', 'elle', 'nous', 'vous', 'elles', 'ils', 'à', 'qui'];
let texteMot;
 for(motAIgnores of listeMotsRestreints){
     texteMot=texte.filter((mot)=>{
         return !mot.includes(motAIgnores)
     })
 }
console.log(`le nombre des mots restant: ${texteMot.length}`)
