import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public description!: string;

  @Column({ default: false })
  public done!: boolean;

   
  // @CreateDateColumn({ type: 'timestamp', precision: 3, default: () => `timezone('utc', now())`, readonly: true })
  // public created?: Date;

  // @UpdateDateColumn({type: 'timestamp', precision: 3, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  // public updated?: Date;
}