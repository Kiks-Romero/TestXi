import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

// correccion futura de llenado de formulario
const regexName = /^(?!.* $)[A-Z][a-z ]+$/;
const regexEmail =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

const Home = ({ handleShow }) => {
  const [errors, seterrors] = useState({ email: "", name: "" });
  const [data, setData] = useState({ nombre: "", email: "" });
  const handleChangeName = (e) => {
    setData({ ...data, nombre: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  useEffect(() => {
    if (!data.nombre && data.email) {
      seterrors({ email: "", name: "Nombre requerido" });
    } else if (data.nombre && !data.email) {
      seterrors({ email: "Email requerido", name: "" });
    } else {
      seterrors({ email: "", name: "" });
    }
  }, [data]);

  return (
    <>
      <div className="container mt-5">
        <div className="card m-5">
          <div className="h2 cardName-header py-3 m-3">Descubre tu credito</div>
          <p className="mx-3">
            Llena el siguiente formulario para conocer los creditos que tenemos
            disponibles para ti.
          </p>
          <form className="card-body">
            <div className="form-group">
              <div className="row my-2">
                <label htmlFor="name" className="col-sm-12 col-md-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control col"
                  id="name"
                  placeholder="Introduce tu nombre"
                  onChange={handleChangeName}
                />
              </div>
              {errors.name && <p className="text-danger">{errors.name}</p>}
              <div className="row my-2">
                <label htmlFor="Email" className="col-sm-12 col-md-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control col"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Introduce tu email"
                  onChange={handleChangeEmail}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
              <div className="d-grid gap-2 mb-2" style={{ width: "100%" }}>
              <Button
                variant="primary"
                onClick={handleShow}
                disabled={data.nombre && data.email ? false : true}
                className="text-center"
              >
                Descubrir creditos
              </Button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
