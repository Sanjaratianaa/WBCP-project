import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Standart } from "./Standart";
import { StandartUser } from "./StandartUser";

@Index("details_standart_pkey", ["idDetailsStandart"], { unique: true })
@Entity("details_standart", { schema: "public" })
export class DetailsStandart {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_details_standart" })
  idDetailsStandart: number;

  @Column("integer", { name: "min", nullable: true, default: () => "0" })
  min: number | null;

  @Column("integer", { name: "max", nullable: true, default: () => "0" })
  max: number | null;

  @Column("integer", { name: "coefficient", nullable: true })
  coefficient: number | null;

  @Column("character varying", { name: "details", length: 255 })
  details: string;

  @ManyToOne(() => Standart, (standart) => standart.detailsStandarts)
  @JoinColumn([{ name: "id_standart", referencedColumnName: "idStandart" }])
  idStandart: Standart;

  @OneToMany(
    () => StandartUser,
    (standartUser) => standartUser.idDetailsStandart
  )
  standartUsers: StandartUser[];
}
