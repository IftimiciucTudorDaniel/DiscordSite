'use client';

import { useEffect, useState } from 'react';

export default function PaymentSuccessPage() {
  const [invite, setInvite] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvite = async () => {
      const res = await fetch('/api/create-invite');
      const data = await res.json();

      if (data.invite) {
        setInvite(data.invite);
      } else {
        setInvite('Eroare la generarea invitației.');
      }
    };

    fetchInvite();
  }, []);

  return (
      <div style={{ padding: 40 }}>
        <h1>Plată realizată cu succes!</h1>
        {invite ? (
            <p>
              Invită-te pe serverul nostru: <a href={invite} target="_blank" rel="noopener noreferrer">{invite}</a>
            </p>
        ) : (
            <p>Se generează invitația...</p>
        )}
      </div>
  );
}
