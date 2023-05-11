import { useNavigate } from 'react-router-dom';
import Container from './Container';
import { deletePost } from '../deleter';

const PostItem = (props) => {
	const { post } = props;
	let navigate = useNavigate();

	const handleEdit = () => {
		navigate(`/blog/${post.id}/edit`);
	};

	const handleDelete = async () => {
		try {
			await deletePost(post.id);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className="btn">
			<p>Click Title to View Post</p>
			<button className="card p-10">
				<div className="card-body" onClick={() => navigate(`/blog/${post.id}`)}>
					<h2>{post.title}</h2>
				</div>
				<button className="btn btn-success m-3" onClick={handleEdit}>
					Edit Post
				</button>
				<button className="btn btn-danger m-3" onClick={handleDelete}>
					Delete Post
				</button>
			</button>
		</Container>
	);
};

export default PostItem;
