import { CmsLoginForm } from "../components/CmsLoginForm";

export const metadata = {
  title: "CMS — Sign in",
};

export default function CmsLoginPage() {
  return (
    <div className="mx-auto max-w-sm">
      <h1 className="text-xl font-semibold tracking-tight">Sign in to CMS</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Use a Supabase Auth user (create one in the Supabase dashboard).
      </p>
      <div className="mt-8">
        <CmsLoginForm />
      </div>
    </div>
  );
}
