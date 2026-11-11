import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, Generated } from "typeorm";

@Entity()
export class User{
        @PrimaryGeneratedColumn()
        id : string;
        @Column({ type: `uuid`, unique: true })
        @Generated(`uuid`)
        token : string;
        @Column()
        name : string;
        @Column()
        password : string;
        @Column()
        email : string;
        @Column()
        age : number;
        @Column()
        address : string;
        @Column()
        phone : string;
        @CreateDateColumn()
        createdAt : Date;
        @UpdateDateColumn()
        updatedAt :  Date;
        @DeleteDateColumn()
        deletedAt : Date;
}
