import {render, screen} from '@testing-library/react';
import SamuraiJSApp from './App';

test('renders learn react link', () => {
  render(<SamuraiJSApp/>);
  const image = screen.getByAltText("")
  expect(image.src).toContain("preloader.png")
});
