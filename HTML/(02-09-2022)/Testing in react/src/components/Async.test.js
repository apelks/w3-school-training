import { render, screen } from '@testing-library/react';
import Async from './Async';


describe('Async Component', () =>{

    test('redners post if request succeeds', async () =>{
        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json: async () =>[
                {id : 'p1', title: 'First post'}
            ]
        });   

        render (<Async/>)


            const listItemElement = screen.findAllByRole('listitem');
            expect(listItemElement).not.toHaveLength(0);
    })


});