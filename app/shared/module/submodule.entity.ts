import { Module } from './module.entity';

export interface SubModule extends Module {
    parent: Module;
}