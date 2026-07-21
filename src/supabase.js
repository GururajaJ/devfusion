export const SUPABASE_URL = "https://lmjyjpdbmmvnwocuabgw.supabase.co";
export const SUPABASE_KEY = "sb_publishable_mkvDgZfdEGYobvORJ9wEyw_1nV07MTp";

export async function insertLead(leadData) {
    const url = `${SUPABASE_URL}/rest/v1/leads`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            "Prefer": "return=minimal"
        },
        body: JSON.stringify(leadData)
    });
    
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit data to database");
    }
    
    return true;
}
