import { config } from "./commonlyConfig";
import inputConfig from "./inputConfig";

const configMap = new Map([["input", [...config, ...inputConfig]]]);

export default configMap;
