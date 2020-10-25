import Link from 'next/link';

export default function Me() {
  return (
    <>
      <h1>The author of this site is Aavish!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
}