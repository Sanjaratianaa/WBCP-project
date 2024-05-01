import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetailsStandart } from "./DetailsStandart";
import { Users } from "./Users";

@Index("standart_user_pkey", ["idStandartUser"], { unique: true })
@Entity("standart_user", { schema: "public" })
export class StandartUser {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_standart_user" })
  idStandartUser: number;

  @Column("integer", { name: "coefficient" })
  coefficient: number;

  @ManyToOne(
    () => DetailsStandart,
    (detailsStandart) => detailsStandart.standartUsers
  )
  @JoinColumn([
    { name: "id_details_standart", referencedColumnName: "idDetailsStandart" },
  ])
  idDetailsStandart: DetailsStandart;

  @ManyToOne(() => Users, (users) => users.standartUsers)
  @JoinColumn([{ name: "id_user", referencedColumnName: "idUser" }])
  idUser: Users;
}
