import Productos from "\nodebox/src/helper/productos.js";
import Producto from "./Producto";

export default function principal() {
  return productos.array.map map((element) => {
    <div>
      <h1>listado de productos</h1>
      <ul>
        <producto {...element} />
      </ul>
    </div>;
  });
}
