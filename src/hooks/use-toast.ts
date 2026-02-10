import { toast as sonnerToast } from 'sonner';

type ToastInput = {
  title: string;
  description?: string;
  duration?: number;
};

export function useToast() {
  const toast = ({ title, description, duration }: ToastInput) =>
    sonnerToast(title, { description, duration });

  return { toast };
}
