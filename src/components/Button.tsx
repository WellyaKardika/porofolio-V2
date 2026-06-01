import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  target?: string;
  download?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, href, target, download }) => {
  const baseClasses = `relative overflow-hidden rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest inline-block text-center
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-colors duration-300 hover:text-[#0C0C0C]
    before:absolute before:-left-[10%] before:top-[100%] before:w-[120%] before:h-[200%] before:content-[''] before:bg-[#f3f3f3] before:rounded-[50%] hover:before:top-[-50%] before:transition-all before:duration-500 before:ease-out before:-z-10 z-10
    cursor-pointer ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    const finalTarget = target || (isExternal ? "_blank" : undefined);
    
    return (
      <a 
        href={href} 
        className={baseClasses} 
        {...(finalTarget ? { target: finalTarget } : {})}
        {...(isExternal || finalTarget === "_blank" ? { rel: "noreferrer" } : {})}
        {...(download ? { download } : {})}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
