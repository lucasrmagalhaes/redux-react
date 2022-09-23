import Card from './Card';

const Sorteio = ({ min, max }) => {
    const aleatorio = parseInt(Math.random() * (max - min));

    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio;