import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ theUser }) => {
	return (
		<div className="m-2 p-3 bg-grey-300 h-200 w-150 shadow-lg rounded-md">
			<h2 className="text-xl">Name: {theUser.name}</h2>
			<p>
				Alias: <span className="text-oblique">{theUser.username}</span>
			</p>
			<div>
				<p>Email: {theUser.email}</p>
				<p>Phone: {theUser.phone}</p>
				<p>Website: {theUser.website}</p>
			</div>
			<div>
				<h3>Company</h3>
				<div>
					<p>{theUser.company.name}</p>
					<p>{theUser.company.catchPhrase}</p>
					<p>{theUser.company.bs}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
