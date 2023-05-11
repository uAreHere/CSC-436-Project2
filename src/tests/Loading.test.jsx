import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '../components/Loading';

describe('Loading', () => {
	it('renders bootstrap spinner for loading states', () => {
		const { getByRole, getByText } = render(<Loading />);
		const spinner = getByRole('status');
		const loadingText = getByText('Loading...');

		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveClass('spinner-border');
		expect(spinner).toHaveClass('text-danger');
		expect(loadingText).toBeInTheDocument();
	});
});
