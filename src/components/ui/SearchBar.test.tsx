import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('search input fires onChange event', () => {
    it('should test onChange behavior', () => {
        render(<SearchBar onSearch={() => null} onSetIsLoading={() => null} />);
        
        const input: HTMLInputElement = screen.getByPlaceholderText('Search people');

        fireEvent.change(input, { target: { value: 'Test' } });

        expect(input.value).toBe('Test');
    })
})