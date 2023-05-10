import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewPost = ({ params }) => {
	const { postId } = params;
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
			<Link to={`/viewpost/${id}/edit`}>Edit Post</Link>
		</div>
	);
};

export default ViewPost;
