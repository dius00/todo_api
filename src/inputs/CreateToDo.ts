import { InputType, Field } from "type-graphql";

@InputType()
export class CreateToDo {
  @Field()
  public description : string;

  @Field()
  public completed: boolean;

  @Field()
  public parent_list: string;
}

// export default CreateToDo;
