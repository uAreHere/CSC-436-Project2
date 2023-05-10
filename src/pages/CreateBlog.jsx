import { useState } from 'react';
import Container from '../components/Container';

const CreateBlog = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [loading, setLoading] = useState(false);
	const [publishResponse, setPublishResponse] = useState(null);

	const publishPost = async () => {
		setLoading(true);
		setPublishResponse(null);
		const request = await fetch('http://localhost:3001/v1/api/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				content,
			}),
		});

		const response = request.json();
		setPublishResponse(response);
		setContent('');
		setTitle('');

		setLoading(false);
	};

	const submit = (e) => {
		e.preventDefault();
		if (content && title) {
			publishPost();
		}
	};

	const updateTitle = (e) => setTitle(e.target.value);
	const updateContent = (e) => setContent(e.target.value);

	if (loading) {
		return <p>Loading...</p>;
	}

	let responseOutput = <></>;

	if (publishResponse) {
		responseOutput = <pre>{JSON.stringify(publishResponse, 0, 1)}</pre>;
	}

	return (
		<Container className="card flex m-3">
			<div className="card-body">
				<div className="input-group">
					<form onSubmit={submit}>
						<div className="container mb-3">
							{responseOutput}
							<label className="form-label">Title</label>
							<input
								className="form-control"
								type="text"
								value={title}
								onChange={updateTitle}
							/>
							<label className="form-label">Content</label>
							<textarea
								className="form-control"
								type="text"
								value={content}
								onChange={updateContent}
							/>
							<button type="button" className="btn btn-success mt-5" onClick={submit}>
								Create Post
							</button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default CreateBlog;
