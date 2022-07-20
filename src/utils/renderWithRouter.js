import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import React from 'react';

function renderWithRouter(component) {
  const history = createMemoryHistory();

  const renderComponent = render(
    <Router history={ history }>
      { component }
    </Router>,
  );

  return {
    ...renderComponent,
    history,
  };
}

export default renderWithRouter;
