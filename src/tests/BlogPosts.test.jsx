import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import BlogPosts from '../pages/BlogPosts';

jest.mock('axios');

describe('BlogPosts', () => {
	it('ensure proper API call in BlogPosts', async () => {
		const mockedPost = [
			{ id: 1, title: 'Post 1' },
			{ id: 2, title: 'Post 2' },
		];
		axios.get.mockResolvedValue({ data: mockedPosts });
		render(<BlogPosts />);

		expect(axios.get).toHaveBeenCalledTimes(1);
		expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/v1/api/posts');
	});
});
