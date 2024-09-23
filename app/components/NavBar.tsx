import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}
