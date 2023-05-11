import { Routes, Route } from 'react-router-dom';
import { NavLink as RouterLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import CreateBlog from './pages/CreateBlog';
import ViewPost2 from './pages/ViewPost';
import BlogPosts from './pages/BlogPosts';
import EditPost from './pages/EditPost';
//import Delete from './components/Delete';

function App() {
	return (
		<div className="App">
			<Container className="bg-info">
				<div className="container py-3">
					<nav className="navbar navbar-expand-lg">
						<div>
							<ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item px-3">
									<RouterLink
										to="/"
										className={({ isActive }) => {
											return (
												'px-3 py-2 rounded-md text-sm font-medium no-underline' +
												(!isActive
													? 'text-black-500 hover:bg-gray-700 hover:text-white'
													: 'bg-gray-90 text-white')
											);
										}}
									>
										Home
									</RouterLink>
								</li>
								<li className="nav-item px-3">
									<RouterLink
										to="create"
										className={({ isActive }) => {
											return (
												'px-3 py-2 rounded-md text-sm font-medium no-underline' +
												(!isActive
													? 'text-black-500 hover:bg-gray-700 hover:text-white'
													: 'bg-gray-90 text-white')
											);
										}}
									>
										Create A Post
									</RouterLink>
								</li>
								<li className="nav-item px-3">
									<RouterLink
										to="getallposts"
										className={({ isActive }) => {
											return (
												'px-3 py-2 rounded-md text-sm font-medium no-underline' +
												(!isActive
													? 'text-black-500 hover:bg-gray-700 hover:text-white'
													: 'bg-gray-90 text-white')
											);
										}}
									>
										Posts By Title
									</RouterLink>
								</li>
								<li className="nav-item px-3">
									<RouterLink
										to="anotherroute"
										className={({ isActive }) => {
											return (
												'px-3 py-2 rounded-md text-sm font-medium no-underline' +
												(!isActive
													? 'text-black-500 hover:bg-gray-700 hover:text-white'
													: 'bg-gray-90 text-white')
											);
										}}
									>
										Another Link
									</RouterLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</Container>
			<Routes>
				{/* <Route path="listall/*" element={<ListAll />} /> */}
				<Route exact path="/" element={<BlogPosts />} />
				<Route path="blog/:id" element={<ViewPost2 />} />
				{/* <Route exact path="/delete" element={<Delete />} /> */}
				<Route path="create" element={<CreateBlog />}></Route>
				<Route path="blog/:id/edit" element={<EditPost />}></Route>
			</Routes>
		</div>
	);
}

export default App;
