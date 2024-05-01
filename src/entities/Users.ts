import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { StandartUser } from "./StandartUser";

@Index("users_pkey", ["idUser"], { unique: true })
@Index("users_user_mail_key", ["userMail"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_user" })
  idUser: number;

  @Column("character varying", { name: "user_name", length: 255 })
  userName: string;

  @Column("character varying", { name: "first_name", length: 255 })
  firstName: string;

  @Column("character varying", { name: "user_password", length: 255 })
  userPassword: string;

  @Column("character varying", {
    name: "user_mail",
    nullable: true,
    unique: true,
    length: 255,
  })
  userMail: string | null;

  @Column("character varying", { name: "source_photo", length: 255 })
  sourcePhoto: string;

  @Column("date", { name: "birth" })
  birth: string;

  @OneToMany(() => StandartUser, (standartUser) => standartUser.idUser)
  standartUsers: StandartUser[];
}
