export const deletePost = async (postId) => {
	const response = await fetch(`http://localhost:3001/v1/api/posts/${postId}`, {
		method: 'DELETE',
	});
	if (!response.ok) {
		throw new Error(`Failed to delete post ${postId}`);
	}
};
