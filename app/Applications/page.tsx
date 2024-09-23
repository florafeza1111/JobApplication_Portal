// app/Applications/page.tsx
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function JobList() {
  // Fetch all jobs from the database
  const jobs = await prisma.job.findMany();

  return (
    <div style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
      <header style={{ marginBottom: '20px' }}>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
                Home
              </Link>
            </li>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <Link href="/logout" style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 style={{ marginBottom: '20px' }}>Available Jobs</h1>
        {jobs.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {jobs.map((job) => (
              <li key={job.id} style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
                <h2 style={{ margin: '0 0 10px 0' }}>{job.title}</h2>
                <p style={{ margin: '0 0 10px 0' }}>{job.description}</p>
                <Link href={`/apply?id=${job.id}`} style={{ textDecoration: 'none', color: 'blue', backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
                  Apply Now
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs available at the moment. Please check back later.</p>
        )}
      </main>
    </div>
  );
}
