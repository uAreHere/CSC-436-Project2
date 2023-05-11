import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '../components/Container';
import Loading from '../components/Loading';

const ViewPost = () => {
	const { id } = useParams();
	const [postInfo, setPostInfo] = useState();

	useEffect(() => {
		axios.get(`http://localhost:3001/v1/api/posts/${id}`).then((res) => {
			const responsePost = res.data;
			setPostInfo(responsePost);
		});
	}, []);

	const {
		id: postId,
		title,
		content,
		last_updated,
		originally_published,
	} = postInfo || {};

	return (
		<Container>
			<div>
				{postInfo ? (
					<div className="card">
						<div>
							<div className="card-header">
								<h1 className="card-title text-center"> {title} </h1>
							</div>
							<div className="card-body">
								<p className="card-text">{content}</p>
							</div>
							<div className="card-footer text-body-secondary align-content-center">
								<div className="d-flex inline-block">
									<p className="m-4">Post Id: {postId}</p>
									<p className="m-4">Created: {originally_published}</p>
									<p className="m-4">Last Update: {last_updated}</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</Container>
	);
};

export default ViewPost;
