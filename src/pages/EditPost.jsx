import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patchPost } from '../redux/postSlice';
import { useState } from 'react';

const EditPost = () => {
	const { postId } = useParams();
	const post = useSelector((state) =>
		state.posts.find((post) => post.id === Number(postId))
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.content);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(patchPost(postId, title, content));
		navigate.push(`/posts/${postId}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="content">Content</label>
				<textarea
					id="content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>
			<button type="submit">Save</button>
		</form>
	);
};

export default EditPost;
