import { Container, Button, ButtonGroup } from 'react-bootstrap';

const FilterTodos = () => {
  return (
    <Container>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">completed</Button>
        <Button variant="secondary">active</Button>
      </ButtonGroup>
    </Container>
  );
};

export default FilterTodos;
