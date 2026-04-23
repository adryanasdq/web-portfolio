import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Contact() {
  const socials = [
    { name: 'Email', icon: Mail, href: 'mailto:hello@example.com', label: 'hello@example.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com', label: '@username' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', label: '/in/username' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', label: '@username' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-6xl font-medium mb-6">Let's Work Together</h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border rounded-xl hover:border-foreground/20 hover:bg-accent transition-all group"
              >
                <div className="p-3 bg-accent rounded-lg group-hover:bg-background transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{social.name}</div>
                  <div className="text-sm text-muted-foreground">{social.label}</div>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="pt-12 border-t border-border">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
