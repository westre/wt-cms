import { SubNavigation } from '../sub-navigation/subnavigation.entity';

export interface Page {
    title: string;
    pages: SubNavigation[];
}