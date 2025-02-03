"use client";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

const TestPage = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa, style:{
            button:{
                borderRadius: "0.5rem",
            }
        } }}
        providers={["google", "facebook", "twitter"]}
      />
    </div>
  );
};

export default TestPage;
