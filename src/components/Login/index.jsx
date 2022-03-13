import Container from "./styled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import DefaultStyleButton from "../Button/styled";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Por favor, degite seu nome"),
    password: yup
      .string()
      .min(6, "Senha de no mínimo 6 dígitos")
      .required("Por favor, digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    localStorage.setItem("@kenzieShop:user", JSON.stringify(data));

    history.push("/cart");
  };

  return (
    <Container>
      <h2>Digite seus dados</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="div-input-login">
          <TextField
            id="outlined-required"
            label="Name"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <TextField
            id="outlined-disabled"
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password")}
            type="password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <DefaultStyleButton type="submit" className="button-login">
          Login
        </DefaultStyleButton>
      </Box>
    </Container>
  );
};

export default Login;
