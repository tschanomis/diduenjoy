import Header from "./Header";

import { render } from "@testing-library/react";

describe('Footer', () => {
  test('Should render Header', async () => {
    render(<Header />)
  })
})