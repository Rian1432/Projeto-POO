"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    constructor() {
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getModelName() {
        return this.modelName;
    }
    setModelName(modelName) {
        this.modelName = modelName;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getUseType() {
        return this.useType;
    }
    setUseType(useType) {
        this.useType = useType;
    }
}
exports.default = Computer;
