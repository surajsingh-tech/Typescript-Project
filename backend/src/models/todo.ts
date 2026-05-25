export class TODOModule {
  public id: string;
  public text: string;
  constructor(id: string, text: string) {
    ((this.id = id), (this.text = text));
  }
}
