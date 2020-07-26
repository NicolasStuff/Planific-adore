import React, { Fragment, useState } from 'react'
import Procedure from '../../Sections/Procedure'
//import Appointment from '../../Sections/Appointment'
//import Reservation from '../../Sections/Reservation'
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

function Services() {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [typeOfTheme, setTypeOfTheme] = useState('')
    const [date, setDate] = useState('')
    const [number, setNumber] = useState(0)
    const [additionnalFirst, setAdditionnalFirst] = useState(false)
    const [additionnalSecond, setAdditionnalSecond] = useState(false)
    const [additionnalThird, setAdditionnalThrid] = useState(false)
    const [additionnalFourth, setAdditionnalFourth] = useState(false)
    const [additionnalLast, setAdditionnalLast] = useState(false)
    const [traitor, setTraitor] = useState(false)
    const [sugarPieces, setSugarPieces] = useState(false)
    const [sugerSalt, setSugerSalt] = useState(false)
    const [dadBear, setDadBear] = useState(false)
    const [chocolate, setChocolate] = useState(false)
    const [popCorn, setPopCorn] = useState(false)
    const [crepe, setCrepe] = useState(false)
    const [hotDog, setHotDog] = useState(false)
    const [iceCream, setIceCream] = useState(false)
    const [granita, setGranita] = useState(false)
    const [photobooth, setPhotobooth] = useState(false)
    const [resine, setResine] = useState(false)
    const [moreInfo, setMoreInfo] = useState('')

    var handleSubmitDevis = async () => {
        //envoi la data vers le back
        const DevisRequest = await fetch('/devisService', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `nameFromFront=${name}&emailFromFront=${email}&typeFromFront=${type}&phoneFromFront=${phone}&adressFromFront=${adress}&typeOfThemeFromFront=${typeOfTheme}&dateFromFront=${date}&numberFromFront=${number}&additionnalFirstFromFront=${additionnalFirst}&additionnalSecondFromFront=${additionnalSecond}&additionnalThirdFromFront=${additionnalThird}&additionnalFourthFromFront=${additionnalFourth}&additionnalLastFromFront=${additionnalLast}&traitorFromFront=${traitor}&sugarPiecesFromFront=${sugarPieces}&sugerSaltFromFront=${sugerSalt}&dadBearFromFront=${dadBear}&chocolateFromFront=${chocolate}&popCornFromFront=${popCorn}&crepeFromFront=${crepe}&hotDogFromFront=${hotDog}&iceCreamFromFront=${iceCream}&granitaFromFront=${granita}&photoboothFromFront=${photobooth}&resineFromFront=${resine}&moreInfoFromFront=${moreInfo}`
        })
        console.log(DevisRequest)
      }

    const items = [
        {
            src: require("../../assets/images/appointment-img.jpg"),
            altText: 'Formule Sweet',
            caption: `⦁	Une décoration complète (support à gâteaux, bonbonnières, colonnes de fleurs et élément liés au thème)
            ⦁	1 arche de ballon
            ⦁	1 prénom
            ⦁	1 table avec 1 inscription
            ⦁	10 mini bouteilles d’eau personnalisées
            `
        },
        {
            src: require("../../assets/images/appointment-img.jpg"),
            altText: 'Formule Prestige',
            caption: `⦁	1 mur blanc rond (2m de diamètre) OU 1 mur de ballon (2x2m)
            ⦁	Une décoration complète (support à gâteaux, bonbonnières, colonnes de fleurs et élément liés au thème)
            ⦁	1 arche de ballon
            ⦁	1 prénom
            ⦁	1 table avec 1 inscription
            ⦁	10 mini bouteilles d’eau personnalisées
            `
        },
        {
            src: require("../../assets/images/appointment-img.jpg"),
            altText: 'Formule Baby Shower - Fête de Naissance',
            caption: `⦁	1 mur blanc rond 2m de diamètre
            ⦁	Une décoration complète (support à gâteaux, bonbonnières, colonnes de fleurs et élément liés au thème)
            ⦁	1 arche de ballon
            ⦁	1 prénom
            ⦁	1 letter table BABY
            ⦁	10 mini bouteilles d’eau personnalisées 
            ⦁	10 pots de pop-corn personnalisés avec pop-corn
            ⦁	5 cônes personnalisés 
            ⦁	5 boîtes personnalisées
            `
        },
        {
            src: require("../../assets/images/appointment-img.jpg"),
            altText: 'Formules Creations Florales',
            caption: `Idéale Mariages, demande en mariage, fiançailles
            ⦁	Structure autoportante
            ⦁	Créations florales thématiques
            ⦁	Prénoms/inscription centrale or ou argent
            ⦁	Table
            ⦁	Support à gâteau royales
            ⦁	2 colonnes de fleurs
            ⦁	Chandeliers
            ⦁	Bougies
            ⦁	Eléments thématiques spécifique
            ⦁	1 colonnes cylindriques
            ⦁	10 mini bouteilles d’eau personnalisées
            ⦁	4 cônes personnalisés 
            ⦁	4 boîtes personnalisés
            `
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <div className='carouselCont'>
                <div className='ImgCont'>
                    <img src={item.src} alt={item.altText} />
                </div>
                <div className='TextCont'>
                    <CarouselCaption style={{backgroundColor: "black"}} captionHeader={item.altText} captionText={item.caption}/>
                </div>
            </div>
        </CarouselItem>
        );
    });

    return (
        <div>
            {/* <Procedure/> */}
            <div>
                <div className="procedures">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 m-auto">
                                <div className="sec-heading">
                                    <h3 className="sec-title">Devis</h3>
                                    <h4 style={{marginBottom: 30}}>Nos tarifs comprennent pour chaques formules : </h4>
                                    <p style={{marginBottom: 30}}>- Recherche d’ambiance, de combinaison et d’inspiration , conception d’un projet de décoration centrale , achats des matériaux nécessaires au thème ,livraison et coordination des matériaux nécessaires , création sur place de la décoration , démontage</p>
                                    <p style={{marginBottom: 30}}>- Le matériel vous est loué et sera récupéré à la fin de votre événement (exceptés les éléments personnalisés). Un inventaire vous sera donné à la signature après chaque installation.</p>
                                    <p>- Nous proposons des formules pâtisseries assorties à la décoration et aux prénoms, en fonction du nombre de convives. Les pâtisseries sont toujours à part de nos formules décorations et leurs prix dépendent du nombre de personnes.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBottom: 100 }}>
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                                
                                >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                                    {slides }
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                            </Carousel>
                        </div>
                    </div>      
                </div>
            </div>
            {/* <Appointment /> */}
            <div className='appointment'>
            <div className="appointment-wrap">
                <figure>
                    <img src={ require("../../assets/images/appointment-img.jpg") } alt="" />
                </figure>
                <div className="appointment-form">
                    <form action="/devisService" method='POST'>
                    <h4 className="sec-title">Informations sur l'évènement</h4>
                        <div className="form-field half-width">
                            <input type="text" placeholder="Nom et prénom" onChange={(e) => setName(e.target.value)} required />
                            <input type="email" placeholder="Adresse Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-field half-width">
                            <div className="select-field">
                                <select onChange={(e) => setType(e.target.value)}>
                                    <option>Formule Sweet</option>
                                    <option>Formule Prestige</option>
                                    <option>Formule Thématique</option>
                                    <option>Formule Flower</option>
                                </select>
                            </div>
                            <input type="tel" placeholder="Numéro de téléphone" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-field half-width">
                            <input type="text" placeholder="Adresse de l'évènement (Ville ou code postal)" onChange={(e) => setAdress(e.target.value)} required />
                            <div className="select-field">
                                <select onChange={(e) => setTypeOfTheme(e.target.value)}>
                                    <option>Type d'évènements : Baptème</option>
                                    <option>Type d'évènements : Mariage</option>
                                    <option>Type d'évènements : Baby-shower/Fêtes de naissance</option>
                                    <option>Type d'évènements : Anniversaire</option>
                                    <option>Type d'évènements : Fiançaille</option>
                                    <option>Type d'évènements : Corporate Event</option>
                                    <option>Autres évènements(A préciser)</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field half-width">
                            <input type="date" placeholder="date" onChange={(e) => setDate(e.target.value)}/>
                            <input type="number" placeholder="nombre de personnes" onChange={(e) => setNumber(e.target.value)}/>
                        </div>
                        <h4 className="sec-title">Suppléments (Accompagnement des décorations)</h4>
                        <h6 className="sec-title">Sucrée et Salée</h6>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>  Les gourmandises sont composées de : - Gâteau ou Piece montée (en fonction du nombre de personnes) </p>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>- Cupcakes</p>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>- Pop Cakes</p>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>- Magnums Cakes sucettes de meringues</p>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>- Sucettes de Meringues</p>
                        <p className="sec-title" style={{marginTop: 10, marginBottom: 10}}>- Sablés</p>

                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" additionnalFirst={additionnalFirst} onChange={() => setAdditionnalFirst(!additionnalFirst)}/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Pour 15 personnes
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" additionnalSecond={additionnalSecond} onChange={() => setAdditionnalSecond(!additionnalSecond)}/>
                            <label className="form-check-label" for="defaultCheck2" >
                            Pour 20 personnes
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" additionnalThird={additionnalThird} onChange={() => setAdditionnalThrid(!additionnalThird)}/>
                            <label className="form-check-label" for="defaultCheck3" >
                            Pour 30 personnes
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" additionnalFourth={additionnalFourth} onChange={() => setAdditionnalFourth(!additionnalFourth)}/>
                            <label className="form-check-label" for="defaultCheck4" >
                            Pour 50 personnes
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck5" additionnalLast={additionnalLast} onChange={() => setAdditionnalLast(!additionnalLast)}/>
                            <label className="form-check-label" for="defaultCheck5" >
                            Plus de 50 personnes
                            </label>
                        </div>

                        <h6 className="sec-title" style={{marginTop: 10}}>Autres souhaits</h6>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck6"  traitor={traitor} onChange={() => setTraitor(!traitor)} />
                            <label className="form-check-label" for="defaultCheck6" >
                            Traiteur
                            </label>
                        </div>
                        {/* <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1" >
                            Buffet de mignardises salées avec table et vaiselle
                            </label>
                        </div> */}
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck7" sugarPieces={sugarPieces} onChange={() => setSugarPieces(!sugarPieces)}/>
                            <label className="form-check-label" for="defaultCheck7" >
                            Plateau de 40 pieces sucrés (mini tartelettes fruits, tiramisu…) 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck8"  sugerSalt={sugerSalt} onChange={() => setSugerSalt(!sugerSalt)}/>
                            <label className="form-check-label" for="defaultCheck8" >
                            Buffet de mignardises salées avec table et vaiselle (mini burger, mini pizza, croissant de poulet, mini croc, verrines crevettes avocats, roulé jambon …) 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck9" dadBear={dadBear} onChange={() => setDadBear(!dadBear)}/>
                            <label className="form-check-label" for="defaultCheck9" >
                            Machine à barbe à papa (avec personnel)
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck10" chocolate={chocolate} onChange={() => setChocolate(!chocolate)}/>
                            <label className="form-check-label" for="defaultCheck10" >
                            Fontaine à chocolat
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck11" popCorn={popCorn} onChange={() => setPopCorn(!popCorn)}/>
                            <label className="form-check-label" for="defaultCheck11" >
                            Machine à pop-corn
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck12" crepe={crepe} onChange={() => setCrepe(!crepe)}/>
                            <label className="form-check-label" for="defaultCheck12" >
                            Bar à crêpes 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck13" hotDog={hotDog} onChange={() => setHotDog(!hotDog)}/>
                            <label className="form-check-label" for="defaultCheck13" >
                            Machine à Hot dog 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck14" iceCream={iceCream} onChange={() => setIceCream(!iceCream)}/>
                            <label className="form-check-label" for="defaultCheck14" >
                            Glace à l’italienne 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck15" granita={granita} onChange={() => setGranita(!granita)}/>
                            <label className="form-check-label" for="defaultCheck15" >
                            Machine à granita 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck16" photobooth={photobooth} onChange={() => setPhotobooth(!photobooth)}/>
                            <label className="form-check-label" for="defaultCheck16" >
                            Machine à Photobooth (Impression Immédiate) 
                            </label>
                        </div>
                        <div className="form-check" style={{marginTop: 17}}>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck17" resine={resine} onChange={() => setResine(!resine)}/>
                            <label className="form-check-label" for="defaultCheck17" >
                            Animaux en Résine (Disponible en Salle ou Maison)
                            </label>
                        </div>
                        <div className="form-field">
                            <textarea name="notes" placeholder="Plus d'informations sur l'évènement" onChange={(e) => setMoreInfo(e.target.value)}></textarea>
                        </div>
                        <h6 className="sec-title" style={{marginTop: 15}}>Une fois le formulaire envoyé, vous recevrez un devis par mail et notre équipe prendra contact avec vous par téléphone dans un délais de 24h.</h6>
                        <h6 className="sec-title" style={{marginTop: 15}}>Merci de votre confiance !</h6>
                        <button className="btn btn-round" type="button" onClick={() => handleSubmitDevis()}>Envoyer un devis</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services