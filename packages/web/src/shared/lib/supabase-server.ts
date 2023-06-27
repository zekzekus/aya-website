import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { type Database } from "@/shared/types/database";

const createServerSupabaseClient = cache(() =>
  createServerComponentClient<Database>({ cookies })
);

export { createServerSupabaseClient };
