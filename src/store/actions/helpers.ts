
export const createActionName = (group: string) => {
    return (name: string): string => {
        return `[${group.toUpperCase()}] ${name.toUpperCase().replace(/ /g, "_")}`;
    }
}
