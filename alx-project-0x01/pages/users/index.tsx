import { useState } from "react";

import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserModal from "@/components/common/UserModal";

const Users: React.FC<UserProps[]> = ({ users }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const handleAddUser = () => {};

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="p-4">
				<div className="flex justify-between">
					<h1 className=" text-2xl font-semibold">Our Users</h1>
					<button
						onClick={() => setModalOpen(true)}
						className="bg-blue-700 px-4 py-2 rounded-full text-white"
					>
						Add User
					</button>
				</div>
				<div className="grid gap-2 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
					{users.map((user: UserProps) => {
						return (
							<UserCard
								key={user.id}
								name={user.name}
								username={user.username}
								company={user.company}
								email={user.email}
								phone={user.phone}
								website={user.website}
								address={user.address}
								id={user.id}
							/>
						);
					})}
				</div>
			</main>
			{isModalOpen && (
				<UserModal
					onClose={() => setModalOpen(false)}
					onSubmit={handleAddUser}
				/>
			)}
		</div>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();

	return {
		props: {
			users,
		},
	};
}

export default Users;
