export function getStatusColor(status: string) {
    switch (status) {
        case "PENDING":
            return 'text-yellow-500';
        case "COMPLETED":
            return 'text-green-500';
        case "OVERDUE":
            return 'text-red-500';
        default:
            return 'text-gray-500';
    }
}