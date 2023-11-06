import React, { useState } from "react";
import cresson from "../assets/cresson-alexis.webp";
import "../scss/card.scss";

const Card = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <section className="section_cresson">
            <h2>Votre projet commence ici ...</h2>
            <div className="card_cresson">
                <img src={cresson} alt="CRESSON Alexis" />
                <h3>CRESSON Alexis</h3>
                <button onClick={toggleModal} aria-label="Voir mes informations">Voir mes informations</button>

                {showModal && (
                    <div className="modal_cresson">
                        <h3>Information de contact</h3>
                        <p>alexis@webcresson.com</p>
                        <a href="https://share-eu1.hsforms.com/1Jb_X3kqSQBORg7GbB3vLRQ2d7m3w" target="_blank" rel="noreferrer" aria-label="Prise de rendez-vous">Prise de rendez-vous !</a>
                        <a href="https://www.linkedin.com/in/alexis-cresson/" target="_blank" rel="noreferrer" aria-label="Visitez mon profil LinkedIn">Mon linkedin</a>
                        <a href="https://github.com/creacress" target="_blank" rel="noreferrer" aria-label="Visitez mon profil GitHub">Mon github</a>
                        <button onClick={toggleModal} aria-label="Fermer les informations">Fermer</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Card;
