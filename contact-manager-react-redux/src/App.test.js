import React from 'react';
import { render, screen } from '@testing-library/react';
import { render as rendered, unmountComponentAtNode } from 'react-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AddContact from './components/AddContact';
import Contact from './components/Contact';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let element;

beforeEach(() => {
  element = document.createElement('div');
  document.body.appendChild(element);
});

describe('Contact Manager Application', () => {
  test('should render About Component', () => {
    render(<AboutUs />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  test('should render Header with "Contact Manager" text', () => {
    // render(
    //   <Router>
    //     <Header />
    //   </Router>
    // );
    // expect(screen.getByText('Contact Manager')).toBeInTheDocument();

    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByText('Contact Manager')).toBeInTheDocument();
  });

  test('Should have 5 links in Header Component', () => {
    rendered(
      <Router>
        <Header />
      </Router>,
      element
    );

    const count = element.getElementsByTagName('a').length;
    expect(count).toBe(5);
  });

  test('should have Submit text in submit button of AddContact component', () => {
    render(<AddContact />);
    expect(screen.getByTestId('btnSubmit')).toHaveTextContent('Submit');
  });

  test('Contact component should have the bootstrap class "card"', () => {
    render(<Contact />);
    expect(screen.getByTestId('card')).toHaveClass('card');
  });

  test('Hyperlinks should have nav-link class', () => {
    rendered(
      <Router>
        <Header />
      </Router>,
      element
    );

    const links = element.getElementsByTagName('a');
    for (let i = 1; i < links.length; i++) {
      expect(links[i]).toHaveClass('nav-link');
    }
  });
});

afterEach(() => {
  unmountComponentAtNode(element);
  element.remove();
  element = null;
});
