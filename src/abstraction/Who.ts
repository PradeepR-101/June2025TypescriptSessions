import { Admin } from "./Admin";

export interface WHO extends Admin{
    covidVaccicantion(): void;
}