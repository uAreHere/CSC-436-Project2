import { useNavigate } from 'react-router-dom';
import Container from './Container';

const PostItem = (props) => {
	const { post } = props;
	let navigate = useNavigate();

	return (
		<Container className="btn">
			<button className="card p-10">
				<div className="card-body" onClick={() => navigate(`/blog/${post.id}`)}>
					<h2>{post.title}</h2>
				</div>
			</button>
		</Container>
	);
};

export default PostItem;
