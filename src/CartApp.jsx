export const CartApp = () => {
    return (
        <> 
          

            <div className="container">
                <h3>Cart App</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Audifono bluetooth</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 3000</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Corsair</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 720</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Monitor ipc</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 6000</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Asus nvidia RTX</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 9000</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">SSD Kingston</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                                <p className="card-text">$ 10000</p>
                                <button className="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">1213456</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
}