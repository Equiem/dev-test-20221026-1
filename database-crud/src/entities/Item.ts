import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public description!: string;

  @Column({ default: false })
  public done!: boolean;

  @Column()
  public created!: number;

  @Column()
  public updated!: number;
}
