import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/entities/role.entity";
import { UserRole } from "src/roles/entities/user-roles.entity";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs>{

  @ApiProperty({ example: '1', description: 'Unique identificator(Primary key)' })
  @Column({ type: DataType.INTEGER,  unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'name', description: 'User name' })
  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({ example: 'user@mail.com', description: 'Email user address' })
  @Column({ type: DataType.STRING,  unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}