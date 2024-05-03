import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { DetailsStandart } from "./DetailsStandart";
import { Users } from "./Users";

@Index("id_details_user", ["idDetailsUser"], { unique: true })
@Entity("details_user", { schema: "vittoria_rencontre" })
export class DetailsUser {
    @PrimaryGeneratedColumn({
        type: "bigint",
        name: "id_details_user",
        unsigned: true,
    })
    idDetailsUser: number;

    @Column("int", { name: "id_details_standart", nullable: true })
    idDetailsStandart: number | null;

    @Column("varchar", { name: "valeur" })
    valeur: string;

    @Column("bigint", { name: "id_user", nullable: true })
    idUser: number | null;

    @ManyToOne(() => DetailsStandart, detailsStandard => detailsStandard.detailsUser)
    detailsStandard: DetailsStandart;

    @ManyToOne(() => Users, user => user.detailsUser)
    user: Users;
}
