export interface IPatient {
  id: string;
  img: string | ArrayBuffer;
  name: string;
  number: string;
  age: number;
  gender: string;
  address: string;
  status: string;
  lastVisit: string;
}


export interface IOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface propertystatus {
  value: string;
  label: string;
  disabled?: boolean;

}