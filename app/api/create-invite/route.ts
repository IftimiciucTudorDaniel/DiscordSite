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
        return Response.json({ error: data }, { status: 500 });
    }

    return Response.json({ invite: `https://discord.gg/${data.code}` });
}
