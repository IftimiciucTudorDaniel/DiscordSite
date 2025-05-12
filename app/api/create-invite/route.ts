// app/api/create-invite/route.ts
export async function GET() {
    const token = process.env.DISCORD_BOT_TOKEN;
    const channelId = process.env.DISCORD_CHANNEL_ID;

    const res = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
        method: "POST",
        headers: {
            "Authorization": `Bot ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            max_uses: 1,
            max_age: 86400,
            unique: true
        })
    });

    const data = await res.json();

    if (!res.ok) {
        console.error("DISCORD INVITE ERROR:", data);
        return new Response(JSON.stringify({ error: data, status: res.status }), { status: 500 });
    }

    return new Response(JSON.stringify({ invite: `https://discord.gg/${data.code}` }), { status: 200 });
}
