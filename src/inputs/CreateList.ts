import { InputType, Field } from "type-graphql";

@InputType()
export class CreateList {
  @Field()
  public list_owner: string;

  @Field()
  public listname: string;

  @Field()
  public is_public: boolean;
}

//export default CreateList;


//   @Field({ nullable: true })
// public list_owner?: User;