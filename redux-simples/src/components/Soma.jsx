import Card from './Card';

const Soma = ({ min, max }) => {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;