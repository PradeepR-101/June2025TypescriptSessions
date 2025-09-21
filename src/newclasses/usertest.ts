import { BMW } from "../inheritance/Car";
import { User } from "./User";


let u1 = new User('Tom', 20, 12.33);
u1.drive();
console.log(u1.shares);

let bm = new BMW();
bm.start();
bm.stop();
bm.autoParking();