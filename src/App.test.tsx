import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/TextEditor', () => () => <div data-testid="text-editor">TextEditor Mock</div>);

describe('App Component', () => {
  test('renders app header with correct title', () => {
    render(<App />);
    
    // Check for the app title (find the h1 element specifically)
    const titleElement = screen.getByRole('heading', { level: 1, name: /Paraphrase/i });
    expect(titleElement).toBeInTheDocument();
    
    // Check for the subtitle
    const subtitleElement = screen.getByText(/Select text to paraphrase it instantly/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders the TextEditor component', () => {
    render(<App />);
    
    // Check if the TextEditor component is rendered
    const textEditorElement = screen.getByTestId('text-editor');
    expect(textEditorElement).toBeInTheDocument();
  });
});