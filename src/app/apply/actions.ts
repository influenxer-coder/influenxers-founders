"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type ApplyFormData = {
  name: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  employeeCount: string;
  mainGoal: string;
  additionalInfo: string;
};

export async function submitApplication(formData: ApplyFormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("applications").insert({
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    company_name: formData.companyName.trim(),
    website_url: formData.websiteUrl.trim() || null,
    employee_count: formData.employeeCount.trim() || null,
    main_goal: formData.mainGoal.trim(),
    additional_info: formData.additionalInfo.trim() || null,
    user_id: user?.id ?? null,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/apply");
  return { success: true };
}
