import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';


export default function Contact() {
  const socials = [
    { name: 'Email', icon: FaMailBulk, href: 'mailto:adryanashidiq.analyst@gmail.com', label: 'adryanashidiq.analyst@gmail.com' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/adryanasdq', label: '@adryanasdq' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/adryanashidiq', label: '/in/adryanashidiq' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/adryanasdq', label: '@adryanasdq' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-base-200">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-6xl font-medium mb-6">Let's Connect!</h2>

        <p className="text-base lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunity or collaboration.
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
                className="flex items-center gap-4 p-6 rounded-xl hover:border-foreground/20 hover:bg-gray-200 transition-all group"
              >
                <div className="p-3 bg-accent-content rounded-lg group-hover:bg-accent transition-colors">
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
            Copyright © {new Date().getFullYear()} by Adryan Ashidiq
          </p>
          <p>
            All rights reserved
          </p>
        </footer>
      </div>
    </section>
  );
}
