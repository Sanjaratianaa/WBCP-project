import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DetailsStandart } from "./DetailsStandart";

@Index("id_standart", ["idStandart"], { unique: true })
@Entity("standart", { schema: "vittoria_rencontre" })
export class Standart {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id_standart",
    unsigned: true,
  })
  idStandart: number;

  @Column("varchar", { name: "standart", length: 255 })
  standart: string;

  @Column("tinyint", { name: "isNumeric", width: 1 })
  isNumeric: boolean;

  @OneToMany(() => DetailsStandart, detailsStandard => detailsStandard.standard)
  detailsStandart: DetailsStandart[];
}
