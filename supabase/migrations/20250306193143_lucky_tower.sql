/*
  # Create Land Clearing Leads Table

  1. New Tables
    - `land_clearing_doc`
      - `id` (bigint, primary key)
      - `full_name` (text, required)
      - `email` (text)
      - `phone_number` (text)
      - `property_address` (text)
      - `service_needed` (text)
      - `property_size` (text)
      - `project_details` (text)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `land_clearing_doc` table
    - Add policy for inserting new leads (public access)
    - Add policy for reading leads (authenticated users only)
*/

-- Create the table with proper column names (following SQL conventions)
CREATE TABLE IF NOT EXISTS land_clearing_doc (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name text NOT NULL,
  email text,
  phone_number text,
  property_address text,
  service_needed text,
  property_size text,
  project_details text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE land_clearing_doc ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting new leads (allow public access)
CREATE POLICY "Allow public to insert leads"
  ON land_clearing_doc
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for reading leads (authenticated users only)
CREATE POLICY "Allow authenticated users to read leads"
  ON land_clearing_doc
  FOR SELECT
  TO authenticated
  USING (true);