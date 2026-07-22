export const SUPABASE_URL = "https://lmjyjpdbmmvnwocuabgw.supabase.co";
export const SUPABASE_KEY = "sb_publishable_mkvDgZfdEGYobvORJ9wEyw_1nV07MTp";

// Access key from web3forms.com registered for info@zoserve.com
export const WEB3FORMS_KEY = "36df90cb-d4ee-4c54-8e10-bfeb87fa13c3"; // Replace this with the actual key received in info@zoserve.com email

export async function sendEmailNotification(leadData) {
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_WEB3FORMS_KEY") {
        console.warn("Web3Forms Access Key is not configured. Skipping email notification.");
        return;
    }

    try {
        const payload = {
            access_key: WEB3FORMS_KEY,
            subject: `You have an update from the client: ${leadData.name}`,
            from_name: "Zoserve Client Portal",
            name: leadData.name,
            email: leadData.email,
            message: `
You have a new update from a client on Zoserve.

Client Details:
------------------------------------------
Name: ${leadData.name}
Company: ${leadData.company_name}
Email: ${leadData.email}
Country: ${leadData.country}
Phone Number: ${leadData.phone}
What they want to build: ${leadData.service}

What is their need:
${leadData.solve_details || "No details provided (Optional)"}
------------------------------------------
            `
        };

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.error("Failed to trigger Web3Forms email notification:", await response.text());
        }
    } catch (e) {
        console.error("Error sending email notification:", e);
    }
}

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

    // Trigger email notification in the background
    sendEmailNotification(leadData);
    
    return true;
}
