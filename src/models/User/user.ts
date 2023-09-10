import { DataTypes } from "sequelize";
import {
  Model,
  Column,
  Table,
  PrimaryKey,
  Default,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

@Table({ tableName: "user" })
export class User extends Model<User> {
  @PrimaryKey
  @Default(uuidv4)
  @Column({ type: DataTypes.UUID, allowNull: false })
  userId: string;

  @Column({
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  })
  username: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  firstName: string;

  @Column({ allowNull: true, type: DataTypes.STRING })
  lastName: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  email: string;

  @Column({ allowNull: false, type: DataTypes.STRING })
  password: string;

  @Column({ type: DataTypes.TEXT })
  phone: DataTypes.TextDataType;

  @Column({ type: DataTypes.STRING })
  countryCode: string;

  @Column({ type: DataTypes.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @Column({
    allowNull: true,
    type: DataTypes.DATE,
  })
  lastLogin: Date;

  @Column({
    type: DataTypes.STRING(500),
    allowNull: true,
  })
  profileImg: string;

  @Column({
    type: DataTypes.STRING(500),
    allowNull: true,
  })
  linkedInUrl: string;

  @Column({
    type: DataTypes.STRING(500),
    allowNull: true,
  })
  githubUrl: string;
}
