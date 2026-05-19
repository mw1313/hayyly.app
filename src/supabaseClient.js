import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gyqtxemlrpciuklnfkkx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5cXR4ZW1scnBjaXVrbG5ma2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMTAwMTIsImV4cCI6MjA5NDc4NjAxMn0.KU1l-seNb3I_1LK3uns7FBX2IMLZbBfsBar2OomkGlY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)