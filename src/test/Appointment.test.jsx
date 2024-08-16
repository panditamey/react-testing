import {render, screen } from '@testing-library/react';
import { Appointment } from '../components/Appointment';

describe(Appointment, () => {
let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
});


const render = (component) => 
    act(() => 
        ReactDOM.createRoot(container).render(component)    
    );

    it("renders the customer first name", () => {
        const customer = {firstName : 'Ashley'};
        render(<Appointment customer={customer}/>)
        expect(document.body.textContent).toContain(
            "Ashley"
        );
    });

})ha