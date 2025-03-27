export interface Database {
  public: {
    Tables: {
      land_clearing_doc: {
        Row: {
          id: number;
          full_name: string;
          email: string | null;
          phone_number: string | null;
          property_address: string | null;
          service_needed: string | null;
          property_size: string | null;
          project_details: string | null;
          created_at: string;
          status: string;
        };
        Insert: {
          id?: never;
          full_name: string;
          email?: string | null;
          phone_number?: string | null;
          property_address?: string | null;
          service_needed?: string | null;
          property_size?: string | null;
          project_details?: string | null;
          created_at?: string;
          status?: string;
        };
        Update: {
          id?: never;
          full_name?: string;
          email?: string | null;
          phone_number?: string | null;
          property_address?: string | null;
          service_needed?: string | null;
          property_size?: string | null;
          project_details?: string | null;
          created_at?: string;
          status?: string;
        };
      };
    };
  };
}