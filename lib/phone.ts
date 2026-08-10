// O'zbekiston telefon raqamlarini +998 XX XXX XX XX formatida ko'rsatish uchun yordamchi funksiyalar

export function formatPhoneNumber(raw: string): string {
  let digits = raw.replace(/\D/g, '');

  // Foydalanuvchi 998 bilan boshlasa, uni asosiy kod sifatida qabul qilamiz
  if (digits.startsWith('998')) {
    digits = digits.slice(3);
  }
  digits = digits.slice(0, 9);

  let formatted = '+998';
  if (digits.length > 0) formatted += ' ' + digits.slice(0, 2);
  if (digits.length > 2) formatted += ' ' + digits.slice(2, 5);
  if (digits.length > 5) formatted += ' ' + digits.slice(5, 7);
  if (digits.length > 7) formatted += ' ' + digits.slice(7, 9);

  return formatted;
}

export function isValidPhoneNumber(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  // 998 + 9 ta raqam = jami 12 ta raqam bo'lishi kerak
  return digits.length === 12 && digits.startsWith('998');
}
