// app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { kv } from "../../../lib/kv";

interface ReviewItem {
    img: string;
    name: string;
    position: string;
    date: string;
    text: string;
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { id, review } = body;

    if (!id || !review) {
        return NextResponse.json({ message: 'Missing id or review' }, { status: 400 });
    }

    await kv.set(`review:${id}`, review);

    return NextResponse.json({ message: 'Review saved successfully' });
}


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'Missing id' }, { status: 400 });
    }

    const review = await kv.get(`review:${id}`);

    return NextResponse.json({ review });
}
