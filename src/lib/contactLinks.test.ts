import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { digitsOnly, waLink, telLink, mapsLink } from './contactLinks';

beforeEach(() => {
  vi.resetModules();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('digitsOnly', () => {
  it('removes non-digit characters', () => {
    expect(digitsOnly('+1 (234) 567-8900')).toBe('12345678900');
  });
});

describe('waLink', () => {
  it('uses environment variable', () => {
    vi.stubEnv('NEXT_PUBLIC_BUSINESS_WHATSAPP_E164', '+18608498064');
    expect(waLink()).toBe('https://wa.me/18608498064');
  });

  it('falls back to provided number', () => {
    expect(waLink('+12345678900')).toBe('https://wa.me/12345678900');
  });
});

describe('telLink', () => {
  it('builds tel link', () => {
    vi.stubEnv('NEXT_PUBLIC_BUSINESS_PHONE_E164', '+18608498064');
    expect(telLink()).toBe('tel:+18608498064');
  });

  it('falls back to provided number', () => {
    expect(telLink('+123 456-7890')).toBe('tel:+1234567890');
  });
});

describe('mapsLink', () => {
  it('encodes address', () => {
    vi.stubEnv('NEXT_PUBLIC_BUSINESS_ADDRESS', '123 Main St, Town');
    expect(mapsLink()).toBe(
      'https://www.google.com/maps/search/?api=1&query=123%20Main%20St%2C%20Town'
    );
  });

  it('falls back to provided address', () => {
    expect(mapsLink('456 Elm St')).toBe(
      'https://www.google.com/maps/search/?api=1&query=456%20Elm%20St'
    );
  });
});
