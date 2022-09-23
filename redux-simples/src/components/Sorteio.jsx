import React from 'react';

import Card from './Card';

const Sorteio = ({ resultado = 8 }) => {
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    
                    <strong>{resultado}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio;