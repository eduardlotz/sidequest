import { adventureBatches } from "./extra-adventure";
import { crimeBatches } from "./extra-crime";
import { falloutBatches } from "./extra-fallout";

export const seriesBatches = {
  ...adventureBatches,
  ...crimeBatches,
  ...falloutBatches,
};
