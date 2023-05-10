import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import Loading from '../components/Loading';
import PostItem from '../components/PostItem';

const BlogPosts = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		axios.get('http://localhost:3001/v1/api/posts').then((res) => {
			const responsePosts = res.data;
			setPosts(responsePosts);
		});
	}, []);

	return (
		<div className="d-flex justify-content-center">
			<Container className="grid d-flex">
				{posts ? (
					<div>
						{posts.map((post) => (
							<PostItem key={post.id} post={post} />
						))}
					</div>
				) : (
					<Loading />
				)}
			</Container>
		</div>
	);
};

export default BlogPosts;
