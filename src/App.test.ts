import { render } from "@testing-library/react";

import App from "./App"

describe('App', () => {
    it('qwer',() => {
        render(<App/>);
        expect(screen.getByText(/Crong/)).toBeInTheDocument();
    })
})