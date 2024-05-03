import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Index("id_standart_user", ["idStandartUser"], { unique: true })
@Entity("standart_user", { schema: "vittoria_rencontre" })
export class StandartUser {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id_standart_user",
    unsigned: true,
  })
  idStandartUser: number;

  @Column("int", { name: "id_details_standart", nullable: true })
  idDetailsStandart: number | null;

  @Column("int", { name: "coefficient" })
  coefficient: number;

  @Column("int", { name: "id_user", nullable: true })
  idUser: number | null;

  @ManyToOne(() => Users, user => user.standartUser)
  user: Users;
}
