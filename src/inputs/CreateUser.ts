import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUser {
  @Field()
  public username: string;

  @Field()
  public passwordHash: string;

  @Field()
  public displayName: string;
}

// export default CreateUser;
