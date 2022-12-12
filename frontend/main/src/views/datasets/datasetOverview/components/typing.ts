export interface IPieData {
  type: pieDataEnum;
  count: number;
}
export enum pieDataEnum {
  ANNOTATED = 'Annotated',
  NOT_ANNOTATED = 'Not Annotated',
  INVALID = 'Invalid',
}
