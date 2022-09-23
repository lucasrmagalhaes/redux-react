import React from 'react';

import Card from './Card';

const Media = ({ resultado = 5 }) => {
    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    
                    <strong>{resultado}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Media;