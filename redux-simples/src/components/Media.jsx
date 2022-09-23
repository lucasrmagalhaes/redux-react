import { connect } from 'react-redux';

import Card from './Card';

const Media = ({ min, max, primeiroNome }) => {
    console.log(primeiroNome);

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
        primeiroNome: state.nomes[0]
    }
}

export default connect(mapStateToProps)(Media);