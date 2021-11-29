import { Container } from './Title.style';

export function Title() {
    return (
        <Container>
            <div className="container__title">
                <h2 className="title">
                    Mundo nerd?
                    Naped!
                </h2>
                <p className="description">
                    O Naped pode ser sua fonte de informações 
                    sobre o mundo nerd e outros assuntos relacionados.
                </p>
            </div>
        </Container>
    );
};