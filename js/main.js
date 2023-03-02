let contraseña = "hola";

function login() {
  let exito = false;
  for (let i = 3; i > 0; i--) {
    let IngresoConExito = prompt("Por favor, ingrese su contraseña");
    if (IngresoConExito === contraseña) {
      login == contraseña;
      alert("Contraseña aceptada");
      alert("Bienvenido a Frater Solis");
      exito = true;
      break;
    } else {
      alert(
        "Contraseña incorrecta, le quedan " +
          i +
          " intentos.\nPor favor vuelva a intentarlo"
      );
    }
  }
  return exito;
}

let fraseProd = "El precio del producto seleccionado es: ";
let ingresoExitoso = login();
if (ingresoExitoso) {
  let funciona = prompt(
    "Elija un producto para saber su precio, seleccionando el número del producto. Para terminar escriba la letra Q y presione Enter \n1 - Crema de manos Neroli & Orquideas\n2 - Crema de cuerpo Neroli & Orquideas\n3 - Esmalte Base Coat\n4 - Esmalte Top Coat\n5 - Agua Micelar"
  );
  while (funciona != "Q" && funciona != "q") {
    switch (funciona) {
      case "1":
        alert(`${fraseProd} $2000`);
        break;
      case "2":
        alert(`${fraseProd} $4500`);
        break;
      case "3":
        alert(`${fraseProd} $1700`);
        break;
      case "4":
        alert(`${fraseProd} $1700`);
        break;
      case "5":
        alert(`${fraseProd} $2300`);
        break;
      case "s":
      default:
        alert("El producto solicitado no se encuentra, intente nuevamente");
        break;
    }
    funciona = prompt(
      "Elija un producto para saber su precio, seleccionando el número del producto. Para terminar escriba la letra Q y presione Enter \n1 - Crema de manos Neroli & Orquideas\n2 - Crema de cuerpo Neroli & Orquideas\n3 - Esmalte Base Coat\n4 - Esmalte Top Coat\n5 - Agua Micelar"
    );
  }
} else {
  alert("Demasiados intentos de inicio de sesión");
}

if (ingresoExitoso) {
  let funcionaDos = prompt(
    "Para conocer los datos de su cuenta presione el número correspondiente:\n1) Nombre de usuario\n2) Contraseña de la sección\nPara terminar escriba la letra Q y presione Enter"
  );
  while (funcionaDos != "Q" && funcionaDos != "q") {
    switch (funcionaDos) {
      case "1":
        alert("Su nombre de usuario actual es:\nMagalí 001");
        break;
      case "2":
        alert("Su contraseña actual es:\nhola");
        break;
      default:
        alert("Lo sentimos.\nNo poseemos esa información");
        break;
    }
    funcionaDos = prompt(
      "Para conocer los datos de su cuenta presione el número correspondiente:\n1) Nombre de usuario\n2) Contraseña de la sección\nPara terminar escriba la letra Q y presione Enter"
    );
  }
}

if (ingresoExitoso) {
  let fraseSaldo = "Su saldo es de:\n";
  let fraseCompra = "Gracias por su compra, su saldo es de:\n$";
  let fraseNoSaldo = "No tiene suficiente saldo";
  let monto = 100000;
  let f = prompt(
    "Opción A)\nSi desea conocer su saldo presione la letra (S) y luego presione Enter\n\nOPCIÓN B)\nSi desea comprar un producto seleccione el número que corresponda al mismo:\n1 - Crema de manos Neroli & Orquideas\n2 - Crema de cuerpo Neroli & Orquideas\n3 - Esmalte Base Coat\n4 - Esmalte Top Coat\n5 - Agua Micelar\n\nOPCIÓN C)\nSi desea salir presione la letra (Q)"
  );
  while (f != "Q" && f != "q") {
    switch (f) {
      case "S":
        alert(fraseSaldo + "$" + monto);
        break;
      case "s":
        alert(fraseSaldo + "$" + monto);
        break;
      case "1":
        let cremaManos = 2000;
        if (monto >= cremaManos) {
          monto = monto - cremaManos;
          alert(fraseCompra + monto);
        } else {
          alert(fraseNoSaldo);
        }
        break;
      case "2":
        let cremaCuerpo = 4500;
        if (monto >= cremaCuerpo) {
          monto = monto - cremaCuerpo;
          alert(fraseCompra + monto);
        } else {
          alert(fraseNoSaldo);
        }
        break;
      case "3":
        let esmalteBase = 1700;
        if (monto >= esmalteBase) {
          monto = monto - esmalteBase;
          alert(fraseCompra + monto);
        } else {
          alert(fraseNoSaldo);
        }
        break;
      case "4":
        let esmalteTop = 1700;
        if (monto >= esmalteTop) {
          monto = monto - esmalteTop;
          alert(fraseCompra + monto);
        } else {
          alert(fraseNoSaldo);
        }
        break;
      case "5":
        let aguaMicelar = 2300;
        if (monto >= aguaMicelar) {
          monto = monto - aguaMicelar;
          alert(fraseCompra + monto);
        } else {
          alert(fraseNoSaldo);
        }
        break;
      default:
        alert("Esa operación no está disponible");
        break;
    }
    f = prompt(
      "Opción A)\nSi desea conocer su saldo presione la letra (S) y luego presione Enter\n\nOPCIÓN B)\nSi desea comprar un producto seleccione el número que corresponda al mismo:\n1 - Crema de manos Neroli & Orquideas\n2 - Crema de cuerpo Neroli & Orquideas\n3 - Esmalte Base Coat\n4 - Esmalte Top Coat\n5 - Agua Micelar\n\nOPCIÓN C)\nSi desea salir presione la letra (Q)"
    );
  }
}
