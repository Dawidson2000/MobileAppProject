export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: UserAdress;
	phone: string;
	website: string;
	company: UserCompany;
};

type UserAdress = {
	street: string;
	city: string;
	zipCode: string;
};

type UserCompany = {
	name: string;
};
