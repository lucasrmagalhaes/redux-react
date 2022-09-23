import React from 'react';

import Card from './Card';

const Soma = ({ resultado = 10 }) => {
    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    
                    <strong>{resultado}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Soma;