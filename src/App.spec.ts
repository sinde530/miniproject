import { render } from "react-dom"

import App from "./App"

describe('App', () => {
    it('앱이 돌아갈까',() => {
        render(<App/>);
        expect(screen.getByText(/Crong/)).toBeInTheDocument();
    })
})