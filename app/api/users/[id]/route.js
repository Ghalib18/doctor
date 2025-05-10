import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { Doctor_Info } from '@/utils/schema';
import { eq } from 'drizzle-orm';

// Update existing doctor by ID
export async function PUT(request, { params }) {
  const id = Number(params.id);
  try {
    const data = await request.json();
    const {
      fullName,
      specialty,
      experience,
      languages,
      location,
      fee,
      bio,
      availabilityToday,
      availabilityTomorrow,
      availabilityWeek,
    } = data;

    const updated = await db
      .update(Doctor_Info)
      .set({
        fullName,
        specialty,
        experience: parseFloat(experience),
        languages,
        location,
        fee: parseFloat(fee),
        bio: bio || '',
        availabilityToday: Boolean(availabilityToday),
        availabilityTomorrow: Boolean(availabilityTomorrow),
        availabilityWeek: Boolean(availabilityWeek),
      })
      .where(eq(Doctor_Info.id, id))
      .returning()
      .execute();

    if (updated.length === 0) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, doctor: updated[0] });
  } catch (err) {
    console.error('PUT API Error:', err);
    return NextResponse.json({ error: 'Failed to update doctor' }, { status: 500 });
  }
}

// Delete doctor by ID
export async function DELETE(request, { params }) {
  const id = Number(params.id);
  try {
    const result = await db
      .delete(Doctor_Info)
      .where(eq(Doctor_Info.id, id))
      .execute();

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE API Error:', err);
    return NextResponse.json({ error: 'Failed to delete doctor' }, { status: 500 });
  }
}