import arrayObjetos from "../Archivos pruebas/arrayObjetos";

//Accion de prueba para probar funcionalidad de redux
export function testAction(action) {
  return {
    type: "TEST_ACTION",
    payload: action,
  };
}

export function getAllProducts() {
  var arrayAllProducts = arrayObjetos();
  return {
    type: "GET_ALL_PRODUCTS",
    payload: arrayAllProducts,
  };
}
