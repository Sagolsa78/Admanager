import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-sora font-extrabold tracking-tight">
              AdForge
            </Link>
            <p className="text-[#94A3B8] max-w-sm leading-relaxed">
              AI-powered Brand DNA analysis. Generate, write, and schedule your entire content
              pipeline automatically.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#2563EB]">Product</h4>
            <ul className="space-y-4 text-[#94A3B8] text-sm font-medium">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#templates" className="hover:text-white transition-colors">Templates</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#2563EB]">Resources</h4>
            <ul className="space-y-4 text-[#94A3B8] text-sm font-medium">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#2563EB]">Company</h4>
            <ul className="space-y-4 text-[#94A3B8] text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#64748B] text-sm">
            © 2026 AdForge. All rights reserved.
          </div>
          <div className="flex items-center space-x-8 text-[#64748B] text-sm font-medium">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
