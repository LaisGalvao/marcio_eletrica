// src/supabase.js
import { createClient } from '@supabase/supabase-js'

// Initialize the client with your Supabase URL and Anon Key
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,  // Store your URL in an environment variable
  import.meta.env.VITE_SUPABASE_ANON_KEY  // Store your Anon Key in an environment variable
)

export default supabase
