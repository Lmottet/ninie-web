import { useAppStore } from '../../../hooks/useAppStore';
import type { LoginRequest } from '../../../types/api/requests/LoginRequest';
import { loginApi } from '../../api/loginApi';
import { useMutation } from '@tanstack/react-query';

export function useLogin() {
  const appStore = useAppStore();
  return useMutation({
    mutationFn: (request: LoginRequest) => loginApi.login(request),
    onSuccess: (r) => {
      appStore.signIn(r);
    }
  });
}
