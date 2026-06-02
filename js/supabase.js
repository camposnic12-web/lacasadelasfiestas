// Reemplazá estos dos valores con los tuyos de Supabase → Settings → API
const SUPABASE_URL = ''https://jgltwunzpcedppqahtdi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_Ywn45Mfz2YrHhn8AjtkKbQ_m_cj1wji'

const { createClient } = supabase
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
