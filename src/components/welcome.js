import { Button, Container } from "react-bootstrap"
import React from "react"

const Welcome = () => {

    const handleClick = () => {
        if (typeof window !== 'undefined') {
            window.location = '/schedule-a-call';
        }
    };
    
    return (
        <div className="bg-overlay">
            <Container>
                <div className="row d-flex flex-column">
                    <h1>We are <span style={{color: '#7AE0BB'}}>MarkMe</span></h1>
                    <h4>We help businesses to mark their brand on their market's mind.</h4>
                    <p style={{width: '60%', margin: '0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh ipsum. Morbi gravida ornare erat vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero. Morbi gravida ornare erat, vitae viverra nibh dictum et. Vivamus turpis lectus sollicitudin id ultricies vitae, suscipit ac libero.</p>
                </div>
                <Button onClick={handleClick} variant="primary" className="welcome-button wiggle-button">Claim free brand assessment</Button>
            </Container>
        </div>
    )

}

export default Welcome
