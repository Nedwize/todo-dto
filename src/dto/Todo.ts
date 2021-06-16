import { IsNotEmpty } from "class-validator";

export class TodoDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
