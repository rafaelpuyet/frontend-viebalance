'use client';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header
        class="top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--accent-beige)] bg-[var(--warm-beige)]/80 px-6 py-4 shadow-sm backdrop-blur-md md:px-10">
        <div class="flex items-center gap-3">
          <img alt="Vitta Balance Logo" class="h-10 w-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGbjIuQ567BIDFNLMJlnfB3pv31P0SMCjwRHeEsbalMX9-z6xb3GGJ8OOmo8KKLEmWUUYrnyI5Yv-A3zDBrmDdEigmjVM05iSCFGesk2kgRVYckHhU8VPhuB8xWpmHIvpELvl4inutA5SqPArLK_I5VqOmthDenauLivjQADE6W3LESw370hkuh7plB-GDWW0p-D83ZYBRyuq-6lWpJzPaWfRQJPL3QFBr3jzkwjcLMQfSPXSwTgs-LhfXSsZIcbrTQQIG4phm3rJA" />
          <h2 class="text-[var(--dark-text)] text-2xl font-bold tracking-tight">Vitta Balance</h2>
        </div>
      </header>
  );
}