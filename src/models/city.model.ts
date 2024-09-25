export interface cityItemProps {
    id: number;
    city: string;
    state_id: number; 
    created_at: string;
    updated_at: string;
  }
  
  // Define the overall state structure
  export interface cityListProps {
    data: cityItemProps[]; // This is the array to hold state items
    error: string | null;
  }
 