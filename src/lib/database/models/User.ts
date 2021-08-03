import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';

export default class User extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    money: DataTypes.INTEGER
  };
}
