import { ReactNode } from "react";

export type TypeComponentWindow = {
    active: boolean,
    setActive: (isActive: boolean) => void,
    children: ReactNode,
}

export type holidayDTO = {
    date: string,
    localName: string,
    name: string,
    countryCode: string,
    fixed: boolean,
    global: boolean,
    counties: null,
    launchYear: null,
    types: string[],
}

export interface Task {
    id: string;
    date: string;
    description: string;
    isHoliday?: boolean;
};

export interface TasksState {
    tasks: Task[];
}