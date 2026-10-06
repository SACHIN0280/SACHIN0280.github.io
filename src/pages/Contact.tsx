import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-doto uppercase font-bold">Contact</h1>
      <p className="text-sm text-muted-foreground">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="flex flex-col gap-4 max-w-sm">
        <a href="mailto:s.parashar2806@gmail.com" className="btn justify-start">
          <SiGmail className="w-4 h-4 mr-4 text-[#EA4335]" /> s.parashar2806@gmail.com
        </a>
        <a href="https://linkedin.com/in/sachin-parashar-94499b137" target="_blank" rel="noreferrer" className="btn justify-start">
          <FaLinkedin className="w-4 h-4 mr-4 text-[#0A66C2]" /> LinkedIn
        </a>
        <a href="https://github.com/SACHIN0280" target="_blank" rel="noreferrer" className="btn justify-start">
          <SiGithub className="w-4 h-4 mr-4 text-white" /> GitHub
        </a>
      </div>
    </div>
  );
};
export default Contact;
