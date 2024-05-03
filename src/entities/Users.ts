import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DetailsUser } from "./DetailsUser";
import { StandartUser } from "./StandartUser";

@Index("id_user", ["idUser"], { unique: true })
@Index("user_mail", ["userMail"], { unique: true })
@Entity("users", { schema: "vittoria_rencontre" })
export class Users {
    @PrimaryGeneratedColumn({ type: "bigint", name: "id_user", unsigned: true })
    idUser: number;

    @Column("varchar", { name: "user_name", length: 255 })
    userName: string;

    @Column("varchar", { name: "first_name", length: 255 })
    firstName: string;

    @Column("varchar", { name: "user_password", length: 255 })
    userPassword: string;

    @Column("varchar", {
      name: "user_mail",
      nullable: true,
      unique: true,
      length: 255,
    })
    userMail: string | null;

    @Column("varchar", { name: "source_photo", length: 255 })
    sourcePhoto: string;

    @Column("date", { name: "birth" })
    birth: string;

    @Column("int", { name: "sexe" })
    sexe: number;

    @OneToMany(() => DetailsUser, detailsUser => detailsUser.user)
    detailsUser: DetailsUser[];

    @OneToMany(() => StandartUser, standartUser => standartUser.user)
    standartUser: StandartUser[];
}
