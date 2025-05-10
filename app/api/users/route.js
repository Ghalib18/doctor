
import { NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { Doctor_Info } from '@/utils/schema';
import { eq, gt, lt, and, sql } from 'drizzle-orm';
import { asc, desc } from 'drizzle-orm';

export async function GET(request) {
  const params = new URL(request.url).searchParams;
  const clauses = [];
  if (params.get('minFee')) clauses.push(gt(Doctor_Info.fee, parseFloat(params.get('minFee'))));
  if (params.get('maxFee')) clauses.push(lt(Doctor_Info.fee, parseFloat(params.get('maxFee'))));
  if (params.get('minExp')) clauses.push(gt(Doctor_Info.experience, parseFloat(params.get('minExp'))));
  if (params.get('maxExp')) clauses.push(lt(Doctor_Info.experience, parseFloat(params.get('maxExp'))));
  if (params.get('language')) clauses.push(sql`languages ILIKE ${`%${params.get('language')}%`}`);
  const ava = params.get('availability');
  if (ava === 'today')    clauses.push(eq(Doctor_Info.availabilityToday, true));
  if (ava === 'tomorrow') clauses.push(eq(Doctor_Info.availabilityTomorrow, true));
  if (ava === 'week')     clauses.push(eq(Doctor_Info.availabilityWeek, true));

  let q = db.select().from(Doctor_Info);
  if (clauses.length) q = q.where(and(...clauses));

  const sortBy = params.get('sortBy');
  if (sortBy === 'fee' || sortBy === 'experience') {
    const col = sortBy === 'fee' ? Doctor_Info.fee : Doctor_Info.experience;
    q = q.orderBy(params.get('sortOrder') === 'desc' ? desc(col) : asc(col));
  }

  const doctors = await q.execute();
  return NextResponse.json({ success: true, doctors });
}

export async function POST(request) {
  try {
    const {
      fullName, specialty, experience, languages,
      location, fee, bio,
      availabilityToday, availabilityTomorrow, availabilityWeek
    } = await request.json();

    const inserted = await db
      .insert(Doctor_Info)
      .values({
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
      .returning()
      .execute();

    return NextResponse.json({ success: true, user: inserted });
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to add doctor: ${err instanceof Error ? err.message : err}` },
      { status: 500 }
    );
  }
}


// export async function POST(request) {
//   try {
//     const {
//       fullName,
//       specialty,
//       experience,
//       languages,
//       location,
//       fee,
//       bio,
//       availabilityToday,
//       availabilityTomorrow,
//       availabilityWeek,
//     } = await request.json();

//     console.log('Received Data:', {
//       fullName,
//       specialty,
//       experience,
//       languages,
//       location,
//       fee,
//       bio,
//       availabilityToday,
//       availabilityTomorrow,
//       availabilityWeek,
//     });

//     // Insert and execute to return a real JS array of rows
//     const inserted = await db
//       .insert(Doctor_Info)
//       .values({
//         fullName,
//         specialty,
//         experience: parseFloat(experience),
//         languages,
//         location,
//         fee: parseFloat(fee),
//         bio: bio || '',
//         availabilityToday: Boolean(availabilityToday),
//         availabilityTomorrow: Boolean(availabilityTomorrow),
//         availabilityWeek: Boolean(availabilityWeek),
//       })
//       .returning()    // returns all columns
//       .execute();     // ← actually runs the SQL

//     console.log('Inserted rows:', inserted);
//     return NextResponse.json({ success: true, user: inserted });
//   } catch (err) {
//     console.error('API Error:', err);
//     const message = err instanceof Error ? err.message : String(err);
//     return NextResponse.json(
//       { error: `Failed to add doctor: ${message}` },
//       { status: 500 }
//     );
//   }
// }


// export async function GET() {
//   try {
//     const users = await db.select().from(Doctor_Info).execute();
//     return NextResponse.json({ success: true, users });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
//   }
// }



// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     console.log(data);

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
//   }
// }
