
export const yesterday = (oldDate: string) => {
    let newDate = new Date(oldDate);
    newDate.setDate(newDate.getDate() - 1);
    let formatedDate = newDate.toISOString().split('T')[0];

    return formatedDate;
};

export const tomorrow = (oldDate: string) => {
    let newDate = new Date(oldDate);
    newDate.setDate(newDate.getDate() + 1);
    let formatedDate = newDate.toISOString().split('T')[0];

    return formatedDate;
};
