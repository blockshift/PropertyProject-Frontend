export interface IUser {
  propertyname: string;
  role: string;
  address: string;
  lastName?: string;
  img?: string | ArrayBuffer;
  gender?: string;
  profileLink?: string;
  social?: IUserLink[];
}

export interface IUserLink {
  icon: string;
  link: string;
}
