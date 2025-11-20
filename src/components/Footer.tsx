import { profile } from "@/data/mock";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-glass-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          {Object.entries(profile.socials).map(([platform, link]) => (
            <a 
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors capitalize text-sm font-medium"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
