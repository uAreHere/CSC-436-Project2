import { useSelector } from 'react-redux';

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
		</div>
	);
};

export default ViewPost;
