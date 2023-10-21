import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Runs cleanup after each test case to clear jsdom.
afterEach(() => {
  cleanup();
});
