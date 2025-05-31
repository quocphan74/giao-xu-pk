import { BaseTimestamps } from "./base";
import { Role } from "./role";

export interface User extends BaseTimestamps {
  id: number;
  name: string;
  email: string;
  password: string;
  role_id: number;
  role?: Role;
}