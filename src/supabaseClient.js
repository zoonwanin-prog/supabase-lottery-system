import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xtfrfedwxzltvsebttkb.supabase.co'
const supabaseAnonKey = 'sb_publishable_FPN9E_UaJ3S6yYVff4bAyw_V7ZnTj0I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
