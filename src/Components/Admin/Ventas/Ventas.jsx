import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../../../Redux/actions";
import s from "./Ventas.module.css";
import { Pagination } from "@mui/material";

const Ventas = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productosVentas);
  const totalVentas = useSelector((state) => state.SumatoriaVentas);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const [totalPages, setTotalPages] = React.useState(0);

  useEffect(() => {
    dispatch(fetchProductos(page, rowsPerPage));
  }, [dispatch, page]);

  useEffect(() => {
    if (productos) {
      const total = Math.ceil(productos.length / rowsPerPage);
      setTotalPages(total);
    }
  }, [productos, rowsPerPage]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const detalleocsToShow = productos?.slice(startIdx, endIdx);

  return (
    <div className={s.fondo}>
      <div className={s.cajaproductos}>
        <div className={s.titulo}>
          <div className={s.columna1}>imagen</div>
          <div className={s.columna2}>nombre</div>
          <div className={s.columna3}>cantidad</div>
          <div className={s.columna4}>precion unid.</div>
          <div className={s.columna5}>total</div>
        </div>
        <div className={s.productos}>
          {detalleocsToShow &&
            detalleocsToShow.map((producto) => (
              <div key={producto.id} className={s.venta}>
                <div className={s.columna1}>
                  <img
                    src="https://png.pngtree.com/png-clipart/20220602/original/pngtree-shopping-icon-design-vector-png-image_7869274.png"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <div className={s.columna2}>{producto.nombreproducto}</div>
                <div className={s.columna3}>{producto.cant}</div>
                <div className={s.columna4}>${producto.valorunitario}</div>
                <div className={s.columna5}>${producto.subtotal}</div>
              </div>
            ))}
        </div>
        <div className={s.pagination}>
          <Pagination
            count={5}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            boundaryCount={2} // Mostrar los primeros y últimos 2 números de página
            showFirstButton
            showLastButton
            siblingCount={2}
          />
        </div>
      </div>
      <div className={s.total}>
        <div className={s.suma}>total:</div>
        <div className={s.pesos}>{`$ ${totalVentas}`}</div>
      </div>
    </div>
  );
};

export default Ventas;
