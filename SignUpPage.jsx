/*import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button"; 

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -5px;
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    weight: "",
    height: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Inscription réussie ! ✅");
      console.log(formData);
    }
  };

  return (
    <SignupContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Nom :</Label>
        <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <Label>Prénom :</Label>
        <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <Label>Email :</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label>Mot de passe :</Label>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <Label>Confirmer le mot de passe :</Label>
        <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

        <Label>Poids (kg) :</Label>
        <Input type="number" name="weight" value={formData.weight} onChange={handleChange} required />

        <Label>Taille (cm) :</Label>
        <Input type="number" name="height" value={formData.height} onChange={handleChange} required />

        <Button type="submit">S'inscrire</Button>
      </Form>
    </SignupContainer>
  );
};

export default SignupPage;*/



import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 450px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextLink = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555;

  a {
    color: #00a98b;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    weight: "",
    height: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User data:", formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex",gap: "10px"}}>
           <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
           <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <Button variant="primary" type="submit">Confirme</Button>
          </Link>
          <TextLink>
            Already signed in? <Link to="/login">Login here</Link>
          </TextLink>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default SignUpPage;
