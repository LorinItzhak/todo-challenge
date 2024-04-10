import PropTypes from 'prop-types';
import { Container, Button, ButtonGroup } from 'react-bootstrap';

const FilterTodos = ({ filterTodosByStatus }) => {
  return (
    <Container className="filter-container">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          onClick={() => {
            filterTodosByStatus('all');
          }}
        >
          All
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            filterTodosByStatus('completed');
          }}
        >
          completed
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            filterTodosByStatus('active');
          }}
        >
          active
        </Button>
      </ButtonGroup>
    </Container>
  );
};

FilterTodos.propTypes = {
  filterTodosByStatus: PropTypes.func.isRequired,
};

export default FilterTodos;
