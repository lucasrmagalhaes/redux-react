import Card from './Card';

const Media = ({ min, max }) => {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media;