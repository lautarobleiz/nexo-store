import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.DB_URL!
const supabaseKey = import.meta.env.DB_PUBLIC_KEY!

// Este objeto 'supabase' es el que usarás en toda tu app
export const supabase = createClient(supabaseUrl, supabaseKey)