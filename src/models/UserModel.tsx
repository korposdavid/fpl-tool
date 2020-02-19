import Player from "../models/Player";
export default interface UserModel {
  id: number;
  email: string;
  squad: Player[];
}
