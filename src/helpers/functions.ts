import { isAxiosError } from 'axios';

export const formatPhone = (digits: string) => {
  const d = digits.slice(0, 11);
  const parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)];
  return parts.filter(Boolean).join(' ');
};

interface ErrorMessages {
  fallbackMessage?: string;
  unknownMessage?: string;
}

export const getErrorMessage = (
  e: unknown,
  {
    fallbackMessage = 'Не удалось выполнить запрос',
    unknownMessage = 'Что-то пошло не так',
  }: ErrorMessages = {},
) =>
  isAxiosError(e)
    ? e.response?.data?.message ?? fallbackMessage
    : unknownMessage;