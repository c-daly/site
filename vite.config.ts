import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webcrypto } from 'node:crypto';

const globalForCrypto = globalThis as typeof globalThis & {
  crypto?: Crypto;
};

if (!globalForCrypto.crypto || typeof globalForCrypto.crypto.getRandomValues !== 'function') {
  globalForCrypto.crypto = webcrypto as Crypto;
}

export default defineConfig({
  plugins: [react()],
  base: './'
});
