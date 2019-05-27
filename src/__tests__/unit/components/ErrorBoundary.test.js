import React from 'react';
import ErrorBoundary from 'Components/ErrorBoundary';
import { render } from 'react-testing-library';

const ThrowError = ({ message }) => {
  throw message;
};

describe('ErrorBoundary', () => {
  it('should render without error', () => {
    const { container } = render(
      <ErrorBoundary>
        <p>Hellor World</p>
      </ErrorBoundary>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render error', () => {
    const { container } = render(
      <ErrorBoundary>
        <ThrowError message="Erro" />
      </ErrorBoundary>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
