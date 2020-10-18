import { InputType, Field } from "type-graphql";

@InputType()
export class InputUser {
  @Field({nullable:true})
  public username: string;

  @Field({nullable:true})
  public passwordHash: string;

  @Field({nullable:true})
  public displayName: string;
}

// export default CreateUser;
