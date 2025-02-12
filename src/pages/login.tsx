import { signIn } from "../Hooks/userContext";

import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Hooks/userContext";
import { Link } from "react-router-dom";

function Login() {
	const currentUser = useContext(AuthContext);
	useEffect(() => {
		if (currentUser) {
			nav("/");
		}
	}, []);

	const nav = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState<any>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			await signIn(user.email, user.password);
			nav("/");
		} catch (err: any) {
			setError(err);
		}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your Zahn account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<label className="input input-bordered flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4 opacity-70"
								>
									<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
									<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
								</svg>
								<input
									onChange={handleChange}
									required
									type="text"
									autoComplete="email"
									name="email"
									className="grow"
									placeholder="Email"
								/>
							</label>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
							</div>
							<label className="input input-bordered flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-4 w-4 opacity-70"
								>
									<path
										fillRule="evenodd"
										d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
										clipRule="evenodd"
									/>
								</svg>
								<input
									onChange={handleChange}
									type="password"
									placeholder="Password"
									name="password"
									autoComplete="current-password"
									className="grow"
								/>
							</label>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Don't have an account?{" "}
						<Link
							to="/signup"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
			<dialog
				id="my_modal_5"
				open={error}
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box">
					<div role="alert" className="alert alert-warning">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>
							{(() => {
								if (
									error?.message ===
									"FirebaseError: Firebase: Error (auth/invalid-email)."
								) {
									return "Invalid Email";
								} else if (
									error?.message ===
									"FirebaseError: Firebase: Error (auth/wrong-password)."
								) {
									return "Wrong Password";
								} else if (
									error?.message ===
									"FirebaseError: Firebase: Error (auth/user-not-found)."
								) {
									return "User not found";
								} else {
									return error?.message;
								}
							})()}
						</span>
					</div>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button onClick={() => setError("")} className="btn">
								Close
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

export default Login;
