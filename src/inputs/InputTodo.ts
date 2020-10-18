import { InputType, Field } from "type-graphql";

@InputType()
export class InputToDo {
  @Field()
  public id: string;

  @Field({ nullable: true })
  public description : string;

  @Field({ nullable: true })
  public completed: boolean;

  @Field({ nullable: true })
  public parent_list: string;
}

// export default InputToDo;
