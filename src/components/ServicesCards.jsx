import React, { useState, useRef } from "react";
import "../scss/servicesCards.scss";

const ServicesCards = ({ services }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const modalRef = useRef(null);

    const handleCardClick = (service) => {
        setSelectedService(service);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleOverlayClick = (event) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    return (
        <section className="Services">
            <h2>Mes services</h2>
            <div className="service-cards-container">
                {services.map((service, index) => (
                    <article className="service-card" key={index} onClick={() => handleCardClick(service)}>
                        <h3>{service.titre}</h3>
                        <img src={require(`../assets/${service.imageCard}`)} alt={service.titre} />
                    </article>
                ))}
                {modalVisible && selectedService && (
                    <div className="modal-overlay" ref={modalRef} onClick={handleOverlayClick}>
                        <div className="modalServices">
                            <h3>{selectedService.titre}</h3>
                            <ul>
                                {selectedService.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                            <div className="ImgButton">
                                <img src={require(`../assets/${selectedService.imageModal}`)} alt={selectedService.titre} />
                                <button onClick={closeModal}>Fermer</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ServicesCards;
