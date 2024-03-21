import { UserSimple } from './UserSimple';

export type User = UserSimple & {
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
