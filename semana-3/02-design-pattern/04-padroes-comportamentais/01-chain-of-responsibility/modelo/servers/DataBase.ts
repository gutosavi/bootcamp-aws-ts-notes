import PermissionType from "./PermissionType.js";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: "gustavo@mail.com",
    password: "123456",
    permission: PermissionType.ADMIN,
  },
  {
    email: "user@mail.com",
    password: "123456",
    permission: PermissionType.USER,
  },
];

export default DataBase;
