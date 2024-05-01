import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetailsStandart } from "./DetailsStandart";

@Index("standart_pkey", ["idStandart"], { unique: true })
@Entity("standart", { schema: "public" })
export class Standart {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_standart" })
  idStandart: number;

  @Column("character varying", { name: "standart", length: 255 })
  standart: string;

  @Column("boolean", { name: "isnumeric" })
  isnumeric: boolean;

  @OneToMany(
    () => DetailsStandart,
    (detailsStandart) => detailsStandart.idStandart
  )
  detailsStandarts: DetailsStandart[];
}
