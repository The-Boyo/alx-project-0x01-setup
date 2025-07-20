import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
	console.log(users);
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="p-4">
				<div className="flex justify-between">
					<h1 className=" text-2xl font-semibold">Our Users</h1>
				</div>
				<div className="grid gap-2 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
					{users.map((user: UserProps) => {
						return <UserCard key={user.id} theUser={user} />;
					})}
				</div>
			</main>
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
