const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvbnl5cGFyZWp6ZnR3YXJ3cmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTMzOTksImV4cCI6MTk2MzEyOTM5OX0.OpsZvHUueKvJIY2op6Et8ugQ1d1sGtNaVfxHUwjn1Lo';

const SUPABASE_URL = 'https://donyyparejzftwarwrla.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPokemans() {
    const response = await client
        .from('starter_pokemans')
        .select('*');
    return response.body;
}

export async function getAStarter(someId) {
    const response = await client
        .from('starter_pokemans')
        .select('*')
        .match({ id: someId })
        .single();
    return response.body;
}