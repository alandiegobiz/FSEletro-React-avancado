import {React, lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

const Category = lazy(() => import('../../components/Category'))
const CardProducts = lazy(() => import('../../components/Products/CardProducts'))

const Products = () => {

    return (
        <div>

            <main className="products">
                <header>
                    <h2>Produtos</h2>
                    <p>Confira nossas principais promoções!</p>
                    <hr />
                </header>
                <div className="products-section">
                    <div className="section-1">
                    <Suspense fallback={ <p>Carregando...</p> }>
                        <Category />
                    </Suspense>
                    </div>
                    <div className="section-2">
                        <Suspense fallback={ <p>Carregando...</p> }>
                            <CardProducts />
                        </Suspense>
                    </div>
                </div>

            </main>
            
        </div>
    )
}

export default Products;
