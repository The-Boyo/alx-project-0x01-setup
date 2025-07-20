import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
	name,
	email,
	username,
	phone,
	website,
	company,
	address,
}) => {
	return (
		<div className="m-2 p-3 bg-grey-300 h-200 w-150 shadow-lg rounded-md">
			<h2 className="text-xl">Name: {name}</h2>
			<p>
				Alias: <span className="text-oblique">{username}</span>
			</p>
			<div>
				<p>Email: {email}</p>
				<p>Phone: {phone}</p>
				<p>Website: {website}</p>
				<div>
					<h3>Address</h3>
					<p>City: {address.city}</p>
					<p>Street: {address.street}</p>
				</div>
			</div>
			<div>
				<h3>Company</h3>
				<div>
					<p>{company.name}</p>
					<p>{company.catchPhrase}</p>
					<p>{company.bs}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
