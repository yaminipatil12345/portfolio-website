const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Yamini Gokul Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
