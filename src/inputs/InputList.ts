import { InputType, Field } from "type-graphql";

@InputType()
export class InputList {
  @Field()
  public id: string;

  @Field({ nullable: true })
  public list_owner?: string;

  @Field({ nullable: true })
  public listname?: string;

  @Field({ nullable: true })
  public is_public?: boolean;
}

// export default InputList;


//   @Field({ nullable: true })
// public list_owner?: User;