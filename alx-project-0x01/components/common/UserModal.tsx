import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
	const [user, setUser] = useState<UserData>({
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: "",
			},
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: "",
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	const handleSubmit = () => {
		onSubmit(user);
		onClose();
	};

	return (
		<div className="fixed inset-0bg-gray-800 bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-6 rounded-lg w-full max-w-2xl">
				<h2 className="text-xl font-bold mb-4 text-gray-800">Add New User</h2>
				<form
					onSubmit={handleSubmit}
					className="grid grid-cols-2 gap-4 lg:grid-cols-4"
				>
					<input
						name="name"
						placeholder="Name"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="username"
						placeholder="Username"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="email"
						placeholder="Email"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="phone"
						placeholder="Phone"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="website"
						placeholder="Website"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>

					<input
						name="address-street"
						placeholder="Street"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="address-city"
						placeholder="City"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="address-suite"
						placeholder="Suite"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="address-zipcode"
						placeholder="Zipcode"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="address-geo-lat"
						placeholder="Lat"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="address-geo-lng"
						placeholder="Lng"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>

					<input
						name="company-name"
						placeholder="Company Name"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="company-catchPhrase"
						placeholder="Catch Phrase"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>
					<input
						name="company-bs"
						placeholder="BS"
						onChange={handleChange}
						className="p-2 rounded-sm"
					/>

					<div className="col-span-2 flex justify-end gap-2 mt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-300 rounded"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded"
						>
							Add User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserModal;
