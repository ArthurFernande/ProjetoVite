import * as React from 'react';
import { Link } from 'react-router-dom';

export function Page(): React.JSX.Element {
    return (
        <div>
            <h1>Home</h1>
            <p>Essa é a página inicial do meu projeto!</p>
            <Link to="/home2">Ir para Home 2</Link>
        </div>
    )
}