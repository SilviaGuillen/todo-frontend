export function nextStatus(status: string) {
    if (status === 'OPEN') {
        return 'IN_PROGRESS';
    } else if (status === 'IN_PROGRESS') {
        return 'DONE';
    } else if (status === 'DONE') {
        return undefined;
    }
}

export function statusToString(status: string): string {
    if (status === 'ALL') {
        return "All"
    } else if (status === 'OPEN') {
        return "Open"
    } else if (status === 'IN_PROGRESS') {
        return "In Progress"
    } else if (status === 'DONE') {
        return "Done"
    } else {
        return "unknown"
    }
}