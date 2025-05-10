CREATE TABLE "doctorInfo" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar NOT NULL,
	"specialty" varchar NOT NULL,
	"experience" integer DEFAULT 0 NOT NULL,
	"languages" text NOT NULL,
	"location" varchar NOT NULL,
	"fee" numeric NOT NULL,
	"availability_today" boolean DEFAULT false,
	"availability_tomorrow" boolean DEFAULT false,
	"availability_week" boolean DEFAULT false,
	"bio" text,
	"profile_image_url" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL
);
