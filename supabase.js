import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://akihxoizbiqjubowsrix.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFraWh4b2l6YmlxanVib3dzcml4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwMjQ0MTcsImV4cCI6MTk4OTYwMDQxN30.EoqTp89RzvmmQlUGVfQBlK4M20TfCjecFC6oqDd-LD0')
