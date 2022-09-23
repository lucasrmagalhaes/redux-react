import Card from './Card';

import './Intervalo.css';

const Intervalo = ({ min, max, onMinChanged, onMaxChanged }) => {
    return (
        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    
                    <input 
                        type="number"  
                        value={min}
                        onChange={e => onMinChanged(+e.target.value)}
                    />
                </span>

                <span>
                    <strong>Máximo:</strong>
                    
                    <input 
                        type="number"  
                        value={max}
                        onChange={e => onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

export default Intervalo;