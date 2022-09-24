import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup)

describe('Contact is rendering', () => {

    it('renders', () => {
      render(<Contact />);
    });
  
    it('matches snapshot', () => {
      const { asFragment } = render(<Contact />)
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders contact title', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact-title')).toHaveTextContent('Contact')
    })

    it('renders contact btn', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact-btn')).toHaveTextContent('Submit')
    })

  })