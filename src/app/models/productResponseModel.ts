import { __extends } from "tslib";
import { Products } from "./product";
import { ResponseModel } from "./responseModel";


export interface ProductResponseModel extends ResponseModel{
data:Products[],

}