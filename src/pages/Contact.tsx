import { Code, User, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-doto uppercase font-bold">Contact</h1>
      <p className="text-sm text-muted-foreground">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex flex-col gap-4 max-w-sm">
        <a href="mailto:s.parashar2806@gmail.com" className="btn justify-start">
          <Mail className="w-4 h-4 mr-4" /> s.parashar2806@gmail.com
        </a>
        <a href="https://linkedin.com/in/sachin-parashar-94499b137" target="_blank" rel="noreferrer" className="btn justify-start">
          <User className="w-4 h-4 mr-4" /> LinkedIn
        </a>
        <a href="https://github.com/SACHIN0280" target="_blank" rel="noreferrer" className="btn justify-start">
          <Code className="w-4 h-4 mr-4" /> GitHub
        </a>
      </div>
    </div>
  );
};
export default Contact;
