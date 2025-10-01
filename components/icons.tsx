
import React from 'react';

export const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L1 9L5 11.18V17.18L12 21L19 17.18V11.18L23 9L12 2ZM12 4.41L19.59 9L12 13.59L4.41 9L12 4.41ZM7 12.27L12 15.09L17 12.27V15.73L12 18.54L7 15.73V12.27Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11 11H13V15H11V11Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 13H11V11H15V13Z" transform="rotate(90 13 12)" fill="currentColor"/>
  </svg>
);

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

export const StethoscopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021.5 5.5V3.935m-18 0A2.25 2.25 0 015.25 2h13.5A2.25 2.25 0 0121.055 3.935m-18 0v.113c0 .884.495 1.695 1.288 2.093l.285.142c.8.4 1.806.4 2.606 0l.285-.142A2.25 2.25 0 008.25 4.048V3.935m-5.195 0c0-.884.495-1.695 1.288-2.093l.285-.142c.8-.4 1.806-.4 2.606 0l.285.142A2.25 2.25 0 0011.25 4.048V3.935m5.195 0c0 .884-.495 1.695-1.288 2.093l-.285.142c-.8.4-1.806.4-2.606 0l-.285-.142A2.25 2.25 0 008.25 4.048V3.935" />
    </svg>
);

export const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.284.084A2 2 0 017 15.75m0 0v5.5a2 2 0 01-2 2h-3a2 2 0 01-2-2v-5.5m0 0V5.118A2 2 0 012.98 3.118a2 2 0 012.25-2.25h13.5A2 2 0 0121 2.98v1.138m-18 0a2 2 0 012-2h12a2 2 0 012 2M6 13.25a2 2 0 012-2h8a2 2 0 012 2m-10 0a2 2 0 01-2 2H7a2 2 0 01-2-2m10 0a2 2 0 002 2h-1a2 2 0 00-2-2z" />
    </svg>
);

export const BeakerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.572l-7.5 7.5-7.5-7.5M12 21.072V3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.5c0-3.313 2.687-6 6-6h5c3.313 0 6 2.687 6 6v3.072" />
    </svg>
);


export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.21 3.766 4.646-.693.188-1.432.23-2.166.084.616 1.936 2.404 3.34 4.533 3.38-1.85 1.455-4.178 2.32-6.716 2.32-1.04 0-2.062-.07-3.07-.184 2.399 1.538 5.247 2.437 8.33 2.437 9.897 0 15.353-8.197 15.006-15.828.985-.71 1.838-1.592 2.518-2.611z"></path></svg>
);

export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
);

export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z"></path></svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
