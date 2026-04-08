// Supabase client setup
import { createClient } from '@supabase/supabase-js';
import Config from 'react-native-config';

const supabaseUrl = Config.PUBLIC_SUPABASE_URL!;
const supabaseKey = Config.PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
