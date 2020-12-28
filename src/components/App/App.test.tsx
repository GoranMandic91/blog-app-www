import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = configureStore();

jest.mock('../CommentDialog', () => ({
  __esModule: true,
  default: () => <p>CommentDialog</p>,
}));

test('renders learn react link', () => {
  const app = render(
    <Provider store={mockStore()}>
      <App />
    </Provider>
  );

  expect(app.getByText(/Simple Blog Application/i)).toBeInTheDocument();
});
