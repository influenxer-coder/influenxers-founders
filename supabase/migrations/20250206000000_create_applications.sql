-- Create applications table for founder signups
create table if not exists public.applications (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company_name text not null,
  website_url text,
  employee_count text,
  main_goal text not null,
  additional_info text,
  user_id uuid references auth.users(id),
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.applications enable row level security;

-- Allow anonymous inserts (form submissions without SSO)
create policy "Allow anon inserts"
  on public.applications
  for insert
  to anon
  with check (true);

-- Allow authenticated inserts (form submissions with Google SSO)
create policy "Allow authenticated inserts"
  on public.applications
  for insert
  to authenticated
  with check (true);

-- Allow authenticated users to read their own applications
create policy "Users can read own applications"
  on public.applications
  for select
  to authenticated
  using (auth.uid() = user_id);

-- Service role bypasses RLS by default for admin access
