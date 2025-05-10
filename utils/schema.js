// schema.js (JavaScript)
import { pgTable, serial, text, varchar, integer, numeric, boolean, timestamp } from 'drizzle-orm/pg-core';

// Doctor Info Schema
export const Doctor_Info = pgTable('doctorInfo', { // changed to snake_case for consistency
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', 255).notNull(),
  specialty: varchar('specialty', 100).notNull(),
  experience: numeric('experience').notNull().default(0),
  languages: text('languages').notNull(), // Comma-separated languages
  location: varchar('location', 255).notNull(),
  fee: numeric('fee', 10, 2).notNull(),
  availabilityToday: boolean('availability_today').default(false),
  availabilityTomorrow: boolean('availability_tomorrow').default(false),
  availabilityWeek: boolean('availability_week').default(false),
  bio: text('bio').default(''),
  createdAt: timestamp('created_at').defaultNow().notNull()
});
