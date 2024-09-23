// app/page.tsx
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ jobs }) {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/Applications" style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
          Jobs
        </Link>
      </div>
      <div>
        <h1>Welcome to our Job Portal....</h1>
      </div>
    </div>
  );
}
