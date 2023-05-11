import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateBlog from '../pages/CreateBlog';

describe('CreateBlog', () => {
	beforeEach(() => {
		jest.spyOn(window, 'fetch');
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should make API call when create post button is clicked', async () => {
		const { getByLabelText, getByText } = render(<CreateBlog />);

		const titleInput = getByLabelText('Title');
		const contentInput = getByLabelText('Content');
		const createPostButton = getByText('Create Post');

		fireEvent.change(titleInput, { target: { value: 'Test Title' } });
		fireEvent.change(contentInput, { target: { value: 'Test Content' } });
		fireEvent.click(createPostButton);

		await waitFor(() => {
			expect(window.fetch).toHaveBeenCalled();
		});
	});
});
