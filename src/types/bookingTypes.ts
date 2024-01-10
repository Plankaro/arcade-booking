export interface Room {
    bookingId: string | null;
    floorId: string;
    id: string;
    isBooked: string; // Consider using a more specific type like 'pending' | 'confirmed' | 'rejected' based on your use case
    isTrash: boolean;
    lock: string; // Consider using a more specific type if applicable, e.g., 'normal' | 'locked' | 'unlocked'
    name: string;
}

export interface Floor {
    bookingId: string;
    id: string;
    isTrash: boolean;
    name: string;
    propertyId: string;
}

export interface Booking {
    bookingId: string;
    isBooked:string;
    createdAt: string; // Consider using Date type if you parse the string into a Date object
    description: string;
    email: string;
    firstName: string;
    lastName: string
    floor: Floor[];
    room:Room[]
}
