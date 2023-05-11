import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ViewPost = ({ params }) => {
	const { postId } = params;
	let navigate = useNavigate();
	const post = useSelector((state) =>
		state.posts.find((post) => post.id === Number(postId))
	);

	if (!post) {
		return <div>Post not found</div>;
	}

	const { title, content, id, last_updated, originally_published } = post;

	return (
		<div>
			<h2>{title}</h2>
			<p>{content}</p>
			<p>ID: {id}</p>
			<p>Last updated: {last_updated}</p>
			<p>Originally published: {originally_published}</p>
			<button onClick={() => navigate(`/blog/${post.id}/edit`)}>Edit Post</button>
		</div>
	);
};

export default ViewPost;
