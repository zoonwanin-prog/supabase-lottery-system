import { createClient } from '@supabase/supabase-client'

const supabaseUrl = 'https://supabase.com/dashboard/project/xtfrfedwxzltvsebttkb'
const supabaseAnonKey = 'sb_publishable_FPN9E_UaJ3S6yYVff4bAyw_V7ZnTj0I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
