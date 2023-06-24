import React from "react";
import CardProducto from "../CardProducto/CardProducto";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";

//Aquí va el contenedor de cartas de los productos

export default function CardContainer() {
  const dispatch = useDispatch();

  //Despachamos la accion que nos trae los objetos al estado local
  dispatch(getAllProducts());

  //Traemos los objetos del estado local
  const { allProducts } = useSelector((state) => state);

  const array = allProducts;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {array &&
        array.map((prod) => {
          return (
            <CardProducto
              name={prod.name}
              image={prod.image}
              price={prod.price}
            ></CardProducto>
          );
        })}
    </div>
  );
}
