import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormComponent = ()=> {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Escriba su nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>e-mail</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@ejemplo.cl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" placeholder="+56 9 xxxxxxxx" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMensaje">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger-emphasis" type="submit">
        Submit
      </Button>
    </Form>
  );
}
