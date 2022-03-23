import React from "react";
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";
import { Form, Button, Row, Container } from "react-bootstrap";
import VMSIMAGE from "../asset/vms.jpeg";
import styles from './Login'; 

export function Login({ email, password, onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div style={{
      background: "rgb(131,58,180)",
      background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
    height: "100%",
    position: "absolute",
    left: "0px",
    width: "100%",
    overflow: "hidden"
    }}>
      <div 
        style={{
          position: 'absolute', left: '25%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}
      >
          <Container className="px-5 py-5" style={{background:"rgb(255,255,255,1)",
          borderRadius: "27px",
          boxShadow:"0 4px 30px rgba(0, 0, 0, 1)",
          backdropFilter: "blur(0px)",
          webkitBackdropFilter: "blur(0px)",
          border: "1px solid rgba(0, 0, 0, 0.3)"
        }}>
          <Form onSubmit={handleSubmit(onLogin)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row style={{ textAlign: "center" }}>
              <h4>เข้าสู่ระบบ</h4>
            </Row>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue="abc@xyz.com"
              {...register("email", { required: true })}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              defaultValue="123"
              {...register("password", { required: true, min: 8 })}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text> */}
          </Form.Group>

          {/* <input type="submit" /> */}
          <div className="d-grid gap-2">
            <Button type="submit" variant="info">
              Login
            </Button>
          </div>
        </Form>
        </Container>

      </div>
    </div>
 
  );
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onLogin: PropTypes.func,
};

Login.defaultProps = {
  email: null,
  password: false,
  onLogin: undefined,
};
