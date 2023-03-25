export default interface IExpense {
  readonly id: string;
  readonly description: string;
  readonly amount: number;
  readonly date: Date;
}
