export async function POST(request) {
    const { email } = await request.json();
  
    const zapierWebhookURL = 'https://hooks.zapier.com/hooks/catch/22908097/2nj0gd5/'; // Replace with your actual Zapier URL
  
    // Send to Zapier webhook
    const zapierRes = await fetch(zapierWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        submittedAt: new Date().toISOString(),
      }),
    });
  
    if (!zapierRes.ok) {
      return new Response(JSON.stringify({ message: 'Failed to save email' }), { status: 500 });
    }
  
    return Response.json({ message: 'Email saved successfully' });
  }
  