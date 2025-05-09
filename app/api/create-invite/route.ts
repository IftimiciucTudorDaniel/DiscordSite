import { NextResponse } from 'next/server';

export async function GET() {
    const token = process.env.DISCORD_BOT_TOKEN;
    const channelId = process.env.DISCORD_CHANNEL_ID;

    if (!token || !channelId) {
        return NextResponse.json({ error: 'Missing token or channel ID' }, { status: 500 });
    }

    const res = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
        method: 'POST',
        headers: {
            Authorization: `Bot ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            max_uses: 1,
            unique: true,
            max_age: 86400, // valid 24h
        }),
    });

    const data = await res.json();

    if (!res.ok) {
        return NextResponse.json({ error: data.message || 'Invite creation failed' }, { status: res.status });
    }

    return NextResponse.json({ invite: `https://discord.gg/${data.code}` });
}
