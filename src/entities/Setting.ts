import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("settings")
class Setting {

 @PrimaryColumn()
 id: string;

 @Column()
 user_name: string;

 @Column()
 chat: boolean;

 @UpdateDateColumn()
 updated_at: Date;

 @CreateDateColumn()
 created_at: Date;

 constructor() {
  if (!this.id) {
   this.id = uuid();
  }
 }
}
export { Setting }