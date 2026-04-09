import '../styles/infoSection.css';

function InfoSection() {
    return (
        <section className="info-banner container">
            <div className="info-banner__card">
                <div className="info-banner__content">
                    <span className="info-banner__icon">⏰</span>

                    <p className="info-banner__text">
                        30 минут в день на контент экспертов ={" "}
                        <strong>+50%</strong> к вашим навыкам за год
                    </p>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;