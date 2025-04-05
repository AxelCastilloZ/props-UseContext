

import Welcome from './Welcome';

export default function Home({ email }) {
  return (
    <div>
      <h2>Bienvenido, {email}!</h2>
      <Welcome userName={email} />
    </div>
  );
}
