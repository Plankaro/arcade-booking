export interface Room {
  isTrash: boolean;
  name: string;
  isBooked: "pending" | "confirm" | "cancelled"| "locked" | "notConfirmed"; // Assuming booking statuses
  lock: "normal" | "locked"; // Assuming lock types
}
export interface Floor {
  isTrash: boolean;
  name: string;
  rooms: Room[];
}

export interface Building {
  isTrash: boolean;
  type: "Residential" | "Commercial"; // Assuming types of buildings
  floors: Floor[];
}
