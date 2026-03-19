import './globals.css';

export const metadata = {
  title: 'FlowMedia | Professional Video Editor & Creative Designer',
  description: 'Portfolio of Manokar (FlowMedia) — Expert in Short Form & Long Form Video Editing, Motion Graphics, Social Media Branding, Color Grading, and more. Contact: manokaredit@gmail.com',
  keywords: 'flowmedia, video editor, motion graphics, color grading, short form video, wedding video, social media branding, davinci resolve, capcut, canva, photoshop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
